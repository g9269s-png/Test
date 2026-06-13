import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime

st.set_page_config(page_title="교육관리", page_icon="📚", layout="wide")

from utils.styles import apply_styles, render_sidebar
from utils.data_manager import init_session_state, get_data, is_sample_data
from services.kpi_service import calc_training_kpi
from services.sample_data_service import DEPARTMENTS

apply_styles()
render_sidebar()
init_session_state()

data = get_data()
year = datetime.now().year

st.markdown(f"""
<div class="dash-header">
    <div>
        <div class="dash-header-title">교육관리</div>
        <div class="dash-header-sub">유해화학물질 종사자교육 / 유해화학물질 취급자교육 현황</div>
    </div>
</div>
""", unsafe_allow_html=True)

if is_sample_data():
    st.markdown('<div class="sample-notice">⚠️ 현재 <b>샘플 데이터</b>가 표시되고 있습니다.</div>', unsafe_allow_html=True)

tab1, tab2 = st.tabs(["유해화학물질 종사자교육", "유해화학물질 취급자교육"])

# ── 공통 교육 탭 렌더 함수 ──────────────────────────────
def render_training_tab(df: pd.DataFrame, title: str, kpi_key: str):
    if df is None or df.empty:
        st.info("데이터가 없습니다. 데이터 업로드 페이지에서 엑셀 파일을 업로드하세요.")
        return

    # 필터
    fcol1, fcol2, fcol3, fcol4 = st.columns([2, 2, 2, 2])
    with fcol1:
        years = sorted(df["target_year"].dropna().astype(int).unique(), reverse=True) if "target_year" in df.columns else [year]
        sel_year = st.selectbox("기준 연도", years, key=f"year_{kpi_key}")
    with fcol2:
        status_opts = ["전체"] + sorted(df["completion_status"].dropna().unique().tolist()) if "completion_status" in df.columns else ["전체"]
        sel_status = st.selectbox("이수 상태", status_opts, key=f"status_{kpi_key}")
    with fcol3:
        company_opts = ["전체"] + sorted(df["company"].dropna().unique().tolist()) if "company" in df.columns else ["전체"]
        sel_company = st.selectbox("소속 회사", company_opts, key=f"company_{kpi_key}")
    with fcol4:
        # 실제 부서 목록 기준 필터
        dept_opts = ["전체"] + DEPARTMENTS
        sel_dept = st.selectbox("부서", dept_opts, key=f"dept_{kpi_key}")

    # 필터 적용
    fdf = df.copy()
    if "target_year" in fdf.columns:
        fdf = fdf[fdf["target_year"].astype(str) == str(sel_year)]
    if sel_status != "전체" and "completion_status" in fdf.columns:
        fdf = fdf[fdf["completion_status"] == sel_status]
    if sel_company != "전체" and "company" in fdf.columns:
        fdf = fdf[fdf["company"] == sel_company]
    if sel_dept != "전체" and "department" in fdf.columns:
        fdf = fdf[fdf["department"] == sel_dept]

    kpi = calc_training_kpi(fdf)
    total, comp, not_comp, rate = kpi["total"], kpi["completed"], kpi["not_completed"], kpi["rate"]

    # KPI 카드
    kc1, kc2, kc3, kc4 = st.columns(4)
    with kc1:
        color = "#28a745" if not_comp == 0 else "#dc3545"
        st.markdown(f"""
        <div class="kpi-card {'kpi-card-success' if not_comp==0 else 'kpi-card-risk'}">
            <div class="kpi-label">이수율</div>
            <div class="kpi-value" style="color:{color};">{rate}%</div>
        </div>
        """, unsafe_allow_html=True)
    with kc2:
        st.markdown(f"""
        <div class="kpi-card">
            <div class="kpi-label">전체 대상자</div>
            <div class="kpi-value">{total}명</div>
        </div>
        """, unsafe_allow_html=True)
    with kc3:
        st.markdown(f"""
        <div class="kpi-card kpi-card-success">
            <div class="kpi-label">이수 완료</div>
            <div class="kpi-value" style="color:#28a745;">{comp}명</div>
        </div>
        """, unsafe_allow_html=True)
    with kc4:
        st.markdown(f"""
        <div class="kpi-card {'kpi-card-risk' if not_comp>0 else 'kpi-card-success'}">
            <div class="kpi-label">미이수</div>
            <div class="kpi-value" style="color:{'#dc3545' if not_comp>0 else '#28a745'};">{not_comp}명</div>
        </div>
        """, unsafe_allow_html=True)

    st.markdown("<br>", unsafe_allow_html=True)

    chart_col, table_col = st.columns([4, 6])

    with chart_col:
        # 부서별 이수 현황 막대 (부서 순서 고정)
        if "department" in fdf.columns and not fdf.empty:
            grp = fdf.groupby(["department", "completion_status"]).size().reset_index(name="count")
            # 부서 순서를 DEPARTMENTS 순으로 정렬
            dept_order = [d for d in DEPARTMENTS if d in grp["department"].values]
            fig = px.bar(
                grp,
                x="department", y="count", color="completion_status",
                color_discrete_map={"이수": "#28a745", "미이수": "#dc3545"},
                barmode="stack",
                category_orders={"department": dept_order},
                labels={"department": "부서", "count": "인원", "completion_status": "상태"},
                title="부서별 이수 현황",
            )
            fig.update_layout(
                height=300, margin=dict(t=40, b=60, l=20, r=10),
                plot_bgcolor="white", paper_bgcolor="white",
                legend=dict(orientation="h", y=1.1),
                xaxis_tickangle=-30,
            )
            st.plotly_chart(fig, use_container_width=True, config={"displayModeBar": False})

    with table_col:
        st.markdown('<div class="section-title">대상자 목록</div>', unsafe_allow_html=True)

        # 이름 마스킹 옵션
        mask = st.checkbox("이름 마스킹", key=f"mask_{kpi_key}")

        show_cols_priority = ["name", "company", "department", "completion_status", "completion_date", "note"]
        available = [c for c in show_cols_priority if c in fdf.columns]
        show_df = fdf[available].copy()

        rename = {
            "name": "성명", "company": "소속", "department": "부서",
            "completion_status": "이수 상태", "completion_date": "이수일", "note": "비고",
        }
        show_df = show_df.rename(columns={k: v for k, v in rename.items() if k in show_df.columns})

        if mask and "성명" in show_df.columns:
            show_df["성명"] = show_df["성명"].astype(str).apply(lambda n: n[0] + "*" * (len(n) - 1) if len(n) > 1 else "*")

        st.dataframe(show_df, use_container_width=True, hide_index=True, height=300)

        if not_comp > 0:
            not_comp_df = fdf[fdf["completion_status"] == "미이수"][["name", "company"] + (["department"] if "department" in fdf.columns else [])].copy()
            not_comp_df = not_comp_df.rename(columns={"name": "성명", "company": "소속", "department": "부서"})
            if mask and "성명" in not_comp_df.columns:
                not_comp_df["성명"] = not_comp_df["성명"].astype(str).apply(lambda n: n[0] + "*" * (len(n) - 1))
            with st.expander(f"미이수자 목록 ({not_comp}명)"):
                st.dataframe(not_comp_df, use_container_width=True, hide_index=True)


with tab1:
    render_training_tab(data["worker_training"], "종사자교육", "wt")

with tab2:
    render_training_tab(data["handler_training"], "취급자교육", "ht")
