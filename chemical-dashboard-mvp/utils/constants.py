STATUS_COLORS = {
    "정상": "#28a745",
    "확인필요": "#ffc107",
    "리스크": "#dc3545",
    "완료": "#17a2b8",
    "보류": "#6c757d",
    "이수": "#28a745",
    "미이수": "#dc3545",
    "준비중": "#ffc107",
    "진행중": "#17a2b8",
}

STATUS_BG_COLORS = {
    "정상": "#d4edda",
    "확인필요": "#fff3cd",
    "리스크": "#f8d7da",
    "완료": "#d1ecf1",
    "보류": "#e2e3e5",
    "이수": "#d4edda",
    "미이수": "#f8d7da",
    "준비중": "#fff3cd",
    "진행중": "#d1ecf1",
}

RISK_LEVEL_COLORS = {
    "리스크": "#dc3545",
    "확인필요": "#ffc107",
}

INSPECTION_STATUSES = ["보류", "준비중", "진행중", "완료"]
COMPLETION_STATUSES = ["이수", "미이수"]
TRANSACTION_TYPES = ["입고", "출고", "재고조사"]

# 실제 사용 가스 목록
GAS_LIST = [
    "H2", "5%H2/95%He", "NH3", "NF3", "SiF4",
    "C3F8", "C4F8", "CF4", "CHF3", "SF6",
    "HF", "LO2", "LAr", "Kr", "He", "N2",
]

# 유해화학물질 vs 고압가스 분류
HAZARDOUS_GASES = ["NH3", "NF3", "SiF4", "C3F8", "C4F8", "CF4", "CHF3", "SF6", "HF"]
HIGH_PRESSURE_GASES = ["H2", "5%H2/95%He", "LO2", "LAr", "Kr", "He", "N2"]

GAS_CATEGORY_MAP = {g: "유해화학물질" for g in HAZARDOUS_GASES}
GAS_CATEGORY_MAP.update({g: "고압가스" for g in HIGH_PRESSURE_GASES})

INSPECTION_CATEGORIES = ["유해화학물질 정기검사", "고압가스 정기검사"]

REQUIRED_COLUMNS = {
    "worker_training": ["person_id", "name", "company", "target_year", "completion_status"],
    "handler_training": ["handler_id", "name", "company", "target_year", "completion_status"],
    "cylinder_inventory": ["gas_name", "cylinder_count", "transaction_type", "transaction_date"],
    "facility_inspection": ["inspection_id", "inspection_type", "facility_name", "status", "risk_flag"],
}

SHEET_NAMES = [
    "worker_training",
    "handler_training",
    "cylinder_inventory",
    "facility_inspection",
    "risk_manual",
]

SHEET_LABELS = {
    "worker_training": "유해화학물질 종사자교육",
    "handler_training": "유해화학물질 취급자교육",
    "cylinder_inventory": "실린더 입출고",
    "facility_inspection": "정기검사",
    "risk_manual": "수동 리스크",
}
