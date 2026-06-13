import sys
import os
sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

import streamlit as st
import pandas as pd

st.set_page_config(page_title="데이터 업로드", page_icon="📂", layout="wide")

from utils.styles import apply_styles, render_sidebar
from utils.data_manager import init_session_state, get_data, store_uploaded_data, is_sample_data
from services.excel_service import load_excel
from services.sample_data_service import generate_sample_excel_bytes
from utils.validators import validate_all_sheets
from utils.constants import SHEET_LABELS

apply_styles()
render_sidebar()
init_session_state()

st.markdown("""
<div class="dash-header">
    <div>
        <div class="dash-header-title">데이터 업로드</div>
        <div class="dash-header-sub">엑셀 Raw Data 업로드 / 샘플 템플릿 다운로드</div>
    </div>
</div>
""", unsafe_allow_html=True)

if is_sample_data():
    st.markdown('<div class="sample-notice">⚠️ 현재 <b>샘플 데이터</b>가 사용 중입니다. 아래에서 실제 데이터를 업로드하세요.</div>', unsafe_allow_html=True)

# ── 샘플 템플릿 다운로드 ─────────────────────────────────
st.markdown('<div class="section-title">샘플 엑셀 템플릿 다운로드</div>', unsafe_allow_html=True)

dl_col1, dl_col2 = st.columns([3, 7])
with dl_col1:
    sample_bytes = generate_sample_excel_bytes()
    st.download_button(
        label="📥 샘플 엑셀 다운로드",
        data=sample_bytes,
        file_name="chemical_dashboard_rawdata_sample.xlsx",
        mime="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        use_container_width=True,
    )
with dl_col2:
    st.markdown("""
    <div style="font-size:13px; color:#555; padding-top:8px;">
        샘플 파일을 다운로드하여 형식을 확인하고, 실제 데이터로 교체한 후 아래에 업로드하세요.<br>
        포함 시트: <b>worker_training</b>, <b>handler_training</b>, <b>cylinder_inventory</b>, <b>facility_inspection</b>, <b>risk_manual</b>
    </div>
    """, unsafe_allow_html=True)

st.markdown("<br>", unsafe_allow_html=True)

# ── 파일 업로드 ──────────────────────────────────────────
st.markdown('<div class="section-title">Raw Data 업로드</div>', unsafe_allow_html=True)
st.markdown("""
<div class="upload-hint">
    파일명 형식: <b>chemical_dashboard_rawdata_YYYYMMDD.xlsx</b><br>
    지원 형식: .xlsx (엑셀 2007 이상)
</div>
""", unsafe_allow_html=True)

uploaded_file = st.file_uploader(
    "엑셀 파일을 선택하세요",
    type=["xlsx"],
    label_visibility="collapsed",
)

if uploaded_file:
    with st.spinner("파일을 처리 중입니다..."):
        try:
            frames = load_excel(uploaded_file)
        except Exception as e:
            st.error(f"파일 읽기 오류: {e}")
            st.stop()

    # 유효성 검사
    errors = validate_all_sheets(frames)

    if errors:
        st.error("필수 컬럼이 누락된 시트가 있습니다:")
        for sheet, missing in errors.items():
            label = SHEET_LABELS.get(sheet, sheet)
            st.markdown(f"- **{label}** (`{sheet}`): 누락 컬럼 → `{'`, `'.join(missing)}`")
        st.markdown("샘플 엑셀 템플릿을 참고하여 컬럼명을 수정 후 다시 업로드하세요.")
    else:
        store_uploaded_data(frames)
        st.success(f"업로드 완료! 총 {len(frames)}개 시트가 로드되었습니다.")
        st.markdown("<br>", unsafe_allow_html=True)

        # 시트별 미리보기
        st.markdown('<div class="section-title">업로드 데이터 미리보기</div>', unsafe_allow_html=True)
        for sheet_name, df in frames.items():
            label = SHEET_LABELS.get(sheet_name, sheet_name)
            with st.expander(f"{label} ({sheet_name}) — {len(df)}행"):
                st.dataframe(df.head(10), use_container_width=True, hide_index=True)

# ── 현재 로드된 데이터 현황 ────────────────────────────────
st.markdown("<br>", unsafe_allow_html=True)
st.markdown('<div class="section-title">현재 로드된 데이터 현황</div>', unsafe_allow_html=True)

data = get_data()
status_rows = []
for sheet_name, df in data.items():
    label = SHEET_LABELS.get(sheet_name, sheet_name)
    if df is not None and not df.empty:
        status_rows.append({"시트": label, "행 수": len(df), "컬럼 수": len(df.columns), "상태": "✅ 로드됨"})
    else:
        status_rows.append({"시트": label, "행 수": 0, "컬럼 수": 0, "상태": "⬜ 비어 있음"})

st.dataframe(pd.DataFrame(status_rows), use_container_width=True, hide_index=True)

# 샘플로 초기화 버튼
st.markdown("<br>", unsafe_allow_html=True)
if st.button("샘플 데이터로 초기화"):
    from services.sample_data_service import get_sample_dataframes
    from utils.data_manager import _store_frames
    frames = get_sample_dataframes()
    _store_frames(frames, source="sample")
    st.success("샘플 데이터로 초기화되었습니다.")
    st.rerun()
