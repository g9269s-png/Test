import pandas as pd
import io
from datetime import datetime, timedelta
import random

from utils.constants import HAZARDOUS_GASES, HIGH_PRESSURE_GASES

# ── 부서/소속 목록 ─────────────────────────────────────
DEPARTMENTS = [
    "ATI", "기술기획파트",
    "개발1실", "개발2실", "개발3실",
    "개발4실", "개발5실", "개발6실",
    "이외",
]


def get_sample_dataframes() -> dict:
    """샘플 데이터를 DataFrame dict로 반환"""
    random.seed(42)

    # ── worker_training (유해화학물질 종사자교육) ─────────────
    workers = [
        #  person_id  이름       소속        부서          이수여부   이수일
        ("P001", "홍길동",  "한국알박", "ATI",        "이수",   "2026-03-10"),
        ("P002", "김철수",  "한국알박", "ATI",        "이수",   "2026-03-10"),
        ("P003", "이영희",  "한국알박", "ATI",        "이수",   "2026-03-10"),
        ("P004", "박민준",  "한국알박", "기술기획파트", "미이수", ""),
        ("P005", "최지현",  "한국알박", "기술기획파트", "이수",   "2026-03-10"),
        ("P006", "정상우",  "한국알박", "개발1실",     "미이수", ""),
        ("P007", "한상휘",  "한국알박", "개발1실",     "이수",   "2026-03-10"),
        ("P008", "오세훈",  "한국알박", "개발2실",     "이수",   "2026-03-10"),
        ("P009", "강민지",  "한국알박", "개발2실",     "이수",   "2026-03-10"),
        ("P010", "윤재원",  "한국알박", "개발3실",     "미이수", ""),
        ("P011", "서보람",  "한국알박", "개발3실",     "이수",   "2026-03-10"),
        ("P012", "임태훈",  "한국알박", "개발4실",     "이수",   "2026-03-10"),
        ("P013", "김도현",  "한국알박", "개발4실",     "이수",   "2026-03-10"),
        ("P014", "박서연",  "한국알박", "개발5실",     "이수",   "2026-03-10"),
        ("P015", "이준호",  "한국알박", "개발5실",     "이수",   "2026-03-10"),
        ("P016", "최아름",  "한국알박", "개발6실",     "이수",   "2026-03-10"),
        ("P017", "정민수",  "한국알박", "개발6실",     "미이수", ""),
        ("P018", "송지훈",  "협력사A",  "이외",        "이수",   "2026-04-05"),
        ("P019", "류성민",  "협력사B",  "이외",        "미이수", ""),
        ("P020", "나현수",  "협력사A",  "이외",        "이수",   "2026-04-05"),
    ]
    wt_rows = [
        {
            "person_id": r[0], "name": r[1], "company": r[2],
            "department": r[3], "target_year": 2026,
            "completion_status": r[4], "completion_date": r[5],
            "note": "온라인 교육" if r[4] == "이수" else "",
        }
        for r in workers
    ]

    # ── handler_training (유해화학물질 취급자교육) ────────────
    handlers = [
        #  handler_id  이름       소속        부서          취급물질               이수여부   이수일
        ("H001", "홍길동",  "한국알박", "ATI",        "SiF4, NF3",         "이수",   "2026-03-15"),
        ("H002", "김철수",  "한국알박", "ATI",        "NH3",               "이수",   "2026-03-15"),
        ("H003", "이영희",  "한국알박", "ATI",        "HF",                "이수",   "2026-03-15"),
        ("H004", "박민준",  "한국알박", "기술기획파트", "SiF4, NF3",         "미이수", ""),
        ("H005", "한상휘",  "한국알박", "개발1실",     "HF, NH3, NF3",      "이수",   "2026-03-15"),
        ("H006", "강민지",  "한국알박", "개발2실",     "NH3, CHF3",         "이수",   "2026-03-15"),
        ("H007", "서보람",  "한국알박", "개발3실",     "SiF4, CF4",         "미이수", ""),
        ("H008", "김도현",  "한국알박", "개발4실",     "C3F8, C4F8",        "이수",   "2026-03-15"),
        ("H009", "박서연",  "한국알박", "개발5실",     "SF6, CHF3",         "이수",   "2026-03-15"),
        ("H010", "이준호",  "한국알박", "개발5실",     "NF3",               "이수",   "2026-03-15"),
        ("H011", "최아름",  "한국알박", "개발6실",     "HF, C3F8",          "이수",   "2026-03-15"),
        ("H012", "윤재원",  "한국알박", "개발3실",     "SiF4",              "미이수", ""),
    ]
    ht_rows = [
        {
            "handler_id": r[0], "name": r[1], "company": r[2],
            "department": r[3], "handled_material": r[4],
            "target_year": 2026, "completion_status": r[5],
            "completion_date": r[6], "note": "",
        }
        for r in handlers
    ]

    # ── cylinder_inventory ──────────────────────────────────
    gas_initial = {
        "H2":          3, "5%H2/95%He": 2,
        "NH3":         4, "NF3":         5, "SiF4":  6,
        "C3F8":        3, "C4F8":        2, "CF4":   4,
        "CHF3":        3, "SF6":         3, "HF":    2,
        "LO2":         4, "LAr":         5, "Kr":    2,
        "He":          6, "N2":          8,
    }

    base = datetime(2026, 1, 1)
    cid = 1
    cy_rows = []
    running_stock = {g: 0 for g in gas_initial}

    for month in range(1, 7):
        in_date  = (base + timedelta(days=30 * (month - 1) + 5)).strftime("%Y-%m-%d")
        out_date = (base + timedelta(days=30 * (month - 1) + 20)).strftime("%Y-%m-%d")

        for gas, base_in in gas_initial.items():
            in_cnt = random.randint(max(1, base_in - 1), base_in + 2)
            cy_rows.append({
                "transaction_id":    f"C{cid:03d}",
                "gas_name":          gas,
                "cylinder_count":    in_cnt,
                "storage_location":  "가스캐비닛",
                "transaction_type":  "입고",
                "transaction_date":  in_date,
                "remaining_count":   "",
                "vendor":            "가스업체",
                "responsible_person": "한상휘",
                "note":              "",
            })
            running_stock[gas] += in_cnt
            cid += 1

            if month <= 5:
                out_cnt = min(random.randint(1, max(1, base_in - 1)), running_stock[gas])
                if out_cnt > 0:
                    cy_rows.append({
                        "transaction_id":    f"C{cid:03d}",
                        "gas_name":          gas,
                        "cylinder_count":    out_cnt,
                        "storage_location":  "가스캐비닛",
                        "transaction_type":  "출고",
                        "transaction_date":  out_date,
                        "remaining_count":   "",
                        "vendor":            "",
                        "responsible_person": "한상휘",
                        "note":              "",
                    })
                    running_stock[gas] = max(0, running_stock[gas] - out_cnt)
                    cid += 1

    for gas, stock in running_stock.items():
        cy_rows.append({
            "transaction_id":    f"C{cid:03d}",
            "gas_name":          gas,
            "cylinder_count":    stock,
            "storage_location":  "가스캐비닛",
            "transaction_type":  "재고조사",
            "transaction_date":  "2026-06-01",
            "remaining_count":   stock,
            "vendor":            "",
            "responsible_person": "한상휘",
            "note":              "6월 재고조사",
        })
        cid += 1

    # ── facility_inspection ─────────────────────────────────
    # 내년 5월 정기검사 기한
    NEXT_MAY = "2027-05-30"

    fi_rows = [
        # ── 유해화학물질 정기검사 (화학물질관리법) ──────────────
        {
            "inspection_id":   "HI001",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "ENTRON#2",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "화학물질관리법 제25조",
        },
        {
            "inspection_id":   "HI002",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "RISE#1",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI003",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "RISE#2",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI004",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "JENOVA",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI005",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "HF 가스캐비닛",
            "status":          "준비중",
            "risk_flag":       "Y",
            "risk_description": "HF 취급시설 정기검사 일정 확정 필요",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI006",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "HF VMB",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI007",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "NH3 가스캐비닛",
            "status":          "준비중",
            "risk_flag":       "Y",
            "risk_description": "NH3 취급시설 정기검사 일정 확정 필요",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI008",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "NH3 VMB",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HI009",
            "inspection_type": "유해화학물질 정기검사",
            "facility_name":   "KOH 리사이클 시스템",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "상세 기준 검토 중",
        },
        # ── 고압가스 정기검사 (고압가스안전관리법) ──────────────
        {
            "inspection_id":   "HG001",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "O2 공급시스템",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "고압가스안전관리법 제16조",
        },
        {
            "inspection_id":   "HG002",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "Ar 공급시스템",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HG003",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "NH3 가스캐비닛",
            "status":          "준비중",
            "risk_flag":       "Y",
            "risk_description": "NH3 누설 감지 센서 점검 필요",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HG004",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "H2 가스캐비닛(2BT)",
            "status":          "준비중",
            "risk_flag":       "Y",
            "risk_description": "H2 누설 감지 센서 교정 필요",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HG005",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "H2 가스캐비닛(4BT)",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HG006",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "NF3 가스캐비닛",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
        {
            "inspection_id":   "HG007",
            "inspection_type": "고압가스 정기검사",
            "facility_name":   "5%H2/95%He 가스캐비닛",
            "status":          "보류",
            "risk_flag":       "N",
            "risk_description": "",
            "planned_date":    NEXT_MAY,
            "completed_date":  "",
            "note":            "",
        },
    ]

    # ── risk_manual ─────────────────────────────────────────
    rm_rows = [
        {
            "risk_type":    "실린더",
            "risk_level":   "확인필요",
            "title":        "HF 실린더 보관 수량 상한 확인",
            "description":  "HF 실린더 보관 수량이 허가 기준 내에 있는지 점검 필요",
            "owner":        "이영희",
            "due_date":     "2026-06-30",
            "status":       "확인필요",
        }
    ]

    return {
        "worker_training":    pd.DataFrame(wt_rows),
        "handler_training":   pd.DataFrame(ht_rows),
        "cylinder_inventory": pd.DataFrame(cy_rows),
        "facility_inspection": pd.DataFrame(fi_rows),
        "risk_manual":        pd.DataFrame(rm_rows),
    }


def generate_sample_excel_bytes() -> bytes:
    """샘플 엑셀 파일을 bytes로 반환"""
    frames = get_sample_dataframes()
    output = io.BytesIO()
    with pd.ExcelWriter(output, engine="openpyxl") as writer:
        for sheet_name, df in frames.items():
            df.to_excel(writer, sheet_name=sheet_name, index=False)
    return output.getvalue()
