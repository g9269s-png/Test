import base64, json

with open('C:/Noahsmart/dashboard/chemical-dashboard-mvp/assets/ulvac_logo.png', 'rb') as f:
    logo_b64 = base64.b64encode(f.read()).decode()

# ── Sample data generation ─────────────────────────
surnames = ['김','이','박','최','정','강','윤','임','오','황','신','조','한','류','문','배','노','심','전','권','장','홍','남','유','안']
givens   = ['지수','민준','서연','동현','유진','민서','재원','하늘','승현','지민','현우','예린','준혁','다은','성훈','소희','태양','가은','민지','도윤','준서','민아','현서','지호','서준']

def nm(i): return surnames[i % len(surnames)] + givens[(i*3+7) % len(givens)]

depts       = ['ATI','기술기획파트','개발1실','개발2실','개발3실','개발4실','개발5실','개발6실','이외']
dept_total  = [12, 10, 13, 11, 12, 11, 13, 10, 8]   # sum=100
dept_miss   = [ 2,  2,  2,  2,  2,  2,  2,  1, 1]   # sum=16

workers = []
idx = 0
for di, dept in enumerate(depts):
    for j in range(dept_total[di]):
        comp = 'ULVAC' if (dept=='이외' and j%3==0) else ('협력사' if dept=='이외' and j%3==1 else '한국알박')
        st   = '미이수' if j >= (dept_total[di]-dept_miss[di]) else '이수'
        workers.append({'n':nm(idx),'c':comp,'d':dept,'s':st,'dt':'2026-03-15' if st=='이수' else '-'})
        idx += 1

# 취급자교육: 기술기획파트 + 개발2실만
hand_cfg = {'기술기획파트':(10,2),'개발2실':(11,2)}
handlers = []
idx2 = 50
for dept,(tot,ms) in hand_cfg.items():
    for j in range(tot):
        st = '미이수' if j>=(tot-ms) else '이수'
        handlers.append({'n':nm(idx2),'c':'한국알박','d':dept,'s':st,'dt':'2026-04-20' if st=='이수' else '-'})
        idx2 += 1

# Chemicals/gases
chemicals = ['H2','5%H2/95%He','NH3','NF3','SiF4','C3F8','C4F8','CF4','CHF3','SF6','HF','LO2','LAr','Kr','He','N2','KOH']
stocks    = [   4,           2,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   3,   2,   3,   4,   5]
hazardous = {'NH3','NF3','SiF4','C3F8','C4F8','CF4','CHF3','SF6','HF','KOH'}

transactions = [
    ['H2',   2,'가스캐비닛','입고','2026-01-10',4,'담당자A'],
    ['NH3',  2,'가스캐비닛','입고','2026-01-15',3,'담당자B'],
    ['HF',   1,'가스캐비닛','입고','2026-01-20',3,'담당자A'],
    ['KOH',  3,'화학물질보관소','입고','2026-01-25',3,'담당자B'],
    ['NF3',  2,'가스캐비닛','출고','2026-02-05',3,'담당자B'],
    ['N2',   3,'가스캐비닛','입고','2026-02-10',4,'담당자A'],
    ['KOH',  2,'화학물질보관소','입고','2026-02-20',5,'담당자A'],
    ['He',   2,'가스캐비닛','입고','2026-03-01',3,'담당자C'],
    ['KOH',  1,'화학물질보관소','출고','2026-03-10',4,'담당자B'],
    ['LAr',  1,'가스캐비닛','출고','2026-03-15',3,'담당자B'],
    ['SF6',  2,'가스캐비닛','입고','2026-04-05',3,'담당자A'],
    ['KOH',  2,'화학물질보관소','입고','2026-04-15',6,'담당자C'],
    ['CF4',  1,'가스캐비닛','입고','2026-04-20',3,'담당자C'],
    ['CHF3', 2,'가스캐비닛','입고','2026-05-08',3,'담당자A'],
    ['KOH',  1,'화학물질보관소','출고','2026-05-05',5,'담당자A'],
    ['Kr',   1,'가스캐비닛','출고','2026-05-20',2,'담당자B'],
    ['LO2',  2,'가스캐비닛','입고','2026-06-01',3,'담당자C'],
    ['KOH',  0,'화학물질보관소','재고조사','2026-06-13',5,'담당자B'],
]

# Inspection data
haz_insp = [
    ['HI001','ENTRON#2','계획','N','','2027-05-30'],
    ['HI002','RISE#1','계획','N','','2027-05-30'],
    ['HI003','RISE#2','계획','N','','2027-05-30'],
    ['HI004','JENOVA','계획','N','','2027-05-30'],
    ['HI005','HF 가스캐비닛','계획','N','','2026-08-10'],
    ['HI006','HF VMB','계획','N','','2027-05-30'],
    ['HI007','NH3 가스캐비닛','계획','N','','2026-07-20'],
    ['HI008','NH3 VMB','계획','N','','2027-05-30'],
    ['HI009','KOH 리사이클 시스템','계획','N','','2027-05-30'],
]
hp_insp = [
    ['HG001','O2 공급시스템','계획','N','','2027-05-30'],
    ['HG002','Ar 공급시스템','계획','N','','2027-05-30'],
    ['HG003','NH3 가스캐비닛','계획','N','','2026-08-28'],
    ['HG004','H2 가스캐비닛(2BT)','계획','N','','2026-07-05'],
    ['HG005','H2 가스캐비닛(4BT)','계획','N','','2027-05-30'],
    ['HG006','NF3 가스캐비닛','계획','N','','2027-05-30'],
    ['HG007','5%H2/95%He 가스캐비닛','계획','N','','2027-05-30'],
]

# Gas detector sample data: [no, 관리번호, 설치위치, 감지가스, 제조사, 모델명, 감지방식, 측정범위, alarm1, alarm2, 교정주기(월), 최근교정일, 상태, 비고]
gd_samples = [
    [1, 'GD-001','5F Gas Room',         'NH₃', 'GASTRON',  'GTD-5000',   '확산식',       'ppm',  '25ppm',  '50ppm',  6,'2026-01-15','정상',''],
    [2, 'GD-002','5F Gas Cabinet Area',  'H₂',  'HONEYWELL','MIDAS',      '흡입식',       '%LEL', '10%LEL', '25%LEL', 6,'2026-01-20','정상',''],
    [3, 'GD-003','5F VMB Area',          'SiF₄','GASTRON',  'GTD-5000',   '확산식',       'ppm',  '1ppm',   '3ppm',   6,'2025-12-10','정상','감지방식 확인 필요'],
    [4, 'GD-004','4F Gas Room',          'HF',  'GASTRON',  'GTD-5000EX', '전기화학식',   'ppm',  '1ppm',   '3ppm',   6,'2026-02-05','정상',''],
    [5, 'GD-005','4F Gas Cabinet Area',  'NF₃', 'GASTRON',  'GTD-5000',   '적외선(NDIR)', 'ppm',  '10ppm',  '25ppm',  6,'2026-02-05','정상',''],
    [6, 'GD-006','4F VMB Area',          'NH₃', 'GASTRON',  'GTD-5000',   '확산식',       'ppm',  '25ppm',  '50ppm',  6,'2026-01-15','정상',''],
    [7, 'GD-007','3F Gas Room',          'C₃F₈','MSA',      'Ultima X',   '적외선(NDIR)', 'ppm',  '100ppm', '200ppm', 6,'2026-03-01','정상',''],
    [8, 'GD-008','3F Gas Cabinet Area',  'C₄F₈','MSA',      'Ultima X',   '적외선(NDIR)', 'ppm',  '100ppm', '200ppm', 6,'2026-03-01','정상',''],
    [9, 'GD-009','3F VMB Area',          'CF₄', 'MSA',      'Ultima X',   '적외선(NDIR)', 'ppm',  '100ppm', '200ppm', 6,'2026-03-01','정상',''],
    [10,'GD-010','2F Gas Room',          'H₂',  'GASTRON',  'GTS-200',    '촉매연소식',   '%LEL', '10%LEL', '25%LEL', 6,'2026-02-20','정상',''],
]

# Computed KPIs
wt_total = 100
wt_miss  = 16
wt_done  = 84
ht_total = sum(t for t,m in hand_cfg.values())
ht_miss  = sum(m for t,m in hand_cfg.values())
ht_done  = ht_total - ht_miss

# JSON for JS
workers_js   = json.dumps(workers, ensure_ascii=False)
handlers_js  = json.dumps(handlers, ensure_ascii=False)
chem_js      = json.dumps(chemicals, ensure_ascii=False)
stocks_js    = json.dumps(stocks, ensure_ascii=False)
haz_js       = json.dumps(list(hazardous), ensure_ascii=False)
trans_js     = json.dumps(transactions, ensure_ascii=False)
haz_insp_js  = json.dumps(haz_insp, ensure_ascii=False)
hp_insp_js   = json.dumps(hp_insp, ensure_ascii=False)
depts_js     = json.dumps(depts, ensure_ascii=False)
dtotal_js    = json.dumps(dept_total)
dmiss_js     = json.dumps(dept_miss)
hand_cfg_js  = json.dumps({'기술기획파트':{'total':10,'miss':2},'개발2실':{'total':11,'miss':2}}, ensure_ascii=False)
gd_js        = json.dumps(gd_samples, ensure_ascii=False)

contractor_samples = [
    {'id':'C-001','name':'특수가스 배관업체','workType':'배관공사','workDesc':'NH3 VMB 배관 연결',
     'material':'NH3','facility':'NH3 VMB','handlesChem':'Y','reportTarget':'대상',
     'reportReason':'NH3 취급시설(VMB) 배관 연결 작업으로 유해화학물질 라인 개방 포함',
     'reportStatus':'준비중','workDate':'2026-07-05','reportDate':'2026-06-28',
     'docStatus':'일부완료','receiptNo':'','docLink':'','remarks':'',
     'checklist':['Y','Y','Y','Y','Y','Y','Y','Y','확인필요','Y'],
     'docs':[
         {'name':'유해화학물질 취급 도급신고서','needed':'필요','status':'준비중','link':'','note':''},
         {'name':'신청인 주요 생산품 및 매출액 자료','needed':'필요','status':'완료','link':'','note':''},
         {'name':'도급인 주요 생산품 및 매출액 자료','needed':'필요','status':'완료','link':'','note':''},
         {'name':'수급인 주요 생산품 및 매출액 자료','needed':'필요','status':'완료','link':'','note':''},
         {'name':'도급계획서','needed':'필요','status':'준비중','link':'','note':''},
         {'name':'긴급 도급 사유서','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'수급인 교육 이수증','needed':'필요','status':'완료','link':'','note':''},
         {'name':'도급인 유해화학물질 영업허가증','needed':'필요','status':'완료','link':'','note':''},
         {'name':'작업허가서/TBM 기록','needed':'필요','status':'미준비','link':'','note':''}],
     'planItems':[
         {'name':'작업명','status':'완료'},{'name':'작업장소','status':'완료'},
         {'name':'작업기간','status':'완료'},{'name':'도급사유','status':'완료'},
         {'name':'작업개요','status':'완료'},{'name':'대상 물질','status':'완료'},
         {'name':'대상 시설','status':'완료'},{'name':'예상 취급량','status':'완료'},
         {'name':'투입인력','status':'완료'},{'name':'수급인 보유 장비','status':'작성중'},
         {'name':'PPE 명세','status':'작성중'},{'name':'작업 전 조치','status':'미작성'},
         {'name':'작업 중 조치','status':'미작성'},{'name':'작업 후 조치','status':'미작성'},
         {'name':'작업허가서/TBM','status':'미작성'}]},
    {'id':'C-002','name':'가스감지기 검교정업체','workType':'검교정','workDesc':'감지기 검교정 및 센서 점검',
     'material':'NH3, HF','facility':'Gas Detector','handlesChem':'확인필요','reportTarget':'확인필요',
     'reportReason':'가스감지기 교정 작업 중 유해화학물질 노출 가능성 검토 필요',
     'reportStatus':'미검토','workDate':'2026-07-15','reportDate':'2026-07-08',
     'docStatus':'확인필요','receiptNo':'','docLink':'','remarks':'',
     'checklist':['Y','N','Y','확인필요','N','N','확인필요','N','확인필요','Y'],
     'docs':[
         {'name':'유해화학물질 취급 도급신고서','needed':'확인필요','status':'미준비','link':'','note':''},
         {'name':'신청인 주요 생산품 및 매출액 자료','needed':'확인필요','status':'미준비','link':'','note':''},
         {'name':'도급인 주요 생산품 및 매출액 자료','needed':'확인필요','status':'미준비','link':'','note':''},
         {'name':'수급인 주요 생산품 및 매출액 자료','needed':'확인필요','status':'미준비','link':'','note':''},
         {'name':'도급계획서','needed':'확인필요','status':'미준비','link':'','note':''},
         {'name':'긴급 도급 사유서','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'수급인 교육 이수증','needed':'확인필요','status':'미준비','link':'','note':''},
         {'name':'도급인 유해화학물질 영업허가증','needed':'필요','status':'완료','link':'','note':''},
         {'name':'작업허가서/TBM 기록','needed':'필요','status':'미준비','link':'','note':''}],
     'planItems':[
         {'name':'작업명','status':'미작성'},{'name':'작업장소','status':'미작성'},
         {'name':'작업기간','status':'미작성'},{'name':'도급사유','status':'미작성'},
         {'name':'작업개요','status':'미작성'},{'name':'대상 물질','status':'미작성'},
         {'name':'대상 시설','status':'미작성'},{'name':'예상 취급량','status':'미작성'},
         {'name':'투입인력','status':'미작성'},{'name':'수급인 보유 장비','status':'미작성'},
         {'name':'PPE 명세','status':'미작성'},{'name':'작업 전 조치','status':'미작성'},
         {'name':'작업 중 조치','status':'미작성'},{'name':'작업 후 조치','status':'미작성'},
         {'name':'작업허가서/TBM','status':'미작성'}]},
    {'id':'C-003','name':'일반 전기업체','workType':'전기/계장','workDesc':'제어반 전원 작업',
     'material':'해당없음','facility':'전기제어반','handlesChem':'N','reportTarget':'비대상',
     'reportReason':'유해화학물질 취급 행위 없음 — 전기 작업에 한정',
     'reportStatus':'비대상','workDate':'2026-07-20','reportDate':'해당없음',
     'docStatus':'해당없음','receiptNo':'','docLink':'','remarks':'',
     'checklist':['Y','N','N','N','N','N','N','N','N','Y'],
     'docs':[
         {'name':'유해화학물질 취급 도급신고서','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'신청인 주요 생산품 및 매출액 자료','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'도급인 주요 생산품 및 매출액 자료','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'수급인 주요 생산품 및 매출액 자료','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'도급계획서','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'긴급 도급 사유서','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'수급인 교육 이수증','needed':'불필요','status':'해당없음','link':'','note':''},
         {'name':'도급인 유해화학물질 영업허가증','needed':'필요','status':'완료','link':'','note':''},
         {'name':'작업허가서/TBM 기록','needed':'필요','status':'완료','link':'','note':''}],
     'planItems':[
         {'name':'작업명','status':'해당없음'},{'name':'작업장소','status':'해당없음'},
         {'name':'작업기간','status':'해당없음'},{'name':'도급사유','status':'해당없음'},
         {'name':'작업개요','status':'해당없음'},{'name':'대상 물질','status':'해당없음'},
         {'name':'대상 시설','status':'해당없음'},{'name':'예상 취급량','status':'해당없음'},
         {'name':'투입인력','status':'해당없음'},{'name':'수급인 보유 장비','status':'해당없음'},
         {'name':'PPE 명세','status':'해당없음'},{'name':'작업 전 조치','status':'해당없음'},
         {'name':'작업 중 조치','status':'해당없음'},{'name':'작업 후 조치','status':'해당없음'},
         {'name':'작업허가서/TBM','status':'해당없음'}]}
]
contractor_js = json.dumps(contractor_samples, ensure_ascii=False)

GAS_H = max(len(chemicals) * 28 + 80, 520)

html = f"""<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>AX 유해화학물질관리 대시보드</title>
<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
<style>
*{{margin:0;padding:0;box-sizing:border-box;}}
body{{font-family:"Malgun Gothic","Apple SD Gothic Neo",sans-serif;background:#EEF3FA;display:flex;height:100vh;overflow:hidden;}}
/* ── Sidebar: ULVAC white ── */
#sidebar{{width:220px;min-width:220px;background:#FFFFFF;border-right:1px solid #D0DFF5;display:flex;flex-direction:column;padding:0;overflow-y:auto;height:100vh;box-shadow:2px 0 12px rgba(0,48,135,0.08);}}
.sidebar-logo{{background:#FFFFFF;padding:18px 20px 14px;text-align:center;border-bottom:2px solid #E4EDF8;}}
.sidebar-logo img{{max-width:100%;height:auto;max-height:42px;}}
.sidebar-brand{{display:none;}}
.sidebar-brand-title{{display:none;}}
.sidebar-brand-sub{{display:none;}}
.nav-item{{display:block;padding:9px 14px;color:#3A5A8A;text-decoration:none;font-size:12px;font-weight:500;margin:2px 8px;border-radius:6px;cursor:pointer;transition:background 0.15s,color 0.15s;border:none;background:none;width:calc(100% - 16px);text-align:left;box-sizing:border-box;}}
.nav-item:hover{{background:#EEF4FF;color:#003087;}}
.nav-item.active{{background:#E4EEFF;color:#003087;font-weight:700;border-left:3px solid #003087;padding-left:11px;}}
.nav-sep{{display:none;}}
/* ── Main ── */
#main{{flex:1;overflow-y:auto;padding:18px 22px;background:#EEF3FA;}}
/* ── Page header ── */
.dash-header{{background:linear-gradient(135deg,#003087 0%,#0055CC 100%);color:white;padding:14px 22px;border-radius:10px;margin-bottom:14px;display:flex;align-items:center;justify-content:space-between;box-shadow:0 4px 14px rgba(0,48,135,0.22);}}
.dash-header-title{{font-size:18px;font-weight:700;}}
.dash-badge{{background:rgba(255,255,255,0.2);font-size:10px;padding:2px 8px;border-radius:10px;border:1px solid rgba(255,255,255,0.38);margin-left:8px;font-weight:600;}}
.dash-header-sub{{font-size:11px;color:rgba(255,255,255,0.78);margin-top:3px;}}
/* ── KPI cards ── */
.kpi-grid{{display:grid;gap:8px;margin-bottom:12px;}}
.g7{{grid-template-columns:repeat(7,1fr);}}
.g5{{grid-template-columns:repeat(5,1fr);}}
.g4{{grid-template-columns:repeat(4,1fr);}}
.g3{{grid-template-columns:repeat(3,1fr);}}
.kpi-card{{background:#FFFFFF;border-radius:8px;padding:10px 12px 10px 14px;box-shadow:0 2px 8px rgba(0,48,135,0.07);border-left:4px solid #0047B0;cursor:pointer;transition:box-shadow 0.15s,transform 0.1s;}}
.kpi-card:hover{{box-shadow:0 4px 14px rgba(0,48,135,0.16);transform:translateY(-1px);}}
.kc-risk{{border-left-color:#dc3545!important;}}
.kc-ok{{border-left-color:#28a745!important;}}
.kc-warn{{border-left-color:#E8960A!important;}}
.kpi-label{{font-size:10px;font-weight:600;color:#7A96C0;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:4px;}}
.kpi-value{{font-size:20px;font-weight:700;color:#003087;line-height:1.2;}}
.kpi-sub{{font-size:10px;color:#8BA5C8;margin-top:3px;}}
/* ── Layout ── */
.page{{display:none;}}
.page.active{{display:block;}}
.sec-title{{font-size:13px;font-weight:700;color:#003087;padding:5px 0;margin-bottom:7px;border-bottom:2px solid #0047B0;}}
.row2{{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;}}
.row3{{display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;}}
.row73{{display:grid;grid-template-columns:7fr 3fr;gap:12px;margin-bottom:12px;}}
.cbox{{background:#FFFFFF;border-radius:10px;padding:14px;box-shadow:0 2px 8px rgba(0,48,135,0.06);}}
/* ── Risk cards ── */
.risk-card{{border-radius:7px;padding:9px 12px;margin-bottom:7px;border-left:4px solid #dc3545;background:#FFFFFF;box-shadow:0 1px 5px rgba(0,0,0,0.06);}}
.risk-badge{{font-size:9px;font-weight:700;padding:2px 6px;border-radius:7px;margin-right:5px;}}
.risk-title-text{{font-size:12px;font-weight:600;color:#003087;margin:4px 0 2px 0;}}
.risk-desc{{font-size:11px;color:#7A96C0;}}
.risk-reason{{font-size:10px;color:#9AB0C8;margin-top:2px;font-style:italic;}}
/* ── Tables ── */
.dtable{{width:100%;border-collapse:collapse;font-size:11px;}}
.dtable th{{background:#EEF3FA;padding:7px 8px;text-align:left;font-weight:600;color:#003087;border-bottom:2px solid #C8D8F0;white-space:nowrap;}}
.dtable td{{padding:7px 8px;border-bottom:1px solid #EEF3FA;color:#333;}}
.dtable tr:hover td{{background:#F5F8FD;}}
.br{{background:#f8d7da;color:#842029;font-size:9px;font-weight:700;padding:2px 6px;border-radius:6px;display:inline-block;}}
.bg{{background:#d4edda;color:#155724;font-size:9px;font-weight:700;padding:2px 6px;border-radius:6px;display:inline-block;}}
.bw{{background:#FFF3CD;color:#664d03;font-size:9px;font-weight:700;padding:2px 6px;border-radius:6px;display:inline-block;}}
.bgr{{background:#e2e3e5;color:#383d41;font-size:9px;font-weight:700;padding:2px 6px;border-radius:6px;display:inline-block;}}
.bb{{background:#d1ecf1;color:#0c5460;font-size:9px;font-weight:700;padding:2px 6px;border-radius:6px;display:inline-block;}}
/* ── AX box ── */
.ax-box{{background:linear-gradient(135deg,#F0F6FF 0%,#E8F1FF 100%);border:1px solid #C8D8F0;border-radius:10px;padding:14px 18px;margin-top:6px;}}
.ax-title{{font-size:12px;font-weight:700;color:#003087;margin-bottom:8px;}}
.ax-item{{font-size:12px;color:#333;padding:3px 0;border-bottom:1px dashed #C8D8F0;}}
.ax-item:last-child{{border-bottom:none;}}
/* ── Notice / sample banner ── */
.sn{{background:#EEF3FA;border:1px solid #C8D8F0;border-radius:5px;padding:6px 12px;font-size:11px;color:#4A6A9A;margin-bottom:10px;}}
/* ── Tabs ── */
.tabs{{display:flex;gap:3px;margin-bottom:14px;border-bottom:2px solid #C8D8F0;}}
.tab-btn{{padding:7px 16px;font-size:12px;font-weight:600;background:none;border:none;cursor:pointer;color:#7A96C0;border-bottom:3px solid transparent;margin-bottom:-2px;}}
.tab-btn.active{{color:#003087;border-bottom-color:#0047B0;}}
.tab-content{{display:none;}}
.tab-content.active{{display:block;}}
/* ── Edit page ── */
.edit-section{{background:#FFFFFF;border-radius:10px;padding:16px;box-shadow:0 2px 8px rgba(0,48,135,0.06);margin-bottom:14px;}}
.edit-section h3{{font-size:13px;font-weight:700;color:#003087;margin-bottom:12px;padding-bottom:6px;border-bottom:2px solid #0047B0;}}
.edit-grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:10px;}}
.edit-row{{display:flex;flex-direction:column;gap:3px;}}
.edit-row label{{font-size:11px;font-weight:600;color:#495057;}}
.edit-row input{{padding:5px 8px;border:1px solid #C8D8F0;border-radius:5px;font-size:12px;font-family:inherit;}}
.edit-row input:focus{{outline:none;border-color:#0047B0;box-shadow:0 0 0 2px rgba(0,71,176,0.15);}}
.btn-apply{{background:#003087;color:white;border:none;padding:9px 22px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;margin-top:8px;transition:background 0.15s;}}
.btn-apply:hover:not(:disabled){{background:#0047B0;}}
.btn-apply:disabled{{background:#C8D8F0;color:#7A96C0;cursor:not-allowed;}}
.btn-save{{background:#0047B0;color:white;border:none;padding:5px 14px;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;transition:background 0.15s;}}
.btn-save:hover:not(:disabled){{background:#003087;}}
.btn-save:disabled{{background:#C8D8F0;color:#7A96C0;cursor:not-allowed;}}
.btn-sort{{background:#F0F5FB;color:#003087;border:1px solid #C8D8F0;padding:5px 12px;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;margin-bottom:8px;transition:background 0.15s;}}
.btn-sort:hover{{background:#E0EAFF;}}
/* ── Summary page ── */
.summary-grid{{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px;}}
.sum-card{{background:#FFFFFF;border-radius:10px;padding:16px;box-shadow:0 2px 8px rgba(0,48,135,0.06);border-left:5px solid #0047B0;}}
.sum-card.red{{border-left-color:#dc3545;}}
.sum-card.green{{border-left-color:#28a745;}}
.sum-card.yellow{{border-left-color:#E8960A;}}
.sum-card-title{{font-size:11px;font-weight:700;color:#7A96C0;text-transform:uppercase;margin-bottom:8px;}}
.sum-card-value{{font-size:26px;font-weight:700;color:#003087;}}
.sum-card-sub{{font-size:11px;color:#7A96C0;margin-top:4px;}}
/* ── Mobile hamburger ── */
.hamburger{{display:none;position:fixed;top:12px;left:12px;z-index:1100;background:#003087;color:white;border:none;width:42px;height:42px;border-radius:9px;font-size:20px;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 2px 8px rgba(0,0,0,0.22);line-height:1;}}
#mobile-overlay{{display:none;position:fixed;inset:0;background:rgba(0,0,0,0.38);z-index:999;}}
/* ── Tablet (768–1199px) ── */
@media(max-width:1199px) and (min-width:768px){{
  .g7{{grid-template-columns:repeat(4,1fr)!important;}}
  .g5{{grid-template-columns:repeat(3,1fr)!important;}}
  .summary-grid{{grid-template-columns:1fr 1fr!important;}}
  #main{{padding:14px 16px;}}
}}
/* ── Mobile (≤767px) ── */
@media(max-width:767px){{
  .hamburger{{display:flex;}}
  body{{overflow:hidden auto;flex-direction:column;}}
  #sidebar{{position:fixed;left:-240px;top:0;height:100vh;z-index:1000;transition:left 0.25s ease;width:220px;overflow-y:auto;}}
  #sidebar.open{{left:0;}}
  #mobile-overlay.open{{display:block;}}
  #main{{padding:64px 12px 20px;margin-left:0!important;min-height:100vh;overflow-y:auto;}}
  .dash-header{{padding:10px 12px;border-radius:8px;flex-wrap:wrap;gap:8px;}}
  .dash-header-title{{font-size:14px;}}
  .dash-header-sub{{font-size:10px;}}
  .g7,.g5,.g4,.g3{{grid-template-columns:1fr 1fr!important;}}
  .row2,.row3,.row73,.summary-grid{{grid-template-columns:1fr!important;}}
  .edit-grid{{grid-template-columns:1fr!important;}}
  .kpi-value{{font-size:17px;}}
  .kpi-label{{font-size:9px;}}
  .kpi-card{{padding:8px 10px 8px 12px;}}
  div[style*="grid-template-columns:5fr"],
  div[style*="grid-template-columns:7fr"],
  div[style*="grid-template-columns:300px 1fr"],
  div[style*="grid-template-columns:1fr 1fr 1fr"],
  div[style*="grid-template-columns:auto 1fr"]{{grid-template-columns:1fr!important;}}
  .cbox{{overflow-x:hidden;}}
  .cbox>div[style*="overflow-x"],.cbox>[style*="overflow-x:auto"]{{overflow-x:auto;}}
  .btn-apply{{min-height:42px;font-size:13px;width:100%;box-sizing:border-box;}}
  .btn-save{{min-height:36px;padding:6px 14px;}}
  .btn-sort{{min-height:36px;}}
  .edit-row input,.edit-row select{{min-height:40px;font-size:13px;}}
  .edit-section{{padding:12px;}}
  .tabs{{overflow-x:auto;white-space:nowrap;}}
  .tab-btn{{padding:7px 12px;font-size:11px;}}
  .dtable{{font-size:10px;}}
  .dtable th,.dtable td{{padding:5px 6px;}}
  .sidebar-logo img{{max-height:30px;}}
  .sidebar-logo{{padding:14px 16px 10px;}}
  #editAdminBtn{{min-height:40px;font-size:11px;}}
  #editLastSaved{{font-size:10px;}}
  .risk-card{{padding:8px 10px;}}
}}
</style>
</head>
<body>
<div id="mobile-overlay" onclick="closeSidebar()"></div>
<button class="hamburger" onclick="toggleSidebar()">&#9776;</button>
<div id="sidebar">
  <div class="sidebar-logo" style="padding:12px 14px 8px;">
    <img src="data:image/png;base64,{logo_b64}" alt="ULVAC Korea" style="max-height:36px;display:block;margin-bottom:5px;" onerror="this.style.display='none';document.getElementById('logo-fallback').style.display='block'">
    <div id="logo-fallback" style="display:none;font-size:15px;font-weight:800;color:#003087;margin-bottom:4px;">ULVAC</div>
    <div style="font-size:11px;font-weight:700;color:#003087;line-height:1.3;">한국알박 테크놀로지센터</div>
    <div style="font-size:9px;color:#7A96C0;">ULVAC Korea Technology Center</div>
    <div style="font-size:9px;color:#9AB0C8;margin-top:2px;">AX 기반 유해화학물질 관리</div>
  </div>
  <div style="padding:8px 0 4px;">
  <button class="nav-item active" onclick="gp('home',this)">대시보드 홈</button>
  <button class="nav-item" onclick="gp('summary',this)">현황 요약</button>
  <button class="nav-item" onclick="gp('risk',this)">리스크 알림</button>
  <button class="nav-item" onclick="gp('contractor',this)">도급신고 관리</button>
  <button class="nav-item" onclick="gp('edu',this)">교육관리</button>
  <button class="nav-item" onclick="gp('chem',this)">화학물질 입출고</button>
  <button class="nav-item" onclick="gp('daily',this)">화학물질 일일점검</button>
  <button class="nav-item" onclick="gp('insp',this)">정기검사</button>
  <button class="nav-item" onclick="gp('gd',this)">가스감지기 관리</button>
  <button class="nav-item" onclick="gp('edit',this)">데이터 편집</button>
  </div>
</div>

<div id="main">

<!-- SUMMARY PAGE -->
<div id="page-summary" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">현황 요약<span class="dash-badge">리스크 한눈에 보기</span></div>
      <div class="dash-header-sub">T-center 유해화학물질 전체 관리 현황 요약 | 2026-06-13</div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:20px;font-weight:700;color:#FFB3B3;" id="sumRiskTotal">🔴 4건</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.72);">전체 리스크</div>
    </div>
  </div>
  <div class="sn">🔖 운영회의 검토용 MVP 데이터입니다. 실제 운영 시 Raw Data 연동 예정입니다.</div>

  <div class="summary-grid">
    <div class="sum-card green">
      <div class="sum-card-title">종사자교육 이수율</div>
      <div class="sum-card-value" id="sumWtRate" style="color:#28a745;">84%</div>
      <div class="sum-card-sub" id="sumWtSub">이수 84명 / 미이수 16명 / 전체 100명</div>
    </div>
    <div class="sum-card yellow">
      <div class="sum-card-title">취급자교육 이수율</div>
      <div class="sum-card-value" id="sumHtRate" style="color:#856404;">81%</div>
      <div class="sum-card-sub" id="sumHtSub">이수 17명 / 미이수 4명 / 전체 21명</div>
    </div>
    <div class="sum-card">
      <div class="sum-card-title">현재 화학물질 보관</div>
      <div class="sum-card-value" id="sumStock" style="color:#0047B0;">56 EA/DR</div>
      <div class="sum-card-sub">17종 (가스 16종 + KOH)</div>
    </div>
    <div class="sum-card red">
      <div class="sum-card-title">정기검사 리스크</div>
      <div class="sum-card-value" style="color:#dc3545;" id="sumInspRisk">4건</div>
      <div class="sum-card-sub">전체 16건 중 리스크 플래그</div>
    </div>
    <div class="sum-card">
      <div class="sum-card-title">유해화학물질 정기검사</div>
      <div class="sum-card-value">9건</div>
      <div class="sum-card-sub">다음 검사: 2027-05-30</div>
    </div>
    <div class="sum-card">
      <div class="sum-card-title">고압가스 정기검사</div>
      <div class="sum-card-value">7건</div>
      <div class="sum-card-sub">다음 검사: 2027-05-30</div>
    </div>
  </div>

  <div class="sec-title">⚠️ 현재 리스크 항목</div>
  <div id="sumRiskList"></div>

  <div style="margin-top:14px;">
  <div class="sec-title">미이수자 현황</div>
  <div class="row2">
    <div class="cbox">
      <div style="font-size:12px;font-weight:700;color:#003087;margin-bottom:8px;">종사자교육 미이수 (16명)</div>
      <table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th></tr></thead>
      <tbody id="sumMissWorker"></tbody></table>
    </div>
    <div class="cbox">
      <div style="font-size:12px;font-weight:700;color:#003087;margin-bottom:8px;">취급자교육 미이수 (4명)</div>
      <table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th></tr></thead>
      <tbody id="sumMissHandler"></tbody></table>
    </div>
  </div>
  </div>
</div>

<!-- HOME PAGE -->
<div id="page-home" class="page active">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">AX 기반 유해화학물질 관리 대시보드<span class="dash-badge">MVP</span></div>
      <div class="dash-header-sub">한국알박 테크놀로지센터 &nbsp;|&nbsp; ULVAC Korea Technology Center &nbsp;|&nbsp; 2026-06-13</div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:18px;font-weight:700;color:#FFB3B3;" id="homeRiskBadge">—</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.72);">리스크 알림</div>
    </div>
  </div>
  <div class="sn">🔖 운영회의 검토용 MVP 데이터입니다. 실제 운영 시 Raw Data 연동 예정입니다.</div>

  <!-- Row 1: KPI 카드 7개 (클릭 시 해당 메뉴 이동) -->
  <div class="kpi-grid g7">
    <div class="kpi-card kc-warn" onclick="gpDirect('edu')" title="교육관리"><div class="kpi-label">종사자교육 이수율</div><div class="kpi-value" style="color:#856404;" id="hKwt">—</div><div class="kpi-sub" id="hKwtSub">—</div></div>
    <div class="kpi-card kc-warn" onclick="gpDirect('edu')" title="교육관리"><div class="kpi-label">취급자교육 이수율</div><div class="kpi-value" style="color:#856404;" id="hKht">—</div><div class="kpi-sub" id="hKhtSub">—</div></div>
    <div class="kpi-card" onclick="gpDirect('chem')" title="입출고"><div class="kpi-label">연간 입고</div><div class="kpi-value" id="hKin">—</div><div class="kpi-sub" id="hKinSub">—</div></div>
    <div class="kpi-card" onclick="gpDirect('chem')" title="입출고"><div class="kpi-label">연간 출고</div><div class="kpi-value" id="hKout">—</div><div class="kpi-sub" id="hKoutSub">—</div></div>
    <div class="kpi-card kc-ok" onclick="gpDirect('chem')" title="입출고"><div class="kpi-label">현재 보관</div><div class="kpi-value" id="hKstock" style="color:#0047B0;">—</div><div class="kpi-sub">재고조사 기준</div></div>
    <div class="kpi-card kc-risk" onclick="gpDirect('insp')" title="정기검사"><div class="kpi-label">검사 D-day 알림</div><div class="kpi-value" style="color:#dc3545;" id="hKinspRisk">—</div><div class="kpi-sub">90일내 정기검사</div></div>
    <div class="kpi-card kc-risk" onclick="gpDirect('risk')" title="리스크 알림"><div class="kpi-label">전체 리스크</div><div class="kpi-value" style="color:#dc3545;" id="hKrisk">—</div><div class="kpi-sub">교육+검사 합계</div></div>
  </div>

  <!-- Row 2: 리스크 알림 | 교육 이수 현황 | 화학물질 보관 현황 -->
  <div style="display:grid;grid-template-columns:5fr 3fr 4fr;gap:12px;margin-bottom:12px;">
    <div class="cbox" style="height:295px;padding:12px;overflow-y:auto;">
      <div class="sec-title" style="margin-bottom:8px;">⚠️ 현재 리스크 / 일정 알림</div>
      <div id="homeRiskList"></div>
    </div>
    <div class="cbox" style="height:295px;padding:10px 12px;">
      <div class="sec-title" style="margin-bottom:6px;">교육 이수 현황</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;height:245px;gap:6px;">
        <canvas id="hChartWt"></canvas>
        <canvas id="hChartHt"></canvas>
      </div>
    </div>
    <div class="cbox" style="height:295px;padding:10px 12px;overflow:hidden;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
        <div class="sec-title" style="margin-bottom:0;border-bottom:none;font-size:12px;">화학물질 보관 현황</div>
        <button class="btn-sort" onclick="sortGasChart('home')" style="padding:3px 8px;font-size:10px;">↕</button>
      </div>
      <div style="height:255px;"><canvas id="hChartGas"></canvas></div>
    </div>
  </div>

  <!-- Row 3: 월별 입출고 | 정기검사 현황 | 가스감지기 교정 현황 -->
  <div class="row3">
    <div class="cbox" style="height:215px;padding:10px 12px;">
      <div class="sec-title" style="margin-bottom:6px;font-size:12px;">월별 화학물질 입출고 추이</div>
      <div style="height:170px;"><canvas id="hChartCyl"></canvas></div>
    </div>
    <div class="cbox" style="height:215px;overflow-y:auto;padding:10px 12px;">
      <div class="sec-title" style="margin-bottom:6px;font-size:12px;">정기검사 현황 요약</div>
      <div id="homeInspTable"></div>
    </div>
    <div class="cbox" style="height:215px;padding:10px 12px;overflow:hidden;" id="homeGDBox"></div>
  </div>
</div>

<!-- EDIT PAGE -->
<div id="page-edit" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">데이터 편집<span class="dash-badge">Raw Data 관리</span></div>
      <div class="dash-header-sub">조회 모드 기본 | ADMIN 버튼으로 편집 전환 | localStorage 자동 저장</div>
    </div>
    <div style="display:flex;gap:12px;align-items:center;">
      <div style="text-align:right;">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);font-weight:600;" id="editLastSaved">저장 없음</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.55);">마지막 저장</div>
      </div>
      <button id="editAdminBtn" onclick="openAdminModal()"
        style="background:transparent;color:white;border:2px solid rgba(255,255,255,0.65);padding:7px 18px;border-radius:7px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;transition:all 0.15s;">
        🔒 ADMIN
      </button>
    </div>
  </div>

  <!-- 조회 모드 배너 -->
  <div id="editViewBanner" style="background:#EEF3FA;border:1px solid #C8D8F0;border-radius:7px;padding:9px 14px;margin-bottom:12px;font-size:12px;color:#4A6A9A;display:flex;align-items:center;gap:8px;">
    🔒 현재 <b>조회 모드</b>입니다. 데이터를 수정하려면 우측 상단 <b>ADMIN</b> 버튼을 누르세요.
    <span style="margin-left:auto;font-size:10px;color:#9AB0C8;">MVP 편집 방지 모드 — 실제 운영 시 사내 계정 또는 Firebase 인증 연동 필요</span>
  </div>

  <!-- 관리자 모드 배너 -->
  <div id="editAdminBanner" style="display:none;background:#FFF8E1;border:1px solid #E8960A;border-radius:7px;padding:9px 14px;margin-bottom:12px;font-size:12px;color:#664d03;align-items:center;gap:8px;">
    🔓 <b>관리자 편집 모드</b>입니다. 수정 후 각 섹션의 <b>저장</b> 버튼 또는 하단 <b>전체 저장</b>을 눌러야 대시보드에 반영됩니다.
    <button onclick="setAdminMode(false)" style="margin-left:auto;background:#E8960A;color:white;border:none;padding:5px 14px;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;">편집 모드 해제</button>
  </div>

  <!-- 토스트 알림 -->
  <div id="editToast" style="display:none;position:fixed;bottom:28px;right:28px;background:#003087;color:white;padding:12px 22px;border-radius:8px;font-size:13px;font-weight:600;z-index:9998;box-shadow:0 4px 16px rgba(0,0,0,0.22);"></div>

  <div class="edit-section">
    <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;color:#003087;padding-bottom:6px;border-bottom:2px solid #0047B0;margin-bottom:12px;">
      <span>📚 교육 현황</span>
      <button class="btn-save" id="saveEduBtn" onclick="saveEduSection()" disabled>💾 교육 데이터 저장</button>
    </div>
    <div style="font-size:11px;color:#7A96C0;margin:-4px 0 12px 0;">→ 대시보드 홈, 교육관리, 리스크 알림에 반영됩니다</div>
    <div class="edit-grid" id="editEduGrid"></div>
    <div style="margin-top:12px;font-size:11px;color:#6c757d;">* 취급자교육은 기술기획파트·개발2실만 해당</div>
    <div class="edit-grid" id="editHandlerGrid" style="margin-top:10px;"></div>
  </div>

  <div class="edit-section">
    <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;color:#003087;padding-bottom:6px;border-bottom:2px solid #0047B0;margin-bottom:12px;">
      <span>🧪 화학물질 현재 보관량</span>
      <button class="btn-save" id="saveInvBtn" onclick="saveInvSection()" disabled>💾 보관량 저장</button>
    </div>
    <div style="font-size:11px;color:#7A96C0;margin:-4px 0 12px 0;">→ 대시보드 홈, 화학물질 입출고에 반영됩니다</div>
    <div class="edit-grid" id="editStockGrid"></div>
  </div>

  <div class="edit-section">
    <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;color:#003087;padding-bottom:6px;border-bottom:2px solid #0047B0;margin-bottom:12px;">
      <span>🏭 정기검사 리스크 플래그</span>
      <button class="btn-save" id="saveInspBtn" onclick="saveInspSection()" disabled>💾 검사 데이터 저장</button>
    </div>
    <div style="font-size:11px;color:#7A96C0;margin:-4px 0 12px 0;">→ 현황 요약, 정기검사, 리스크 알림에 반영됩니다</div>
    <div id="editInspGrid" style="display:grid;grid-template-columns:1fr 1fr;gap:10px;"></div>
  </div>

  <div style="display:flex;gap:10px;margin-top:4px;align-items:center;flex-wrap:wrap;">
    <button id="editApplyBtn" class="btn-apply" onclick="applyEdits()" disabled>✓ 전체 저장 및 대시보드 반영</button>
    <button id="editResetBtn" onclick="resetToDefaults()" disabled
      style="background:#EEF3FA;color:#6c757d;border:1px solid #C8D8F0;padding:9px 18px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">
      ↺ 기본 샘플 데이터로 초기화
    </button>
  </div>
</div>

<!-- CONTRACTOR PAGE -->
<div id="page-contractor" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">도급신고 관리<span class="dash-badge">유해화학물질</span></div>
      <div class="dash-header-sub">유해화학물질 취급 도급업체 신고 현황 관리 | ADMIN 모드에서 등록·수정·삭제 가능</div>
    </div>
    <div style="display:flex;gap:12px;align-items:center;">
      <div style="text-align:right;">
        <div style="font-size:11px;color:rgba(255,255,255,0.85);font-weight:600;" id="contLastSaved">저장 없음</div>
        <div style="font-size:10px;color:rgba(255,255,255,0.55);">마지막 저장</div>
      </div>
      <button onclick="openAdminModal()"
        style="background:transparent;color:white;border:2px solid rgba(255,255,255,0.65);padding:7px 18px;border-radius:7px;font-size:12px;font-weight:700;cursor:pointer;white-space:nowrap;">
        🔒 ADMIN
      </button>
    </div>
  </div>

  <!-- 조회 모드 배너 -->
  <div id="contViewBanner" style="background:#EEF3FA;border:1px solid #C8D8F0;border-radius:7px;padding:9px 14px;margin-bottom:12px;font-size:12px;color:#4A6A9A;display:flex;align-items:center;gap:8px;">
    🔒 현재 <b>조회 모드</b>입니다. 데이터를 수정하려면 우측 상단 <b>ADMIN</b> 버튼을 누르세요.
  </div>
  <!-- 관리자 모드 배너 -->
  <div id="contAdminBanner" style="display:none;background:#FFF8E1;border:1px solid #E8960A;border-radius:7px;padding:9px 14px;margin-bottom:12px;font-size:12px;color:#664d03;align-items:center;gap:8px;">
    🔓 <b>관리자 편집 모드</b>입니다. 수정 후 상단 <b>저장</b> 버튼을 눌러야 반영됩니다.
    <button onclick="setAdminMode(false)" style="margin-left:auto;background:#E8960A;color:white;border:none;padding:5px 14px;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;">편집 모드 해제</button>
  </div>

  <div class="edit-section">
    <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px;font-weight:700;color:#003087;padding-bottom:6px;border-bottom:2px solid #0047B0;margin-bottom:12px;">
      <span>도급신고 현황</span>
      <div style="display:flex;gap:8px;align-items:center;">
        <button id="addContractorBtn" class="btn-apply" onclick="addNewContractor()" disabled style="font-size:12px;padding:7px 16px;">+ 신규 업체 등록</button>
        <button class="btn-save" id="saveContractorBtn" onclick="saveContractorSection()" disabled>💾 저장</button>
      </div>
    </div>
    <div style="font-size:11px;color:#7A96C0;margin:-4px 0 12px 0;">→ 리스크 알림에 자동 반영됩니다 | ADMIN 모드에서만 등록·수정·삭제 가능합니다</div>
    <div id="contractorKpi" class="kpi-grid" style="grid-template-columns:repeat(6,1fr);margin-bottom:14px;"></div>
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
      <span id="contractorTableCount" style="font-size:11px;color:#7A96C0;"></span>
    </div>
    <div class="cbox" style="overflow-x:auto;margin-bottom:12px;">
      <table class="dtable" style="min-width:1100px;">
        <thead>
          <tr style="background:#003087;">
            <th style="color:white;width:65px;">업체ID</th>
            <th style="color:white;width:130px;">도급업체명</th>
            <th style="color:white;width:80px;">작업구분</th>
            <th style="color:white;">주요 작업내용</th>
            <th style="color:white;width:80px;">대상물질</th>
            <th style="color:white;width:65px;">취급여부</th>
            <th style="color:white;width:75px;">신고대상</th>
            <th style="color:white;width:75px;">신고상태</th>
            <th style="color:white;width:90px;">작업예정일</th>
            <th style="color:white;width:80px;">서류상태</th>
            <th style="color:white;width:55px;">상세</th>
          </tr>
        </thead>
        <tbody id="contractorTableBody"></tbody>
      </table>
    </div>
    <div id="contractorDetailPanel" style="display:none;border:2px solid #003087;border-radius:8px;padding:16px;background:#FAFCFF;margin-bottom:10px;"></div>
  </div>
</div>

<!-- EDU PAGE -->
<div id="page-edu" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">교육관리</div>
      <div class="dash-header-sub">유해화학물질 종사자교육 / 유해화학물질 취급자교육 현황</div>
    </div>
  </div>
  <div class="sn">🔖 운영회의 검토용 MVP 데이터입니다. 실제 운영 시 Raw Data 연동 예정입니다.</div>
  <div class="tabs">
    <button class="tab-btn active" onclick="st(event,'edu-t1')">유해화학물질 종사자교육</button>
    <button class="tab-btn" onclick="st(event,'edu-t2')">유해화학물질 취급자교육</button>
  </div>
  <div id="edu-t1" class="tab-content active">
    <div class="kpi-grid g4" id="eduWtKpi"></div>
    <div class="row2">
      <div class="cbox" style="height:310px;"><canvas id="eduDeptChart"></canvas></div>
      <div class="cbox" style="overflow-x:auto;max-height:360px;">
        <div class="sec-title">대상자 목록</div>
        <table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th><th>이수 상태</th><th>이수일</th></tr></thead>
        <tbody id="workerTbody"></tbody></table>
      </div>
    </div>
    <div id="wtMissSection"></div>
  </div>
  <div id="edu-t2" class="tab-content">
    <div class="kpi-grid g4" id="eduHtKpi"></div>
    <div class="cbox" style="overflow-x:auto;max-height:400px;">
      <div class="sec-title">취급자 목록 (기술기획파트·개발2실)</div>
      <table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th><th>이수 상태</th><th>이수일</th></tr></thead>
      <tbody id="handlerTbody"></tbody></table>
    </div>
    <div id="htMissSection"></div>
  </div>
</div>

<!-- CHEM PAGE -->
<div id="page-chem" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">화학물질 입출고 / 잔량 현황</div>
      <div class="dash-header-sub">가스 실린더 및 화학물질 입고 · 출고 · 재고조사 이력</div>
    </div>
  </div>
  <div class="sn">🔖 운영회의 검토용 MVP 데이터입니다. 실제 운영 시 Raw Data 연동 예정입니다.</div>
  <div class="kpi-grid g5" id="chemKpi"></div>
  <div class="row2">
    <div class="cbox" style="height:260px;"><div class="sec-title">월별 입출고 추이</div><canvas id="chemCylChart"></canvas></div>
    <div>
      <div class="sec-title">화학물질별 보관 현황</div>
      <button class="btn-sort" onclick="sortGasChart('chem')">↕ 보관량 정렬</button>
      <div class="cbox" style="height:{GAS_H}px;"><canvas id="chemGasChart"></canvas></div>
    </div>
  </div>
  <div class="sec-title">입출고 이력</div>
  <div class="cbox" style="overflow-x:auto;">
    <table class="dtable">
      <thead><tr><th>품목</th><th>수량</th><th>보관장소</th><th>유형</th><th>일자</th><th>잔량</th><th>담당자</th></tr></thead>
      <tbody id="chemTbody"></tbody>
    </table>
  </div>
</div>

<!-- INSP PAGE -->
<div id="page-insp" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">정기검사 현황</div>
      <div class="dash-header-sub">유해화학물질 정기검사 (화학물질관리법) / 고압가스 정기검사 (고압가스안전관리법)</div>
    </div>
  </div>
  <div class="sn">🔖 운영회의 검토용 MVP 데이터입니다. 실제 운영 시 Raw Data 연동 예정입니다.</div>
  <div class="tabs">
    <button class="tab-btn active" onclick="st(event,'insp-t1')">유해화학물질 정기검사</button>
    <button class="tab-btn" onclick="st(event,'insp-t2')">고압가스 정기검사</button>
  </div>
  <div id="insp-t1" class="tab-content active" data-insp="haz"></div>
  <div id="insp-t2" class="tab-content" data-insp="hp"></div>
</div>

<!-- RISK PAGE -->
<div id="page-risk" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">리스크 알림</div>
      <div class="dash-header-sub">교육 · 화학물질 · 검사 영역 리스크 항목</div>
    </div>
  </div>
  <div class="sn">🔖 운영회의 검토용 MVP 데이터입니다. 실제 운영 시 Raw Data 연동 예정입니다.</div>
  <div class="kpi-grid g4" id="riskKpi"></div>
  <div class="sec-title" id="riskListTitle">리스크 항목</div>
  <div id="riskListFull"></div>
</div>

<!-- DAILY CHECK PAGE -->
<div id="page-daily" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">화학물질 일일점검<span class="dash-badge">고압가스 / 질소탱크</span></div>
      <div class="dash-header-sub">고압가스점검 10항목 &nbsp;/&nbsp; 옥외질소탱크점검 10항목 일일점검 기록</div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:16px;font-weight:700;color:white;" id="dailyStatusBadge">—</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.7);">오늘 점검 상태</div>
    </div>
  </div>

  <div class="tabs">
    <button class="tab-btn active" onclick="st(event,'daily-t1')">고압가스점검</button>
    <button class="tab-btn" onclick="st(event,'daily-t2')">옥외질소탱크점검</button>
  </div>

  <!-- TAB1: 가스 캐비닛 -->
  <div id="daily-t1" class="tab-content active">
    <div class="cbox" style="margin-bottom:14px;">
      <div style="display:flex;gap:20px;align-items:flex-end;flex-wrap:wrap;">
        <div class="edit-row"><label>점검 일자</label><input type="date" id="dailyDate" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:12px;font-family:inherit;"></div>
        <div class="edit-row"><label>점검 캐비닛 (가스)</label>
          <select id="dailyGas" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:12px;font-family:inherit;"></select>
        </div>
        <div class="edit-row"><label>점검자</label><input type="text" id="dailyInspector" placeholder="점검자 이름" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:12px;font-family:inherit;width:130px;"></div>
      </div>
    </div>
    <div class="cbox" style="overflow-x:auto;margin-bottom:14px;">
      <table class="dtable" style="min-width:900px;">
        <thead>
          <tr style="background:#003087;">
            <th style="color:white;text-align:center;width:36px;">No</th>
            <th style="color:white;width:140px;">점검 항목</th>
            <th style="color:white;width:200px;">점검 내용</th>
            <th style="color:white;width:220px;">측정값 / 상태</th>
            <th style="color:white;text-align:center;width:70px;">판정</th>
            <th style="color:white;">비고</th>
          </tr>
        </thead>
        <tbody id="dailyFormBody"></tbody>
      </table>
    </div>
    <div style="display:flex;gap:10px;margin-bottom:14px;">
      <button class="btn-apply" onclick="submitDaily()">✓ 점검 완료 저장</button>
      <button class="btn-sort" onclick="clearDailyForm()" style="padding:9px 16px;">↺ 초기화</button>
    </div>

    <!-- 달력형 조회 영역 -->
    <div style="display:grid;grid-template-columns:300px 1fr;gap:14px;margin-bottom:14px;">
      <div class="cbox" style="padding:14px;">
        <div class="sec-title" style="font-size:12px;margin-bottom:10px;">달력형 조회</div>
        <div id="dailyCalBox"></div>
        <div style="display:flex;gap:8px;margin-top:10px;font-size:10px;">
          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:10px;height:10px;border-radius:50%;background:#28a745;display:inline-block;"></span>정상</span>
          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:10px;height:10px;border-radius:50%;background:#E8960A;display:inline-block;"></span>확인필요</span>
          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:10px;height:10px;border-radius:50%;background:#dc3545;display:inline-block;"></span>이상</span>
        </div>
      </div>
      <div class="cbox" style="padding:14px;overflow-y:auto;max-height:380px;">
        <div class="sec-title" style="font-size:12px;margin-bottom:10px;" id="dailyDetailTitle">날짜를 클릭하면 이력을 조회합니다</div>
        <div id="dailyDetailBox" style="font-size:12px;color:#6c757d;text-align:center;padding:30px 0;">달력에서 날짜를 선택하세요.</div>
      </div>
    </div>

    <div class="sec-title">고압가스점검 이력</div>
    <div style="display:flex;gap:10px;margin-bottom:8px;align-items:center;">
      <select id="dailyHistFilter" onchange="renderDailyHistory()" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:11px;font-family:inherit;">
        <option value="">전체 가스</option>
      </select>
      <span style="font-size:11px;color:#6c757d;" id="dailyHistCount"></span>
    </div>
    <div class="cbox" style="overflow-x:auto;">
      <table class="dtable" style="min-width:1100px;">
        <thead>
          <tr>
            <th>일자</th><th>가스/캐비닛</th><th>점검자</th>
            <th>1차압력</th><th>2차압력</th><th>사용실린더</th>
            <th>무게A(kg)</th><th>무게B(kg)</th><th>배기차압</th>
            <th>GasDetector</th><th>Alarm</th><th>Interlock</th>
            <th>누출</th><th>고정/Pigtail</th>
            <th style="text-align:center;">종합판정</th>
          </tr>
        </thead>
        <tbody id="dailyHistBody"></tbody>
      </table>
    </div>
  </div>

  <!-- TAB2: 옥외 질소탱크 -->
  <div id="daily-t2" class="tab-content">
    <div class="cbox" style="margin-bottom:14px;background:#F0FBF5;border:1px solid #B8E0CB;">
      <div style="display:flex;gap:20px;align-items:flex-end;flex-wrap:wrap;">
        <div class="edit-row"><label>점검 일자</label><input type="date" id="n2Date" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:12px;font-family:inherit;"></div>
        <div class="edit-row"><label>탱크 ID</label>
          <select id="n2Tank" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:12px;font-family:inherit;">
            <option value="N2-TANK-01">N2-TANK-01 (옥외 질소탱크 #1)</option>
            <option value="N2-TANK-02">N2-TANK-02 (옥외 질소탱크 #2)</option>
          </select>
        </div>
        <div class="edit-row"><label>점검자</label><input type="text" id="n2Inspector" placeholder="점검자 이름" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:12px;font-family:inherit;width:130px;"></div>
      </div>
    </div>
    <div class="cbox" style="overflow-x:auto;margin-bottom:14px;">
      <table class="dtable" style="min-width:900px;">
        <thead>
          <tr style="background:#1A6B45;">
            <th style="color:white;text-align:center;width:36px;">No</th>
            <th style="color:white;width:160px;">점검 항목</th>
            <th style="color:white;width:200px;">점검 내용</th>
            <th style="color:white;width:220px;">측정값 / 상태</th>
            <th style="color:white;text-align:center;width:70px;">판정</th>
            <th style="color:white;">비고</th>
          </tr>
        </thead>
        <tbody id="n2FormBody"></tbody>
      </table>
    </div>
    <div style="display:flex;gap:10px;margin-bottom:14px;">
      <button class="btn-apply" onclick="submitN2()" style="background:#1A6B45;">✓ 점검 완료 저장</button>
      <button class="btn-sort" onclick="clearN2Form()" style="padding:9px 16px;">↺ 초기화</button>
    </div>

    <!-- 달력형 조회 영역 -->
    <div style="display:grid;grid-template-columns:300px 1fr;gap:14px;margin-bottom:14px;">
      <div class="cbox" style="padding:14px;">
        <div class="sec-title" style="font-size:12px;margin-bottom:10px;border-bottom-color:#1A6B45;">달력형 조회</div>
        <div id="n2CalBox"></div>
        <div style="display:flex;gap:8px;margin-top:10px;font-size:10px;">
          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:10px;height:10px;border-radius:50%;background:#28a745;display:inline-block;"></span>정상</span>
          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:10px;height:10px;border-radius:50%;background:#E8960A;display:inline-block;"></span>확인필요</span>
          <span style="display:inline-flex;align-items:center;gap:3px;"><span style="width:10px;height:10px;border-radius:50%;background:#dc3545;display:inline-block;"></span>이상</span>
        </div>
      </div>
      <div class="cbox" style="padding:14px;overflow-y:auto;max-height:380px;">
        <div class="sec-title" style="font-size:12px;margin-bottom:10px;border-bottom-color:#1A6B45;" id="n2DetailTitle">날짜를 클릭하면 이력을 조회합니다</div>
        <div id="n2DetailBox" style="font-size:12px;color:#6c757d;text-align:center;padding:30px 0;">달력에서 날짜를 선택하세요.</div>
      </div>
    </div>

    <div class="sec-title" style="border-bottom-color:#1A6B45;">옥외질소탱크점검 이력</div>
    <div style="display:flex;gap:10px;margin-bottom:8px;align-items:center;">
      <select id="n2HistFilter" onchange="renderN2History()" style="padding:5px 8px;border:1px solid #ced4da;border-radius:5px;font-size:11px;font-family:inherit;">
        <option value="">전체 탱크</option>
        <option value="N2-TANK-01">N2-TANK-01</option>
        <option value="N2-TANK-02">N2-TANK-02</option>
      </select>
      <span style="font-size:11px;color:#6c757d;" id="n2HistCount"></span>
    </div>
    <div class="cbox" style="overflow-x:auto;">
      <table class="dtable" style="min-width:1050px;">
        <thead>
          <tr>
            <th>일자</th><th>탱크</th><th>점검자</th>
            <th>액면계(%)</th><th>1차압력</th><th>2차압력</th>
            <th>기화기</th><th>안전밸브</th><th>배관누설</th>
            <th>밸브개폐</th><th>차압/필터</th><th>외관기초</th>
            <th>주변환경</th>
            <th style="text-align:center;">종합판정</th>
          </tr>
        </thead>
        <tbody id="n2HistBody"></tbody>
      </table>
    </div>
  </div>

</div>

<!-- GD PAGE -->
<div id="page-gd" class="page">
  <div class="dash-header">
    <div>
      <div class="dash-header-title">가스감지기 관리<span class="dash-badge">Gas Detector Register</span></div>
      <div class="dash-header-sub">설치 가스감지기 관리 대장 | 교정 주기 / Alarm 설정값 / 차기 교정일 자동계산</div>
    </div>
    <div style="text-align:right;">
      <div style="font-size:16px;font-weight:700;color:white;" id="gdOverdueBadge">—</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.72);">교정 기한 초과</div>
    </div>
  </div>
  <div class="kpi-grid g4" id="gdKpiGrid"></div>

  <div class="cbox" style="margin-bottom:14px;">
    <div style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap;">
      <div class="edit-row"><label>설치위치</label>
        <select id="gdFilterLoc" onchange="renderGDTable()" style="padding:5px 8px;border:1px solid #C8D8F0;border-radius:5px;font-size:12px;font-family:inherit;">
          <option value="">전체</option>
        </select>
      </div>
      <div class="edit-row"><label>감지 가스</label>
        <select id="gdFilterGas" onchange="renderGDTable()" style="padding:5px 8px;border:1px solid #C8D8F0;border-radius:5px;font-size:12px;font-family:inherit;">
          <option value="">전체</option>
        </select>
      </div>
      <div class="edit-row"><label>상태</label>
        <select id="gdFilterSt" onchange="renderGDTable()" style="padding:5px 8px;border:1px solid #C8D8F0;border-radius:5px;font-size:12px;font-family:inherit;">
          <option value="">전체</option>
          <option>정상</option><option>점검중</option><option>교정중</option><option>이상</option>
        </select>
      </div>
      <div class="edit-row"><label>교정 상태</label>
        <select id="gdFilterCal" onchange="renderGDTable()" style="padding:5px 8px;border:1px solid #C8D8F0;border-radius:5px;font-size:12px;font-family:inherit;">
          <option value="">전체</option>
          <option value="overdue">기한 초과</option>
          <option value="soon30">30일 이내</option>
          <option value="soon90">90일 이내</option>
        </select>
      </div>
      <span style="font-size:11px;color:#7A96C0;align-self:center;" id="gdFilterCount"></span>
      <button id="gdShowAllBtn" onclick="toggleGDShowAll()" class="btn-sort" style="align-self:flex-end;">📋 전체 보기 (미등록 포함)</button>
    </div>
  </div>

  <div class="sec-title">가스감지기 목록 <span style="font-size:11px;font-weight:400;color:#7A96C0;">(교정만료 → 교정예정 → 이상 → 정상 순 정렬)</span></div>
  <div class="cbox" style="overflow-x:auto;">
    <table class="dtable" style="min-width:1520px;">
      <thead>
        <tr style="background:#003087;">
          <th style="color:white;text-align:center;width:34px;">No</th>
          <th style="color:white;width:75px;">관리번호</th>
          <th style="color:white;width:130px;">설치위치</th>
          <th style="color:white;width:65px;">감지가스</th>
          <th style="color:white;width:80px;">제조사</th>
          <th style="color:white;width:90px;">모델명</th>
          <th style="color:white;width:110px;">감지방식</th>
          <th style="color:white;width:75px;">측정범위</th>
          <th style="color:white;width:80px;">Alarm 1</th>
          <th style="color:white;width:80px;">Alarm 2</th>
          <th style="color:white;text-align:center;width:55px;">교정주기</th>
          <th style="color:white;width:105px;">최근 교정일</th>
          <th style="color:white;width:140px;">차기 교정일</th>
          <th style="color:white;width:72px;">상태</th>
          <th style="color:white;">비고</th>
        </tr>
      </thead>
      <tbody id="gdTableBody"></tbody>
    </table>
  </div>
</div>

</div><!-- /main -->

<script>
// ── App data ──────────────────────────────────────
const D = {{
  workers: {workers_js},
  handlers: {handlers_js},
  chemicals: {chem_js},
  stocks: {stocks_js},
  hazardous: new Set({haz_js}),
  transactions: {trans_js},
  hazInsp: {haz_insp_js},
  hpInsp:  {hp_insp_js},
  depts: {depts_js},
  deptTotal: {dtotal_js},
  deptMiss:  {dmiss_js},
  handCfg: {hand_cfg_js},
}};

// mutable copies
let stocks = [...D.stocks];
let hazInsp = D.hazInsp.map(r=>[...r]);
let hpInsp  = D.hpInsp.map(r=>[...r]);

// ── Mobile sidebar toggle ─────────────────────────
function toggleSidebar() {{
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('mobile-overlay').classList.toggle('open');
}}
function closeSidebar() {{
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
}}
// Close sidebar on nav-item click (mobile)
document.addEventListener('DOMContentLoaded', function() {{
  document.querySelectorAll('.nav-item').forEach(n=>{{
    n.addEventListener('click', ()=>{{if(window.innerWidth<=767)closeSidebar();}});
  }});
}});

// ── Navigation ────────────────────────────────────
function gp(id, el) {{
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  el.classList.add('active');
}}
function gpDirect(id) {{
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>{{
    if(n.getAttribute('onclick')&&n.getAttribute('onclick').includes("'"+id+"'"))
      n.classList.add('active');
  }});
}}
function st(e, id) {{
  const par = e.target.closest('.page');
  par.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  par.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById(id).classList.add('active');
  if(id==='daily-t1'){{dailySelDate=null;document.querySelectorAll('#dailyCalBox [data-date]').forEach(el=>el.style.outline='');const tEl=document.getElementById('dailyDetailTitle');if(tEl)tEl.textContent='날짜를 클릭하면 이력을 조회합니다';const dEl=document.getElementById('dailyDetailBox');if(dEl)dEl.innerHTML='<div style="color:#9AB0C8;padding:28px;text-align:center;font-size:12px;">달력에서 날짜를 선택하세요.</div>';}}
  if(id==='daily-t2'){{n2SelDate=null;document.querySelectorAll('#n2CalBox [data-date]').forEach(el=>el.style.outline='');const tEl=document.getElementById('n2DetailTitle');if(tEl)tEl.textContent='날짜를 클릭하면 이력을 조회합니다';const dEl=document.getElementById('n2DetailBox');if(dEl)dEl.innerHTML='<div style="color:#9AB0C8;padding:28px;text-align:center;font-size:12px;">달력에서 날짜를 선택하세요.</div>';}}
}}

// ── Charts registry ───────────────────────────────
const charts = {{}};
function mkChart(id, cfg) {{
  if (charts[id]) {{ charts[id].destroy(); }}
  charts[id] = new Chart(document.getElementById(id), cfg);
  return charts[id];
}}

// ── Helpers ───────────────────────────────────────
function pct(a,b){{ return b>0?Math.round(a/b*100):0; }}

function scheduleCardHtml(item) {{
  const TC = {{'정기검사':{{bg:'#E4EEFF',text:'#003087'}},'교육':{{bg:'#FFF3CD',text:'#664d03'}},'교정':{{bg:'#E8F5E9',text:'#1a6b45'}},'도급신고':{{bg:'#FFF0F0',text:'#842029'}}}};
  const LC = {{'기한초과':{{border:'#dc3545',bg:'#f8d7da',text:'#842029',icon:'🔴'}},'리스크':{{border:'#dc3545',bg:'#f8d7da',text:'#842029',icon:'🔴'}},'확인필요':{{border:'#E8960A',bg:'#FFF3CD',text:'#664d03',icon:'⚠️'}},'예정':{{border:'#0047B0',bg:'#E4EEFF',text:'#003087',icon:'📅'}}}};
  const tc=TC[item.type]||TC['정기검사'], lc=LC[item.level]||LC['예정'];
  const dT=item.days!=null?(item.days<0?'<span style="background:#f8d7da;color:#842029;font-size:9px;font-weight:700;padding:1px 6px;border-radius:5px;">D+'+ Math.abs(item.days)+'일 초과</span>':'<span style="background:#FFF3CD;color:#664d03;font-size:9px;font-weight:700;padding:1px 6px;border-radius:5px;">D-'+item.days+'일</span>'):'';
  const clickAttr=item.contractorId?('onclick="contRiskClick(\\''+item.contractorId+'\\')" style="cursor:pointer;border-left-color:'+lc.border+';"'):'style="border-left-color:'+lc.border+';"';
  return '<div class="risk-card" '+clickAttr+'>'
    +'<div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;">'
    +'<span style="background:'+tc.bg+';color:'+tc.text+';font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+item.type+'</span>'
    +'<span style="background:'+lc.bg+';color:'+lc.text+';font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+lc.icon+' '+item.level+'</span>'
    +'<span style="margin-left:auto;">'+dT+'</span></div>'
    +'<div class="risk-title-text">'+item.title+'</div>'
    +'<div class="risk-desc">'+item.desc+'</div>'
    +(item.reason?'<div class="risk-reason">사유: '+item.reason+'</div>':'')
    +(item.contractorId?'<div style="font-size:9px;color:#9AB0C8;margin-top:3px;">↗ 클릭하면 해당 업체 상세로 이동합니다</div>':'')
    +'</div>';
}}

// ── KPI from transactions ─────────────────────────
function calcTransKpi() {{
  const now = new Date('2026-06-13');
  const yr  = now.getFullYear();
  const mo  = now.getMonth()+1;
  let ain=0,aout=0,min=0,mout=0,cur=0;
  D.transactions.forEach(t=>{{
    const d=new Date(t[4]); const ty=d.getFullYear(); const tm=d.getMonth()+1;
    if(ty===yr){{
      if(t[3]==='입고'){{ain+=t[1];if(tm===mo)min+=t[1];}}
      if(t[3]==='출고'){{aout+=t[1];if(tm===mo)mout+=t[1];}}
    }}
    if(t[3]==='재고조사')cur=t[5];
  }});
  cur = stocks.reduce((a,b)=>a+b,0);
  return {{ain,aout,min,mout,cur}};
}}

// ── Monthly trend (all chemicals) ─────────────────
function monthlyTrend() {{
  const mos=['1월','2월','3월','4월','5월','6월'];
  const inArr=[0,0,0,0,0,0], outArr=[0,0,0,0,0,0];
  D.transactions.forEach(t=>{{
    const d=new Date(t[4]); const m=d.getMonth();
    if(d.getFullYear()===2026 && m<6){{
      if(t[3]==='입고') inArr[m]+=t[1];
      if(t[3]==='출고') outArr[m]+=t[1];
    }}
  }});
  return {{mos,inArr,outArr}};
}}

// ── Gas chart sorted ──────────────────────────────
let gasAscending = false;
function sortGasChart(ctx) {{
  gasAscending = !gasAscending;
  renderGasChart(ctx);
}}
function renderGasChart(ctx) {{
  const ids = ctx==='home' ? 'hChartGas' : 'chemGasChart';
  const pairs = D.chemicals.map((g,i)=>{{return{{g,s:stocks[i],hz:D.hazardous.has(g)}}}});
  pairs.sort((a,b)=>gasAscending ? b.s-a.s : a.s-b.s);
  const labels=pairs.map(p=>p.g), vals=pairs.map(p=>p.s);
  const colors=pairs.map(p=>p.hz?'#dc3545':'#0047B0');
  mkChart(ids,{{
    type:'bar',
    data:{{labels,datasets:[{{label:'보관(EA/DR)',data:vals,backgroundColor:colors}}]}},
    options:{{
      indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{{legend:{{display:false}},tooltip:{{callbacks:{{label:d=>'보관: '+d.raw+' EA/DR'}}}}}},
      scales:{{
        x:{{grid:{{color:'#f0f0f0'}},title:{{display:true,text:'보관량 (EA/DR)'}}}},
        y:{{grid:{{display:false}}}}
      }}
    }}
  }});
}}

// ── Risk / schedule list ──────────────────────────
function allRisks() {{
  const list=[];
  const today=new Date('2026-06-13');
  [...hazInsp,...hpInsp].forEach(r=>{{
    const planned=new Date(r[5]);
    const diff=Math.ceil((planned-today)/86400000);
    const cat=r[0].startsWith('HI')?'유해화학물질 정기검사':'고압가스 정기검사';
    let level,title,reason;
    if(diff<0){{level='기한초과';title=r[1]+' — 정기검사 기한 초과';reason='검사 예정일 초과 (D+'+ Math.abs(diff)+'일)';}}
    else if(diff<=30){{level='리스크';title=r[1]+' — 정기검사 D-'+diff+'일 임박';reason='30일 이내 검사 예정일 도래';}}
    else if(diff<=90){{level='확인필요';title=r[1]+' — 정기검사 예정 (D-'+diff+'일)';reason='90일 이내 검사 일정 확인 필요';}}
    else return;
    list.push({{title,id:r[0],desc:cat+' | 검사 예정일: '+r[5],level,type:'정기검사',days:diff,reason}});
  }});
  const wt=calcWtKpi(),ht=calcHtKpi();
  const wR=pct(wt.done,wt.total),hR=pct(ht.done,ht.total);
  if(wt.miss>0) list.push({{title:'종사자교육 미이수자 '+wt.miss+'명 — 교육 이수 독려',
    desc:'이수율 '+wR+'% (이수 '+wt.done+'명 / 미이수 '+wt.miss+'명 / 전체 '+wt.total+'명)',
    id:'EDU-WT',level:wR<80?'리스크':'확인필요',type:'교육',days:null,
    reason:wR<80?'이수율 80% 미만 — 리스크 기준 초과':'이수율 90% 미만 또는 미이수자 존재'}});
  if(ht.miss>0) list.push({{title:'취급자교육 미이수자 '+ht.miss+'명 — 기술기획파트·개발2실',
    desc:'이수율 '+hR+'% (이수 '+ht.done+'명 / 미이수 '+ht.miss+'명 / 전체 '+ht.total+'명)',
    id:'EDU-HT',level:hR<80?'리스크':'확인필요',type:'교육',days:null,
    reason:'취급자 미이수자 존재 — 즉시 이수 필요'}});
  // ── Contractor risks ──
  contractorData.forEach(c=>{{
    const wd=c.workDate&&c.workDate!=='해당없음'?new Date(c.workDate):null;
    const diff=wd?Math.ceil((wd-today)/86400000):null;
    const isUrgent=diff!==null&&diff>=0&&diff<=7;
    if(c.reportTarget==='대상'&&c.reportStatus!=='신고완료') {{
      if(isUrgent) {{
        list.push({{title:'작업예정일 임박: '+c.workDesc+' (D-'+diff+')',
          desc:c.name+' | '+c.workType+' | 신고상태: '+c.reportStatus,
          id:'CONT-URG-'+c.id,level:'리스크',type:'도급신고',days:diff,
          reason:'작업예정일 '+c.workDate+' — 도급신고 미완료',contractorId:c.id}});
      }} else {{
        list.push({{title:'도급신고 대상 업체 신고 미완료: '+c.name,
          desc:c.workType+' | '+c.workDesc+' | 신고상태: '+c.reportStatus,
          id:'CONT-'+c.id,level:'리스크',type:'도급신고',days:diff,
          reason:'도급신고 대상 업체가 신고를 완료하지 않음',contractorId:c.id}});
      }}
    }}
    if(c.reportTarget==='확인필요') {{
      list.push({{title:'도급신고 대상성 확인 필요: '+c.name,
        desc:c.workType+' | '+c.workDesc,
        id:'CONT-CHK-'+c.id,level:'확인필요',type:'도급신고',days:null,
        reason:'대상성 판단 미확정 — 담당자 검토 필요',contractorId:c.id}});
    }}
    if(['미완료','일부완료','확인필요'].includes(c.docStatus)&&c.reportTarget!=='비대상') {{
      list.push({{title:'제출서류 미완료: '+c.name,
        desc:c.workType+' | 서류상태: '+c.docStatus,
        id:'CONT-DOC-'+c.id,level:c.docStatus==='미완료'?'리스크':'확인필요',type:'도급신고',days:null,
        reason:'주요 제출서류 준비 미완료',contractorId:c.id}});
    }}
  }});
  return list;
}}

// ── GD Summary for Home ───────────────────────────
function renderHomeGD() {{
  const today=new Date('2026-06-13');
  let total=0,overdue=0,soon30=0,abnormal=0;
  const alerts=[];
  gdData.forEach(d=>{{
    if(!d[3]) return;
    total++;
    const nxt=calcNextCal(d[11],d[10]);
    if(nxt){{
      const diff=Math.ceil((new Date(nxt)-today)/86400000);
      if(diff<0){{overdue++;alerts.push({{d,diff}});}}
      else if(diff<=30){{soon30++;alerts.push({{d,diff}});}}
    }}
    if(d[12]==='이상') abnormal++;
  }});
  const mini=(lbl,val,col,unit)=>
    '<div style="text-align:center;padding:5px 3px;background:#F5F8FD;border-radius:6px;">'
    +'<div style="font-size:9px;color:#7A96C0;font-weight:600;">'+lbl+'</div>'
    +'<div style="font-size:17px;font-weight:700;color:'+col+';">'+val+'</div>'
    +'<div style="font-size:9px;color:#8BA5C8;">'+unit+'</div></div>';
  let html='<div style="font-size:12px;font-weight:700;color:#003087;margin-bottom:7px;">📡 가스감지기 교정 현황</div>'
    +'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:8px;">'
    +mini('등록',total,'#003087','대')
    +mini('기한초과',overdue,overdue>0?'#dc3545':'#28a745','건')
    +mini('30일내',soon30,soon30>0?'#E8960A':'#28a745','건')
    +mini('이상',abnormal,abnormal>0?'#dc3545':'#28a745','대')+'</div>';
  if(alerts.length>0){{
    html+='<div style="font-size:10px;font-weight:600;color:#7A96C0;margin-bottom:3px;">교정 요주의</div>';
    alerts.slice(0,4).forEach(item=>{{
      const isOv=item.diff<0;
      html+='<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;border-bottom:1px solid #EEF3FA;font-size:11px;">'
        +'<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:68%;"><b>'+item.d[1]+'</b> '+item.d[3]+'</span>'
        +'<span style="background:'+(isOv?'#f8d7da':'#FFF3CD')+';color:'+(isOv?'#842029':'#664d03')+';font-size:9px;font-weight:700;padding:1px 6px;border-radius:5px;">'
        +(isOv?'기한초과':'D-'+item.diff)+'</span></div>';
    }});
    if(alerts.length>4) html+='<div style="font-size:10px;color:#7A96C0;padding-top:2px;">+ '+(alerts.length-4)+'건 더</div>';
  }} else {{
    html+='<div style="text-align:center;color:#28a745;font-size:11px;padding:10px 0;font-weight:600;">교정 일정 이상 없음 ✅</div>';
  }}
  document.getElementById('homeGDBox').innerHTML=html;
}}

// ── Init: HOME ────────────────────────────────────
function initHome() {{
  const kpi=calcTransKpi();
  document.getElementById('hKin').textContent=kpi.ain+' EA';
  document.getElementById('hKinSub').textContent='금월 '+kpi.min+' EA';
  document.getElementById('hKout').textContent=kpi.aout+' EA';
  document.getElementById('hKoutSub').textContent='금월 '+kpi.mout+' EA';
  document.getElementById('hKstock').textContent=kpi.cur+' EA/DR';

  // Donut charts
  const mkD=(id,title,done,total,color)=>mkChart(id,{{
    type:'doughnut',
    data:{{labels:['이수','미이수'],datasets:[{{data:[done,total-done],backgroundColor:[color,'#f8d7da'],borderWidth:0}}]}},
    options:{{cutout:'62%',plugins:{{legend:{{display:false}},title:{{display:true,text:title,font:{{size:11}}}},
      tooltip:{{callbacks:{{label:d=>d.label+': '+d.raw+'명'}}}}}},layout:{{padding:8}}}}
  }});
  const wt=calcWtKpi(), ht=calcHtKpi();
  mkD('hChartWt','유해화학물질 종사자교육',wt.done,wt.total,'#28a745');
  mkD('hChartHt','유해화학물질 취급자교육',ht.done,ht.total,'#0047B0');
  document.getElementById('hKwt').textContent=pct(wt.done,wt.total)+'%';
  document.getElementById('hKwtSub').textContent='미이수 '+wt.miss+'명 / 전체 '+wt.total+'명';
  document.getElementById('hKht').textContent=pct(ht.done,ht.total)+'%';
  document.getElementById('hKhtSub').textContent='미이수 '+ht.miss+'명 / 전체 '+ht.total+'명';

  // Cylinder bar
  const tr=monthlyTrend();
  mkChart('hChartCyl',{{type:'bar',data:{{labels:tr.mos,datasets:[
    {{label:'입고',data:tr.inArr,backgroundColor:'#0047B0'}},
    {{label:'출고',data:tr.outArr,backgroundColor:'#dc3545'}}
  ]}},options:{{responsive:true,maintainAspectRatio:false,
    plugins:{{legend:{{position:'top'}}}},
    scales:{{x:{{grid:{{display:false}}}},y:{{grid:{{color:'#f0f0f0'}}}}}}
  }}}});

  // Gas chart
  renderGasChart('home');

  // GD summary
  renderHomeGD();

  // Risk / schedule cards
  const risks=allRisks();
  const rUrgent=risks.filter(r=>r.level==='리스크'||r.level==='기한초과').length;
  const hbEl=document.getElementById('homeRiskBadge');
  if(hbEl) hbEl.textContent=rUrgent>0?'🔴 '+rUrgent+'건 리스크':'✅ 일정 정상';
  document.getElementById('homeRiskList').innerHTML=risks.length
    ? risks.slice(0,8).map(r=>scheduleCardHtml(r)).join('')+(risks.length>8?`<div style="font-size:11px;color:#7A96C0;padding:4px 0;text-align:center;">+ ${{risks.length-8}}건 더 있음 → <a href="#" onclick="gpDirect('risk');return false;" style="color:#003087;">리스크 알림 페이지</a></div>`:'')
    : '<div style="text-align:center;color:#28a745;font-size:12px;padding:20px 0;font-weight:600;">✅ 현재 알림 항목 없음</div>';

  // Dynamic risk KPI
  document.getElementById('hKinspRisk').textContent=risks.filter(r=>r.type==='정기검사').length+'건';
  document.getElementById('hKrisk').textContent=rUrgent+'건';

  // Inspection table (compact)
  const today=new Date('2026-06-13');
  let itHtml='<table class="dtable"><thead><tr><th>구분</th><th>시설명</th><th>D-Day</th><th>예정일</th></tr></thead><tbody>';
  [...hazInsp,...hpInsp].slice(0,10).forEach(r=>{{
    const cat=r[0].startsWith('HI')?'유해':'고압';
    const diff=Math.ceil((new Date(r[5])-today)/86400000);
    let badge;
    if(diff<0) badge='<span class="br">초과</span>';
    else if(diff<=30) badge='<span class="br">D-'+diff+'</span>';
    else if(diff<=90) badge='<span class="bw">D-'+diff+'</span>';
    else badge='<span class="bb">D-'+diff+'</span>';
    itHtml+=`<tr><td style="font-size:10px;">${{cat}}</td><td style="max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${{r[1]}}</td><td>${{badge}}</td><td style="font-size:10px;">${{r[5]}}</td></tr>`;
  }});
  itHtml+='</tbody></table>';
  document.getElementById('homeInspTable').innerHTML=itHtml;
}}

// ── Worker / Handler KPIs ─────────────────────────
function calcWtKpi() {{
  let done=0,miss=0;
  D.workers.forEach(w=>{{if(w.s==='이수')done++;else miss++;}});
  return {{done,miss,total:done+miss}};
}}
function calcHtKpi() {{
  let done=0,miss=0;
  D.handlers.forEach(h=>{{if(h.s==='이수')done++;else miss++;}});
  return {{done,miss,total:done+miss}};
}}

// ── Init: SUMMARY ─────────────────────────────────
function initSummary() {{
  const wt=calcWtKpi(), ht=calcHtKpi();
  document.getElementById('sumWtRate').textContent=pct(wt.done,wt.total)+'%';
  document.getElementById('sumWtSub').textContent='이수 '+wt.done+'명 / 미이수 '+wt.miss+'명 / 전체 '+wt.total+'명';
  document.getElementById('sumHtRate').textContent=pct(ht.done,ht.total)+'%';
  document.getElementById('sumHtSub').textContent='이수 '+ht.done+'명 / 미이수 '+ht.miss+'명 / 전체 '+ht.total+'명';
  const cur=stocks.reduce((a,b)=>a+b,0);
  document.getElementById('sumStock').textContent=cur+' EA/DR';
  const risks=allRisks();
  const sRurgent=risks.filter(r=>r.level==='리스크'||r.level==='기한초과').length;
  document.getElementById('sumRiskTotal').textContent=sRurgent>0?'🔴 '+sRurgent+'건':'✅ 정상';
  document.getElementById('sumInspRisk').textContent=risks.filter(r=>r.type==='정기검사').length+'건';

  document.getElementById('sumRiskList').innerHTML=risks.length
    ? risks.map(r=>scheduleCardHtml(r)).join('')
    : '<div class="risk-card" style="border-left-color:#28a745;color:#28a745;font-weight:600;text-align:center;">현재 알림 없음</div>';

  const missW=D.workers.filter(w=>w.s==='미이수');
  const mwEl=document.getElementById('sumMissWorker');
  mwEl.innerHTML=missW.map(w=>`<tr><td>${{w.n}}</td><td>${{w.c}}</td><td>${{w.d}}</td></tr>`).join('');

  const missH=D.handlers.filter(h=>h.s==='미이수');
  const mhEl=document.getElementById('sumMissHandler');
  mhEl.innerHTML=missH.map(h=>`<tr><td>${{h.n}}</td><td>${{h.c}}</td><td>${{h.d}}</td></tr>`).join('');
}}

// ── Init: EDUCATION ───────────────────────────────
function initEdu() {{
  const wt=calcWtKpi();
  document.getElementById('eduWtKpi').innerHTML=`
    <div class="kpi-card ${{wt.miss>0?'kc-warn':'kc-ok'}}"><div class="kpi-label">이수율</div><div class="kpi-value" style="color:${{wt.miss>0?'#856404':'#28a745'}}">${{pct(wt.done,wt.total)}}%</div></div>
    <div class="kpi-card"><div class="kpi-label">전체 대상자</div><div class="kpi-value">${{wt.total}}명</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">이수 완료</div><div class="kpi-value" style="color:#28a745">${{wt.done}}명</div></div>
    <div class="kpi-card ${{wt.miss>0?'kc-warn':'kc-ok'}}"><div class="kpi-label">미이수</div><div class="kpi-value" style="color:${{wt.miss>0?'#856404':'#28a745'}}">${{wt.miss}}명</div></div>`;

  const ht=calcHtKpi();
  document.getElementById('eduHtKpi').innerHTML=`
    <div class="kpi-card ${{ht.miss>0?'kc-warn':'kc-ok'}}"><div class="kpi-label">이수율</div><div class="kpi-value" style="color:${{ht.miss>0?'#856404':'#28a745'}}">${{pct(ht.done,ht.total)}}%</div></div>
    <div class="kpi-card"><div class="kpi-label">전체 대상자</div><div class="kpi-value">${{ht.total}}명</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">이수 완료</div><div class="kpi-value" style="color:#28a745">${{ht.done}}명</div></div>
    <div class="kpi-card ${{ht.miss>0?'kc-warn':'kc-ok'}}"><div class="kpi-label">미이수</div><div class="kpi-value" style="color:${{ht.miss>0?'#856404':'#28a745'}}">${{ht.miss}}명</div></div>`;

  // dept bar chart
  const doneArr=D.depts.map(d=>D.workers.filter(w=>w.d===d&&w.s==='이수').length);
  const missArr=D.depts.map(d=>D.workers.filter(w=>w.d===d&&w.s==='미이수').length);
  mkChart('eduDeptChart',{{type:'bar',data:{{labels:D.depts,datasets:[
    {{label:'이수',data:doneArr,backgroundColor:'#28a745'}},
    {{label:'미이수',data:missArr,backgroundColor:'#dc3545'}}
  ]}},options:{{responsive:true,maintainAspectRatio:false,
    plugins:{{legend:{{position:'top',labels:{{boxWidth:11}}}},title:{{display:true,text:'부서별 이수 현황',font:{{size:12}}}}}},
    scales:{{x:{{grid:{{display:false}},ticks:{{maxRotation:30}}}},y:{{grid:{{color:'#f0f0f0'}}}}}}
  }}}});

  // Worker table
  const wb=document.getElementById('workerTbody');
  wb.innerHTML=D.workers.map(w=>
    `<tr><td>${{w.n}}</td><td>${{w.c}}</td><td>${{w.d}}</td>
     <td>${{w.s==='이수'?'<span class="bg">이수</span>':'<span class="br">미이수</span>'}}</td>
     <td>${{w.dt}}</td></tr>`).join('');

  // Handler table
  const hb=document.getElementById('handlerTbody');
  hb.innerHTML=D.handlers.map(h=>
    `<tr><td>${{h.n}}</td><td>${{h.c}}</td><td>${{h.d}}</td>
     <td>${{h.s==='이수'?'<span class="bg">이수</span>':'<span class="br">미이수</span>'}}</td>
     <td>${{h.dt}}</td></tr>`).join('');

  // Miss sections
  const wtMiss=D.workers.filter(w=>w.s==='미이수');
  document.getElementById('wtMissSection').innerHTML=wtMiss.length?
    `<details style="margin-top:10px;"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:#856404;padding:6px 0;">⚠️ 미이수자 목록 (${{wtMiss.length}}명)</summary>
     <div class="cbox" style="margin-top:6px;"><table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th></tr></thead>
     <tbody>${{wtMiss.map(w=>`<tr><td>${{w.n}}</td><td>${{w.c}}</td><td>${{w.d}}</td></tr>`).join('')}}</tbody></table></div></details>`:'';

  const htMiss=D.handlers.filter(h=>h.s==='미이수');
  document.getElementById('htMissSection').innerHTML=htMiss.length?
    `<details style="margin-top:10px;"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:#856404;padding:6px 0;">⚠️ 미이수자 목록 (${{htMiss.length}}명)</summary>
     <div class="cbox" style="margin-top:6px;"><table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th></tr></thead>
     <tbody>${{htMiss.map(h=>`<tr><td>${{h.n}}</td><td>${{h.c}}</td><td>${{h.d}}</td></tr>`).join('')}}</tbody></table></div></details>`:'';
}}

// ── Init: CHEM ────────────────────────────────────
function initChem() {{
  const kpi=calcTransKpi();
  document.getElementById('chemKpi').innerHTML=`
    <div class="kpi-card"><div class="kpi-label">연간 입고</div><div class="kpi-value">${{kpi.ain}} EA</div></div>
    <div class="kpi-card"><div class="kpi-label">연간 출고</div><div class="kpi-value">${{kpi.aout}} EA</div></div>
    <div class="kpi-card"><div class="kpi-label">금월 입고</div><div class="kpi-value">${{kpi.min}} EA</div></div>
    <div class="kpi-card"><div class="kpi-label">금월 출고</div><div class="kpi-value">${{kpi.mout}} EA</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">현재 보관</div><div class="kpi-value" style="color:#0047B0">${{kpi.cur}} EA/DR</div></div>`;

  const tr=monthlyTrend();
  mkChart('chemCylChart',{{type:'bar',data:{{labels:tr.mos,datasets:[
    {{label:'입고',data:tr.inArr,backgroundColor:'#0047B0'}},
    {{label:'출고',data:tr.outArr,backgroundColor:'#dc3545'}}
  ]}},options:{{responsive:true,maintainAspectRatio:false,
    plugins:{{legend:{{position:'top'}}}},
    scales:{{x:{{grid:{{display:false}}}},y:{{grid:{{color:'#f0f0f0'}}}}}}
  }}}});

  renderGasChart('chem');

  const cb=document.getElementById('chemTbody');
  cb.innerHTML=D.transactions.map(t=>{{
    const tc=t[3]==='입고'?'background:#d4edda;color:#155724':t[3]==='출고'?'background:#f8d7da;color:#721c24':'background:#d1ecf1;color:#0c5460';
    return `<tr><td>${{t[0]}}</td><td>${{t[1]}}</td><td>${{t[2]}}</td>
      <td style="${{tc}};padding:2px 5px;border-radius:4px;font-size:10px;font-weight:600;">${{t[3]}}</td>
      <td>${{t[4]}}</td><td>${{t[5]}}</td><td>${{t[6]}}</td></tr>`;
  }}).join('');
}}

// ── Init: INSPECTION ─────────────────────────────
function renderInspTab(containerId, data, label) {{
  const today=new Date('2026-06-13');
  const getDDayBadge=(dateStr,riskFlag)=>{{
    const diff=Math.ceil((new Date(dateStr)-today)/86400000);
    if(riskFlag==='Y'||diff<0) return '<span class="br">기한초과</span>';
    if(diff<=30) return '<span class="br">D-'+diff+'일</span>';
    if(diff<=90) return '<span class="bw">D-'+diff+'일</span>';
    return '<span class="bb">D-'+diff+'일</span>';
  }};
  const getStBadge=s=>{{
    if(s==='완료') return '<span class="bg">완료</span>';
    if(s==='보류') return '<span class="bgr">보류</span>';
    if(s==='진행중') return '<span class="bb">진행중</span>';
    if(s==='리스크') return '<span class="br">리스크</span>';
    return '<span style="background:#EEF3FA;color:#7A96C0;font-size:9px;font-weight:700;padding:2px 5px;border-radius:5px;">'+s+'</span>';
  }};
  const risk=data.filter(r=>r[3]==='Y'||Math.ceil((new Date(r[5])-today)/86400000)<=30).length;
  const hold=data.filter(r=>r[2]==='보류').length;
  const done=data.filter(r=>r[2]==='완료').length;
  let html=`<div class="kpi-grid g4">
    <div class="kpi-card"><div class="kpi-label">전체 검사 건수</div><div class="kpi-value">${{data.length}}건</div></div>
    <div class="kpi-card ${{risk>0?'kc-risk':'kc-ok'}}"><div class="kpi-label">리스크 (D-30이내)</div><div class="kpi-value" style="color:${{risk>0?'#dc3545':'#28a745'}}">${{risk}}건</div></div>
    <div class="kpi-card ${{hold>0?'kc-warn':'kc-ok'}}"><div class="kpi-label">보류 건수</div><div class="kpi-value" style="color:${{hold>0?'#856404':'#28a745'}}">${{hold}}건</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">완료 건수</div><div class="kpi-value" style="color:#28a745">${{done}}건</div></div>
  </div>
  <div class="sec-title">${{label}} 목록 (${{data.length}}건)</div>
  <div class="cbox" style="overflow-x:auto;"><table class="dtable">
  <thead><tr><th>검사ID</th><th>시설명</th><th>상태</th><th>D-Day</th><th>비고</th><th>검사 예정일</th></tr></thead><tbody>`;
  data.forEach(r=>{{
    const diff=Math.ceil((new Date(r[5])-today)/86400000);
    const isRisk=r[3]==='Y'||diff<=30;
    html+=`<tr style="${{isRisk?'background:#fff5f5;':''}}">
      <td style="font-size:10px;color:#7A96C0;">${{r[0]}}</td><td style="font-weight:600;">${{r[1]}}</td>
      <td>${{getStBadge(r[2])}}</td><td>${{getDDayBadge(r[5],r[3])}}</td>
      <td style="font-size:10px;color:#6c757d;">${{r[4]||'—'}}</td><td style="font-size:10px;">${{r[5]}}</td></tr>`;
  }});
  html+='</tbody></table></div>';
  document.getElementById(containerId).innerHTML=html;
}}

function initInsp() {{
  renderInspTab('insp-t1', hazInsp, '유해화학물질 정기검사');
  renderInspTab('insp-t2', hpInsp, '고압가스 정기검사');
}}

// ── Init: RISK ────────────────────────────────────
function initRisk() {{
  const risks=allRisks();
  const urgent=risks.filter(r=>r.level==='기한초과'||r.level==='리스크').length;
  const warn=risks.filter(r=>r.level==='확인필요').length;
  const eduCnt=risks.filter(r=>r.type==='교육').length;
  const inspCnt=risks.filter(r=>r.type==='정기검사').length;
  document.getElementById('riskListTitle').textContent='알림 항목 ('+risks.length+'건)';
  document.getElementById('riskKpi').innerHTML=`
    <div class="kpi-card ${{urgent>0?'kc-risk':'kc-ok'}}">
      <div class="kpi-label">긴급 / 리스크</div>
      <div class="kpi-value" style="color:${{urgent>0?'#dc3545':'#28a745'}}">${{urgent}}건</div>
      <div class="kpi-sub">30일 이내 또는 기한초과</div>
    </div>
    <div class="kpi-card ${{warn>0?'kc-warn':'kc-ok'}}">
      <div class="kpi-label">확인 필요</div>
      <div class="kpi-value" style="color:${{warn>0?'#E8960A':'#28a745'}}">${{warn}}건</div>
      <div class="kpi-sub">31~90일 이내 예정</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">교육 알림</div>
      <div class="kpi-value">${{eduCnt}}건</div>
      <div class="kpi-sub">미이수자 포함 부서</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">검사 일정 알림</div>
      <div class="kpi-value">${{inspCnt}}건</div>
      <div class="kpi-sub">90일 이내 예정 검사</div>
    </div>`;
  document.getElementById('riskListFull').innerHTML=risks.length
    ? risks.map(r=>scheduleCardHtml(r)).join('')
    : '<div class="risk-card" style="border-left-color:#28a745;color:#28a745;text-align:center;font-weight:600;">현재 알림 항목 없음</div>';
}}

// ── LOCALSTORAGE + ADMIN MODE ─────────────────────
const LS = {{
  EDU:        'chemicalDashboard_edu',
  HAND:       'chemicalDashboard_hand',
  INV:        'chemicalDashboard_inv',
  INSP:       'chemicalDashboard_insp',
  GD:         'chemicalDashboard_gd',
  DAILY:      'chemicalDashboard_daily',
  N2:         'chemicalDashboard_n2',
  META:       'chemicalDashboard_meta',
  CONTRACTOR: 'chemicalDashboard_contractorReport'
}};
const ADMIN_PASSWORD = '1';
let isAdminMode = false;

function lsSave(key, val) {{
  try {{ localStorage.setItem(key, JSON.stringify(val)); }} catch(e) {{}}
}}
function lsLoad(key) {{
  try {{ const v=localStorage.getItem(key); return v?JSON.parse(v):null; }} catch(e) {{return null;}}
}}

function loadSavedData() {{
  const edu = lsLoad(LS.EDU);
  if(edu) {{
    D.depts=edu.depts; D.dept_total=edu.dept_total; D.dept_miss=edu.dept_miss;
  }}
  const hand = lsLoad(LS.HAND);
  if(hand) {{
    D.hand_cfg=hand;
  }}
  const inv = lsLoad(LS.INV);
  if(inv) {{ stocks=inv; }}
  const insp = lsLoad(LS.INSP);
  if(insp) {{
    hazInsp=insp.haz; hpInsp=insp.hp;
  }}
  const gd = lsLoad(LS.GD);
  if(gd) {{ gdData=gd; }}
  const daily = lsLoad(LS.DAILY);
  if(daily) {{ dailyRecords=daily; }}
  const n2 = lsLoad(LS.N2);
  if(n2) {{ n2Records=n2; }}
  const cont = lsLoad(LS.CONTRACTOR);
  if(cont) {{ contractorData=cont; }}
  const meta = lsLoad(LS.META);
  if(meta && meta.lastSaved) {{
    const el=document.getElementById('editLastSaved');
    if(el) el.textContent=meta.lastSaved;
  }}
}}

function updateLastSaved() {{
  const now=new Date();
  const ts=`${{now.getFullYear()}}-${{String(now.getMonth()+1).padStart(2,'0')}}-${{String(now.getDate()).padStart(2,'0')}} ${{String(now.getHours()).padStart(2,'0')}}:${{String(now.getMinutes()).padStart(2,'0')}}:${{String(now.getSeconds()).padStart(2,'0')}}`;
  lsSave(LS.META, {{lastSaved: ts}});
  const el=document.getElementById('editLastSaved');
  if(el) el.textContent=ts;
}}

function showToast(msg, ms=2200) {{
  const t=document.getElementById('editToast');
  if(!t) return;
  t.textContent=msg; t.style.display='block';
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>{{t.style.display='none';}}, ms);
}}

function setAdminMode(on) {{
  isAdminMode=on;
  const vb=document.getElementById('editViewBanner');
  const ab=document.getElementById('editAdminBanner');
  const adminBtn=document.getElementById('editAdminBtn');
  if(vb) vb.style.display=on?'none':'flex';
  if(ab) ab.style.display=on?'flex':'none';
  if(adminBtn) {{
    adminBtn.textContent=on?'🔓 ADMIN (편집 중)':'🔒 ADMIN';
    adminBtn.style.background=on?'rgba(232,150,10,0.25)':'transparent';
    adminBtn.style.borderColor=on?'#E8960A':'rgba(255,255,255,0.65)';
  }}
  const cvb=document.getElementById('contViewBanner');
  const cab=document.getElementById('contAdminBanner');
  if(cvb) cvb.style.display=on?'none':'flex';
  if(cab) cab.style.display=on?'flex':'none';
  // 모든 편집 관련 버튼 활성/비활성
  ['saveEduBtn','saveInvBtn','saveInspBtn','editApplyBtn','editResetBtn','saveContractorBtn','addContractorBtn'].forEach(id=>{{
    const btn=document.getElementById(id);
    if(btn) btn.disabled=!on;
  }});
  // 도급신고 상세 패널 내 버튼 동기화
  document.querySelectorAll('#contractorDetailPanel button').forEach(btn=>{{
    if(btn.textContent.trim()==='삭제') {{ btn.disabled=!on; btn.style.background=on?'#dc3545':'#EEF3FA'; btn.style.color=on?'white':'#9AB0C8'; }}
  }});
  // edit 인풋 모두 enable/disable
  document.querySelectorAll('#page-edit input, #page-edit select').forEach(el=>{{
    el.disabled=!on;
    el.style.background=on?'':'#F7F9FC';
    el.style.color=on?'':'#9AB0C8';
  }});
}}

function openAdminModal() {{
  if(isAdminMode) {{ setAdminMode(false); return; }}
  const m=document.getElementById('adminModal');
  if(m) {{ m.style.display='flex'; document.getElementById('adminPwInput').value=''; document.getElementById('adminPwErr').textContent=''; setTimeout(()=>document.getElementById('adminPwInput').focus(),80); }}
}}
function closeAdminModal() {{
  const m=document.getElementById('adminModal');
  if(m) m.style.display='none';
}}
function confirmAdmin() {{
  const pw=document.getElementById('adminPwInput').value;
  if(pw===ADMIN_PASSWORD) {{
    closeAdminModal();
    setAdminMode(true);
    showToast('관리자 편집 모드입니다. 수정 후 저장 버튼을 눌러야 대시보드에 반영됩니다.');
  }} else {{
    document.getElementById('adminPwErr').textContent='관리자 비밀번호가 일치하지 않습니다.';
    document.getElementById('adminPwInput').select();
  }}
}}

function saveEduSection() {{
  if(!isAdminMode) return;
  // edu 수치는 initEdit에서 editEduGrid/editHandlerGrid input들로 D에 반영됨
  // 현재 D값을 localStorage에 저장
  lsSave(LS.EDU, {{depts:D.depts, dept_total:D.dept_total, dept_miss:D.dept_miss}});
  lsSave(LS.HAND, D.hand_cfg);
  updateLastSaved();
  showToast('💾 교육 데이터가 저장되었습니다.');
}}
function saveInvSection() {{
  if(!isAdminMode) return;
  lsSave(LS.INV, stocks);
  updateLastSaved();
  showToast('💾 보관량 데이터가 저장되었습니다.');
}}
function saveInspSection() {{
  if(!isAdminMode) return;
  lsSave(LS.INSP, {{haz:hazInsp, hp:hpInsp}});
  updateLastSaved();
  showToast('💾 정기검사 데이터가 저장되었습니다.');
}}
function saveGDData() {{
  lsSave(LS.GD, gdData);
  updateLastSaved();
}}

function resetToDefaults() {{
  if(!isAdminMode) return;
  if(!confirm('모든 수정된 데이터를 기본 샘플 데이터로 초기화합니다. 계속하시겠습니까?')) return;
  Object.values(LS).forEach(k=>{{ try{{localStorage.removeItem(k);}}catch(e){{}} }});
  showToast('↺ 초기화 완료. 페이지를 새로고침합니다...');
  setTimeout(()=>location.reload(), 1200);
}}

// ── EDIT PAGE ─────────────────────────────────────
function initEdit() {{
  // Edu section - worker
  const eg=document.getElementById('editEduGrid');
  eg.innerHTML='<div style="grid-column:1/-1;font-size:11px;font-weight:700;color:#495057;">종사자교육 (전체 100명)</div>';
  D.depts.forEach((d,i)=>{{
    const tot=D.deptTotal[i], miss=D.deptMiss[i];
    eg.innerHTML+=`<div class="edit-row">
      <label>${{d}} (전체 ${{tot}}명)</label>
      <input type="number" id="ew_${{i}}" value="${{tot-miss}}" min="0" max="${{tot}}" placeholder="이수 완료 수">
      <span style="font-size:10px;color:#6c757d;">/ ${{tot}}명</span>
    </div>`;
  }});

  // Handler section
  const hg=document.getElementById('editHandlerGrid');
  hg.innerHTML='<div style="grid-column:1/-1;font-size:11px;font-weight:700;color:#495057;">취급자교육 (기술기획파트·개발2실)</div>';
  Object.entries(D.handCfg).forEach(([d,v])=>{{
    hg.innerHTML+=`<div class="edit-row">
      <label>${{d}} (전체 ${{v.total}}명)</label>
      <input type="number" id="eh_${{d}}" value="${{v.total-v.miss}}" min="0" max="${{v.total}}" placeholder="이수 완료 수">
      <span style="font-size:10px;color:#6c757d;">/ ${{v.total}}명</span>
    </div>`;
  }});

  // Stock section
  const sg=document.getElementById('editStockGrid');
  sg.innerHTML=D.chemicals.map((g,i)=>
    `<div class="edit-row">
      <label>${{g}} ${{D.hazardous.has(g)?'<span class="br" style="font-size:8px;">유해</span>':'<span class="bg" style="font-size:8px;">고압</span>'}}</label>
      <input type="number" id="es_${{i}}" value="${{stocks[i]}}" min="0" max="999">
    </div>`).join('');

  // Inspection flags
  const ig=document.getElementById('editInspGrid');
  const allI=[...hazInsp,...hpInsp];
  ig.innerHTML=allI.map((r,i)=>
    `<div class="edit-row">
      <label>${{r[0]}} - ${{r[1]}}</label>
      <select id="ei_${{i}}" style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:11px;">
        <option value="N" ${{r[3]==='N'?'selected':''}}>N (리스크 없음)</option>
        <option value="Y" ${{r[3]==='Y'?'selected':''}}>Y (리스크 있음)</option>
      </select>
    </div>`).join('');
}}

function applyEdits() {{
  if(!isAdminMode) return;
  // Update stocks from inputs
  D.chemicals.forEach((g,i)=>{{
    const v=parseInt(document.getElementById('es_'+i)?.value)||0;
    stocks[i]=v;
  }});

  // Update worker completion
  D.depts.forEach((d,i)=>{{
    const inp=document.getElementById('ew_'+i);
    if(!inp) return;
    const newDone=parseInt(inp.value)||0;
    let cnt=0;
    D.workers.forEach(w=>{{
      if(w.d===d){{
        w.s = cnt<newDone ? '이수' : '미이수';
        w.dt = w.s==='이수' ? '2026-03-15' : '-';
        cnt++;
      }}
    }});
  }});
  Object.keys(D.handCfg).forEach(d=>{{
    const inp=document.getElementById('eh_'+d);
    if(!inp) return;
    const newDone=parseInt(inp.value)||0;
    let cnt=0;
    D.handlers.forEach(h=>{{
      if(h.d===d){{
        h.s = cnt<newDone ? '이수' : '미이수';
        h.dt = h.s==='이수' ? '2026-04-20' : '-';
        cnt++;
      }}
    }});
  }});

  // Update inspection flags
  const allI=[...hazInsp,...hpInsp];
  allI.forEach((r,i)=>{{
    const sel=document.getElementById('ei_'+i);
    if(!sel) return;
    r[3]=sel.value;
  }});
  hazInsp.forEach((r,i)=>{{ r[3]=allI[i][3]; }});
  hpInsp.forEach((r,i)=>{{ r[3]=allI[hazInsp.length+i][3]; }});

  // Save everything to localStorage
  lsSave(LS.EDU, {{depts:D.depts, dept_total:D.dept_total, dept_miss:D.dept_miss}});
  lsSave(LS.HAND, D.hand_cfg);
  lsSave(LS.INV, stocks);
  lsSave(LS.INSP, {{haz:hazInsp, hp:hpInsp}});
  lsSave(LS.GD, gdData);
  lsSave(LS.CONTRACTOR, contractorData);
  updateLastSaved();

  // Re-render all pages
  initSummary();
  initHome();
  initEdu();
  initChem();
  initInsp();
  initRisk();
  showToast('✅ 전체 저장 및 대시보드 반영 완료');
}}

// ── DAILY CHECK ──────────────────────────────────
const DAILY_ITEMS = [
  {{no:1, name:'1차 압력',    desc:'실린더 측 압력 확인',                   type:'number', unit:'MPa', abnRule:'range', note:'A/B 실린더별 기록 권장'}},
  {{no:2, name:'2차 압력',    desc:'Regulator 후단 공급압력 확인',           type:'number', unit:'MPa', abnRule:'range', note:'장비 공급압 기준'}},
  {{no:3, name:'사용 실린더', desc:'현재 공급 중인 실린더 확인',             type:'ab',     unit:'',    abnRule:'none',  note:'자동절체 상태 확인'}},
  {{no:4, name:'실린더 무게', desc:'A/B 실린더 잔량 확인 (kg)',              type:'weight', unit:'kg',  abnRule:'none',  note:'Scale 값 기준'}},
  {{no:5, name:'배기 차압',   desc:'Cabinet 배기 차압 확인',                 type:'number', unit:'Pa',  abnRule:'range', note:'배기 이상 조기 확인'}},
  {{no:6, name:'Gas Detector',desc:'감지기 정상 표시 여부 확인',             type:'status2',unit:'ppm', abnRule:'status',note:'측정값 확인 가능 시 ppm 기록'}},
  {{no:7, name:'Alarm 상태',  desc:'현장 알람 발생 여부 확인',               type:'alarm',  unit:'',    abnRule:'status',note:'알람명 기록'}},
  {{no:8, name:'Interlock',   desc:'인터락 정상 여부 확인',                  type:'ilock',  unit:'',    abnRule:'status',note:'Bypass 시 사유 필수'}},
  {{no:9, name:'누출 의심',   desc:'냄새·소리·감지기 수치·연결부 이상',     type:'ok_ng',  unit:'',    abnRule:'status',note:'Neck/Pigtail 연결부 중점'}},
  {{no:10,name:'실린더 고정', desc:'체인·전도방지·Pigtail 체결 상태 확인',  type:'ok_ng',  unit:'',    abnRule:'status',note:'교체 후 재확인 필요'}},
];

// gas-only chemicals (not KOH)
const gasCabinets = D.chemicals.filter(g=>g!=='KOH');

// daily records
let dailyRecords = [
  {{date:'2026-06-10',gas:'H2',inspector:'김지수',vals:['15.2','0.52','A','12.5','8.2','28','정상','','정상','정상','정상','정상'],result:'정상'}},
  {{date:'2026-06-11',gas:'NH3',inspector:'이민준',vals:['12.8','0.48','B','10.2','14.6','32','정상','','정상','정상','정상','이상'],result:'이상'}},
  {{date:'2026-06-12',gas:'HF',inspector:'박서연',vals:['14.1','0.50','A','11.0','9.8','30','정상','','정상','정상','정상','정상'],result:'정상'}},
  {{date:'2026-06-12',gas:'H2',inspector:'최동현',vals:['14.9','0.51','A','11.8','8.0','27','이상','5ppm','정상','정상','정상','정상'],result:'이상'}},
  {{date:'2026-06-13',gas:'N2',inspector:'정유진',vals:['18.2','0.60','A','15.3','12.1','25','정상','','정상','정상','정상','정상'],result:'정상'}},
];

function buildDailyFormRow(item) {{
  let inputHtml='';
  const id='df_'+item.no;
  switch(item.type){{
    case 'number':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${{id}}" step="0.01" placeholder="수치 입력"
          style="width:90px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;"
          oninput="evalRow(${{item.no}})">
        <span style="font-size:11px;color:#6c757d;">${{item.unit}}</span>
      </div>`;
      break;
    case 'ab':
      inputHtml=`<select id="${{id}}" onchange="evalRow(${{item.no}})"
        style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
        <option value="">선택</option><option>A</option><option>B</option>
      </select>`;
      break;
    case 'weight':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <span style="font-size:11px;">A:</span>
        <input type="number" id="df_4a" step="0.1" placeholder="kg"
          style="width:70px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalRow(4)">
        <span style="font-size:11px;">B:</span>
        <input type="number" id="df_4b" step="0.1" placeholder="kg"
          style="width:70px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalRow(4)">
        <span style="font-size:11px;color:#6c757d;">kg</span>
      </div>`;
      break;
    case 'status2':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <select id="${{id}}" onchange="evalRow(${{item.no}})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>이상</option>
        </select>
        <input type="text" id="${{id}}_ppm" placeholder="ppm"
          style="width:65px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
      </div>`;
      break;
    case 'alarm':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <select id="${{id}}" onchange="evalRow(${{item.no}})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>알람</option>
        </select>
        <input type="text" id="${{id}}_name" placeholder="알람명"
          style="width:90px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
      </div>`;
      break;
    case 'ilock':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <select id="${{id}}" onchange="evalRow(${{item.no}})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>이상</option><option>Bypass</option>
        </select>
        <input type="text" id="${{id}}_reason" placeholder="사유(Bypass 시 필수)"
          style="width:110px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
      </div>`;
      break;
    case 'ok_ng':
      inputHtml=`<select id="${{id}}" onchange="evalRow(${{item.no}})"
        style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
        <option value="">선택</option><option>정상</option><option>이상</option>
      </select>`;
      break;
  }}
  return `<tr id="row_${{item.no}}">
    <td style="text-align:center;font-weight:700;color:#003087;">${{item.no}}</td>
    <td style="font-weight:600;">${{item.name}}</td>
    <td style="font-size:11px;color:#495057;">${{item.desc}}</td>
    <td>${{inputHtml}}</td>
    <td style="text-align:center;" id="judge_${{item.no}}"><span style="color:#6c757d;font-size:11px;">—</span></td>
    <td><input type="text" id="note_${{item.no}}" placeholder="${{item.note}}"
      style="width:100%;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:11px;"></td>
  </tr>`;
}}

function evalRow(no) {{
  const item=DAILY_ITEMS[no-1];
  const id='df_'+no;
  const v=document.getElementById(id)?.value||'';
  let status=''; // ''=미입력, '정상', '이상'
  if(item.type==='status2'||item.type==='alarm'||item.type==='ok_ng'){{
    if(v) status=(v==='이상'||v==='알람')?'이상':'정상';
  }} else if(item.type==='ilock'){{
    if(v) status=(v==='이상'||v==='Bypass')?'이상':'정상';
  }} else if(item.type==='number'){{
    const n=parseFloat(document.getElementById(id)?.value);
    if(!isNaN(n)) status='정상';
  }} else if(item.type==='ab'){{
    if(v) status='정상';
  }} else if(item.type==='weight'){{
    const va=parseFloat(document.getElementById('df_4a')?.value);
    const vb=parseFloat(document.getElementById('df_4b')?.value);
    if(!isNaN(va)||!isNaN(vb)) status='정상';
  }}
  const cell=document.getElementById('judge_'+no);
  if(cell){{
    if(status==='이상') cell.innerHTML='<span class="br" style="font-size:10px;">이상</span>';
    else if(status==='정상') cell.innerHTML='<span class="bg" style="font-size:10px;">정상</span>';
    else cell.innerHTML='<span style="color:#6c757d;font-size:11px;">—</span>';
  }}
  updateOverallJudge();
}}

function updateOverallJudge() {{
  let hasAbn=false;
  DAILY_ITEMS.forEach(item=>{{
    const v=document.getElementById('df_'+item.no)?.value||'';
    if(v==='이상'||v==='알람'||v==='Bypass') hasAbn=true;
  }});
  const badge=document.getElementById('dailyStatusBadge');
  if(badge) badge.textContent=hasAbn?'⚠️ 이상 감지':'✅ 정상';
}}

function clearDailyForm() {{
  DAILY_ITEMS.forEach(item=>{{
    const el=document.getElementById('df_'+item.no);
    if(el) el.value='';
    ['_ppm','_name','_reason'].forEach(s=>{{
      const e2=document.getElementById('df_'+item.no+s);
      if(e2) e2.value='';
    }});
    const n=document.getElementById('note_'+item.no);
    if(n) n.value='';
    const j=document.getElementById('judge_'+item.no);
    if(j) j.innerHTML='<span style="color:#6c757d;font-size:11px;">—</span>';
  }});
  const e4a=document.getElementById('df_4a'); if(e4a) e4a.value='';
  const e4b=document.getElementById('df_4b'); if(e4b) e4b.value='';
  document.getElementById('dailyStatusBadge').textContent='—';
}}

function submitDaily() {{
  const date=document.getElementById('dailyDate').value;
  const gas=document.getElementById('dailyGas').value;
  const inspector=document.getElementById('dailyInspector').value||'미입력';
  if(!date||!gas){{ alert('날짜와 가스를 선택해주세요.'); return; }}

  let hasAbn=false;
  const vals=[];
  DAILY_ITEMS.forEach(item=>{{
    const id='df_'+item.no;
    let v=document.getElementById(id)?.value||'';
    if(item.no===4){{
      const a=document.getElementById('df_4a')?.value||'';
      const b=document.getElementById('df_4b')?.value||'';
      v=a+'/'+b;
    }}
    if(item.type==='status2') v+=(document.getElementById(id+'_ppm')?.value?(' '+document.getElementById(id+'_ppm').value+'ppm'):'');
    if(item.type==='alarm')   v+=(document.getElementById(id+'_name')?.value?' '+document.getElementById(id+'_name').value:'');
    if(item.type==='ilock')   v+=(document.getElementById(id+'_reason')?.value?' ('+document.getElementById(id+'_reason').value+')'  :'');
    if(v==='이상'||v==='알람'||v==='Bypass'||v.startsWith('이상')||v.startsWith('Bypass')) hasAbn=true;
    vals.push(v||'—');
  }});
  // If required fields missing and no abnormal → 확인필요
  let emptyReq=false;
  DAILY_ITEMS.forEach((item,idx)=>{{
    if(['number','status2','alarm','ok_ng','ilock','ab'].includes(item.type)&&(vals[idx]==='—'||!vals[idx])) emptyReq=true;
  }});
  const finalResult=hasAbn?'이상':(emptyReq?'확인필요':'정상');

  dailyRecords.unshift({{date,gas,inspector,vals,result:finalResult}});
  lsSave(LS.DAILY, dailyRecords);
  renderDailyHistory();
  renderDailyCalendar();
  clearDailyForm();
  showToast('✓ '+gas+' 점검 저장 ('+finalResult+')');
}}

function renderDailyHistory() {{
  const filter=document.getElementById('dailyHistFilter')?.value||'';
  const rows=filter ? dailyRecords.filter(r=>r.gas===filter) : dailyRecords;
  document.getElementById('dailyHistCount').textContent='총 '+rows.length+'건';
  const cols=['1차압','2차압','사용Cyl','무게A','무게B','배기차압','GasDet.','Alarm','Interlock','누출','고정'];
  document.getElementById('dailyHistBody').innerHTML=rows.map(r=>{{
    const isAbn=r.result==='이상', isWarn=r.result==='확인필요';
    const judge=isAbn?'<span class="br" style="font-size:10px;">이상</span>'
      :isWarn?'<span class="bw" style="font-size:10px;">확인필요</span>'
      :'<span class="bg" style="font-size:10px;">정상</span>';
    const rowBg=isAbn?'background:#fff5f5;':isWarn?'background:#fffdf0;':'';
    const valCells=r.vals.map((v,i)=>{{
      const abn=v==='이상'||v==='알람'||v==='Bypass'||v.startsWith('이상')||v.startsWith('Bypass');
      return `<td style="${{abn?'color:#dc3545;font-weight:700;':''}}font-size:11px;">${{v}}</td>`;
    }}).join('');
    return `<tr style="${{rowBg}}">
      <td style="white-space:nowrap;">${{r.date}}</td>
      <td><span style="background:${{D.hazardous.has(r.gas)?'#f8d7da':'#d1ecf1'}};color:${{D.hazardous.has(r.gas)?'#842029':'#0c5460'}};font-size:10px;font-weight:700;padding:1px 5px;border-radius:5px;">${{r.gas}}</span></td>
      <td>${{r.inspector}}</td>
      ${{valCells}}
      <td style="text-align:center;">${{judge}}</td>
    </tr>`;
  }}).join('') || '<tr><td colspan="16" style="text-align:center;color:#6c757d;padding:20px;">점검 이력이 없습니다.</td></tr>';
}}

// ── DAILY CALENDAR ───────────────────────────────
let dailyCalYear=2026, dailyCalMonth=5; // 0-indexed: 5=June
let n2CalYear=2026, n2CalMonth=5;
const CAL_MN=['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const CAL_DN=['일','월','화','수','목','금','토'];
const TODAY_STR='2026-06-13';
let dailySelDate=null, n2SelDate=null;

function _calBuildHtml(records, year, month, accentColor, onClickFn) {{
  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const dateMap={{}};
  records.forEach(r=>{{const k=r.date; if(!dateMap[k])dateMap[k]=[]; dateMap[k].push(r);}});
  const btnStyle=`background:#EEF3FA;border:1px solid #C8D8F0;color:${{accentColor}};padding:4px 12px;border-radius:5px;font-size:12px;font-weight:700;cursor:pointer;`;
  let h=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
    <button style="${{btnStyle}}" onclick="${{onClickFn}}(-1)">◀</button>
    <span style="font-weight:700;color:${{accentColor}};font-size:13px;">${{year}}년 ${{CAL_MN[month]}}</span>
    <button style="${{btnStyle}}" onclick="${{onClickFn}}(1)">▶</button>
  </div><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:3px;">`;
  CAL_DN.forEach((d,i)=>{{
    h+=`<div style="text-align:center;font-size:10px;font-weight:600;color:${{i===0?'#dc3545':i===6?accentColor:'#6c757d'}};padding:2px 0;">${{d}}</div>`;
  }});
  h+=`</div><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;">`;
  for(let i=0;i<firstDay;i++) h+=`<div style="min-height:44px;"></div>`;
  for(let d=1;d<=daysInMonth;d++){{
    const ds=`${{year}}-${{String(month+1).padStart(2,'0')}}-${{String(d).padStart(2,'0')}}`;
    const recs=dateMap[ds]||[];
    const cnt=recs.length;
    const hasAbn=recs.some(r=>r.result==='이상');
    const hasWarn=recs.some(r=>r.result==='확인필요');
    const isToday=ds===TODAY_STR;
    let bg='#FFFFFF', dotClr='';
    if(cnt>0){{
      if(hasAbn){{bg='#FFF0F0';dotClr='#dc3545';}}
      else if(hasWarn){{bg='#FFFBF0';dotClr='#E8960A';}}
      else{{bg='#F0FFF4';dotClr='#28a745';}}
    }}
    const detailFn=onClickFn==='moveDailyCal'?'showDailyDateDetail':'showN2DateDetail';
    h+=`<div onclick="${{detailFn}}('${{ds}}')" data-date="${{ds}}"
      style="min-height:44px;border:${{isToday?`2px solid ${{accentColor}}`:'1px solid #E8EEF5'}};border-radius:5px;padding:3px;cursor:pointer;background:${{bg}};"
      onmouseover="this.style.boxShadow='0 2px 6px rgba(0,0,0,0.12)'"
      onmouseout="this.style.boxShadow=''">
      <div style="font-size:11px;font-weight:${{isToday?'800':'400'}};color:${{isToday?accentColor:dotClr||'#495057'}};text-align:right;">${{d}}</div>
      ${{cnt>0?`<div style="text-align:center;font-size:10px;font-weight:700;color:${{dotClr}};margin-top:2px;">${{cnt}}건</div>`:''}}
    </div>`;
  }}
  h+=`</div>`;
  return h;
}}

function renderDailyCalendar() {{
  const box=document.getElementById('dailyCalBox');
  if(!box) return;
  box.innerHTML=_calBuildHtml(dailyRecords,dailyCalYear,dailyCalMonth,'#003087','moveDailyCal');
  if(dailySelDate){{const el=document.querySelector('#dailyCalBox [data-date="'+dailySelDate+'"]');if(el)el.style.outline='2px solid #003087';}}
}}
function moveDailyCal(dir) {{
  dailyCalMonth+=dir;
  if(dailyCalMonth<0){{dailyCalMonth=11;dailyCalYear--;}}
  if(dailyCalMonth>11){{dailyCalMonth=0;dailyCalYear++;}}
  renderDailyCalendar();
}}

function renderN2Calendar() {{
  const box=document.getElementById('n2CalBox');
  if(!box) return;
  box.innerHTML=_calBuildHtml(n2Records,n2CalYear,n2CalMonth,'#1A6B45','moveN2Cal');
  if(n2SelDate){{const el=document.querySelector('#n2CalBox [data-date="'+n2SelDate+'"]');if(el)el.style.outline='2px solid #1A6B45';}}
}}
function moveN2Cal(dir) {{
  n2CalMonth+=dir;
  if(n2CalMonth<0){{n2CalMonth=11;n2CalYear--;}}
  if(n2CalMonth>11){{n2CalMonth=0;n2CalYear++;}}
  renderN2Calendar();
}}

function normDate(s){{if(!s)return s;return s.replace(/[./]/g,'-').replace(/-(\d)-/,'-0$1-').replace(/-(\d)$/,'-0$1');}}
function showDailyDateDetail(dateStr) {{
  dateStr=normDate(dateStr);
  const recs=dailyRecords.filter(r=>normDate(r.date)===dateStr);
  const titleEl=document.getElementById('dailyDetailTitle');
  const detailEl=document.getElementById('dailyDetailBox');
  if(titleEl) titleEl.textContent=dateStr+' 고압가스점검 이력';
  document.querySelectorAll('#dailyCalBox [data-date]').forEach(el=>el.style.outline='');
  const selEl=document.querySelector('#dailyCalBox [data-date="'+dateStr+'"]');
  if(selEl)selEl.style.outline='2px solid #003087';
  dailySelDate=dateStr;
  if(!detailEl) return;
  if(!recs.length){{
    detailEl.innerHTML='<div style="color:#6c757d;padding:28px;text-align:center;font-size:12px;">해당 날짜의 고압가스점검 이력이 없습니다.</div>';
    return;
  }}
  const cols=['1차 압력','2차 압력','사용 실린더','무게A','무게B','배기 차압','Gas Detector','Alarm 상태','Interlock','누출 의심','실린더 고정'];
  detailEl.innerHTML=recs.map((r,ri)=>{{
    const isAbn=r.result==='이상',isWarn=r.result==='확인필요';
    const judge=isAbn?'<span class="br">이상</span>':isWarn?'<span class="bw">확인필요</span>':'<span class="bg">정상</span>';
    const rows=cols.map((c,i)=>{{
      const v=r.vals[i]||'—';
      const abn=v==='이상'||v==='알람'||v==='Bypass'||v.startsWith('이상')||v.startsWith('Bypass');
      return `<div style="display:flex;gap:4px;font-size:11px;"><span style="color:#7A96C0;min-width:80px;">${{c}}</span><span style="color:${{abn?'#dc3545':'#333'}};font-weight:${{abn?'700':'400'}};">${{v}}</span></div>`;
    }}).join('');
    return `<div style="border:1px solid ${{isAbn?'#f5c6cb':isWarn?'#ffe082':'#C8D8F0'}};border-radius:7px;padding:10px 14px;margin-bottom:10px;background:${{isAbn?'#fff5f5':isWarn?'#fffdf0':'#FAFCFF'}};">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:700;font-size:12px;color:#003087;">[${{ri+1}}] ${{r.gas}} — ${{r.inspector}}</span>${{judge}}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px 20px;">${{rows}}</div>
    </div>`;
  }}).join('');
}}

function showN2DateDetail(dateStr) {{
  dateStr=normDate(dateStr);
  const recs=n2Records.filter(r=>normDate(r.date)===dateStr);
  const titleEl=document.getElementById('n2DetailTitle');
  const detailEl=document.getElementById('n2DetailBox');
  if(titleEl) titleEl.textContent=dateStr+' 옥외질소탱크점검 이력';
  document.querySelectorAll('#n2CalBox [data-date]').forEach(el=>el.style.outline='');
  const selEl=document.querySelector('#n2CalBox [data-date="'+dateStr+'"]');
  if(selEl)selEl.style.outline='2px solid #1A6B45';
  n2SelDate=dateStr;
  if(!detailEl) return;
  if(!recs.length){{
    detailEl.innerHTML='<div style="color:#6c757d;padding:28px;text-align:center;font-size:12px;">해당 날짜의 옥외질소탱크점검 이력이 없습니다.</div>';
    return;
  }}
  const cols=['액면계','탱크 1차 압력','공급 2차 압력','기화기 상태','안전밸브/방출구','배관/밸브 누설','밸브 개폐 상태','차압/필터','외관 및 기초','주변 환경/표지'];
  detailEl.innerHTML=recs.map((r,ri)=>{{
    const isAbn=r.result==='이상';
    const judge=isAbn?'<span class="br">이상</span>':'<span class="bg">정상</span>';
    const rows=cols.map((c,i)=>{{
      const v=r.vals[i]||'—';
      const abn=v==='이상'||v.includes('이상');
      return `<div style="display:flex;gap:4px;font-size:11px;"><span style="color:#6c757d;min-width:90px;">${{c}}</span><span style="color:${{abn?'#dc3545':'#333'}};font-weight:${{abn?'700':'400'}};">${{v}}</span></div>`;
    }}).join('');
    return `<div style="border:1px solid ${{isAbn?'#f5c6cb':'#B8E0CB'}};border-radius:7px;padding:10px 14px;margin-bottom:10px;background:${{isAbn?'#fff5f5':'#F0FBF5'}};">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:700;font-size:12px;color:#1A6B45;">[${{ri+1}}] ${{r.tank}} — ${{r.inspector}}</span>${{judge}}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px 20px;">${{rows}}</div>
    </div>`;
  }}).join('');
}}

function initDailyCheck() {{
  // Set today
  document.getElementById('dailyDate').value='2026-06-13';

  // Populate gas selector
  const gs=document.getElementById('dailyGas');
  gasCabinets.forEach(g=>{{
    const o=document.createElement('option'); o.value=g; o.textContent=g;
    gs.appendChild(o);
  }});

  // History filter
  const hf=document.getElementById('dailyHistFilter');
  gasCabinets.forEach(g=>{{
    const o=document.createElement('option'); o.value=g; o.textContent=g;
    hf.appendChild(o);
  }});

  // Build form
  document.getElementById('dailyFormBody').innerHTML=DAILY_ITEMS.map(buildDailyFormRow).join('');

  renderDailyHistory();
  renderDailyCalendar();
}}

// ── N2 TANK INSPECTION ───────────────────────────
const N2_ITEMS = [
  {{no:1,  name:'액면계',          desc:'저장탱크 액면/잔량 확인',                      type:'level',  unit:'%',   note:'잔량 추이 관리 (Low Level 접근 주의)'}},
  {{no:2,  name:'탱크 1차 압력',   desc:'탱크 내부 압력 확인',                          type:'number', unit:'MPa', note:'탱크 압력계 기준'}},
  {{no:3,  name:'공급 2차 압력',   desc:'Regulator 후단 공급압력 확인',                 type:'number', unit:'MPa', note:'공장 공급압 기준'}},
  {{no:4,  name:'기화기 상태',     desc:'기화기 결빙·손상·이상소음 확인',               type:'ok_ng',  unit:'',    note:'Vaporizer — 과도한 결빙·공급불량 주의'}},
  {{no:5,  name:'안전밸브/방출구', desc:'안전밸브 주변 막힘·방출 흔적 확인',            type:'ok_ng',  unit:'',    note:'방출구 방향 확인'}},
  {{no:6,  name:'배관/밸브 누설',  desc:'밸브·플랜지·연결부 누설 확인',                type:'ok_ng',  unit:'',    note:'서리·소리·압력저하 시 이상 판정'}},
  {{no:7,  name:'밸브 개폐 상태',  desc:'Main/공급/By-pass 밸브 상태 확인',             type:'ok_ng',  unit:'',    note:'운전상태와 밸브포지션 불일치 = 이상'}},
  {{no:8,  name:'차압/필터',       desc:'필터 또는 차압계 상태 확인',                   type:'dp',     unit:'kPa', note:'해당 설비 있는 경우 — 차압 상승 주의'}},
  {{no:9,  name:'외관 및 기초',    desc:'탱크 외관·도장·부식·지지대·앵커 확인',        type:'ok_ng',  unit:'',    note:'옥외 노출부 — 부식·기초균열·앵커 풀림'}},
  {{no:10, name:'주변 환경/표지',  desc:'출입통제·적치물·충돌방지대·위험표지 확인',    type:'ok_ng',  unit:'',    note:'안전거리 확보·표지 훼손·방호대 손상'}},
];

let n2Records = [
  {{date:'2026-06-10',tank:'N2-TANK-01',inspector:'강민서',vals:['82','1.42','0.52','정상','정상','정상','정상','12','정상','정상'],result:'정상'}},
  {{date:'2026-06-11',tank:'N2-TANK-01',inspector:'윤재원',vals:['78','1.41','0.51','정상','정상','정상','정상','11','정상','정상'],result:'정상'}},
  {{date:'2026-06-11',tank:'N2-TANK-02',inspector:'임하늘',vals:['65','1.38','0.50','이상','정상','정상','정상','10','정상','정상'],result:'이상'}},
  {{date:'2026-06-12',tank:'N2-TANK-01',inspector:'오승현',vals:['74','1.40','0.51','정상','정상','이상','정상','13','정상','정상'],result:'이상'}},
  {{date:'2026-06-13',tank:'N2-TANK-02',inspector:'황지민',vals:['61','1.37','0.49','정상','정상','정상','정상','11','정상','정상'],result:'정상'}},
];

function buildN2Row(item) {{
  const id='n2_'+item.no;
  let inp='';
  switch(item.type){{
    case 'level':
      inp=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${{id}}" min="0" max="100" step="0.1" placeholder="0–100"
          style="width:80px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${{item.no}})">
        <span style="font-size:11px;color:#6c757d;">%</span>
        <input type="number" id="${{id}}_L" step="1" placeholder="L"
          style="width:70px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${{item.no}})">
        <span style="font-size:11px;color:#6c757d;">L</span>
      </div>`;
      break;
    case 'number':
      inp=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${{id}}" step="0.01" placeholder="수치 입력"
          style="width:90px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${{item.no}})">
        <span style="font-size:11px;color:#6c757d;">${{item.unit}}</span>
      </div>`;
      break;
    case 'dp':
      inp=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${{id}}_num" step="0.1" placeholder="수치"
          style="width:70px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${{item.no}})">
        <span style="font-size:11px;color:#6c757d;">kPa</span>
        <select id="${{id}}" onchange="evalN2Row(${{item.no}})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>이상</option>
        </select>
      </div>`;
      break;
    case 'ok_ng':
      inp=`<select id="${{id}}" onchange="evalN2Row(${{item.no}})"
        style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
        <option value="">선택</option><option>정상</option><option>이상</option>
      </select>`;
      break;
  }}
  return `<tr id="n2row_${{item.no}}">
    <td style="text-align:center;font-weight:700;color:#1A6B45;">${{item.no}}</td>
    <td style="font-weight:600;">${{item.name}}</td>
    <td style="font-size:11px;color:#495057;">${{item.desc}}</td>
    <td>${{inp}}</td>
    <td style="text-align:center;" id="n2judge_${{item.no}}"><span style="color:#6c757d;font-size:11px;">—</span></td>
    <td><input type="text" id="n2note_${{item.no}}" placeholder="${{item.note}}"
      style="width:100%;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:11px;"></td>
  </tr>`;
}}

const N2_JUDGE_OK   = '<span style="background:#d4edda;color:#155724;font-size:10px;font-weight:700;padding:2px 7px;border-radius:6px;">정상</span>';
const N2_JUDGE_ABN  = '<span style="background:#f8d7da;color:#842029;font-size:10px;font-weight:700;padding:2px 7px;border-radius:6px;">이상</span>';

function evalN2Row(no) {{
  const item=N2_ITEMS[no-1];
  const id='n2_'+no;
  let abn=false;
  if(item.type==='ok_ng'){{
    abn=document.getElementById(id)?.value==='이상';
  }} else if(item.type==='dp'){{
    abn=document.getElementById(id)?.value==='이상';
  }} else if(item.type==='level'){{
    const v=parseFloat(document.getElementById(id)?.value);
    abn=!isNaN(v)&&v<20;
  }} else if(item.type==='number'){{
    abn=false; // just needs a value
  }}
  const cell=document.getElementById('n2judge_'+no);
  if(cell) cell.innerHTML=abn?N2_JUDGE_ABN:N2_JUDGE_OK;
  // update header badge
  let anyAbn=false;
  N2_ITEMS.forEach(it=>{{
    const v=document.getElementById('n2_'+it.no)?.value||'';
    if(v==='이상') anyAbn=true;
    if(it.type==='level'){{const lv=parseFloat(v);if(!isNaN(lv)&&lv<20)anyAbn=true;}}
  }});
}}

function clearN2Form() {{
  N2_ITEMS.forEach(item=>{{
    const el=document.getElementById('n2_'+item.no); if(el) el.value='';
    const el2=document.getElementById('n2_'+item.no+'_L'); if(el2) el2.value='';
    const el3=document.getElementById('n2_'+item.no+'_num'); if(el3) el3.value='';
    const n=document.getElementById('n2note_'+item.no); if(n) n.value='';
    const j=document.getElementById('n2judge_'+item.no);
    if(j) j.innerHTML='<span style="color:#6c757d;font-size:11px;">—</span>';
  }});
}}

function submitN2() {{
  const date=document.getElementById('n2Date').value;
  const tank=document.getElementById('n2Tank').value;
  const inspector=document.getElementById('n2Inspector').value||'미입력';
  if(!date){{ alert('날짜를 입력해주세요.'); return; }}

  let hasAbn=false;
  const vals=[];
  N2_ITEMS.forEach(item=>{{
    const id='n2_'+item.no;
    let v='';
    if(item.type==='level'){{
      const pct=document.getElementById(id)?.value||'';
      const L=document.getElementById(id+'_L')?.value||'';
      v=pct?(pct+'%'+(L?' / '+L+'L':'')):L?L+'L':'—';
      if(parseFloat(pct)<20) hasAbn=true;
    }} else if(item.type==='dp'){{
      const num=document.getElementById(id+'_num')?.value||'';
      const st=document.getElementById(id)?.value||'';
      v=(num?num+'kPa ':'')+st||'—';
      if(st==='이상') hasAbn=true;
    }} else {{
      v=document.getElementById(id)?.value||'—';
      if(v==='이상') hasAbn=true;
    }}
    vals.push(v);
  }});

  n2Records.unshift({{date,tank,inspector,vals,result:hasAbn?'이상':'정상'}});
  lsSave(LS.N2, n2Records);
  renderN2History();
  renderN2Calendar();
  clearN2Form();
  showToast('✓ '+tank+' 점검 저장 ('+(hasAbn?'이상':'정상')+')');
}}

function renderN2History() {{
  const filter=document.getElementById('n2HistFilter')?.value||'';
  const rows=filter?n2Records.filter(r=>r.tank===filter):n2Records;
  document.getElementById('n2HistCount').textContent='총 '+rows.length+'건';
  document.getElementById('n2HistBody').innerHTML=rows.map(r=>{{
    const isAbn=r.result==='이상';
    const judge=isAbn?N2_JUDGE_ABN:N2_JUDGE_OK;
    const vcells=r.vals.map((v,i)=>{{
      const abn=v==='이상'||v.includes('이상');
      return `<td style="${{abn?'color:#dc3545;font-weight:700;':''}}font-size:11px;white-space:nowrap;">${{v}}</td>`;
    }}).join('');
    return `<tr style="${{isAbn?'background:#fff5f5;':''}}">
      <td style="white-space:nowrap;">${{r.date}}</td>
      <td><span class="bb">${{r.tank}}</span></td>
      <td>${{r.inspector}}</td>
      ${{vcells}}
      <td style="text-align:center;">${{judge}}</td>
    </tr>`;
  }}).join('')||'<tr><td colspan="14" style="text-align:center;color:#6c757d;padding:20px;">점검 이력이 없습니다.</td></tr>';
}}

function initN2Check() {{
  document.getElementById('n2Date').value='2026-06-13';
  document.getElementById('n2FormBody').innerHTML=N2_ITEMS.map(buildN2Row).join('');
  renderN2History();
  renderN2Calendar();
}}

// ── Gas Detector Management ───────────────────────
let gdData = {gd_js};
// Fill placeholders for rows 11-100
for(let i=gdData.length+1;i<=100;i++){{
  gdData.push([i,'GD-'+String(i).padStart(3,'0'),'','','','','','','','',6,'','','']);
}}
let gdShowAll = false;
function toggleGDShowAll() {{
  gdShowAll=!gdShowAll;
  const btn=document.getElementById('gdShowAllBtn');
  if(btn) btn.textContent=gdShowAll?'📋 등록 감지기만 보기':'📋 전체 보기 (미등록 포함)';
  renderGDTable();
}}

function calcNextCal(lastCal, months) {{
  if(!lastCal) return '';
  const d=new Date(lastCal);
  d.setMonth(d.getMonth()+months);
  return d.toISOString().slice(0,10);
}}

function getCalStatus(nextCal, today) {{
  if(!nextCal) return {{text:'',style:'',diff:null}};
  const diff=Math.ceil((new Date(nextCal)-today)/86400000);
  if(diff<0) return {{text:'기한초과 D+'+Math.abs(diff),style:'color:#dc3545;font-weight:700;',diff}};
  if(diff<=30) return {{text:'D-'+diff,style:'color:#E8960A;font-weight:700;',diff}};
  if(diff<=90) return {{text:'D-'+diff,style:'color:#856404;',diff}};
  return {{text:'D-'+diff,style:'color:#28a745;',diff}};
}}

function gdRefreshNext(no) {{
  const d=gdData[no-1];
  const nxt=calcNextCal(d[11],d[10]);
  const el=document.getElementById('gdnext_'+no); if(!el) return;
  if(!nxt){{el.textContent='—';el.removeAttribute('style');return;}}
  const cs=getCalStatus(nxt,new Date('2026-06-13'));
  el.textContent=nxt+(cs.text?' ('+cs.text+')':'');
  el.style.cssText=cs.style;
  updateGDKpi();
  saveGDData();
}}

function updateGDKpi() {{
  const today=new Date('2026-06-13');
  let total=0,overdue=0,soon30=0,abnormal=0;
  gdData.forEach(d=>{{
    if(d[3]) total++;
    const nxt=calcNextCal(d[11],d[10]);
    if(nxt){{const diff=Math.ceil((new Date(nxt)-today)/86400000);if(diff<0)overdue++;else if(diff<=30)soon30++;}}
    if(d[12]==='이상') abnormal++;
  }});
  document.getElementById('gdKpiGrid').innerHTML=`
    <div class="kpi-card"><div class="kpi-label">등록 감지기</div><div class="kpi-value">${{total}}대</div><div class="kpi-sub">총 100개 슬롯</div></div>
    <div class="kpi-card ${{overdue>0?'kc-risk':'kc-ok'}}"><div class="kpi-label">교정 기한초과</div><div class="kpi-value" style="color:${{overdue>0?'#dc3545':'#28a745'}}">${{overdue}}건</div><div class="kpi-sub">즉시 교정 필요</div></div>
    <div class="kpi-card ${{soon30>0?'kc-warn':'kc-ok'}}"><div class="kpi-label">30일내 교정</div><div class="kpi-value" style="color:${{soon30>0?'#E8960A':'#28a745'}}">${{soon30}}건</div><div class="kpi-sub">예정 접근</div></div>
    <div class="kpi-card ${{abnormal>0?'kc-risk':'kc-ok'}}"><div class="kpi-label">이상 감지기</div><div class="kpi-value" style="color:${{abnormal>0?'#dc3545':'#28a745'}}">${{abnormal}}대</div><div class="kpi-sub">즉시 점검</div></div>`;
  const ob=document.getElementById('gdOverdueBadge');
  if(ob) ob.textContent=overdue>0?'⚠️ '+overdue+'건 기한초과':'✅ 교정 정상';
}}

const GD_INP = (val,idx,row,w='90px') =>
  `<input type="text" value="${{val}}" onchange="gdData[${{row}}][${{idx}}]=this.value;updateGDKpi();saveGDData();"
    style="width:${{w}};padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">`;

function renderGDRow(d, today) {{
  const no=d[0]; const nxt=calcNextCal(d[11],d[10]); const cs=getCalStatus(nxt,today);
  const ri=no-1;
  const stOpts=['','정상','점검중','교정중','이상'].map(v=>`<option ${{d[12]===v?'selected':''}} value="${{v}}">${{v||'-'}}</option>`).join('');
  return `<tr>
    <td style="text-align:center;font-weight:700;color:#003087;font-size:11px;">${{no}}</td>
    <td style="font-weight:600;font-size:11px;">${{d[1]}}</td>
    <td>${{GD_INP(d[2],2,ri,'118px')}}</td>
    <td>${{GD_INP(d[3],3,ri,'58px')}}</td>
    <td>${{GD_INP(d[4],4,ri,'70px')}}</td>
    <td>${{GD_INP(d[5],5,ri,'82px')}}</td>
    <td>${{GD_INP(d[6],6,ri,'98px')}}</td>
    <td>${{GD_INP(d[7],7,ri,'68px')}}</td>
    <td>${{GD_INP(d[8],8,ri,'72px')}}</td>
    <td>${{GD_INP(d[9],9,ri,'72px')}}</td>
    <td style="text-align:center;font-size:11px;">${{d[10]}}개월</td>
    <td><input type="date" value="${{d[11]}}" onchange="gdData[${{ri}}][11]=this.value;gdRefreshNext(${{no}});"
      style="width:105px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;"></td>
    <td id="gdnext_${{no}}" style="${{cs.style}}font-size:11px;">${{nxt?nxt+(cs.text?' ('+cs.text+')':''):'—'}}</td>
    <td><select onchange="gdData[${{ri}}][12]=this.value;updateGDKpi();saveGDData();"
      style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">
      ${{stOpts}}</select></td>
    <td>${{GD_INP(d[13],13,ri,'130px')}}</td>
  </tr>`;
}}

function renderGDTable() {{
  const today=new Date('2026-06-13');
  const fLoc=document.getElementById('gdFilterLoc')?.value||'';
  const fGas=document.getElementById('gdFilterGas')?.value||'';
  const fSt=document.getElementById('gdFilterSt')?.value||'';
  const fCal=document.getElementById('gdFilterCal')?.value||'';
  // Base: registered only unless gdShowAll
  let base = gdShowAll ? gdData : gdData.filter(d=>d[3]);
  const filtered=base.filter(d=>{{
    if(fLoc&&d[2]!==fLoc) return false;
    if(fGas&&d[3]!==fGas) return false;
    if(fSt&&d[12]!==fSt) return false;
    if(fCal){{
      const nxt=calcNextCal(d[11],d[10]); if(!nxt) return false;
      const df=Math.ceil((new Date(nxt)-today)/86400000);
      if(fCal==='overdue'&&df>=0) return false;
      if(fCal==='soon30'&&(df<0||df>30)) return false;
      if(fCal==='soon90'&&(df<0||df>90)) return false;
    }}
    return true;
  }});
  // Priority sort: 기한초과(1) → 교정예정30일(2) → 이상(3) → 정상(4) → 미등록(5)
  filtered.sort((a,b)=>{{
    const pri=d=>{{
      if(!d[3]) return 5;
      if(d[12]==='이상') return 3;
      const nxt=calcNextCal(d[11],d[10]);
      if(nxt){{const df=Math.ceil((new Date(nxt)-today)/86400000);if(df<0)return 1;if(df<=30)return 2;}}
      return 4;
    }};
    const pa=pri(a),pb=pri(b);
    return pa!==pb?pa-pb:a[0]-b[0];
  }});
  const fc=document.getElementById('gdFilterCount');
  if(fc) fc.textContent='총 '+filtered.length+'건 표시'+(gdShowAll?'':', 등록 감지기만');
  document.getElementById('gdTableBody').innerHTML=filtered.map(d=>renderGDRow(d,today)).join('');
  updateGDKpi();
}}

function initGD() {{
  const locs=[...new Set(gdData.filter(d=>d[2]).map(d=>d[2]))].sort();
  const gases=[...new Set(gdData.filter(d=>d[3]).map(d=>d[3]))].sort();
  const lSel=document.getElementById('gdFilterLoc');
  locs.forEach(l=>{{const o=document.createElement('option');o.value=l;o.textContent=l;lSel.appendChild(o);}});
  const gSel=document.getElementById('gdFilterGas');
  gases.forEach(g=>{{const o=document.createElement('option');o.value=g;o.textContent=g;gSel.appendChild(o);}});
  renderGDTable();
}}

// ── GD save helper ───────────────────────────────
function saveGDData() {{ lsSave(LS.GD, gdData); }}

// ── CONTRACTOR REPORT MANAGEMENT ─────────────────
const CONTRACTOR_WORK_TYPES=['배관공사','가스공급장치','검교정','덕트공사','유지보수','실린더 교체','폐기물 처리','전기/계장','기타'];
const CONTRACTOR_CL_Q=[
  '우리 회사가 해당 물질에 대해 유해화학물질 영업자인가?',
  '외부업체가 실제 유해화학물질 취급 업무를 수행하는가?',
  '작업 대상 물질이 유해화학물질인가?',
  '유해화학물질 취급시설 또는 유해화학물질이 통하는 설비를 작업하는가?',
  '작업 중 유해화학물질 라인을 개방하거나 분리하는가?',
  '작업 전 Purge 또는 잔류물 제거가 필요한가?',
  '작업자가 유해화학물질에 노출될 가능성이 있는가?',
  '단순 점검·전기작업이 아니라 유해화학물질 취급 행위가 포함되는가?',
  '수급인이 유해화학물질 취급 관련 교육·보호구·장비를 갖추었는가?',
  '작업 시작 전에 신고할 수 있는 일정인가?'
];
const CONT_DOC_NAMES=['유해화학물질 취급 도급신고서','신청인 주요 생산품 및 매출액 자료','도급인 주요 생산품 및 매출액 자료','수급인 주요 생산품 및 매출액 자료','도급계획서','긴급 도급 사유서','수급인 교육 이수증','도급인 유해화학물질 영업허가증','작업허가서/TBM 기록'];
const CONT_PLAN_NAMES=['작업명','작업장소','작업기간','도급사유','작업개요','대상 물질','대상 시설','예상 취급량','투입인력','수급인 보유 장비','PPE 명세','작업 전 조치','작업 중 조치','작업 후 조치','작업허가서/TBM'];
const mkContDocs=()=>CONT_DOC_NAMES.map(n=>({{name:n,needed:'확인필요',status:'미준비',link:'',note:''}}));
const mkContPlan=()=>CONT_PLAN_NAMES.map(n=>({{name:n,status:'미작성'}}));
let contractorData={contractor_js};
let contractorSelId=null;

function contBadge(val) {{
  const m={{'대상':'background:#f8d7da;color:#842029;','확인필요':'background:#FFF3CD;color:#664d03;','비대상':'background:#EEF3FA;color:#6c757d;',
    '신고완료':'background:#d4edda;color:#155724;','준비중':'background:#cce5ff;color:#004085;','미검토':'background:#EEF3FA;color:#6c757d;',
    '보완필요':'background:#f8d7da;color:#842029;','미완료':'background:#f8d7da;color:#842029;','일부완료':'background:#FFF3CD;color:#664d03;',
    '완료':'background:#d4edda;color:#155724;','해당없음':'background:#EEF3FA;color:#6c757d;',
    'Y':'background:#d4edda;color:#155724;','N':'background:#EEF3FA;color:#6c757d;'}};
  return '<span style="'+(m[val]||'background:#EEF3FA;color:#6c757d;')+'font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+( val||'—')+'</span>';
}}

function calcContractorKpi() {{
  const today=new Date('2026-06-13');
  let target=0,confirm_=0,done=0,docInc=0,urgent=0;
  contractorData.forEach(c=>{{
    if(c.reportTarget==='대상') target++;
    if(c.reportTarget==='확인필요') confirm_++;
    if(c.reportStatus==='신고완료') done++;
    if(['미완료','일부완료','확인필요'].includes(c.docStatus)&&c.reportTarget!=='비대상') docInc++;
    if(c.reportStatus!=='신고완료'&&c.workDate&&c.workDate!=='해당없음') {{
      const diff=Math.ceil((new Date(c.workDate)-today)/86400000);
      if(diff>=0&&diff<=7) urgent++;
    }}
  }});
  return {{total:contractorData.length,target,confirm_,done,docInc,urgent}};
}}

function renderContractorKpi(elId) {{
  const el=document.getElementById(elId);
  if(!el) return;
  const k=calcContractorKpi();
  el.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">총 도급업체</div><div class="kpi-value">'+k.total+'개</div><div class="kpi-sub">등록 업체 수</div></div>'
    +'<div class="kpi-card '+(k.target>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">신고 대상</div><div class="kpi-value" style="color:'+(k.target>0?'#E8960A':'#28a745')+'">'+k.target+'개</div><div class="kpi-sub">도급신고 필요</div></div>'
    +'<div class="kpi-card '+(k.confirm_>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">확인 필요</div><div class="kpi-value" style="color:'+(k.confirm_>0?'#856404':'#28a745')+'">'+k.confirm_+'개</div><div class="kpi-sub">대상 여부 미확정</div></div>'
    +'<div class="kpi-card '+(k.done>0?'kc-ok':'')+'"><div class="kpi-label">신고 완료</div><div class="kpi-value" style="color:'+(k.done>0?'#28a745':'#6c757d')+'">'+k.done+'건</div><div class="kpi-sub">신고 접수 완료</div></div>'
    +'<div class="kpi-card '+(k.docInc>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">서류 미완료</div><div class="kpi-value" style="color:'+(k.docInc>0?'#E8960A':'#28a745')+'">'+k.docInc+'건</div><div class="kpi-sub">제출서류 준비 중</div></div>'
    +'<div class="kpi-card '+(k.urgent>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">작업 임박</div><div class="kpi-value" style="color:'+(k.urgent>0?'#dc3545':'#28a745')+'">'+k.urgent+'건</div><div class="kpi-sub">D-7 이내 미완료</div></div>';
}}

function renderContractorTable() {{
  const el=document.getElementById('contractorTableBody');
  if(!el) return;
  const today=new Date('2026-06-13');
  el.innerHTML=contractorData.map(function(c) {{
    const diff=c.workDate&&c.workDate!=='해당없음'?Math.ceil((new Date(c.workDate)-today)/86400000):null;
    const wdSt=diff!==null&&diff<=7&&diff>=0&&c.reportStatus!=='신고완료'?'color:#dc3545;font-weight:700;':'';
    return '<tr style="cursor:pointer;'+(contractorSelId===c.id?'background:#EEF3FA;':'')+'" onclick="showContractorDetail(\\''+c.id+'\\')" data-cid="'+c.id+'">'
      +'<td style="font-weight:700;color:#003087;font-size:11px;">'+c.id+'</td>'
      +'<td style="font-weight:600;">'+c.name+'</td>'
      +'<td style="font-size:11px;">'+c.workType+'</td>'
      +'<td style="font-size:11px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;" title="'+c.workDesc+'">'+c.workDesc+'</td>'
      +'<td style="font-size:11px;">'+c.material+'</td>'
      +'<td style="text-align:center;">'+contBadge(c.handlesChem)+'</td>'
      +'<td style="text-align:center;">'+contBadge(c.reportTarget)+'</td>'
      +'<td style="text-align:center;">'+contBadge(c.reportStatus)+'</td>'
      +'<td style="font-size:11px;'+wdSt+'">'+( c.workDate||'—')+'</td>'
      +'<td style="text-align:center;">'+contBadge(c.docStatus)+'</td>'
      +'<td style="text-align:center;"><button onclick="event.stopPropagation();showContractorDetail(\\''+c.id+'\\')" style="background:#EEF3FA;border:1px solid #C8D8F0;color:#003087;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;cursor:pointer;">상세</button></td>'
      +'</tr>';
  }}).join('')||'<tr><td colspan="11" style="text-align:center;color:#6c757d;padding:20px;">등록된 도급업체가 없습니다.</td></tr>';
  const tc=document.getElementById('contractorTableCount');
  if(tc) tc.textContent='총 '+contractorData.length+'개 업체';
  renderContractorKpi('contractorKpi');
}}

function calcDocStatus(c) {{
  if(c.reportTarget==='비대상') return '해당없음';
  const needed=c.docs.filter(function(d){{return d.needed==='필요';}});
  if(!needed.length) return '해당없음';
  if(needed.some(function(d){{return d.status==='확인필요';}})) return '확인필요';
  if(needed.every(function(d){{return d.status==='완료'||d.status==='해당없음';}})) return '완료';
  if(needed.some(function(d){{return d.status==='완료';}})) return '일부완료';
  return '미완료';
}}

function clAutoJudge(cl) {{
  if(!cl||!cl.length) return '판단 불가';
  if(cl[0]==='N') return '비대상 가능성 높음';
  if(cl.some(function(v){{return v==='확인필요';}})) return '확인필요';
  if(cl[0]==='Y'&&cl[1]==='Y'&&cl[2]==='Y'&&cl[3]==='Y') return '대상 가능성 높음';
  if(cl[4]==='Y'||cl[5]==='Y'||cl[6]==='Y') return '대상 또는 확인필요';
  return '최종 판단은 담당자 검토 필요';
}}

function contFRow(lbl,content) {{
  return '<div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:center;margin-bottom:6px;">'
    +'<span style="font-size:11px;color:#7A96C0;font-weight:600;">'+lbl+'</span>'+content+'</div>';
}}
function contInp(id,fld,val,ph) {{
  return '<input type="text" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updCont(\\''+id+'\\',\\''+fld+'\\',this.value)" style="width:100%;padding:4px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">';
}}
function contSel(id,fld,val,opts) {{
  return '<select onchange="updCont(\\''+id+'\\',\\''+fld+'\\',this.value)" style="width:100%;padding:4px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">'+opts.map(function(o){{return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}}).join('')+'</select>';
}}
function contDate(id,fld,val) {{
  return '<input type="date" value="'+(val&&val!=='해당없음'?val:'')+'" onchange="updCont(\\''+id+'\\',\\''+fld+'\\',this.value)" style="width:100%;padding:4px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">';
}}

function showContractorDetail(id) {{
  contractorSelId=id;
  const c=contractorData.find(function(x){{return x.id===id;}});
  if(!c) return;
  renderContractorTable();
  const panel=document.getElementById('contractorDetailPanel');
  if(!panel) return;
  panel.style.display='block';
  const judge=clAutoJudge(c.checklist||[]);
  const judgeClr=judge==='대상 가능성 높음'?'#dc3545':judge==='비대상 가능성 높음'?'#28a745':judge==='확인필요'?'#E8960A':'#6c757d';

  // Checklist
  const clHtml=CONTRACTOR_CL_Q.map(function(q,i) {{
    const val=(c.checklist||[])[i]||'확인필요';
    const s=['Y','N','확인필요'].map(function(v){{return '<option'+(val===v?' selected':'')+'>'+v+'</option>';}}).join('');
    return '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid #F0F4FA;font-size:11px;">'
      +'<span style="min-width:16px;text-align:center;font-weight:700;color:#7A96C0;">'+(i+1)+'</span>'
      +'<span style="flex:1;">'+q+'</span>'
      +'<select onchange="updContCL(\\''+id+'\\','+i+',this.value)" style="width:80px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+s+'</select></div>';
  }}).join('');

  // Docs
  const docsHtml=c.docs.map(function(d,i) {{
    const nS=['필요','불필요','확인필요'].map(function(v){{return '<option'+(d.needed===v?' selected':'')+'>'+v+'</option>';}}).join('');
    const stS=['미준비','준비중','완료','해당없음'].map(function(v){{return '<option'+(d.status===v?' selected':'')+'>'+v+'</option>';}}).join('');
    return '<tr><td style="font-size:11px;">'+d.name+'</td>'
      +'<td><select onchange="updContDoc(\\''+id+'\\','+i+',\\'needed\\',this.value)" style="width:72px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+nS+'</select></td>'
      +'<td><select onchange="updContDoc(\\''+id+'\\','+i+',\\'status\\',this.value)" style="width:72px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+stS+'</select></td>'
      +'<td><input type="text" value="'+(d.link||'')+'" onchange="updContDoc(\\''+id+'\\','+i+',\\'link\\',this.value)" placeholder="URL" style="width:130px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;"></td>'
      +'<td><input type="text" value="'+(d.note||'')+'" onchange="updContDoc(\\''+id+'\\','+i+',\\'note\\',this.value)" style="width:110px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;"></td>'
      +'</tr>';
  }}).join('');

  // Plan items
  const planHtml=c.planItems.map(function(p,i) {{
    const stS=['미작성','작성중','완료','해당없음'].map(function(v){{return '<option'+(p.status===v?' selected':'')+'>'+v+'</option>';}}).join('');
    return '<div style="display:flex;align-items:center;gap:8px;padding:3px 0;border-bottom:1px solid #F0F4FA;font-size:11px;">'
      +'<span style="flex:1;">'+p.name+'</span>'
      +'<select onchange="updContPlan(\\''+id+'\\','+i+',this.value)" style="width:80px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+stS+'</select></div>';
  }}).join('');

  const delBtn='<button onclick="deleteContractor(\\''+id+'\\')" '+(isAdminMode?'':'disabled')+' style="background:'+(isAdminMode?'#dc3545':'#EEF3FA')+';color:'+(isAdminMode?'white':'#9AB0C8')+';border:none;padding:5px 12px;border-radius:5px;font-size:11px;font-weight:600;cursor:'+(isAdminMode?'pointer':'default')+';">삭제</button>';
  const closeBtn='<button onclick="document.getElementById(\\'contractorDetailPanel\\').style.display=\\'none\\';contractorSelId=null;renderContractorTable();" style="background:#EEF3FA;color:#6c757d;border:1px solid #C8D8F0;padding:5px 12px;border-radius:5px;font-size:11px;cursor:pointer;">닫기</button>';

  const secH='font-size:12px;font-weight:700;color:#003087;margin-bottom:8px;border-bottom:1px solid #C8D8F0;padding-bottom:4px;';
  panel.innerHTML=
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;border-bottom:2px solid #003087;padding-bottom:8px;">'
    +'<div style="font-size:14px;font-weight:800;color:#003087;">'+c.id+' — '+c.name+'</div>'
    +'<div style="display:flex;gap:8px;">'+delBtn+closeBtn+'</div></div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:12px;">'
    +'<div><div style="'+secH+'">기본 정보</div>'
      +contFRow('업체ID', contInp(id,'id',c.id,'C-000'))
      +contFRow('도급업체명', contInp(id,'name',c.name,'업체명'))
      +contFRow('작업구분', contSel(id,'workType',c.workType,CONTRACTOR_WORK_TYPES))
      +contFRow('주요 작업내용', contInp(id,'workDesc',c.workDesc,'작업 내용 입력'))
      +contFRow('대상물질', contInp(id,'material',c.material,'예: NH3'))
      +contFRow('대상시설', contInp(id,'facility',c.facility,'예: NH3 VMB'))
    +'</div>'
    +'<div><div style="'+secH+'">신고 현황</div>'
      +contFRow('취급 여부', contSel(id,'handlesChem',c.handlesChem,['Y','N','확인필요']))
      +contFRow('신고 대상', contSel(id,'reportTarget',c.reportTarget,['대상','비대상','확인필요']))
      +contFRow('판단 사유', contInp(id,'reportReason',c.reportReason,'판단 근거 입력'))
      +contFRow('신고 상태', contSel(id,'reportStatus',c.reportStatus,['미검토','준비중','신고완료','비대상','보완필요']))
      +contFRow('작업예정일', contDate(id,'workDate',c.workDate))
      +contFRow('신고예정일', contDate(id,'reportDate',c.reportDate))
      +contFRow('접수번호', contInp(id,'receiptNo',c.receiptNo,'접수번호'))
      +contFRow('증빙링크', contInp(id,'docLink',c.docLink,'URL'))
      +contFRow('비고', contInp(id,'remarks',c.remarks,'비고'))
    +'</div></div>'
    +'<details style="margin-bottom:10px;">'
    +'<summary style="cursor:pointer;font-size:12px;font-weight:700;color:#003087;padding:6px 0;border-bottom:1px solid #EEF3FA;user-select:none;">대상성 판단 체크리스트'
      +'<span style="margin-left:10px;font-size:11px;color:'+judgeClr+';font-weight:700;">[자동판단: '+judge+']</span>'
      +'<span style="font-size:10px;color:#9AB0C8;margin-left:8px;">최종 판단은 담당자 검토 필요</span>'
    +'</summary>'
    +'<div id="clBox_'+id+'" style="padding:6px 0;">'+clHtml+'</div></details>'
    +'<details style="margin-bottom:10px;">'
    +'<summary style="cursor:pointer;font-size:12px;font-weight:700;color:#003087;padding:6px 0;border-bottom:1px solid #EEF3FA;user-select:none;">주요 제출서류 '+contBadge(c.docStatus)+'</summary>'
    +'<div style="overflow-x:auto;padding-top:6px;"><table class="dtable" style="min-width:600px;font-size:11px;">'
    +'<thead><tr><th>서류명</th><th>필요여부</th><th>준비상태</th><th>증빙링크</th><th>비고</th></tr></thead>'
    +'<tbody>'+docsHtml+'</tbody></table></div></details>'
    +'<details>'
    +'<summary style="cursor:pointer;font-size:12px;font-weight:700;color:#003087;padding:6px 0;border-bottom:1px solid #EEF3FA;user-select:none;">도급계획서 세부 점검</summary>'
    +'<div id="planBox_'+id+'" style="padding:6px 0;">'+planHtml+'</div></details>';
}}

function updCont(id,field,val) {{
  const c=contractorData.find(function(x){{return x.id===id;}});
  if(!c) return;
  c[field]=val;
  if(field==='reportTarget') {{ c.docStatus=calcDocStatus(c); renderContractorTable(); }}
  renderContractorKpi('contractorKpi');
}}
function updContCL(id,idx,val) {{
  const c=contractorData.find(function(x){{return x.id===id;}});
  if(!c||!c.checklist) return;
  c.checklist[idx]=val;
  const judge=clAutoJudge(c.checklist);
  const judgeClr=judge==='대상 가능성 높음'?'#dc3545':judge==='비대상 가능성 높음'?'#28a745':judge==='확인필요'?'#E8960A':'#6c757d';
  const sm=document.querySelector('#contractorDetailPanel details:first-of-type summary');
  if(sm) {{
    const spans=sm.querySelectorAll('span');
    if(spans[0]) {{spans[0].textContent='[자동판단: '+judge+']'; spans[0].style.color=judgeClr;}}
  }}
}}
function updContDoc(id,idx,field,val) {{
  const c=contractorData.find(function(x){{return x.id===id;}});
  if(!c||!c.docs) return;
  c.docs[idx][field]=val;
  c.docStatus=calcDocStatus(c);
  renderContractorKpi('contractorKpi');
  renderContractorTable();
}}
function updContPlan(id,idx,val) {{
  const c=contractorData.find(function(x){{return x.id===id;}});
  if(!c||!c.planItems) return;
  c.planItems[idx].status=val;
}}
function addNewContractor() {{
  if(!isAdminMode) return;
  const nextNum=contractorData.length+1;
  const nid='C-'+String(nextNum).padStart(3,'0');
  contractorData.push({{
    id:nid,name:'새 도급업체 '+nextNum,workType:'기타',workDesc:'',material:'',facility:'',
    handlesChem:'확인필요',reportTarget:'확인필요',reportReason:'',reportStatus:'미검토',
    workDate:'',reportDate:'',docStatus:'확인필요',receiptNo:'',docLink:'',remarks:'',
    checklist:Array(10).fill('확인필요'),docs:mkContDocs(),planItems:mkContPlan()
  }});
  renderContractorTable();
  showContractorDetail(nid);
  saveContractorData_();
}}
function deleteContractor(id) {{
  if(!isAdminMode) return;
  if(!confirm('이 도급업체를 삭제하시겠습니까?')) return;
  contractorData=contractorData.filter(function(c){{return c.id!==id;}});
  contractorSelId=null;
  document.getElementById('contractorDetailPanel').style.display='none';
  renderContractorTable();
  saveContractorData_();
  showToast('도급업체가 삭제되었습니다.');
}}
function saveContractorData_() {{
  lsSave(LS.CONTRACTOR, contractorData);
}}
function saveContractorSection() {{
  saveContractorData_();
  const now=new Date();
  const ts=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  const el=document.getElementById('contLastSaved');
  if(el) el.textContent=ts;
  initRisk();
  initHome();
  initSummary();
  showToast('도급신고 데이터가 저장되었습니다.');
}}
function contRiskClick(cid) {{
  gpDirect('contractor');
  setTimeout(function(){{
    showContractorDetail(cid);
    const panel=document.getElementById('contractorDetailPanel');
    if(panel) panel.scrollIntoView({{behavior:'smooth'}});
  }},100);
}}
function initContractor() {{
  renderContractorTable();
  renderContractorKpi('contractorKpi');
}}

// ── Bootstrap ─────────────────────────────────────
initSummary();
initHome();
initEdit();
initEdu();
initChem();
initInsp();
initRisk();
initDailyCheck();
initN2Check();
initGD();
initContractor();
loadSavedData();
setAdminMode(false);
</script>

<!-- ADMIN PASSWORD MODAL -->
<div id="adminModal" style="display:none;position:fixed;inset:0;background:rgba(0,48,135,0.45);z-index:9999;align-items:center;justify-content:center;">
  <div style="background:white;border-radius:12px;padding:28px 32px;min-width:340px;box-shadow:0 8px 40px rgba(0,48,135,0.22);">
    <div style="font-size:16px;font-weight:800;color:#003087;margin-bottom:6px;">🔒 관리자 인증</div>
    <div style="font-size:12px;color:#7A96C0;margin-bottom:18px;">MVP 편집 방지 모드입니다. 비밀번호를 입력하세요.<br>
      <span style="font-size:10px;color:#9AB0C8;">실제 운영 시 Firebase / 사내 SSO 인증으로 교체 예정</span>
    </div>
    <input id="adminPwInput" type="password" placeholder="비밀번호 입력"
      onkeydown="if(event.key==='Enter')confirmAdmin()"
      style="width:100%;padding:10px 12px;border:1.5px solid #C8D8F0;border-radius:7px;font-size:13px;box-sizing:border-box;outline:none;margin-bottom:8px;">
    <div id="adminPwErr" style="font-size:11px;color:#dc3545;min-height:16px;margin-bottom:10px;"></div>
    <div style="display:flex;gap:10px;justify-content:flex-end;">
      <button onclick="closeAdminModal()" style="background:#EEF3FA;color:#4A6A9A;border:1px solid #C8D8F0;padding:8px 18px;border-radius:6px;font-size:12px;font-weight:600;cursor:pointer;">취소</button>
      <button onclick="confirmAdmin()" style="background:#003087;color:white;border:none;padding:8px 22px;border-radius:6px;font-size:12px;font-weight:700;cursor:pointer;">확인</button>
    </div>
  </div>
</div>

</body>
</html>"""

import os, re, shutil

# ── Output: split into index.html + assets/css/style.css + assets/js/app.js ──
OUT_DIR = 'C:/Noahsmart/dashboard/chemical-dashboard'
os.makedirs(f'{OUT_DIR}/assets/css', exist_ok=True)
os.makedirs(f'{OUT_DIR}/assets/js', exist_ok=True)
os.makedirs(f'{OUT_DIR}/assets/images', exist_ok=True)
os.makedirs(f'{OUT_DIR}/docs', exist_ok=True)

# Copy logo PNG
logo_src = 'C:/Noahsmart/dashboard/chemical-dashboard-mvp/assets/ulvac_logo.png'
logo_dst = f'{OUT_DIR}/assets/images/ulvac-logo.png'
if os.path.exists(logo_src):
    shutil.copy2(logo_src, logo_dst)

# Extract CSS (between <style> and </style>)
m_css = re.search(r'<style>(.*?)</style>', html, re.DOTALL)
css_content = m_css.group(1) if m_css else ''

# Extract JS (between last <script> without src= and </script>)
m_js = re.search(r'<script>(?!.*src=)(.*?)</script>', html, re.DOTALL)
js_content = m_js.group(1) if m_js else ''

# Build index.html (replace inline style/script with external links)
index_html = html
# Replace <style>...</style> with link tag
index_html = re.sub(r'<style>.*?</style>', '<link rel="stylesheet" href="assets/css/style.css">', index_html, flags=re.DOTALL)
# Replace inline <script>...</script> (the app script, not CDN) with external ref
index_html = re.sub(r'<script>(?!.*src=).*?</script>', '<script src="assets/js/app.js"></script>', index_html, flags=re.DOTALL)

# Write files
with open(f'{OUT_DIR}/index.html', 'w', encoding='utf-8') as f: f.write(index_html)
with open(f'{OUT_DIR}/assets/css/style.css', 'w', encoding='utf-8') as f: f.write(css_content)
with open(f'{OUT_DIR}/assets/js/app.js', 'w', encoding='utf-8') as f: f.write(js_content)

# Also keep the old MVP file updated
old_out = 'C:/Noahsmart/dashboard/chemical-dashboard-mvp/dashboard.html'
with open(old_out, 'w', encoding='utf-8') as f: f.write(html)

# ── README.md ──────────────────────────────────────
readme = """# AX 기반 유해화학물질 관리 대시보드 MVP

**회사명**: 한국알박 테크놀로지센터 / ULVAC Korea Technology Center
**목적**: 유해화학물질 관리 대시보드 MVP (운영회의 검토용)

---

## 주요 기능

| 기능 | 설명 |
|---|---|
| 대시보드 홈 | KPI 카드, 리스크 알림, 교육/보관 현황 요약 |
| 현황 요약 | 전체 관리 항목 한눈에 보기 |
| 교육관리 | 종사자교육 / 취급자교육 이수 현황 |
| 화학물질 입출고 | 가스 실린더 및 화학물질 입고·출고·재고 이력 |
| 화학물질 일일점검 | 고압가스점검 / 옥외질소탱크점검 |
| 고압가스점검 달력 조회 | 점검 이력 달력형 조회 (날짜 클릭 → 상세) |
| 옥외질소탱크점검 달력 조회 | 점검 이력 달력형 조회 |
| 정기검사 | 유해화학물질 / 고압가스 정기검사 현황 |
| 가스감지기 관리 | 100슬롯 감지기 교정 관리 |
| 리스크 알림 | D-day 기반 자동 리스크 분류 |
| 데이터 편집 | ADMIN 모드에서 수치 직접 입력 |
| ADMIN 편집 모드 | 비밀번호 인증 후 편집 활성화 |
| localStorage 저장 | 브라우저 새로고침 후에도 데이터 유지 |
| 모바일 반응형 UI | PC / 태블릿 / 모바일 모두 지원 |

---

## 사용 기술

- HTML5
- CSS3 (반응형, Flexbox/Grid)
- JavaScript (ES6+)
- Chart.js v4.4.0
- localStorage
- GitHub Pages

---

## 파일 구조

```
chemical-dashboard/
├─ index.html           ← 메인 진입 파일
├─ README.md
├─ assets/
│  ├─ css/
│  │  └─ style.css     ← 스타일시트 (반응형 포함)
│  ├─ js/
│  │  └─ app.js        ← 모든 JavaScript 로직
│  └─ images/
│     └─ ulvac-logo.png
└─ docs/
   └─ deployment-guide.md
```

---

## GitHub Pages 배포 방법

1. GitHub 저장소 생성 (예: `chemical-dashboard`)
2. 이 폴더(`chemical-dashboard/`) 내 파일 전체를 저장소 루트에 업로드
3. **Settings → Pages → Source**: `Deploy from a branch`
4. **Branch**: `main` / **Folder**: `/ (root)` 선택 → **Save**
5. 배포 완료 후 URL 확인: `https://사용자명.github.io/chemical-dashboard/`

자세한 절차는 `docs/deployment-guide.md` 참고

---

## 기본 사용 방법

1. `index.html` 파일을 브라우저로 열거나 GitHub Pages URL로 접속
2. 좌측 메뉴에서 원하는 화면 선택
3. **데이터 편집** 화면에서 ADMIN 버튼 클릭 → 비밀번호 입력 후 수치 수정 가능
4. 수정 후 각 섹션 저장 버튼 또는 하단 **전체 저장** 버튼으로 저장
5. 저장 데이터는 브라우저 localStorage에 보관 → 새로고침 후에도 유지

> 모바일에서는 좌상단 ☰ 버튼으로 메뉴를 열고 닫을 수 있습니다.

---

## 향후 확장 가능 사항

- Firebase 또는 DB 연동으로 데이터 영속성 확보
- 사용자 로그인 인증 (Firebase Auth / 사내 SSO)
- 관리자 / 조회자 권한 분리
- 데이터 변경 이력 관리
- 파일 업로드 및 증빙자료 관리
- 모바일 PWA 전환
- GitHub Pages가 아닌 사내 서버(IIS 등) 배포
"""

with open(f'{OUT_DIR}/README.md', 'w', encoding='utf-8') as f: f.write(readme)

# ── docs/deployment-guide.md ───────────────────────
guide = """# GitHub Pages 배포 가이드

## 1. 사전 준비

- GitHub 계정 필요
- 인터넷 브라우저 (Chrome, Edge, Safari 등)

---

## 2. 저장소 생성

1. [github.com](https://github.com) 로그인
2. 우측 상단 **+** → **New repository**
3. Repository name 입력 (예: `chemical-dashboard`)
4. **Public** 선택 (GitHub Pages 무료 사용 조건)
5. **Create repository** 클릭

---

## 3. 파일 업로드

### 방법 A: GitHub 웹 인터페이스

1. 저장소 페이지에서 **uploading an existing file** 클릭
2. `chemical-dashboard/` 폴더 내 전체 파일 드래그 앤 드롭
3. **Commit changes** 클릭

### 방법 B: Git CLI

```bash
cd chemical-dashboard
git init
git add .
git commit -m "Initial deploy"
git remote add origin https://github.com/사용자명/chemical-dashboard.git
git push -u origin main
```

---

## 4. GitHub Pages 설정

1. 저장소 → **Settings** 탭
2. 좌측 메뉴 → **Pages**
3. **Source**: `Deploy from a branch`
4. **Branch**: `main` 선택
5. **Folder**: `/ (root)` 선택
6. **Save** 클릭
7. 배포까지 1~3분 대기

---

## 5. 접속 확인

- PC 브라우저: `https://사용자명.github.io/저장소명/`
- 모바일 브라우저: 동일 URL 접속
- 좌상단 ☰ 버튼으로 모바일 메뉴 열고 닫기

---

## 6. 주요 점검 항목

| 항목 | 확인 방법 |
|---|---|
| index.html 정상 표시 | URL 접속 후 대시보드 홈 확인 |
| 로고 표시 | 상단 ULVAC 로고 확인 |
| 모바일 메뉴 | 모바일에서 ☰ 버튼 동작 확인 |
| localStorage | 데이터 편집 후 새로고침 시 유지 확인 |
| 달력 | 화학물질 일일점검 → 달력 탭 확인 |
| ADMIN 모드 | 데이터 편집 → ADMIN 버튼 → 비밀번호 입력 |

---

## 7. 로컬 파일로 열기

GitHub 없이 로컬에서 바로 열 수 있습니다:
- `index.html` 파일을 더블클릭 (Chrome/Edge 권장)
- `assets/` 폴더가 같은 위치에 있어야 합니다
- localStorage는 브라우저 파일 열기 시에도 동작합니다

---

## 8. 빌드 (개발자용)

데이터나 화면을 수정하려면:
1. `gen_html.py` 파일 수정
2. `python gen_html.py` 실행
3. `chemical-dashboard/` 폴더 내용을 GitHub에 다시 업로드
"""

with open(f'{OUT_DIR}/docs/deployment-guide.md', 'w', encoding='utf-8') as f: f.write(guide)

# Root index.html redirect (for GitHub Pages served from repo root)
root_redirect = """<!DOCTYPE html>
<html><head>
<meta charset="UTF-8">
<meta http-equiv="refresh" content="0;url=chemical-dashboard/">
<title>AX 유해화학물질 관리 대시보드</title>
</head><body>
<script>window.location.href='chemical-dashboard/';</script>
</body></html>"""
with open('C:/Noahsmart/dashboard/index.html', 'w', encoding='utf-8') as f: f.write(root_redirect)

total = len(index_html)
print(f'OK: index.html {total:,} chars')
print(f'    assets/css/style.css {len(css_content):,} chars')
print(f'    assets/js/app.js {len(js_content):,} chars')
print(f'-> {OUT_DIR}/')

# ── Auto-push to GitHub ──────────────────────────────────────────
import subprocess, datetime, os as _os

_REPO_DIR = 'C:/Noahsmart/dashboard'
_GIT_FLAG = _os.path.join(_REPO_DIR, '.git')

if not _os.path.isdir(_GIT_FLAG):
    print('\n[GitHub] git 저장소가 초기화되지 않았습니다.')
    print('         setup_git.bat 을 먼저 실행하세요.')
else:
    def _run(cmd, **kw):
        return subprocess.run(cmd, cwd=_REPO_DIR, capture_output=True, text=True, **kw)

    print('\n[GitHub] 변경사항 감지 중...')
    status = _run(['git', 'status', '--porcelain'])
    if not status.stdout.strip():
        print('[GitHub] 변경사항 없음 — push 생략')
    else:
        ts = datetime.datetime.now().strftime('%Y-%m-%d %H:%M')
        msg = f'auto: dashboard build {ts}'
        cmds = [
            ['git', 'add', '-A'],
            ['git', 'commit', '-m', msg],
            ['git', 'push', 'origin', 'main'],
        ]
        ok = True
        for cmd in cmds:
            r = _run(cmd)
            if r.returncode != 0:
                print(f'[GitHub] 오류: {" ".join(cmd[1:])}')
                print(r.stderr.strip()[:300])
                ok = False
                break
        if ok:
            print(f'[GitHub] push 완료: {msg}')
