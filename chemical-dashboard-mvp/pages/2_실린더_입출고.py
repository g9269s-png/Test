import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go

st.set_page_config(page_title="실린더 입출고", page_icon="🧪", layout="wide")

from utils.styles import apply_styles, render_sidebar
from utils.data_manager import init_session_state, get_data, is_sample_data
from services.kpi_service import calc_cylinder_kpi, get_monthly_cylinder_trend, get_gas_stock
from utils.constants import GAS_CATEGORY_MAP

apply_styles()
render_sidebar()
init_session_state()

data = get_data()
df = data["cylinder_inventory"]

st.markdown("""
<div class="dash-header">
    <div>
        <div class="dash-header-title">실린더 입출고 / 잔량 현황</div>
        <div class="dash-header-sub">가스 실린더 입고 · 출고 · 재고조사 이력 및 현재 보관 현황</div>
    </div>
</div>
""", unsafe_allow_html=True)

if is_sample_data():
    st.markdown('<div class="sample-notice">⚠️ 현재 <b>샘플 데이터</b>가 표시되고 있습니다.</div>', unsafe_allow_html=True)

if df is None or df.empty:
    st.info("실린더 데이터가 없습니다. 데이터 업로드 페이지에서 엑셀 파일을 업로드하세요.")
    st.stop()

# ── 필터 ─────────────────────────────────────────────
fc1, fc2, fc3 = st.columns([2, 2, 2])
with fc1:
    gases = ["전체"] + sorted(df["gas_name"].dropna().unique().tolist()) if "gas_name" in df.columns else ["전체"]
    sel_gas = st.selectbox("가스명", gases)
with fc2:
    locs = ["전체"]
    if "storage_location" in df.columns:
        locs += sorted(df["storage_location"].dropna().astype(str).unique().tolist())
    sel_loc = st.selectbox("보관장소", locs)
with fc3:
    types = ["전체"] + sorted(df["transaction_type"].dropna().unique().tolist()) if "transaction_type" in df.columns else ["전체"]
    sel_type = st.selectbox("거래 유형", types)

fdf = df.copy()
if sel_gas != "전체":
    fdf = fdf[fdf["gas_name"] == sel_gas]
if sel_loc != "전체" and "storage_location" in fdf.columns:
    fdf = fdf[fdf["storage_location"] == sel_loc]
if sel_type != "전체" and "transaction_type" in fdf.columns:
    fdf = fdf[fdf["transaction_type"] == sel_type]

# ── KPI ──────────────────────────────────────────────
cy_kpi = calc_cylinder_kpi(df)
kc1, kc2, kc3, kc4, kc5 = st.columns(5)
with kc1:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">연간 입고</div>
        <div class="kpi-value">{cy_kpi['annual_in']} EA</div>
    </div>""", unsafe_allow_html=True)
with kc2:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">연간 출고</div>
        <div class="kpi-value">{cy_kpi['annual_out']} EA</div>
    </div>""", unsafe_allow_html=True)
with kc3:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">금월 입고</div>
        <div class="kpi-value">{cy_kpi['monthly_in']} EA</div>
    </div>""", unsafe_allow_html=True)
with kc4:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">금월 출고</div>
        <div class="kpi-value">{cy_kpi['monthly_out']} EA</div>
    </div>""", unsafe_allow_html=True)
with kc5:
    st.markdown(f"""
    <div class="kpi-card kpi-card-success">
        <div class="kpi-label">현재 보관</div>
        <div class="kpi-value" style="color:#3d6fcc;">{cy_kpi['current_stock']} EA</div>
    </div>""", unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# ── 차트 영역 ─────────────────────────────────────────
ch1, ch2 = st.columns(2)

with ch1:
    st.markdown('<div class="section-title">월별 입출고 추이</div>', unsafe_allow_html=True)
    trend_df = get_monthly_cylinder_trend(df)
    if not trend_df.empty:
        fig = go.Figure()
        if "입고" in trend_df.columns:
            fig.add_trace(go.Bar(x=trend_df["month"], y=trend_df["입고"], name="입고", marker_color="#3d6fcc"))
        if "출고" in trend_df.columns:
            fig.add_trace(go.Bar(x=trend_df["month"], y=trend_df["출고"], name="출고", marker_color="#dc3545"))
        fig.update_layout(
            barmode="group", height=280,
            margin=dict(t=10, b=40, l=20, r=10),
            plot_bgcolor="white", paper_bgcolor="white",
            xaxis=dict(showgrid=False),
            yaxis=dict(showgrid=True, gridcolor="#f0f0f0"),
            legend=dict(orientation="h", y=1.05),
        )
        st.plotly_chart(fig, use_container_width=True, config={"displayModeBar": False})

with ch2:
    st.markdown('<div class="section-title">가스별 보관 현황 (유해화학물질 / 고압가스)</div>', unsafe_allow_html=True)
    stock_df = get_gas_stock(df)
    if not stock_df.empty:
        stock_df["category"] = stock_df["gas_name"].map(GAS_CATEGORY_MAP).fillna("기타")
        color_map = {"유해화학물질": "#dc3545", "고압가스": "#3d6fcc", "기타": "#6c757d"}
        fig2 = px.bar(
            stock_df.sort_values("stock", ascending=True),
            x="stock", y="gas_name", orientation="h",
            color="category",
            color_discrete_map=color_map,
            labels={"stock": "실린더 수 (EA)", "gas_name": "가스명", "category": "구분"},
        )
        fig2.update_layout(
            height=420,
            margin=dict(t=10, b=40, l=10, r=10),
            plot_bgcolor="white", paper_bgcolor="white",
            legend=dict(orientation="h", y=1.04),
        )
        st.plotly_chart(fig2, use_container_width=True, config={"displayModeBar": False})

st.markdown("<br>", unsafe_allow_html=True)

# ── 이력 테이블 ───────────────────────────────────────
st.markdown('<div class="section-title">입출고 이력</div>', unsafe_allow_html=True)

show_cols = ["transaction_id", "gas_name", "cylinder_count", "storage_location",
             "transaction_type", "transaction_date", "remaining_count", "responsible_person", "note"]
available = [c for c in show_cols if c in fdf.columns]
rename = {
    "transaction_id": "거래ID", "gas_name": "가스명", "cylinder_count": "수량(EA)",
    "storage_location": "보관장소", "transaction_type": "유형",
    "transaction_date": "일자", "remaining_count": "잔량(EA)",
    "responsible_person": "담당자", "note": "비고",
}
show_df = fdf[available].rename(columns={k: v for k, v in rename.items() if k in available})

if "유형" in show_df.columns:
    def color_type(val):
        colors = {"입고": "background-color:#d4edda", "출고": "background-color:#f8d7da", "재고조사": "background-color:#d1ecf1"}
        return colors.get(val, "")
    st.dataframe(
        show_df.style.applymap(color_type, subset=["유형"]),
        use_container_width=True, hide_index=True, height=400,
    )
else:
    st.dataframe(show_df, use_container_width=True, hide_index=True, height=400)

# CSV 다운로드
csv = show_df.to_csv(index=False, encoding="utf-8-sig").encode("utf-8-sig")
st.download_button("CSV 다운로드", csv, "cylinder_inventory.csv", "text/csv")
