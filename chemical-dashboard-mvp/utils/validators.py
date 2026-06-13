import pandas as pd
from utils.constants import REQUIRED_COLUMNS


def validate_sheet(df: pd.DataFrame, sheet_name: str) -> tuple:
    """Returns (is_valid, missing_columns)"""
    if sheet_name not in REQUIRED_COLUMNS:
        return True, []
    required = REQUIRED_COLUMNS[sheet_name]
    missing = [col for col in required if col not in df.columns]
    return len(missing) == 0, missing


def validate_all_sheets(data: dict) -> dict:
    """Validate all sheets. Returns {sheet_name: [missing_cols]}"""
    errors = {}
    for sheet_name, df in data.items():
        is_valid, missing = validate_sheet(df, sheet_name)
        if not is_valid:
            errors[sheet_name] = missing
    return errors


def normalize_completion_status(df: pd.DataFrame) -> pd.DataFrame:
    if "completion_status" in df.columns:
        df["completion_status"] = df["completion_status"].fillna("미이수").astype(str).str.strip()
    return df


def normalize_risk_flag(df: pd.DataFrame) -> pd.DataFrame:
    if "risk_flag" in df.columns:
        df["risk_flag"] = df["risk_flag"].fillna("N").astype(str).str.strip().str.upper()
    return df
