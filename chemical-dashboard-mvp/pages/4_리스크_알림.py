import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import streamlit as st
import pandas as pd

st.set_page_config(page_title="리스크 알림", page_icon="🔴", layout="wide")

from utils.styles import apply_styles, render_sidebar
from utils.data_manager import init_session_state, get_data, is_sample_data
from services.risk_service import generate_risks
from utils.constants import RISK_LEVEL_COLORS

apply_styles()
render_sidebar()
init_session_state()

data = get_data()
risks = generate_risks(data)

st.markdown("""
<div class="dash-header">
    <div>
        <div class="dash-header-title">리스크 알림</div>
        <div class="dash-header-sub">교육 · 실린더 · 검사 영역 리스크 항목 목록</div>
    </div>
</div>
""", unsafe_allow_html=True)

if is_sample_data():
    st.markdown('<div class="sample-notice">⚠️ 현재 <b>샘플 데이터</b>가 표시되고 있습니다.</div>', unsafe_allow_html=True)

# ── 요약 카드 ─────────────────────────────────────────
total = len(risks)
risk_count = len([r for r in risks if r["risk_level"] == "리스크"])
check_count = len([r for r in risks if r["risk_level"] == "확인필요"])
edu_count = len([r for r in risks if r["risk_type"] == "교육"])
cyl_count = len([r for r in risks if r["risk_type"] == "실린더"])
insp_count = len([r for r in risks if r["risk_type"] == "검사"])

rc1, rc2, rc3, rc4, rc5 = st.columns(5)
with rc1:
    st.markdown(f"""
    <div class="kpi-card {'kpi-card-risk' if risk_count>0 else 'kpi-card-success'}">
        <div class="kpi-label">전체 알림</div>
        <div class="kpi-value">{total}건</div>
    </div>""", unsafe_allow_html=True)
with rc2:
    st.markdown(f"""
    <div class="kpi-card {'kpi-card-risk' if risk_count>0 else 'kpi-card-success'}">
        <div class="kpi-label">리스크</div>
        <div class="kpi-value" style="color:#dc3545;">{risk_count}건</div>
    </div>""", unsafe_allow_html=True)
with rc3:
    st.markdown(f"""
    <div class="kpi-card {'kpi-card-warning' if check_count>0 else 'kpi-card-success'}">
        <div class="kpi-label">확인필요</div>
        <div class="kpi-value" style="color:#856404;">{check_count}건</div>
    </div>""", unsafe_allow_html=True)
with rc4:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">교육 리스크</div>
        <div class="kpi-value">{edu_count}건</div>
    </div>""", unsafe_allow_html=True)
with rc5:
    st.markdown(f"""
    <div class="kpi-card">
        <div class="kpi-label">검사 리스크</div>
        <div class="kpi-value">{insp_count}건</div>
    </div>""", unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# 필터
fc1, fc2 = st.columns([2, 2])
with fc1:
    type_opts = ["전체", "교육", "실린더", "검사", "기타"]
    sel_type = st.selectbox("리스크 유형", type_opts)
with fc2:
    level_opts = ["전체", "리스크", "확인필요"]
    sel_level = st.selectbox("리스크 수준", level_opts)

filtered = [r for r in risks
            if (sel_type == "전체" or r["risk_type"] == sel_type) and
               (sel_level == "전체" or r["risk_level"] == sel_level)]

st.markdown(f'<div class="section-title">리스크 알림 목록 ({len(filtered)}건)</div>', unsafe_allow_html=True)

if not filtered:
    st.markdown("""
    <div class="risk-card" style="border-left-color:#28a745; text-align:center; padding:20px;">
        <div style="color:#28a745; font-size:16px; font-weight:600;">현재 해당하는 리스크 항목이 없습니다.</div>
    </div>
    """, unsafe_allow_html=True)
else:
    for r in filtered:
        level = r.get("risk_level", "확인필요")
        is_risk = level == "리스크"
        type_cls_map = {"교육": "#842029", "실린더": "#055160", "검사": "#383d41"}
        type_bg_map = {"교육": "#f8d7da", "실린더": "#cff4fc", "검사": "#e2e3e5"}
        rtype = r.get("risk_type", "기타")
        badge_color = type_cls_map.get(rtype, "#333")
        badge_bg = type_bg_map.get(rtype, "#e2e3e5")

        st.markdown(f"""
        <div class="risk-card {'risk-card-warning' if not is_risk else ''}">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
                <span style="background:{badge_bg}; color:{badge_color}; font-size:11px; font-weight:700; padding:2px 8px; border-radius:8px;">{rtype}</span>
                <span style="font-size:12px; font-weight:700; color:{'#dc3545' if is_risk else '#856404'};">
                    {'🔴 리스크' if is_risk else '⚠️ 확인필요'}
                </span>
                <span style="font-size:11px; color:#6c757d; margin-left:auto;">{r.get('created_at', '')}</span>
            </div>
            <div class="risk-title">{r.get('title', '')}</div>
            <div class="risk-desc" style="margin-top:4px;">{r.get('description', '')}</div>
            <div style="margin-top:8px; font-size:11px; color:#6c757d;">
                상태: <b>{r.get('status', '')}</b>
            </div>
        </div>
        """, unsafe_allow_html=True)
