GLOBAL_CSS = """
<style>
/* ===== Sidebar ===== */
section[data-testid="stSidebar"] {
    background-color: #1a2744 !important;
}
section[data-testid="stSidebar"] > div:first-child {
    background-color: #1a2744 !important;
}
section[data-testid="stSidebar"] * {
    color: rgba(255, 255, 255, 0.92) !important;
}
section[data-testid="stSidebar"] a {
    color: rgba(255, 255, 255, 0.92) !important;
}
section[data-testid="stSidebar"] li[data-testid="stSidebarNavItems"] > div,
section[data-testid="stSidebar"] li span {
    color: white !important;
}
section[data-testid="stSidebar"] [data-testid="stSidebarNavLink"]:hover {
    background-color: rgba(255, 255, 255, 0.1) !important;
    border-radius: 6px;
}
section[data-testid="stSidebar"] [data-testid="stSidebarNavLink"][aria-current="page"] {
    background-color: rgba(61, 111, 204, 0.4) !important;
    border-radius: 6px;
}
/* ===== Main Area ===== */
.stApp {
    background-color: #f0f4f8;
}
/* ===== Custom Cards ===== */
.kpi-card {
    background: white;
    border-radius: 10px;
    padding: 18px 14px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
    text-align: center;
    border-top: 4px solid #3d6fcc;
    margin-bottom: 4px;
}
.kpi-card-risk {
    border-top-color: #dc3545 !important;
}
.kpi-card-warning {
    border-top-color: #ffc107 !important;
}
.kpi-card-success {
    border-top-color: #28a745 !important;
}
.kpi-label {
    font-size: 12px;
    font-weight: 600;
    color: #6c757d;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 6px;
}
.kpi-value {
    font-size: 28px;
    font-weight: 700;
    color: #1a2744;
    line-height: 1.2;
}
.kpi-sub {
    font-size: 12px;
    color: #6c757d;
    margin-top: 4px;
}
.kpi-badge {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
    margin-top: 4px;
}
/* ===== Dashboard Header ===== */
.dash-header {
    background: linear-gradient(135deg, #1a2744 0%, #2c4a8a 100%);
    color: white;
    padding: 16px 24px;
    border-radius: 10px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.dash-header-title {
    font-size: 20px;
    font-weight: 700;
    color: white;
}
.dash-header-sub {
    font-size: 12px;
    color: rgba(255,255,255,0.75);
    margin-top: 4px;
}
.dash-badge {
    background: rgba(255,255,255,0.2);
    color: white;
    font-size: 11px;
    padding: 3px 10px;
    border-radius: 12px;
    border: 1px solid rgba(255,255,255,0.35);
    margin-left: 10px;
    font-weight: 600;
}
.dash-meta {
    font-size: 12px;
    color: rgba(255,255,255,0.8);
    text-align: right;
}
/* ===== Risk Alert Cards ===== */
.risk-card {
    border-radius: 8px;
    padding: 12px 14px;
    margin-bottom: 10px;
    border-left: 4px solid #dc3545;
    background: white;
    box-shadow: 0 1px 4px rgba(0,0,0,0.06);
}
.risk-card-warning {
    border-left-color: #ffc107;
}
.risk-type-badge {
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 8px;
    margin-right: 6px;
    background: #f8d7da;
    color: #842029;
}
.risk-type-warning {
    background: #fff3cd;
    color: #664d03;
}
.risk-type-cylinder {
    background: #cff4fc;
    color: #055160;
}
.risk-type-inspection {
    background: #e2e3e5;
    color: #383d41;
}
.risk-title {
    font-size: 13px;
    font-weight: 600;
    color: #1a2744;
    margin-bottom: 3px;
}
.risk-desc {
    font-size: 12px;
    color: #6c757d;
}
/* ===== AX Summary Box ===== */
.ax-summary-box {
    background: linear-gradient(135deg, #f8f9ff 0%, #eef2ff 100%);
    border: 1px solid #c5cef5;
    border-radius: 10px;
    padding: 16px 20px;
    margin-top: 8px;
}
.ax-summary-title {
    font-size: 13px;
    font-weight: 700;
    color: #2c4a8a;
    margin-bottom: 10px;
}
.ax-summary-item {
    font-size: 13px;
    color: #333;
    padding: 4px 0;
    border-bottom: 1px dashed #dde3f5;
}
.ax-summary-item:last-child {
    border-bottom: none;
}
/* ===== Section Title ===== */
.section-title {
    font-size: 14px;
    font-weight: 700;
    color: #1a2744;
    padding: 6px 0;
    margin-bottom: 8px;
    border-bottom: 2px solid #3d6fcc;
}
/* ===== Table Styling ===== */
.status-chip {
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 10px;
}
/* ===== Upload Area ===== */
.upload-hint {
    background: #f8f9ff;
    border: 1px dashed #b0bfdf;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    color: #6c757d;
    font-size: 13px;
    margin-bottom: 12px;
}
/* ===== Sample data notice ===== */
.sample-notice {
    background: #fff3cd;
    border: 1px solid #ffc107;
    border-radius: 6px;
    padding: 8px 14px;
    font-size: 12px;
    color: #664d03;
    margin-bottom: 12px;
}
</style>
"""


def apply_styles():
    import streamlit as st
    st.markdown(GLOBAL_CSS, unsafe_allow_html=True)


def render_sidebar():
    import streamlit as st
    import os
    import base64

    logo_path = os.path.join(
        os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
        "assets", "ulvac_logo.png"
    )

    logo_html = ""
    if os.path.exists(logo_path):
        with open(logo_path, "rb") as f:
            logo_b64 = base64.b64encode(f.read()).decode()
        logo_html = f"""
        <div style="background:white; border-radius:8px; padding:8px 10px; margin:4px 0 12px 0; text-align:center;">
            <img src="data:image/png;base64,{logo_b64}"
                 style="max-width:100%; height:auto; max-height:56px;" />
        </div>
        """

    st.sidebar.markdown(f"""
{logo_html}
<div style="padding:4px 4px 16px 4px; border-bottom:1px solid rgba(255,255,255,0.15); margin-bottom:16px;">
    <div style="font-size:13px; font-weight:700; color:white; line-height:1.4;">
        T-center 유해화학물질관리
    </div>
    <div style="font-size:11px; color:rgba(255,255,255,0.55); margin-top:4px;">AX Dashboard MVP</div>
</div>
""", unsafe_allow_html=True)
