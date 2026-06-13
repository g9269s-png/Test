import sys
import os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import streamlit as st
import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
from datetime import datetime

st.set_page_config(
    page_title="AX 유해화학물질관리 대시보드",
    page_icon="⚗️",
    layout="wide",
    initial_sidebar_state="expanded",
)

from utils.styles import apply_styles, render_sidebar
from utils.data_manager import init_session_state, get_data, is_sample_data, get_reference_date, get_upload_time
from services.kpi_service import (
    calc_training_kpi, calc_cylinder_kpi, calc_inspection_kpi,
    get_monthly_cylinder_trend, get_gas_stock,
)
from services.risk_service import generate_risks, generate_ax_summary
from utils.constants import STATUS_COLORS, STATUS_BG_COLORS, RISK_LEVEL_COLORS

apply_styles()
init_session_state()

data = get_data()
year = datetime.now().year

wt_kpi = calc_training_kpi(data["worker_training"], year)
ht_kpi = calc_training_kpi(data["handler_training"], year)
cy_kpi = calc_cylinder_kpi(data["cylinder_inventory"])
insp_kpi = calc_inspection_kpi(data["facility_inspection"])
risks = generate_risks(data)
total_risk_count = len(risks)

kpis = {
    "worker_training": wt_kpi,
    "handler_training": ht_kpi,
    "cylinder": cy_kpi,
    "inspection": insp_kpi,
}
ax_msgs = generate_ax_summary(data, kpis)

# ── 사이드바 ──────────────────────────────────────────
render_sidebar()

# ── 헤더 ─────────────────────────────────────────────
ref_date = get_reference_date()
upd_time = get_upload_time()
risk_color = "#dc3545" if total_risk_count > 0 else "#28a745"

st.markdown(f"""
<div class="dash-header">
    <div>
        <div class="dash-header-title">
            AX 기반 유해화학물질관리 대시보드
            <span class="dash-badge">운영회의 MVP</span>
        </div>
        <div class="dash-header-sub">T-center &nbsp;|&nbsp; 데이터 기준일: {ref_date} &nbsp;|&nbsp; 업데이트: {upd_time}</div>
    </div>
    <div style="text-align:right;">
        <div style="font-size:22px; font-weight:700; color:{risk_color};">🔴 {total_risk_count}건</div>
        <div style="font-size:11px; color:rgba(255,255,255,0.7);">리스크 알림</div>
    </div>
</div>
""", unsafe_allow_html=True)

if is_sample_data():
    st.markdown("""
    <div class="sample-notice">
    ⚠️ 현재 <b>샘플 데이터</b>가 표시되고 있습니다.
    실제 데이터를 적용하려면 <b>데이터 업로드</b> 페이지에서 엑셀 파일을 업로드하세요.
    </div>
    """, unsafe_allow_html=True)

# ── KPI 카드 ──────────────────────────────────────────
def kpi_card(label, value, sub="", color_class=""):
    return f"""
    <div class="kpi-card {color_class}">
        <div class="kpi-label">{label}</div>
        <div class="kpi-value">{value}</div>
        <div class="kpi-sub">{sub}</div>
    </div>
    """

wt_color = "kpi-card-risk" if wt_kpi.get("not_completed", 0) > 0 else "kpi-card-success"
ht_color = "kpi-card-risk" if ht_kpi.get("not_completed", 0) > 0 else "kpi-card-success"
insp_color = "kpi-card-risk" if insp_kpi.get("risk_count", 0) > 0 else "kpi-card-success"

c1, c2, c3, c4, c5, c6, c7 = st.columns(7)
with c1:
    st.markdown(kpi_card(
        "종사자교육 이수율",
        f"{wt_kpi.get('rate', 0)}%",
        f"미이수 {wt_kpi.get('not_completed', 0)}명 / 전체 {wt_kpi.get('total', 0)}명",
        wt_color,
    ), unsafe_allow_html=True)
with c2:
    st.markdown(kpi_card(
        "취급자교육 이수율",
        f"{ht_kpi.get('rate', 0)}%",
        f"미이수 {ht_kpi.get('not_completed', 0)}명 / 전체 {ht_kpi.get('total', 0)}명",
        ht_color,
    ), unsafe_allow_html=True)
with c3:
    st.markdown(kpi_card(
        "연간 실린더 입고",
        f"{cy_kpi.get('annual_in', 0)} EA",
        f"금월 {cy_kpi.get('monthly_in', 0)} EA",
    ), unsafe_allow_html=True)
with c4:
    st.markdown(kpi_card(
        "연간 실린더 출고",
        f"{cy_kpi.get('annual_out', 0)} EA",
        f"금월 {cy_kpi.get('monthly_out', 0)} EA",
    ), unsafe_allow_html=True)
with c5:
    st.markdown(kpi_card(
        "현재 보관 실린더",
        f"{cy_kpi.get('current_stock', 0)} EA",
        "재고조사 기준",
    ), unsafe_allow_html=True)
with c6:
    st.markdown(kpi_card(
        "검사 리스크",
        f"{insp_kpi.get('risk_count', 0)} 건",
        f"전체 {insp_kpi.get('total', 0)}건 중",
        insp_color,
    ), unsafe_allow_html=True)
with c7:
    st.markdown(kpi_card(
        "전체 리스크 알림",
        f"{total_risk_count} 건",
        "교육+실린더+검사 합계",
        "kpi-card-risk" if total_risk_count > 0 else "kpi-card-success",
    ), unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# ── 메인 차트 영역 ─────────────────────────────────────
col_left, col_right = st.columns([7, 3])

with col_left:
    # 교육 이수 현황 차트
    st.markdown('<div class="section-title">교육 이수 현황</div>', unsafe_allow_html=True)
    edu_col1, edu_col2 = st.columns(2)

    with edu_col1:
        # 종사자교육 도넛
        labels = ["이수", "미이수"]
        vals = [wt_kpi.get("completed", 0), wt_kpi.get("not_completed", 0)]
        if sum(vals) > 0:
            fig = go.Figure(go.Pie(
                labels=labels, values=vals,
                hole=0.6,
                marker_colors=["#28a745", "#f8d7da"],
                textinfo="percent+label",
                textfont_size=12,
            ))
            fig.update_layout(
                title=dict(text="유해화학물질 종사자교육", font_size=12, x=0.5),
                showlegend=False, height=200,
                margin=dict(t=40, b=10, l=10, r=10),
            )
            fig.add_annotation(
                text=f"{wt_kpi.get('rate', 0)}%",
                x=0.5, y=0.5, font_size=18, font_color="#1a2744",
                showarrow=False, font=dict(weight="bold"),
            )
            st.plotly_chart(fig, use_container_width=True, config={"displayModeBar": False})

    with edu_col2:
        # 취급자교육 도넛
        vals2 = [ht_kpi.get("completed", 0), ht_kpi.get("not_completed", 0)]
        if sum(vals2) > 0:
            fig2 = go.Figure(go.Pie(
                labels=labels, values=vals2,
                hole=0.6,
                marker_colors=["#3d6fcc", "#f8d7da"],
                textinfo="percent+label",
                textfont_size=12,
            ))
            fig2.update_layout(
                title=dict(text="유해화학물질 취급자교육", font_size=12, x=0.5),
                showlegend=False, height=200,
                margin=dict(t=40, b=10, l=10, r=10),
            )
            fig2.add_annotation(
                text=f"{ht_kpi.get('rate', 0)}%",
                x=0.5, y=0.5, font_size=18, font_color="#1a2744",
                showarrow=False, font=dict(weight="bold"),
            )
            st.plotly_chart(fig2, use_container_width=True, config={"displayModeBar": False})

    st.markdown("<br>", unsafe_allow_html=True)

    # 월별 실린더 입출고 추이
    st.markdown('<div class="section-title">월별 실린더 입출고 추이</div>', unsafe_allow_html=True)
    trend_df = get_monthly_cylinder_trend(data["cylinder_inventory"])
    if not trend_df.empty:
        fig3 = go.Figure()
        if "입고" in trend_df.columns:
            fig3.add_trace(go.Bar(
                x=trend_df["month"], y=trend_df["입고"],
                name="입고", marker_color="#3d6fcc",
            ))
        if "출고" in trend_df.columns:
            fig3.add_trace(go.Bar(
                x=trend_df["month"], y=trend_df["출고"],
                name="출고", marker_color="#dc3545",
            ))
        fig3.update_layout(
            barmode="group", height=240,
            margin=dict(t=10, b=40, l=30, r=10),
            legend=dict(orientation="h", yanchor="bottom", y=1.02, xanchor="right", x=1),
            plot_bgcolor="white", paper_bgcolor="white",
            xaxis=dict(showgrid=False),
            yaxis=dict(showgrid=True, gridcolor="#f0f0f0"),
        )
        st.plotly_chart(fig3, use_container_width=True, config={"displayModeBar": False})
    else:
        st.info("실린더 데이터가 없습니다.")

with col_right:
    # 리스크 알림
    st.markdown('<div class="section-title">리스크 알림</div>', unsafe_allow_html=True)
    if not risks:
        st.markdown("""
        <div class="risk-card" style="border-left-color:#28a745; text-align:center; color:#28a745; font-weight:600;">
            현재 리스크 항목 없음
        </div>
        """, unsafe_allow_html=True)
    else:
        for r in risks:
            level = r.get("risk_level", "확인필요")
            rtype = r.get("risk_type", "")
            is_risk = level == "리스크"
            card_cls = "" if is_risk else "risk-card-warning"
            type_color_map = {
                "교육": "risk-type-badge",
                "실린더": "risk-type-cylinder",
                "검사": "risk-type-inspection",
            }
            badge_cls = type_color_map.get(rtype, "risk-type-badge")
            if level == "확인필요":
                badge_cls += " risk-type-warning"
            st.markdown(f"""
            <div class="risk-card {card_cls}">
                <div>
                    <span class="risk-type-badge {badge_cls}">{rtype}</span>
                    <span style="font-size:10px; color:{'#dc3545' if is_risk else '#856404'}; font-weight:600;">
                        {'🔴 리스크' if is_risk else '⚠️ 확인필요'}
                    </span>
                </div>
                <div class="risk-title" style="margin-top:6px;">{r.get('title', '')}</div>
                <div class="risk-desc">{r.get('description', '')}</div>
            </div>
            """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# ── 하단: 가스별 실린더 + 정기검사 현황 ──────────────────
from utils.constants import GAS_CATEGORY_MAP

bot_left, bot_right = st.columns(2)

with bot_left:
    st.markdown('<div class="section-title">가스별 보관 실린더 현황</div>', unsafe_allow_html=True)
    stock_df = get_gas_stock(data["cylinder_inventory"])
    if not stock_df.empty:
        # 가스 카테고리 색상 구분
        stock_df["category"] = stock_df["gas_name"].map(GAS_CATEGORY_MAP).fillna("기타")
        color_map = {"유해화학물질": "#dc3545", "고압가스": "#3d6fcc", "기타": "#6c757d"}
        fig4 = px.bar(
            stock_df.sort_values("stock", ascending=True),
            x="stock", y="gas_name", orientation="h",
            color="category",
            color_discrete_map=color_map,
            labels={"stock": "실린더 수 (EA)", "gas_name": "가스명", "category": "구분"},
        )
        fig4.update_layout(
            height=340, showlegend=True,
            legend=dict(orientation="h", y=1.05),
            margin=dict(t=10, b=40, l=10, r=10),
            plot_bgcolor="white", paper_bgcolor="white",
        )
        st.plotly_chart(fig4, use_container_width=True, config={"displayModeBar": False})
    else:
        st.info("실린더 데이터가 없습니다.")

with bot_right:
    st.markdown('<div class="section-title">정기검사 현황 요약</div>', unsafe_allow_html=True)
    fi_df = data["facility_inspection"]
    if not fi_df.empty:
        display_cols = ["inspection_type", "facility_name", "status", "risk_flag", "planned_date"]
        available = [c for c in display_cols if c in fi_df.columns]
        show_df = fi_df[available].copy()
        rename_map = {
            "inspection_type": "검사 구분",
            "facility_name": "시설명",
            "status": "상태",
            "risk_flag": "리스크",
            "planned_date": "예정일",
        }
        show_df = show_df.rename(columns={k: v for k, v in rename_map.items() if k in show_df.columns})

        def style_row(row):
            styles = [""] * len(row)
            if "리스크" in row.index:
                idx = row.index.get_loc("리스크")
                if str(row["리스크"]).upper() == "Y":
                    styles[idx] = "color:#dc3545; font-weight:700;"
            if "상태" in row.index:
                idx = row.index.get_loc("상태")
                color = STATUS_COLORS.get(str(row["상태"]), "#333")
                styles[idx] = f"color:{color}; font-weight:600;"
            return styles

        st.dataframe(show_df, use_container_width=True, hide_index=True, height=220)
    else:
        st.info("취급시설 검사 데이터가 없습니다.")

st.markdown("<br>", unsafe_allow_html=True)

# ── AX 요약 ───────────────────────────────────────────
st.markdown('<div class="section-title">AX 요약 (규칙 기반 자동 문구)</div>', unsafe_allow_html=True)
items_html = "".join(
    f'<div class="ax-summary-item">• {msg}</div>' for msg in ax_msgs
)
st.markdown(f"""
<div class="ax-summary-box">
    <div class="ax-summary-title">현재 유해화학물질 관리 주요 현황</div>
    {items_html}
</div>
""", unsafe_allow_html=True)
