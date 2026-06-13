import pandas as pd
from datetime import datetime


def generate_risks(data: dict) -> list:
    """데이터에서 리스크 알림 자동 생성"""
    risks = []

    # 종사자교육 미이수
    wt = data.get("worker_training")
    if wt is not None and not wt.empty and "completion_status" in wt.columns:
        nc = wt[wt["completion_status"] == "미이수"]
        if not nc.empty:
            names = ", ".join(nc["name"].astype(str).tolist()[:5])
            if len(nc) > 5:
                names += f" 외 {len(nc)-5}명"
            risks.append({
                "risk_type": "교육",
                "risk_level": "리스크",
                "title": f"종사자교육 미이수자 {len(nc)}명",
                "description": names,
                "status": "확인필요",
                "created_at": datetime.now().strftime("%Y-%m-%d"),
            })

    # 취급자교육 미이수
    ht = data.get("handler_training")
    if ht is not None and not ht.empty and "completion_status" in ht.columns:
        nc = ht[ht["completion_status"] == "미이수"]
        if not nc.empty:
            names = ", ".join(nc["name"].astype(str).tolist()[:5])
            if len(nc) > 5:
                names += f" 외 {len(nc)-5}명"
            risks.append({
                "risk_type": "교육",
                "risk_level": "리스크",
                "title": f"취급자교육 미이수자 {len(nc)}명",
                "description": f"취급 전 교육 이수 필요: {names}",
                "status": "확인필요",
                "created_at": datetime.now().strftime("%Y-%m-%d"),
            })

    # 실린더 잔량 미입력
    ci = data.get("cylinder_inventory")
    if ci is not None and not ci.empty:
        if "remaining_count" in ci.columns:
            inv = ci[ci["transaction_type"] == "재고조사"]
            missing_rem = inv[pd.to_numeric(inv["remaining_count"], errors="coerce").isna()]
            if not missing_rem.empty:
                risks.append({
                    "risk_type": "실린더",
                    "risk_level": "확인필요",
                    "title": f"실린더 잔량 미입력 {len(missing_rem)}건",
                    "description": "재고조사 항목 중 잔량(remaining_count)이 입력되지 않았습니다.",
                    "status": "확인필요",
                    "created_at": datetime.now().strftime("%Y-%m-%d"),
                })

        if "storage_location" in ci.columns:
            missing_loc = ci[
                ci["storage_location"].isna() |
                (ci["storage_location"].astype(str).str.strip() == "") |
                (ci["storage_location"].astype(str).str.strip() == "nan")
            ]
            if not missing_loc.empty:
                risks.append({
                    "risk_type": "실린더",
                    "risk_level": "확인필요",
                    "title": f"보관장소 미입력 {len(missing_loc)}건",
                    "description": "보관장소(storage_location)가 입력되지 않은 항목이 있습니다.",
                    "status": "확인필요",
                    "created_at": datetime.now().strftime("%Y-%m-%d"),
                })

    # 취급시설 검사 리스크
    fi = data.get("facility_inspection")
    if fi is not None and not fi.empty and "risk_flag" in fi.columns:
        risk_items = fi[fi["risk_flag"].astype(str).str.upper() == "Y"]
        for _, row in risk_items.iterrows():
            desc = str(row.get("risk_description", ""))
            if not desc or desc in ("nan", ""):
                desc = "리스크 내용을 확인하세요."
            risks.append({
                "risk_type": "검사",
                "risk_level": "리스크",
                "title": f"[{row.get('inspection_type', '')}] {row.get('facility_name', '')}",
                "description": desc,
                "status": "확인필요",
                "created_at": datetime.now().strftime("%Y-%m-%d"),
            })

    # 수동 리스크
    rm = data.get("risk_manual")
    if rm is not None and not rm.empty:
        for _, row in rm.iterrows():
            risks.append({
                "risk_type": str(row.get("risk_type", "기타")),
                "risk_level": str(row.get("risk_level", "확인필요")),
                "title": str(row.get("title", "")),
                "description": str(row.get("description", "")),
                "status": str(row.get("status", "확인필요")),
                "created_at": datetime.now().strftime("%Y-%m-%d"),
            })

    return risks


def generate_ax_summary(data: dict, kpis: dict) -> list:
    """규칙 기반 AX 요약 문구 생성"""
    msgs = []

    wt = kpis.get("worker_training", {})
    if wt:
        nc = wt.get("not_completed", 0)
        rate = wt.get("rate", 0)
        if nc > 0:
            msgs.append(f"금년도 화학물질 종사자교육 미이수자는 {nc}명입니다. (이수율 {rate}%)")
        else:
            msgs.append(f"화학물질 종사자교육은 모든 대상자가 이수 완료하였습니다. (이수율 {rate}%)")

    ht = kpis.get("handler_training", {})
    if ht:
        nc = ht.get("not_completed", 0)
        rate = ht.get("rate", 0)
        if nc > 0:
            msgs.append(f"유해화학물질 취급자교육 미이수자가 {nc}명 존재합니다. 취급 전 교육 이수 여부 확인이 필요합니다. (이수율 {rate}%)")
        else:
            msgs.append(f"유해화학물질 취급자교육은 모든 취급자가 이수 완료하였습니다. (이수율 {rate}%)")

    cy = kpis.get("cylinder", {})
    if cy:
        m_in = cy.get("monthly_in", 0)
        m_out = cy.get("monthly_out", 0)
        stock = cy.get("current_stock", 0)
        msgs.append(f"금월 입고 실린더는 {m_in}EA, 출고 실린더는 {m_out}EA입니다.")
        msgs.append(f"현재 보관 실린더 수는 총 {stock}EA입니다.")

    insp = kpis.get("inspection", {})
    if insp:
        rc = insp.get("risk_count", 0)
        if rc > 0:
            msgs.append(f"취급시설 검사 항목 중 리스크 플래그가 {rc}건 등록되어 있습니다. 확인 및 조치가 필요합니다.")
        else:
            msgs.append("현재 취급시설 검사 관련 리스크 항목이 없습니다.")

    return msgs
