import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import streamlit as st
import pandas as pd

st.set_page_config(page_title="정기검사 현황", page_icon="🏭", layout="wide")

from utils.styles import apply_styles, render_sidebar
from utils.data_manager import init_session_state, get_data, is_sample_data
from utils.constants import STATUS_COLORS

apply_styles()
render_sidebar()
init_session_state()

data = get_data()
df_all = data["facility_inspection"]

st.markdown("""
<div class="dash-header">
    <div>
        <div class="dash-header-title">정기검사 현황</div>
        <div class="dash-header-sub">유해화학물질 정기검사 (화학물질관리법) &nbsp;/&nbsp; 고압가스 정기검사 (고압가스안전관리법)</div>
    </div>
</div>
""", unsafe_allow_html=True)

if is_sample_data():
    st.markdown('<div class="sample-notice">⚠️ 현재 <b>샘플 데이터</b>가 표시되고 있습니다.</div>', unsafe_allow_html=True)

if df_all is None or df_all.empty:
    st.info("검사 데이터가 없습니다. 데이터 업로드 페이지에서 엑셀 파일을 업로드하세요.")
    st.stop()

# inspection_type 기준으로 분리
df_haz  = df_all[df_all["inspection_type"] == "유해화학물질 정기검사"].reset_index(drop=True) if "inspection_type" in df_all.columns else pd.DataFrame()
df_hp   = df_all[df_all["inspection_type"] == "고압가스 정기검사"].reset_index(drop=True)    if "inspection_type" in df_all.columns else pd.DataFrame()


def _kpi(df: pd.DataFrame) -> dict:
    if df.empty:
        return {"total": 0, "risk": 0, "hold": 0, "done": 0}
    return {
        "total": len(df),
        "risk":  len(df[df["risk_flag"].astype(str).str.upper() == "Y"]) if "risk_flag" in df.columns else 0,
        "hold":  len(df[df["status"] == "보류"]) if "status" in df.columns else 0,
        "done":  len(df[df["status"] == "완료"]) if "status" in df.columns else 0,
    }


def _render_inspection_tab(df: pd.DataFrame, label: str, id_prefix: str):
    if df.empty:
        st.info(f"{label} 데이터가 없습니다.")
        return

    kpi = _kpi(df)

    # KPI 카드
    kc1, kc2, kc3, kc4 = st.columns(4)
    with kc1:
        st.markdown(f"""
        <div class="kpi-card">
            <div class="kpi-label">전체 검사 건수</div>
            <div class="kpi-value">{kpi['total']}건</div>
        </div>""", unsafe_allow_html=True)
    with kc2:
        rc = kpi['risk']
        st.markdown(f"""
        <div class="kpi-card {'kpi-card-risk' if rc>0 else 'kpi-card-success'}">
            <div class="kpi-label">리스크 건수</div>
            <div class="kpi-value" style="color:{'#dc3545' if rc>0 else '#28a745'};">{rc}건</div>
        </div>""", unsafe_allow_html=True)
    with kc3:
        hc = kpi['hold']
        st.markdown(f"""
        <div class="kpi-card kpi-card-warning">
            <div class="kpi-label">보류 건수</div>
            <div class="kpi-value" style="color:#856404;">{hc}건</div>
        </div>""", unsafe_allow_html=True)
    with kc4:
        dc = kpi['done']
        st.markdown(f"""
        <div class="kpi-card kpi-card-success">
            <div class="kpi-label">완료 건수</div>
            <div class="kpi-value" style="color:#28a745;">{dc}건</div>
        </div>""", unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

    # 필터
    fc1, fc2 = st.columns([2, 2])
    with fc1:
        status_opts = ["전체"] + sorted(df["status"].dropna().unique().tolist()) if "status" in df.columns else ["전체"]
        sel_status = st.selectbox("상태", status_opts, key=f"status_{id_prefix}")
    with fc2:
        risk_opts = ["전체", "Y (리스크 있음)", "N (리스크 없음)"]
        sel_risk  = st.selectbox("리스크 여부", risk_opts, key=f"risk_{id_prefix}")

    fdf = df.copy()
    if sel_status != "전체":
        fdf = fdf[fdf["status"] == sel_status]
    if sel_risk == "Y (리스크 있음)" and "risk_flag" in fdf.columns:
        fdf = fdf[fdf["risk_flag"].astype(str).str.upper() == "Y"]
    elif sel_risk == "N (리스크 없음)" and "risk_flag" in fdf.columns:
        fdf = fdf[fdf["risk_flag"].astype(str).str.upper() == "N"]

    st.markdown(f'<div class="section-title">{label} 목록 ({len(fdf)}건)</div>', unsafe_allow_html=True)

    show_cols = ["inspection_id", "facility_name", "status", "risk_flag",
                 "risk_description", "planned_date", "completed_date", "note"]
    available = [c for c in show_cols if c in fdf.columns]
    show_df   = fdf[available].copy()
    rename    = {
        "inspection_id":   "검사ID", "facility_name": "시설명",
        "status":          "상태",   "risk_flag":     "리스크",
        "risk_description":"리스크 내용", "planned_date":  "예정일",
        "completed_date":  "완료일", "note":          "비고",
    }
    show_df = show_df.rename(columns={k: v for k, v in rename.items() if k in show_df.columns})
    st.dataframe(show_df, use_container_width=True, hide_index=True, height=280)

    # 리스크 항목 상세
    risk_items = fdf[fdf["risk_flag"].astype(str).str.upper() == "Y"] if "risk_flag" in fdf.columns else pd.DataFrame()
    if not risk_items.empty:
        st.markdown("<br>", unsafe_allow_html=True)
        st.markdown('<div class="section-title">리스크 항목 상세</div>', unsafe_allow_html=True)
        for _, row in risk_items.iterrows():
            desc = str(row.get("risk_description", "")) if pd.notna(row.get("risk_description")) else "내용 없음"
            st.markdown(f"""
            <div class="risk-card">
                <div style="font-size:11px; color:#6c757d; margin-bottom:4px;">
                    {row.get('inspection_id', '')}
                </div>
                <div class="risk-title">{row.get('facility_name', '')}</div>
                <div class="risk-desc">{desc}</div>
                <div style="font-size:11px; color:#6c757d; margin-top:6px;">
                    상태: <b>{row.get('status', '')}</b> &nbsp;|&nbsp; 예정일: {row.get('planned_date', '-') or '-'}
                </div>
            </div>
            """, unsafe_allow_html=True)


# ── 탭 ──────────────────────────────────────────────
tab1, tab2 = st.tabs(["유해화학물질 정기검사", "고압가스 정기검사"])

with tab1:
    _render_inspection_tab(df_haz, "유해화학물질 정기검사", "haz")

with tab2:
    _render_inspection_tab(df_hp, "고압가스 정기검사", "hp")
