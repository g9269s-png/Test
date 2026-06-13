import streamlit as st
import pandas as pd
from datetime import datetime


def init_session_state():
    """Session state가 비어있으면 샘플 데이터로 초기화"""
    if "data_initialized" not in st.session_state:
        from services.sample_data_service import get_sample_dataframes
        frames = get_sample_dataframes()
        _store_frames(frames, source="sample")


def store_uploaded_data(frames: dict):
    """업로드된 데이터를 session state에 저장"""
    _store_frames(frames, source="uploaded")


def _store_frames(frames: dict, source: str):
    import pandas as pd
    st.session_state["worker_training"] = frames.get("worker_training", pd.DataFrame())
    st.session_state["handler_training"] = frames.get("handler_training", pd.DataFrame())
    st.session_state["cylinder_inventory"] = frames.get("cylinder_inventory", pd.DataFrame())
    st.session_state["facility_inspection"] = frames.get("facility_inspection", pd.DataFrame())
    st.session_state["risk_manual"] = frames.get("risk_manual", pd.DataFrame())
    st.session_state["data_initialized"] = True
    st.session_state["data_source"] = source
    st.session_state["upload_time"] = datetime.now()
    st.session_state["reference_date"] = datetime.now().date()


def get_data() -> dict:
    return {
        "worker_training": st.session_state.get("worker_training", pd.DataFrame()),
        "handler_training": st.session_state.get("handler_training", pd.DataFrame()),
        "cylinder_inventory": st.session_state.get("cylinder_inventory", pd.DataFrame()),
        "facility_inspection": st.session_state.get("facility_inspection", pd.DataFrame()),
        "risk_manual": st.session_state.get("risk_manual", pd.DataFrame()),
    }


def is_sample_data() -> bool:
    return st.session_state.get("data_source", "sample") == "sample"


def get_reference_date() -> str:
    ref = st.session_state.get("reference_date", datetime.now().date())
    return ref.strftime("%Y-%m-%d") if hasattr(ref, "strftime") else str(ref)


def get_upload_time() -> str:
    t = st.session_state.get("upload_time", datetime.now())
    return t.strftime("%Y-%m-%d %H:%M") if hasattr(t, "strftime") else str(t)
