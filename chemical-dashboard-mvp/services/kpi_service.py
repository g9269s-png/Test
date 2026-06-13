import pandas as pd
from datetime import datetime


def calc_training_kpi(df: pd.DataFrame, year: int = None) -> dict:
    """교육 이수율 KPI 계산 (종사자/취급자 공통)"""
    if df is None or df.empty:
        return {"total": 0, "completed": 0, "not_completed": 0, "rate": 0.0}

    if year and "target_year" in df.columns:
        df = df[df["target_year"].astype(str) == str(year)]

    total = len(df)
    if total == 0:
        return {"total": 0, "completed": 0, "not_completed": 0, "rate": 0.0}

    completed = len(df[df["completion_status"] == "이수"])
    not_completed = total - completed
    rate = round(completed / total * 100, 1)

    return {
        "total": total,
        "completed": completed,
        "not_completed": not_completed,
        "rate": rate,
    }


def calc_cylinder_kpi(df: pd.DataFrame) -> dict:
    """실린더 KPI 계산"""
    if df is None or df.empty:
        return {
            "annual_in": 0,
            "annual_out": 0,
            "monthly_in": 0,
            "monthly_out": 0,
            "current_stock": 0,
        }

    df = df.copy()
    df["transaction_date"] = pd.to_datetime(df["transaction_date"], errors="coerce")
    df["cylinder_count"] = pd.to_numeric(df["cylinder_count"], errors="coerce").fillna(0)

    now = datetime.now()
    in_df = df[df["transaction_type"] == "입고"]
    out_df = df[df["transaction_type"] == "출고"]

    annual_in = int(in_df["cylinder_count"].sum())
    annual_out = int(out_df["cylinder_count"].sum())

    month_in = in_df[
        (in_df["transaction_date"].dt.year == now.year) &
        (in_df["transaction_date"].dt.month == now.month)
    ]
    month_out = out_df[
        (out_df["transaction_date"].dt.year == now.year) &
        (out_df["transaction_date"].dt.month == now.month)
    ]
    monthly_in = int(month_in["cylinder_count"].sum())
    monthly_out = int(month_out["cylinder_count"].sum())

    # 잔량: remaining_count 있으면 우선, 없으면 입고-출고 계산
    if "remaining_count" in df.columns:
        latest = (
            df.dropna(subset=["remaining_count"])
            .assign(remaining_count=lambda d: pd.to_numeric(d["remaining_count"], errors="coerce"))
            .dropna(subset=["remaining_count"])
            .sort_values("transaction_date")
            .groupby("gas_name")
            .last()[["remaining_count"]]
        )
        current_stock = int(latest["remaining_count"].sum()) if not latest.empty else (annual_in - annual_out)
    else:
        current_stock = max(0, annual_in - annual_out)

    return {
        "annual_in": annual_in,
        "annual_out": annual_out,
        "monthly_in": monthly_in,
        "monthly_out": monthly_out,
        "current_stock": current_stock,
    }


def calc_inspection_kpi(df: pd.DataFrame) -> dict:
    """취급시설 검사 KPI"""
    if df is None or df.empty:
        return {"total": 0, "risk_count": 0, "hold_count": 0}

    total = len(df)
    risk_count = len(df[df["risk_flag"].astype(str).str.upper() == "Y"])
    hold_count = len(df[df["status"] == "보류"])

    return {"total": total, "risk_count": risk_count, "hold_count": hold_count}


def get_monthly_cylinder_trend(df: pd.DataFrame) -> pd.DataFrame:
    """월별 입고/출고 추이 데이터"""
    if df is None or df.empty:
        return pd.DataFrame()

    df = df.copy()
    df["transaction_date"] = pd.to_datetime(df["transaction_date"], errors="coerce")
    df["cylinder_count"] = pd.to_numeric(df["cylinder_count"], errors="coerce").fillna(0)
    df = df.dropna(subset=["transaction_date"])
    df = df[df["transaction_type"].isin(["입고", "출고"])]
    df["month"] = df["transaction_date"].dt.to_period("M").astype(str)

    pivot = (
        df.groupby(["month", "transaction_type"])["cylinder_count"]
        .sum()
        .reset_index()
        .pivot(index="month", columns="transaction_type", values="cylinder_count")
        .fillna(0)
        .reset_index()
        .sort_values("month")
    )
    return pivot


def get_gas_stock(df: pd.DataFrame) -> pd.DataFrame:
    """가스별 현재 보관 실린더 수"""
    if df is None or df.empty:
        return pd.DataFrame(columns=["gas_name", "stock"])

    df = df.copy()
    df["transaction_date"] = pd.to_datetime(df["transaction_date"], errors="coerce")
    df["cylinder_count"] = pd.to_numeric(df["cylinder_count"], errors="coerce").fillna(0)

    # remaining_count 있으면 최신값 기준
    if "remaining_count" in df.columns:
        has_rem = (
            df.dropna(subset=["remaining_count"])
            .assign(remaining_count=lambda d: pd.to_numeric(d["remaining_count"], errors="coerce"))
            .dropna(subset=["remaining_count"])
        )
        if not has_rem.empty:
            latest = (
                has_rem.sort_values("transaction_date")
                .groupby("gas_name")
                .last()[["remaining_count"]]
                .reset_index()
            )
            latest.columns = ["gas_name", "stock"]
            return latest[latest["stock"] > 0]

    in_s = df[df["transaction_type"] == "입고"].groupby("gas_name")["cylinder_count"].sum()
    out_s = df[df["transaction_type"] == "출고"].groupby("gas_name")["cylinder_count"].sum()
    stock = (in_s.subtract(out_s, fill_value=0)).reset_index()
    stock.columns = ["gas_name", "stock"]
    return stock[stock["stock"] > 0]
