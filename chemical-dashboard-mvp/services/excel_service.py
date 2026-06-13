import pandas as pd
import io
from utils.constants import SHEET_NAMES
from utils.validators import normalize_completion_status, normalize_risk_flag


def load_excel(file) -> dict:
    """Excel 파일을 읽어 시트별 DataFrame dict 반환"""
    xl = pd.ExcelFile(file)
    result = {}

    for sheet in SHEET_NAMES:
        if sheet in xl.sheet_names:
            df = xl.parse(sheet)
            df.columns = df.columns.str.strip()
            # 빈 행 제거
            df = df.dropna(how="all").reset_index(drop=True)
            # 필드별 후처리
            if sheet in ("worker_training", "handler_training"):
                df = normalize_completion_status(df)
            if sheet == "facility_inspection":
                df = normalize_risk_flag(df)
            result[sheet] = df

    return result


def export_to_excel(frames: dict) -> bytes:
    """여러 DataFrame을 하나의 Excel 파일로 내보내기"""
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine="openpyxl") as writer:
        for sheet_name, df in frames.items():
            if not df.empty:
                df.to_excel(writer, sheet_name=sheet_name, index=False)
    return output.getvalue()
