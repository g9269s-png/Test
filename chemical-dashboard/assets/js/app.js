
// ── App data ──────────────────────────────────────
const D = {
  workers: [{"n": "김하늘", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "이현우", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "박다은", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "최태양", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "정도윤", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "강현서", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "윤지수", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "임동현", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "오재원", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "황지민", "c": "한국알박", "d": "ATI", "s": "이수", "dt": "2026-03-15"}, {"n": "신준혁", "c": "한국알박", "d": "ATI", "s": "미이수", "dt": "-"}, {"n": "조소희", "c": "한국알박", "d": "ATI", "s": "미이수", "dt": "-"}, {"n": "한민지", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "류민아", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "문서준", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "배서연", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "노민서", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "심승현", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "전예린", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "권성훈", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-03-15"}, {"n": "장가은", "c": "한국알박", "d": "기술기획파트", "s": "미이수", "dt": "-"}, {"n": "홍준서", "c": "한국알박", "d": "기술기획파트", "s": "미이수", "dt": "-"}, {"n": "남지호", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "유민준", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "안유진", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "김하늘", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "이현우", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "박다은", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "최태양", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "정도윤", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "강현서", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "윤지수", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "임동현", "c": "한국알박", "d": "개발1실", "s": "이수", "dt": "2026-03-15"}, {"n": "오재원", "c": "한국알박", "d": "개발1실", "s": "미이수", "dt": "-"}, {"n": "황지민", "c": "한국알박", "d": "개발1실", "s": "미이수", "dt": "-"}, {"n": "신준혁", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "조소희", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "한민지", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "류민아", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "문서준", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "배서연", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "노민서", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "심승현", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "전예린", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-03-15"}, {"n": "권성훈", "c": "한국알박", "d": "개발2실", "s": "미이수", "dt": "-"}, {"n": "장가은", "c": "한국알박", "d": "개발2실", "s": "미이수", "dt": "-"}, {"n": "홍준서", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "남지호", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "유민준", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "안유진", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "김하늘", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "이현우", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "박다은", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "최태양", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "정도윤", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "강현서", "c": "한국알박", "d": "개발3실", "s": "이수", "dt": "2026-03-15"}, {"n": "윤지수", "c": "한국알박", "d": "개발3실", "s": "미이수", "dt": "-"}, {"n": "임동현", "c": "한국알박", "d": "개발3실", "s": "미이수", "dt": "-"}, {"n": "오재원", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "황지민", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "신준혁", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "조소희", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "한민지", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "류민아", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "문서준", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "배서연", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "노민서", "c": "한국알박", "d": "개발4실", "s": "이수", "dt": "2026-03-15"}, {"n": "심승현", "c": "한국알박", "d": "개발4실", "s": "미이수", "dt": "-"}, {"n": "전예린", "c": "한국알박", "d": "개발4실", "s": "미이수", "dt": "-"}, {"n": "권성훈", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "장가은", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "홍준서", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "남지호", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "유민준", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "안유진", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "김하늘", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "이현우", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "박다은", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "최태양", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "정도윤", "c": "한국알박", "d": "개발5실", "s": "이수", "dt": "2026-03-15"}, {"n": "강현서", "c": "한국알박", "d": "개발5실", "s": "미이수", "dt": "-"}, {"n": "윤지수", "c": "한국알박", "d": "개발5실", "s": "미이수", "dt": "-"}, {"n": "임동현", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "오재원", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "황지민", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "신준혁", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "조소희", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "한민지", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "류민아", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "문서준", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "배서연", "c": "한국알박", "d": "개발6실", "s": "이수", "dt": "2026-03-15"}, {"n": "노민서", "c": "한국알박", "d": "개발6실", "s": "미이수", "dt": "-"}, {"n": "심승현", "c": "ULVAC", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "전예린", "c": "협력사", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "권성훈", "c": "한국알박", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "장가은", "c": "ULVAC", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "홍준서", "c": "협력사", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "남지호", "c": "한국알박", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "유민준", "c": "ULVAC", "d": "이외", "s": "이수", "dt": "2026-03-15"}, {"n": "안유진", "c": "협력사", "d": "이외", "s": "미이수", "dt": "-"}],
  handlers: [{"n": "김하늘", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "이현우", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "박다은", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "최태양", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "정도윤", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "강현서", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "윤지수", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "임동현", "c": "한국알박", "d": "기술기획파트", "s": "이수", "dt": "2026-04-20"}, {"n": "오재원", "c": "한국알박", "d": "기술기획파트", "s": "미이수", "dt": "-"}, {"n": "황지민", "c": "한국알박", "d": "기술기획파트", "s": "미이수", "dt": "-"}, {"n": "신준혁", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "조소희", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "한민지", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "류민아", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "문서준", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "배서연", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "노민서", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "심승현", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "전예린", "c": "한국알박", "d": "개발2실", "s": "이수", "dt": "2026-04-20"}, {"n": "권성훈", "c": "한국알박", "d": "개발2실", "s": "미이수", "dt": "-"}, {"n": "장가은", "c": "한국알박", "d": "개발2실", "s": "미이수", "dt": "-"}],
  chemicals: ["H2", "5%H2/95%He", "NH3", "NF3", "SiF4", "C3F8", "C4F8", "CF4", "CHF3", "SF6", "HF", "LO2", "LAr", "Kr", "He", "N2", "KOH"],
  stocks: [4, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 4, 5],
  hazardous: new Set(["NF3", "NH3", "SF6", "SiF4", "CF4", "HF", "C4F8", "C3F8", "KOH", "CHF3"]),
  transactions: [["H2", 2, "가스캐비닛", "입고", "2026-01-10", 4, "담당자A"], ["NH3", 2, "가스캐비닛", "입고", "2026-01-15", 3, "담당자B"], ["HF", 1, "가스캐비닛", "입고", "2026-01-20", 3, "담당자A"], ["KOH", 3, "화학물질보관소", "입고", "2026-01-25", 3, "담당자B"], ["NF3", 2, "가스캐비닛", "출고", "2026-02-05", 3, "담당자B"], ["N2", 3, "가스캐비닛", "입고", "2026-02-10", 4, "담당자A"], ["KOH", 2, "화학물질보관소", "입고", "2026-02-20", 5, "담당자A"], ["He", 2, "가스캐비닛", "입고", "2026-03-01", 3, "담당자C"], ["KOH", 1, "화학물질보관소", "출고", "2026-03-10", 4, "담당자B"], ["LAr", 1, "가스캐비닛", "출고", "2026-03-15", 3, "담당자B"], ["SF6", 2, "가스캐비닛", "입고", "2026-04-05", 3, "담당자A"], ["KOH", 2, "화학물질보관소", "입고", "2026-04-15", 6, "담당자C"], ["CF4", 1, "가스캐비닛", "입고", "2026-04-20", 3, "담당자C"], ["CHF3", 2, "가스캐비닛", "입고", "2026-05-08", 3, "담당자A"], ["KOH", 1, "화학물질보관소", "출고", "2026-05-05", 5, "담당자A"], ["Kr", 1, "가스캐비닛", "출고", "2026-05-20", 2, "담당자B"], ["LO2", 2, "가스캐비닛", "입고", "2026-06-01", 3, "담당자C"], ["KOH", 0, "화학물질보관소", "재고조사", "2026-06-13", 5, "담당자B"]],
  hazInsp: [["HI001", "ENTRON#2", "계획", "N", "", "2027-05-30"], ["HI002", "RISE#1", "계획", "N", "", "2027-05-30"], ["HI003", "RISE#2", "계획", "N", "", "2027-05-30"], ["HI004", "JENOVA", "계획", "N", "", "2027-05-30"], ["HI005", "HF 가스캐비닛", "계획", "N", "", "2026-08-10"], ["HI006", "HF VMB", "계획", "N", "", "2027-05-30"], ["HI007", "NH3 가스캐비닛", "계획", "N", "", "2026-07-20"], ["HI008", "NH3 VMB", "계획", "N", "", "2027-05-30"], ["HI009", "KOH 리사이클 시스템", "계획", "N", "", "2027-05-30"]],
  hpInsp:  [["HG001", "O2 공급시스템", "계획", "N", "", "2027-05-30"], ["HG002", "Ar 공급시스템", "계획", "N", "", "2027-05-30"], ["HG003", "NH3 가스캐비닛", "계획", "N", "", "2026-08-28"], ["HG004", "H2 가스캐비닛(2BT)", "계획", "N", "", "2026-07-05"], ["HG005", "H2 가스캐비닛(4BT)", "계획", "N", "", "2027-05-30"], ["HG006", "NF3 가스캐비닛", "계획", "N", "", "2027-05-30"], ["HG007", "5%H2/95%He 가스캐비닛", "계획", "N", "", "2027-05-30"]],
  depts: ["ATI", "기술기획파트", "개발1실", "개발2실", "개발3실", "개발4실", "개발5실", "개발6실", "이외"],
  deptTotal: [12, 10, 13, 11, 12, 11, 13, 10, 8],
  deptMiss:  [2, 2, 2, 2, 2, 2, 2, 1, 1],
  handCfg: {"기술기획파트": {"total": 10, "miss": 2}, "개발2실": {"total": 11, "miss": 2}},
};

// mutable copies
let stocks = [...D.stocks];
let hazInsp = D.hazInsp.map(r=>[...r]);
let hpInsp  = D.hpInsp.map(r=>[...r]);

// ── Mobile sidebar toggle ─────────────────────────
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('mobile-overlay').classList.toggle('open');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('mobile-overlay').classList.remove('open');
}
// Close sidebar on nav-item click (mobile)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-item').forEach(n=>{
    n.addEventListener('click', ()=>{if(window.innerWidth<=767)closeSidebar();});
  });
});

// ── Navigation ────────────────────────────────────
function toggleNavGroup(id) {
  const el=document.getElementById(id);
  if(!el) return;
  const grp=el.previousElementSibling;
  el.classList.toggle('collapsed');
  if(grp) grp.classList.toggle('collapsed');
}
function gp(id, el) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  el.classList.add('active');
}
function gpDirect(id) {
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n=>n.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n=>{
    if(n.getAttribute('onclick')&&n.getAttribute('onclick').includes("'"+id+"'")) {
      n.classList.add('active');
      const grpItems=n.closest('.nav-group-items');
      if(grpItems&&grpItems.classList.contains('collapsed')) {
        grpItems.classList.remove('collapsed');
        const grp=grpItems.previousElementSibling;
        if(grp) grp.classList.remove('collapsed');
      }
    }
  });
}
function st(e, id) {
  const par = e.target.closest('.page');
  par.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  par.querySelectorAll('.tab-content').forEach(c=>c.classList.remove('active'));
  e.target.classList.add('active');
  document.getElementById(id).classList.add('active');
  if(id==='daily-t1'){dailySelDate=null;document.querySelectorAll('#dailyCalBox [data-date]').forEach(el=>el.style.outline='');const tEl=document.getElementById('dailyDetailTitle');if(tEl)tEl.textContent='날짜를 클릭하면 이력을 조회합니다';const dEl=document.getElementById('dailyDetailBox');if(dEl)dEl.innerHTML='<div style="color:#9AB0C8;padding:28px;text-align:center;font-size:12px;">달력에서 날짜를 선택하세요.</div>';}
  if(id==='daily-t2'){n2SelDate=null;document.querySelectorAll('#n2CalBox [data-date]').forEach(el=>el.style.outline='');const tEl=document.getElementById('n2DetailTitle');if(tEl)tEl.textContent='날짜를 클릭하면 이력을 조회합니다';const dEl=document.getElementById('n2DetailBox');if(dEl)dEl.innerHTML='<div style="color:#9AB0C8;padding:28px;text-align:center;font-size:12px;">달력에서 날짜를 선택하세요.</div>';}
}

// ── Charts registry ───────────────────────────────
const charts = {};
function mkChart(id, cfg) {
  if (charts[id]) { charts[id].destroy(); }
  charts[id] = new Chart(document.getElementById(id), cfg);
  return charts[id];
}

// ── Helpers ───────────────────────────────────────
function pct(a,b){ return b>0?Math.round(a/b*100):0; }

// ── Shared UI helpers ─────────────────────────────
function badgeSt(st) {
  const m={'정상':'green','완료':'green','제출완료':'green','승인완료':'green','조치완료':'green','보유':'green','이수':'green','등록':'green',
    '예정':'blue','작성중':'blue','검토중':'blue','조치중':'blue','보관중':'blue','준비중':'blue','제출필요':'blue','검교정중':'blue',
    '확인필요':'orange','승인필요':'orange','교육필요':'orange','일부완료':'orange','만료임박':'orange','보완필요':'orange','신고필요':'orange','교정임박':'orange','개정필요':'orange',
    '기한초과':'red','미조치':'red','부적합':'red','만료':'red','조치필요':'red','재점검필요':'red','교육기한초과':'red',
    '미등록':'gray','해당없음':'gray','비대상':'gray','미보유':'gray','미선임':'gray','미이수':'gray'};
  const cls=m[st]||'gray';
  return '<span class="sb sb-'+cls+'">'+st+'</span>';
}
function tblHl(tr) {
  const tb=tr.closest('tbody');
  if(tb) tb.querySelectorAll('tr.tbl-sel').forEach(function(r){r.classList.remove('tbl-sel');});
  tr.classList.add('tbl-sel');
}
function hlText(str, kw) {
  if(!kw||!str) return String(str||'');
  str=String(str); const lo=str.toLowerCase(); const k=kw.toLowerCase(); let res='',i=0;
  while(i<str.length){
    const p=lo.indexOf(k,i);
    if(p<0){res+=str.slice(i);break;}
    res+=str.slice(i,p)+'<mark style="background:#FFF176;padding:0 2px;border-radius:2px;">'+str.slice(p,p+kw.length)+'</mark>';
    i=p+kw.length;
  }
  return res;
}

function scheduleCardHtml(item) {
  const TC = {'정기검사':{bg:'#E4EEFF',text:'#003087'},'교육':{bg:'#FFF3CD',text:'#664d03'},'교정':{bg:'#E8F5E9',text:'#1a6b45'},'도급신고':{bg:'#FFF0F0',text:'#842029'},'법정기한':{bg:'#E8F4FF',text:'#004080'},'증빙자료':{bg:'#F5F0FF',text:'#5A0099'},'MSDS':{bg:'#E0F4FF',text:'#004D80'},'SOP':{bg:'#FFF0E8',text:'#803000'},'관리대장':{bg:'#FFF0E0',text:'#804000'},'실적보고':{bg:'#E0FFE8',text:'#006620'},'자체점검':{bg:'#F0E8FF',text:'#4A0080'},'관리자':{bg:'#E8F0FF',text:'#002080'}};
  const LC = {'기한초과':{border:'#dc3545',bg:'#f8d7da',text:'#842029',icon:'🔴'},'리스크':{border:'#dc3545',bg:'#f8d7da',text:'#842029',icon:'🔴'},'확인필요':{border:'#E8960A',bg:'#FFF3CD',text:'#664d03',icon:'⚠️'},'예정':{border:'#0047B0',bg:'#E4EEFF',text:'#003087',icon:'📅'}};
  const tc=TC[item.type]||TC['정기검사'], lc=LC[item.level]||LC['예정'];
  const dT=item.days!=null?(item.days<0?'<span style="background:#f8d7da;color:#842029;font-size:9px;font-weight:700;padding:1px 6px;border-radius:5px;">D+'+ Math.abs(item.days)+'일 초과</span>':'<span style="background:#FFF3CD;color:#664d03;font-size:9px;font-weight:700;padding:1px 6px;border-radius:5px;">D-'+item.days+'일</span>'):'';
  const clickFn=item.contractorId?'contRiskClick(\''+item.contractorId+'\')':item.deadlineId?'deadlineRiskClick(\''+item.deadlineId+'\')':item.evidenceId?'evidenceRiskClick(\''+item.evidenceId+'\')':item.msdsId?'msdsRiskClick(\''+item.msdsId+'\')':item.sopId?'sopRiskClick(\''+item.sopId+'\')':null;
  const clickAttr=clickFn?('onclick="'+clickFn+'" style="cursor:pointer;border-left-color:'+lc.border+';"'):'style="border-left-color:'+lc.border+';"';
  return '<div class="risk-card" '+clickAttr+'>'
    +'<div style="display:flex;align-items:center;gap:5px;margin-bottom:4px;">'
    +'<span style="background:'+tc.bg+';color:'+tc.text+';font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+item.type+'</span>'
    +'<span style="background:'+lc.bg+';color:'+lc.text+';font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+lc.icon+' '+item.level+'</span>'
    +'<span style="margin-left:auto;">'+dT+'</span></div>'
    +'<div class="risk-title-text">'+item.title+'</div>'
    +'<div class="risk-desc">'+item.desc+'</div>'
    +(item.reason?'<div class="risk-reason">사유: '+item.reason+'</div>':'')
    +(item.contractorId?'<div style="font-size:9px;color:#9AB0C8;margin-top:3px;">↗ 클릭하면 해당 업체 상세로 이동합니다</div>':item.deadlineId?'<div style="font-size:9px;color:#9AB0C8;margin-top:3px;">↗ 클릭하면 법정기한 관리 상세로 이동합니다</div>':item.evidenceId?'<div style="font-size:9px;color:#9AB0C8;margin-top:3px;">↗ 클릭하면 증빙자료 관리 상세로 이동합니다</div>':item.msdsId?'<div style="font-size:9px;color:#9AB0C8;margin-top:3px;">↗ 클릭하면 MSDS 관리 상세로 이동합니다</div>':item.sopId?'<div style="font-size:9px;color:#9AB0C8;margin-top:3px;">↗ 클릭하면 SOP 관리 상세로 이동합니다</div>':'')
    +'</div>';
}

// ── KPI from transactions ─────────────────────────
function calcTransKpi() {
  const now = new Date('2026-06-13');
  const yr  = now.getFullYear();
  const mo  = now.getMonth()+1;
  let ain=0,aout=0,min=0,mout=0,cur=0;
  D.transactions.forEach(t=>{
    const d=new Date(t[4]); const ty=d.getFullYear(); const tm=d.getMonth()+1;
    if(ty===yr){
      if(t[3]==='입고'){ain+=t[1];if(tm===mo)min+=t[1];}
      if(t[3]==='출고'){aout+=t[1];if(tm===mo)mout+=t[1];}
    }
    if(t[3]==='재고조사')cur=t[5];
  });
  cur = stocks.reduce((a,b)=>a+b,0);
  return {ain,aout,min,mout,cur};
}

// ── Monthly trend (all chemicals) ─────────────────
function monthlyTrend() {
  const mos=['1월','2월','3월','4월','5월','6월'];
  const inArr=[0,0,0,0,0,0], outArr=[0,0,0,0,0,0];
  D.transactions.forEach(t=>{
    const d=new Date(t[4]); const m=d.getMonth();
    if(d.getFullYear()===2026 && m<6){
      if(t[3]==='입고') inArr[m]+=t[1];
      if(t[3]==='출고') outArr[m]+=t[1];
    }
  });
  return {mos,inArr,outArr};
}

// ── Gas chart sorted ──────────────────────────────
let gasAscending = false;
function sortGasChart(ctx) {
  gasAscending = !gasAscending;
  renderGasChart(ctx);
}
function renderGasChart(ctx) {
  const ids = ctx==='home' ? 'hChartGas' : 'chemGasChart';
  const pairs = D.chemicals.map((g,i)=>{return{g,s:stocks[i],hz:D.hazardous.has(g)}});
  pairs.sort((a,b)=>gasAscending ? b.s-a.s : a.s-b.s);
  const labels=pairs.map(p=>p.g), vals=pairs.map(p=>p.s);
  const colors=pairs.map(p=>p.hz?'#dc3545':'#0047B0');
  mkChart(ids,{
    type:'bar',
    data:{labels,datasets:[{label:'보관(EA/DR)',data:vals,backgroundColor:colors}]},
    options:{
      indexAxis:'y',responsive:true,maintainAspectRatio:false,
      plugins:{legend:{display:false},tooltip:{callbacks:{label:d=>'보관: '+d.raw+' EA/DR'}}},
      scales:{
        x:{grid:{color:'#f0f0f0'},title:{display:true,text:'보관량 (EA/DR)'}},
        y:{grid:{display:false}}
      }
    }
  });
}

// ── Risk / schedule list ──────────────────────────
function allRisks() {
  const list=[];
  const today=new Date('2026-06-13');
  [...hazInsp,...hpInsp].forEach(r=>{
    const planned=new Date(r[5]);
    const diff=Math.ceil((planned-today)/86400000);
    const cat=r[0].startsWith('HI')?'유해화학물질 정기검사':'고압가스 정기검사';
    let level,title,reason;
    if(diff<0){level='기한초과';title=r[1]+' — 정기검사 기한 초과';reason='검사 예정일 초과 (D+'+ Math.abs(diff)+'일)';}
    else if(diff<=30){level='리스크';title=r[1]+' — 정기검사 D-'+diff+'일 임박';reason='30일 이내 검사 예정일 도래';}
    else if(diff<=90){level='확인필요';title=r[1]+' — 정기검사 예정 (D-'+diff+'일)';reason='90일 이내 검사 일정 확인 필요';}
    else return;
    list.push({title,id:r[0],desc:cat+' | 검사 예정일: '+r[5],level,type:'정기검사',days:diff,reason});
  });
  const wt=calcWtKpi(),ht=calcHtKpi();
  const wR=pct(wt.done,wt.total),hR=pct(ht.done,ht.total);
  if(wt.miss>0) list.push({title:'종사자교육 미이수자 '+wt.miss+'명 — 교육 이수 독려',
    desc:'이수율 '+wR+'% (이수 '+wt.done+'명 / 미이수 '+wt.miss+'명 / 전체 '+wt.total+'명)',
    id:'EDU-WT',level:wR<80?'리스크':'확인필요',type:'교육',days:null,
    reason:wR<80?'이수율 80% 미만 — 리스크 기준 초과':'이수율 90% 미만 또는 미이수자 존재'});
  if(ht.miss>0) list.push({title:'취급자교육 미이수자 '+ht.miss+'명 — 기술기획파트·개발2실',
    desc:'이수율 '+hR+'% (이수 '+ht.done+'명 / 미이수 '+ht.miss+'명 / 전체 '+ht.total+'명)',
    id:'EDU-HT',level:hR<80?'리스크':'확인필요',type:'교육',days:null,
    reason:'취급자 미이수자 존재 — 즉시 이수 필요'});
  // ── Deadline risks ──
  deadlineData.forEach(d=>{
    const st=calcDeadlineStatus(d);
    const evLinked=getLinkedEvidence(d.id);
    const evRegistered=evLinked.length>0;
    const dday=calcDDay(d.dueDate);
    if(st==='초과') {
      list.push({title:'법정기한 초과: '+d.item,
        desc:d.category+' | 대상: '+d.target+' | 예정일: '+d.dueDate,
        id:'DL-OVR-'+d.id,level:'기한초과',type:'법정기한',days:dday,
        reason:'기한 초과 (D+'+ Math.abs(dday)+'일)',
        deadlineId:d.id});
    } else if(st==='임박') {
      list.push({title:'법정기한 임박: '+d.item+' D-'+dday,
        desc:d.category+' | 대상: '+d.target+' | 예정일: '+d.dueDate,
        id:'DL-SN-'+d.id,level:'확인필요',type:'법정기한',days:dday,
        reason:'30일 이내 기한 도래',
        deadlineId:d.id});
    }
    if(d.needsEvidence==='Y'&&!evRegistered&&st!=='완료') {
      list.push({title:'증빙 미등록: '+d.item,
        desc:d.category+' | 증빙 필요 항목 미등록 | 담당자: '+d.manager,
        id:'DL-EV-'+d.id,level:'확인필요',type:'법정기한',days:null,
        reason:'증빙자료 등록 필요',
        deadlineId:d.id});
    }
  });
  // ── Evidence risks ──
  evidenceData.forEach(e=>{
    const st=calcEvidenceStatus(e);
    if(st==='미등록') {
      list.push({title:'필수 증빙 미등록: '+e.docName,
        desc:e.docType+' | 관련ID: '+(e.relatedId||'미연결')+' | 담당자: '+e.manager,
        id:'EV-NR-'+e.id,level:'확인필요',type:'증빙자료',days:null,
        reason:'보관위치 및 링크 없음',
        evidenceId:e.id});
    } else if(st==='만료') {
      list.push({title:'증빙 유효기한 초과: '+e.docName,
        desc:e.docType+' | 유효기한: '+e.expireDate,
        id:'EV-EX-'+e.id,level:'기한초과',type:'증빙자료',days:null,
        reason:'유효기한 초과',
        evidenceId:e.id});
    } else if(st==='만료예정') {
      const expDiff=Math.ceil((new Date(e.expireDate)-today)/86400000);
      list.push({title:'증빙 만료 예정: '+e.docName+' D-'+expDiff,
        desc:e.docType+' | 유효기한: '+e.expireDate,
        id:'EV-SE-'+e.id,level:'확인필요',type:'증빙자료',days:expDiff,
        reason:'30일 이내 만료',
        evidenceId:e.id});
    } else if(st==='연결필요') {
      list.push({title:'관련 업무 연결 필요: '+e.docName,
        desc:e.docType+' | 관련ID 미입력',
        id:'EV-LK-'+e.id,level:'확인필요',type:'증빙자료',days:null,
        reason:'관련ID가 없어 법정기한과 연동 불가',
        evidenceId:e.id});
    }
  });
  // ── Contractor risks ──
  contractorData.forEach(c=>{
    const wd=c.workDate&&c.workDate!=='해당없음'?new Date(c.workDate):null;
    const diff=wd?Math.ceil((wd-today)/86400000):null;
    const isUrgent=diff!==null&&diff>=0&&diff<=7;
    if(c.reportTarget==='대상'&&c.reportStatus!=='신고완료') {
      if(isUrgent) {
        list.push({title:'작업예정일 임박: '+c.workDesc+' (D-'+diff+')',
          desc:c.name+' | '+c.workType+' | 신고상태: '+c.reportStatus,
          id:'CONT-URG-'+c.id,level:'리스크',type:'도급신고',days:diff,
          reason:'작업예정일 '+c.workDate+' — 도급신고 미완료',contractorId:c.id});
      } else {
        list.push({title:'도급신고 대상 업체 신고 미완료: '+c.name,
          desc:c.workType+' | '+c.workDesc+' | 신고상태: '+c.reportStatus,
          id:'CONT-'+c.id,level:'리스크',type:'도급신고',days:diff,
          reason:'도급신고 대상 업체가 신고를 완료하지 않음',contractorId:c.id});
      }
    }
    if(c.reportTarget==='확인필요') {
      list.push({title:'도급신고 대상성 확인 필요: '+c.name,
        desc:c.workType+' | '+c.workDesc,
        id:'CONT-CHK-'+c.id,level:'확인필요',type:'도급신고',days:null,
        reason:'대상성 판단 미확정 — 담당자 검토 필요',contractorId:c.id});
    }
    if(['미완료','일부완료','확인필요'].includes(c.docStatus)&&c.reportTarget!=='비대상') {
      list.push({title:'제출서류 미완료: '+c.name,
        desc:c.workType+' | 서류상태: '+c.docStatus,
        id:'CONT-DOC-'+c.id,level:c.docStatus==='미완료'?'리스크':'확인필요',type:'도급신고',days:null,
        reason:'주요 제출서류 준비 미완료',contractorId:c.id});
    }
  });
  // ── MSDS risks ──
  msdsData.forEach(m=>{
    const st=calcMsdsStatus(m);
    if(st==='미보유') {
      list.push({title:'MSDS 미보유: '+m.name, desc:'물질: '+m.name+' ('+m.nameEn+') | 담당자: '+m.manager,
        id:'MSDS-NR-'+m.id, level:'리스크', type:'MSDS', days:null, reason:'MSDS 미보유 — 즉시 확보 필요', msdsId:m.id});
    } else if(st==='확인필요') {
      list.push({title:'MSDS 확인필요: '+m.name, desc:'최신성 또는 보유 여부 미확인 | 담당자: '+m.manager,
        id:'MSDS-CHK-'+m.id, level:'확인필요', type:'MSDS', days:null, reason:'MSDS 정보 미완성', msdsId:m.id});
    } else if(st==='게시위치 미등록') {
      list.push({title:'MSDS 게시위치 미등록: '+m.name, desc:'현장 게시/비치 위치 미입력 | 담당자: '+m.manager,
        id:'MSDS-PL-'+m.id, level:'확인필요', type:'MSDS', days:null, reason:'현장 게시위치 미등록', msdsId:m.id});
    } else if(st==='교육연계 필요') {
      list.push({title:'MSDS 교육연계 필요: '+m.name, desc:'교육 자료에 물질 내용 미포함 | 담당자: '+m.manager,
        id:'MSDS-EDU-'+m.id, level:'확인필요', type:'MSDS', days:null, reason:'교육연계 미완료', msdsId:m.id});
    } else if(st==='SOP 미연계') {
      list.push({title:'MSDS SOP 미연계: '+m.name, desc:'관련 SOP 미등록 | 담당자: '+m.manager,
        id:'MSDS-SOP-'+m.id, level:'확인필요', type:'MSDS', days:null, reason:'관련 SOP ID 없음', msdsId:m.id});
    }
  });
  // ── SOP risks ──
  sopData.forEach(s=>{
    const st=calcSopStatus(s);
    if(st==='문서 미등록') {
      list.push({title:'SOP 문서 미등록: '+s.sopName, desc:'작업구분: '+s.workType+' | 담당자: '+s.manager,
        id:'SOP-NR-'+s.id, level:'확인필요', type:'SOP', days:null, reason:'증빙링크(파일위치) 없음', sopId:s.id});
    } else if(st==='승인필요') {
      list.push({title:'SOP 승인 필요: '+s.sopName, desc:'승인상태: '+s.approvalStatus+' | 담당자: '+s.manager,
        id:'SOP-APR-'+s.id, level:'확인필요', type:'SOP', days:null, reason:'승인완료 전 상태', sopId:s.id});
    } else if(st==='개정필요') {
      list.push({title:'SOP 개정기한 초과: '+s.sopName, desc:'차기검토일: '+s.nextReviewDate+' | 담당자: '+s.manager,
        id:'SOP-REV-'+s.id, level:'기한초과', type:'SOP', days:null, reason:'차기 검토일 초과', sopId:s.id});
    } else if(st==='MSDS 미연계') {
      list.push({title:'SOP MSDS 미연계: '+s.sopName, desc:'관련 MSDS 미등록 | 담당자: '+s.manager,
        id:'SOP-MSDS-'+s.id, level:'확인필요', type:'SOP', days:null, reason:'관련 MSDS ID 없음', sopId:s.id});
    } else if(st==='교육연계 필요') {
      list.push({title:'SOP 교육연계 필요: '+s.sopName, desc:'교육관리 연계 미완료 | 담당자: '+s.manager,
        id:'SOP-EDU-'+s.id, level:'확인필요', type:'SOP', days:null, reason:'교육연계 필요 상태', sopId:s.id});
    }
  });
  // ── Ledger risks ──
  ledgerData.forEach(function(d){
    if(d.status==='확인필요') {
      list.push({title:'관리대장 확인필요: '+d.chemName+' ('+d.year+'/'+d.month+')',
        desc:'분류: '+d.category+' | 담당자: '+d.manager,
        id:'LDG-CHK-'+d.id, level:'확인필요', type:'관리대장', days:null, reason:'수량 확인 또는 증빙 등록 필요'});
    } else if(d.status==='불일치') {
      list.push({title:'재고 불일치: '+d.chemName+' ('+d.year+'/'+d.month+')',
        desc:'전월재고+입고-출고 ≠ 현재재고 | 담당자: '+d.manager,
        id:'LDG-MM-'+d.id, level:'리스크', type:'관리대장', days:null, reason:'재고 수량 불일치 — 즉시 확인 필요'});
    }
    if(!d.docLinked&&d.status!=='확인필요') {
      list.push({title:'관리대장 증빙 미등록: '+d.chemName+' ('+d.year+'/'+d.month+')',
        desc:'증빙문서 링크 없음 | 담당자: '+d.manager,
        id:'LDG-EV-'+d.id, level:'확인필요', type:'관리대장', days:null, reason:'증빙자료 미등록'});
    }
  });
  // ── Performance report risks ──
  perfData.forEach(function(d){
    if(d.submitTarget!=='Y') return;
    if(d.status==='기한초과') {
      list.push({title:'실적보고 기한초과: '+d.reportType+' ('+d.period+')',
        desc:'제출기한: '+d.dueDate+' | 담당자: '+d.manager,
        id:'PERF-OVR-'+d.id, level:'기한초과', type:'실적보고', days:null, reason:'제출기한 초과 — 즉시 제출 필요'});
    } else if(d.status==='제출필요') {
      const diff=d.dueDate?Math.ceil((new Date(d.dueDate)-today)/86400000):null;
      if(diff!==null&&diff<=30) {
        list.push({title:'실적보고 제출 임박: '+d.reportType+' ('+d.period+') D-'+diff,
          desc:'제출기한: '+d.dueDate+' | 담당자: '+d.manager,
          id:'PERF-SN-'+d.id, level:'확인필요', type:'실적보고', days:diff, reason:'30일 이내 제출 기한'});
      }
    }
  });
  // ── Self-check risks ──
  selfChkData.forEach(function(d){
    if(d.result==='조치필요'&&d.actionStatus!=='조치완료') {
      const diff=d.actionDeadline?Math.ceil((new Date(d.actionDeadline)-today)/86400000):null;
      if(diff!==null&&diff<0) {
        list.push({title:'자체점검 조치기한 초과: '+d.facility,
          desc:'점검일: '+d.checkDate+' | 부적합 '+d.failItems+'건 | 조치기한: '+d.actionDeadline,
          id:'SCK-OVR-'+d.id, level:'기한초과', type:'자체점검', days:diff, reason:'조치기한 초과'});
      } else {
        list.push({title:'자체점검 조치 미완료: '+d.facility,
          desc:'점검일: '+d.checkDate+' | 부적합 '+d.failItems+'건 | 담당: '+d.inspector,
          id:'SCK-ACT-'+d.id, level:'확인필요', type:'자체점검', days:diff, reason:'부적합 항목 조치 필요'});
      }
    } else if(d.result==='확인필요'&&d.actionStatus!=='조치완료') {
      list.push({title:'자체점검 확인필요: '+d.facility,
        desc:'점검일: '+d.checkDate+' | 담당: '+d.inspector,
        id:'SCK-CHK-'+d.id, level:'확인필요', type:'자체점검', days:null, reason:'점검 결과 확인 및 조치 검토'});
    }
  });
  // ── Chemical manager risks ──
  chemMgrData.forEach(function(d){
    const st=calcChemMgrStatus(d);
    if(st==='미선임') {
      list.push({title:'유해화학물질관리자 미선임: '+d.dept,
        desc:'역할: '+d.role+' | 담당: '+d.name,
        id:'MGR-NR-'+d.id, level:'리스크', type:'관리자', days:null, reason:'관리자 미선임 — 법적 의무 위반 가능성'});
    } else if(st==='신고필요') {
      list.push({title:'선임신고 미완료: '+d.name+' ('+d.dept+')',
        desc:'선임일: '+d.appointDate+' | 역할: '+d.role,
        id:'MGR-RP-'+d.id, level:'확인필요', type:'관리자', days:null, reason:'선임 후 신고 미완료'});
    } else if(st==='교육기한초과') {
      list.push({title:'관리자 교육기한 초과: '+d.name+' ('+d.dept+')',
        desc:'차기교육: '+d.trainingDeadline+' | 역할: '+d.role,
        id:'MGR-EDU-OVR-'+d.id, level:'기한초과', type:'관리자', days:null, reason:'교육이수 기한 초과'});
    } else if(st==='교육필요') {
      list.push({title:'관리자 교육이수 필요: '+d.name+' ('+d.dept+')',
        desc:'차기교육: '+d.trainingDeadline+' | 역할: '+d.role,
        id:'MGR-EDU-'+d.id, level:'확인필요', type:'관리자', days:null, reason:'교육이수 기한 도래'});
    }
  });
  // ── Priority sort ──────────────────────────────
  list.sort(function(a,b){
    function rs(r){
      if(r.level==='기한초과'){if(r.days!==null&&r.days>=-7)return 1;return 2;}
      if(r.level==='리스크'){
        if(r.days!==null&&r.days<=7) return 3;
        if(['법정기한','도급신고','실적보고'].includes(r.type)) return 4;
        return 5;
      }
      if(r.type==='증빙자료') return 6;
      if(['MSDS','SOP'].includes(r.type)) return 7;
      return 8;
    }
    const da=rs(a),db=rs(b);
    if(da!==db) return da-db;
    if(a.days!==null&&b.days!==null) return a.days-b.days;
    return 0;
  });
  return list;
}

// ── GD Summary for Home ───────────────────────────
function renderHomeGD() {
  const today=new Date('2026-06-13');
  let total=0,overdue=0,soon30=0,abnormal=0;
  const alerts=[];
  gdData.forEach(d=>{
    if(!d[3]) return;
    total++;
    const nxt=calcNextCal(d[11],d[10]);
    if(nxt){
      const diff=Math.ceil((new Date(nxt)-today)/86400000);
      if(diff<0){overdue++;alerts.push({d,diff});}
      else if(diff<=30){soon30++;alerts.push({d,diff});}
    }
    if(d[12]==='이상') abnormal++;
  });
  const mini=(lbl,val,col,unit)=>
    '<div style="text-align:center;padding:5px 3px;background:#F5F8FD;border-radius:6px;">'
    +'<div style="font-size:9px;color:#7A96C0;font-weight:600;">'+lbl+'</div>'
    +'<div style="font-size:17px;font-weight:700;color:'+col+';">'+val+'</div>'
    +'<div style="font-size:9px;color:#8BA5C8;">'+unit+'</div></div>';
  let html='<div style="font-size:12px;font-weight:700;color:#003087;margin-bottom:7px;">가스감지기 교정 현황</div>'
    +'<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:8px;">'
    +mini('등록',total,'#003087','대')
    +mini('기한초과',overdue,overdue>0?'#dc3545':'#28a745','건')
    +mini('30일내',soon30,soon30>0?'#E8960A':'#28a745','건')
    +mini('이상',abnormal,abnormal>0?'#dc3545':'#28a745','대')+'</div>';
  if(alerts.length>0){
    html+='<div style="font-size:10px;font-weight:600;color:#7A96C0;margin-bottom:3px;">교정 요주의</div>';
    alerts.slice(0,4).forEach(item=>{
      const isOv=item.diff<0;
      html+='<div style="display:flex;justify-content:space-between;align-items:center;padding:3px 0;border-bottom:1px solid #EEF3FA;font-size:11px;">'
        +'<span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:68%;"><b>'+item.d[1]+'</b> '+item.d[3]+'</span>'
        +'<span style="background:'+(isOv?'#f8d7da':'#FFF3CD')+';color:'+(isOv?'#842029':'#664d03')+';font-size:9px;font-weight:700;padding:1px 6px;border-radius:5px;">'
        +(isOv?'기한초과':'D-'+item.diff)+'</span></div>';
    });
    if(alerts.length>4) html+='<div style="font-size:10px;color:#7A96C0;padding-top:2px;">+ '+(alerts.length-4)+'건 더</div>';
  } else {
    html+='<div style="text-align:center;color:#28a745;font-size:11px;padding:10px 0;font-weight:600;">교정 일정 이상 없음 ✅</div>';
  }
  document.getElementById('homeGDBox').innerHTML=html;
}

// ── Init: HOME ────────────────────────────────────
function initHome() {
  const kpi=calcTransKpi();
  document.getElementById('hKin').textContent=kpi.ain+' EA';
  document.getElementById('hKinSub').textContent='금월 '+kpi.min+' EA';
  document.getElementById('hKout').textContent=kpi.aout+' EA';
  document.getElementById('hKoutSub').textContent='금월 '+kpi.mout+' EA';
  document.getElementById('hKstock').textContent=kpi.cur+' EA/DR';

  // Donut charts
  const mkD=(id,title,done,total,color)=>mkChart(id,{
    type:'doughnut',
    data:{labels:['이수','미이수'],datasets:[{data:[done,total-done],backgroundColor:[color,'#f8d7da'],borderWidth:0}]},
    options:{cutout:'62%',plugins:{legend:{display:false},title:{display:true,text:title,font:{size:11}},
      tooltip:{callbacks:{label:d=>d.label+': '+d.raw+'명'}}},layout:{padding:8}}
  });
  const wt=calcWtKpi(), ht=calcHtKpi();
  mkD('hChartWt','유해화학물질 종사자교육',wt.done,wt.total,'#28a745');
  mkD('hChartHt','유해화학물질 취급자교육',ht.done,ht.total,'#0047B0');
  document.getElementById('hKwt').textContent=pct(wt.done,wt.total)+'%';
  document.getElementById('hKwtSub').textContent='미이수 '+wt.miss+'명 / 전체 '+wt.total+'명';
  document.getElementById('hKht').textContent=pct(ht.done,ht.total)+'%';
  document.getElementById('hKhtSub').textContent='미이수 '+ht.miss+'명 / 전체 '+ht.total+'명';

  // Cylinder bar
  const tr=monthlyTrend();
  mkChart('hChartCyl',{type:'bar',data:{labels:tr.mos,datasets:[
    {label:'입고',data:tr.inArr,backgroundColor:'#0047B0'},
    {label:'출고',data:tr.outArr,backgroundColor:'#dc3545'}
  ]},options:{responsive:true,maintainAspectRatio:false,
    plugins:{legend:{position:'top'}},
    scales:{x:{grid:{display:false}},y:{grid:{color:'#f0f0f0'}}}
  }});

  // Gas chart
  renderGasChart('home');

  // GD summary
  renderHomeGD();

  // Risk / schedule cards — sorted by priority, max 5 on home
  const risks=allRisks();
  const lvlOrder={'기한초과':0,'리스크':1,'확인필요':2,'예정':3};
  const sorted=[...risks].sort((a,b)=>(lvlOrder[a.level]??4)-(lvlOrder[b.level]??4));
  const rUrgent=risks.filter(r=>r.level==='리스크'||r.level==='기한초과').length;
  const hbEl=document.getElementById('homeRiskBadge');
  if(hbEl) hbEl.textContent=rUrgent>0?'🔴 '+rUrgent+'건 리스크':'✅ 일정 정상';
  const rlEl=document.getElementById('homeRiskList');
  if(rlEl) {
    const showing=sorted.slice(0,5);
    const rest=risks.length-showing.length;
    rlEl.innerHTML=risks.length
      ? showing.map(r=>scheduleCardHtml(r)).join('')
        +(rest>0?`<div style="font-size:11px;color:#7A96C0;padding:5px 0 0;text-align:center;">+ ${rest}건 더 있음</div>`:'')
      : '<div style="text-align:center;color:#28a745;font-size:12px;padding:20px 0;font-weight:600;">✅ 현재 알림 항목 없음</div>';
  }

  // Dynamic risk KPI
  document.getElementById('hKinspRisk').textContent=risks.filter(r=>r.type==='정기검사'||r.type==='법정기한').length+'건';
  document.getElementById('hKrisk').textContent=rUrgent+'건';

  // Inspection table (compact) — top 5 sorted by urgency
  const today=new Date('2026-06-13');
  const allInsp=[...hazInsp,...hpInsp].map(r=>{
    const diff=Math.ceil((new Date(r[5])-today)/86400000);
    return {r,diff};
  }).sort((a,b)=>a.diff-b.diff).slice(0,5);
  let itHtml='<table class="dtable" style="font-size:11px;"><thead><tr><th>구분</th><th>시설명</th><th>D-Day</th><th>예정일</th></tr></thead><tbody>';
  allInsp.forEach(item=>{
    const r=item.r, diff=item.diff;
    const cat=r[0].startsWith('HI')?'유해':'고압';
    let badge;
    if(diff<0) badge='<span class="br">D+'+Math.abs(diff)+'</span>';
    else if(diff<=30) badge='<span class="br">D-'+diff+'</span>';
    else if(diff<=90) badge='<span class="bw">D-'+diff+'</span>';
    else badge='<span class="bb">D-'+diff+'</span>';
    itHtml+=`<tr><td style="font-size:10px;">${cat}</td><td style="max-width:110px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11px;">${r[1]}</td><td>${badge}</td><td style="font-size:10px;">${r[5]}</td></tr>`;
  });
  itHtml+='</tbody></table>';
  document.getElementById('homeInspTable').innerHTML=itHtml;
}

// ── Worker / Handler KPIs ─────────────────────────
function calcWtKpi() {
  let done=0,miss=0;
  D.workers.forEach(w=>{if(w.s==='이수')done++;else miss++;});
  return {done,miss,total:done+miss};
}
function calcHtKpi() {
  let done=0,miss=0;
  D.handlers.forEach(h=>{if(h.s==='이수')done++;else miss++;});
  return {done,miss,total:done+miss};
}

// ── Init: SUMMARY ─────────────────────────────────
function initSummary() {
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
  mwEl.innerHTML=missW.map(w=>`<tr><td>${w.n}</td><td>${w.c}</td><td>${w.d}</td></tr>`).join('');

  const missH=D.handlers.filter(h=>h.s==='미이수');
  const mhEl=document.getElementById('sumMissHandler');
  mhEl.innerHTML=missH.map(h=>`<tr><td>${h.n}</td><td>${h.c}</td><td>${h.d}</td></tr>`).join('');

  // Deadline KPI
  const dlKpi=calcDeadlineKpi();
  const sdkEl=document.getElementById('sumDeadlineKpi');
  if(sdkEl) sdkEl.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">전체 기한항목</div><div class="kpi-value">${dlKpi.total}건</div></div>
    <div class="kpi-card kc-warn"><div class="kpi-label">D-30 임박</div><div class="kpi-value" style="color:#E8960A;">${dlKpi.urgent}건</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">기한 초과</div><div class="kpi-value" style="color:#dc3545;">${dlKpi.overdue}건</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">완료</div><div class="kpi-value" style="color:#28a745;">${dlKpi.done}건</div></div>
    <div class="kpi-card ${dlKpi.noEvidence>0?'kc-warn':'kc-ok'}"><div class="kpi-label">증빙 미등록</div><div class="kpi-value" style="color:${dlKpi.noEvidence>0?'#E8960A':'#28a745'}">${dlKpi.noEvidence}건</div></div>`;

  // Evidence KPI
  const evKpi=calcEvidenceKpi();
  const sekEl=document.getElementById('sumEvidenceKpi');
  if(sekEl) sekEl.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">전체 증빙자료</div><div class="kpi-value">${evKpi.total}건</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">등록 완료</div><div class="kpi-value" style="color:#28a745;">${evKpi.registered}건</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">미등록</div><div class="kpi-value" style="color:#dc3545;">${evKpi.notRegistered}건</div></div>
    <div class="kpi-card kc-warn"><div class="kpi-label">만료 예정</div><div class="kpi-value" style="color:#E8960A;">${evKpi.expiringSoon}건</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">만료</div><div class="kpi-value" style="color:#dc3545;">${evKpi.expired}건</div></div>`;

  // MSDS KPI
  const mKpi=calcMsdsKpi();
  const smkEl=document.getElementById('sumMsdsKpi');
  if(smkEl) smkEl.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">전체 MSDS</div><div class="kpi-value">${mKpi.total}건</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">${mKpi.normal}건</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">미보유</div><div class="kpi-value" style="color:#dc3545;">${mKpi.noMsds}건</div></div>
    <div class="kpi-card ${mKpi.needCheck>0?'kc-warn':'kc-ok'}"><div class="kpi-label">확인필요</div><div class="kpi-value" style="color:${mKpi.needCheck>0?'#E8960A':'#28a745'}">${mKpi.needCheck}건</div></div>
    <div class="kpi-card ${mKpi.needEdu>0?'kc-warn':'kc-ok'}"><div class="kpi-label">교육연계 필요</div><div class="kpi-value" style="color:${mKpi.needEdu>0?'#E8960A':'#28a745'}">${mKpi.needEdu}건</div></div>
    <div class="kpi-card ${mKpi.noSop>0?'kc-warn':'kc-ok'}"><div class="kpi-label">SOP 미연계</div><div class="kpi-value" style="color:${mKpi.noSop>0?'#E8960A':'#28a745'}">${mKpi.noSop}건</div></div>`;

  // SOP KPI
  const sKpi=calcSopKpi();
  const sskEl=document.getElementById('sumSopKpi');
  if(sskEl) sskEl.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">전체 SOP</div><div class="kpi-value">${sKpi.total}건</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">${sKpi.normal}건</div></div>
    <div class="kpi-card ${sKpi.needAppr>0?'kc-warn':'kc-ok'}"><div class="kpi-label">승인필요</div><div class="kpi-value" style="color:${sKpi.needAppr>0?'#E8960A':'#28a745'}">${sKpi.needAppr}건</div></div>
    <div class="kpi-card ${sKpi.needRev>0?'kc-risk':'kc-ok'}"><div class="kpi-label">개정필요</div><div class="kpi-value" style="color:${sKpi.needRev>0?'#dc3545':'#28a745'}">${sKpi.needRev}건</div></div>
    <div class="kpi-card ${sKpi.needEdu>0?'kc-warn':'kc-ok'}"><div class="kpi-label">교육연계 필요</div><div class="kpi-value" style="color:${sKpi.needEdu>0?'#E8960A':'#28a745'}">${sKpi.needEdu}건</div></div>
    <div class="kpi-card ${sKpi.noMsds>0?'kc-warn':'kc-ok'}"><div class="kpi-label">MSDS 미연계</div><div class="kpi-value" style="color:${sKpi.noMsds>0?'#E8960A':'#28a745'}">${sKpi.noMsds}건</div></div>`;
}

// ── Init: EDUCATION ───────────────────────────────
function initEdu() {
  const wt=calcWtKpi();
  document.getElementById('eduWtKpi').innerHTML=`
    <div class="kpi-card ${wt.miss>0?'kc-warn':'kc-ok'}"><div class="kpi-label">이수율</div><div class="kpi-value" style="color:${wt.miss>0?'#856404':'#28a745'}">${pct(wt.done,wt.total)}%</div></div>
    <div class="kpi-card"><div class="kpi-label">전체 대상자</div><div class="kpi-value">${wt.total}명</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">이수 완료</div><div class="kpi-value" style="color:#28a745">${wt.done}명</div></div>
    <div class="kpi-card ${wt.miss>0?'kc-warn':'kc-ok'}"><div class="kpi-label">미이수</div><div class="kpi-value" style="color:${wt.miss>0?'#856404':'#28a745'}">${wt.miss}명</div></div>`;

  const ht=calcHtKpi();
  document.getElementById('eduHtKpi').innerHTML=`
    <div class="kpi-card ${ht.miss>0?'kc-warn':'kc-ok'}"><div class="kpi-label">이수율</div><div class="kpi-value" style="color:${ht.miss>0?'#856404':'#28a745'}">${pct(ht.done,ht.total)}%</div></div>
    <div class="kpi-card"><div class="kpi-label">전체 대상자</div><div class="kpi-value">${ht.total}명</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">이수 완료</div><div class="kpi-value" style="color:#28a745">${ht.done}명</div></div>
    <div class="kpi-card ${ht.miss>0?'kc-warn':'kc-ok'}"><div class="kpi-label">미이수</div><div class="kpi-value" style="color:${ht.miss>0?'#856404':'#28a745'}">${ht.miss}명</div></div>`;

  // dept bar chart
  const doneArr=D.depts.map(d=>D.workers.filter(w=>w.d===d&&w.s==='이수').length);
  const missArr=D.depts.map(d=>D.workers.filter(w=>w.d===d&&w.s==='미이수').length);
  mkChart('eduDeptChart',{type:'bar',data:{labels:D.depts,datasets:[
    {label:'이수',data:doneArr,backgroundColor:'#28a745'},
    {label:'미이수',data:missArr,backgroundColor:'#dc3545'}
  ]},options:{responsive:true,maintainAspectRatio:false,
    plugins:{legend:{position:'top',labels:{boxWidth:11}},title:{display:true,text:'부서별 이수 현황',font:{size:12}}},
    scales:{x:{grid:{display:false},ticks:{maxRotation:30}},y:{grid:{color:'#f0f0f0'}}}
  }});

  // Worker table
  const wb=document.getElementById('workerTbody');
  wb.innerHTML=D.workers.map(w=>
    `<tr><td>${w.n}</td><td>${w.c}</td><td>${w.d}</td>
     <td>${w.s==='이수'?'<span class="bg">이수</span>':'<span class="br">미이수</span>'}</td>
     <td>${w.dt}</td></tr>`).join('');

  // Handler table
  const hb=document.getElementById('handlerTbody');
  hb.innerHTML=D.handlers.map(h=>
    `<tr><td>${h.n}</td><td>${h.c}</td><td>${h.d}</td>
     <td>${h.s==='이수'?'<span class="bg">이수</span>':'<span class="br">미이수</span>'}</td>
     <td>${h.dt}</td></tr>`).join('');

  // Miss sections
  const wtMiss=D.workers.filter(w=>w.s==='미이수');
  document.getElementById('wtMissSection').innerHTML=wtMiss.length?
    `<details style="margin-top:10px;"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:#856404;padding:6px 0;">⚠️ 미이수자 목록 (${wtMiss.length}명)</summary>
     <div class="cbox" style="margin-top:6px;"><table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th></tr></thead>
     <tbody>${wtMiss.map(w=>`<tr><td>${w.n}</td><td>${w.c}</td><td>${w.d}</td></tr>`).join('')}</tbody></table></div></details>`:'';

  const htMiss=D.handlers.filter(h=>h.s==='미이수');
  document.getElementById('htMissSection').innerHTML=htMiss.length?
    `<details style="margin-top:10px;"><summary style="cursor:pointer;font-size:12px;font-weight:600;color:#856404;padding:6px 0;">⚠️ 미이수자 목록 (${htMiss.length}명)</summary>
     <div class="cbox" style="margin-top:6px;"><table class="dtable"><thead><tr><th>성명</th><th>소속</th><th>부서</th></tr></thead>
     <tbody>${htMiss.map(h=>`<tr><td>${h.n}</td><td>${h.c}</td><td>${h.d}</td></tr>`).join('')}</tbody></table></div></details>`:'';
}

// ── Init: CHEM ────────────────────────────────────
function initChem() {
  const kpi=calcTransKpi();
  document.getElementById('chemKpi').innerHTML=`
    <div class="kpi-card"><div class="kpi-label">연간 입고</div><div class="kpi-value">${kpi.ain} EA</div></div>
    <div class="kpi-card"><div class="kpi-label">연간 출고</div><div class="kpi-value">${kpi.aout} EA</div></div>
    <div class="kpi-card"><div class="kpi-label">금월 입고</div><div class="kpi-value">${kpi.min} EA</div></div>
    <div class="kpi-card"><div class="kpi-label">금월 출고</div><div class="kpi-value">${kpi.mout} EA</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">현재 보관</div><div class="kpi-value" style="color:#0047B0">${kpi.cur} EA/DR</div></div>`;

  const tr=monthlyTrend();
  mkChart('chemCylChart',{type:'bar',data:{labels:tr.mos,datasets:[
    {label:'입고',data:tr.inArr,backgroundColor:'#0047B0'},
    {label:'출고',data:tr.outArr,backgroundColor:'#dc3545'}
  ]},options:{responsive:true,maintainAspectRatio:false,
    plugins:{legend:{position:'top'}},
    scales:{x:{grid:{display:false}},y:{grid:{color:'#f0f0f0'}}}
  }});

  renderGasChart('chem');

  const cb=document.getElementById('chemTbody');
  cb.innerHTML=D.transactions.map(t=>{
    const tc=t[3]==='입고'?'background:#d4edda;color:#155724':t[3]==='출고'?'background:#f8d7da;color:#721c24':'background:#d1ecf1;color:#0c5460';
    return `<tr><td>${t[0]}</td><td>${t[1]}</td><td>${t[2]}</td>
      <td style="${tc};padding:2px 5px;border-radius:4px;font-size:10px;font-weight:600;">${t[3]}</td>
      <td>${t[4]}</td><td>${t[5]}</td><td>${t[6]}</td></tr>`;
  }).join('');
}

// ── Init: INSPECTION ─────────────────────────────
function renderInspTab(containerId, data, label) {
  const today=new Date('2026-06-13');
  const getDDayBadge=(dateStr,riskFlag)=>{
    const diff=Math.ceil((new Date(dateStr)-today)/86400000);
    if(riskFlag==='Y'||diff<0) return '<span class="br">기한초과</span>';
    if(diff<=30) return '<span class="br">D-'+diff+'일</span>';
    if(diff<=90) return '<span class="bw">D-'+diff+'일</span>';
    return '<span class="bb">D-'+diff+'일</span>';
  };
  const getStBadge=s=>{
    if(s==='완료') return '<span class="bg">완료</span>';
    if(s==='보류') return '<span class="bgr">보류</span>';
    if(s==='진행중') return '<span class="bb">진행중</span>';
    if(s==='리스크') return '<span class="br">리스크</span>';
    return '<span style="background:#EEF3FA;color:#7A96C0;font-size:9px;font-weight:700;padding:2px 5px;border-radius:5px;">'+s+'</span>';
  };
  const risk=data.filter(r=>r[3]==='Y'||Math.ceil((new Date(r[5])-today)/86400000)<=30).length;
  const hold=data.filter(r=>r[2]==='보류').length;
  const done=data.filter(r=>r[2]==='완료').length;
  let html=`<div class="kpi-grid g4">
    <div class="kpi-card"><div class="kpi-label">전체 검사 건수</div><div class="kpi-value">${data.length}건</div></div>
    <div class="kpi-card ${risk>0?'kc-risk':'kc-ok'}"><div class="kpi-label">리스크 (D-30이내)</div><div class="kpi-value" style="color:${risk>0?'#dc3545':'#28a745'}">${risk}건</div></div>
    <div class="kpi-card ${hold>0?'kc-warn':'kc-ok'}"><div class="kpi-label">보류 건수</div><div class="kpi-value" style="color:${hold>0?'#856404':'#28a745'}">${hold}건</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">완료 건수</div><div class="kpi-value" style="color:#28a745">${done}건</div></div>
  </div>
  <div class="sec-title">${label} 목록 (${data.length}건)</div>
  <div class="cbox" style="overflow-x:auto;"><table class="dtable">
  <thead><tr><th>검사ID</th><th>시설명</th><th>상태</th><th>D-Day</th><th>비고</th><th>검사 예정일</th></tr></thead><tbody>`;
  data.forEach(r=>{
    const diff=Math.ceil((new Date(r[5])-today)/86400000);
    const isRisk=r[3]==='Y'||diff<=30;
    html+=`<tr style="${isRisk?'background:#fff5f5;':''}">
      <td style="font-size:10px;color:#7A96C0;">${r[0]}</td><td style="font-weight:600;">${r[1]}</td>
      <td>${getStBadge(r[2])}</td><td>${getDDayBadge(r[5],r[3])}</td>
      <td style="font-size:10px;color:#6c757d;">${r[4]||'—'}</td><td style="font-size:10px;">${r[5]}</td></tr>`;
  });
  html+='</tbody></table></div>';
  document.getElementById(containerId).innerHTML=html;
}

function initInsp() {
  renderInspTab('insp-t1', hazInsp, '유해화학물질 정기검사');
  renderInspTab('insp-t2', hpInsp, '고압가스 정기검사');
}

// ── Init: RISK ────────────────────────────────────
function initRisk() {
  const risks=allRisks();
  const urgentList=risks.filter(r=>r.level==='기한초과'||r.level==='리스크');
  const warnList=risks.filter(r=>r.level==='확인필요');
  const urgent=urgentList.length, warn=warnList.length;
  const eduCnt=risks.filter(r=>r.type==='교육').length;
  const inspCnt=risks.filter(r=>r.type==='정기검사').length;
  document.getElementById('riskListTitle').textContent='알림 항목 ('+risks.length+'건)';
  document.getElementById('riskKpi').innerHTML=`
    <div class="kpi-card ${urgent>0?'kc-risk':'kc-ok'}">
      <div class="kpi-label">긴급 / 리스크</div>
      <div class="kpi-value" style="color:${urgent>0?'#dc3545':'#28a745'}">${urgent}건</div>
      <div class="kpi-sub">기한초과 또는 즉시 조치</div>
    </div>
    <div class="kpi-card ${warn>0?'kc-warn':'kc-ok'}">
      <div class="kpi-label">확인 필요</div>
      <div class="kpi-value" style="color:${warn>0?'#E8960A':'#28a745'}">${warn}건</div>
      <div class="kpi-sub">확인 및 조치 검토</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">교육 알림</div>
      <div class="kpi-value">${eduCnt}건</div>
      <div class="kpi-sub">미이수자 포함 부서</div>
    </div>
    <div class="kpi-card">
      <div class="kpi-label">검사 일정 알림</div>
      <div class="kpi-value">${inspCnt}건</div>
      <div class="kpi-sub">90일 이내 예정 검사</div>
    </div>`;
  function grpHtml(list, label, color) {
    if(!list.length) return '';
    return '<div style="font-size:11px;font-weight:700;color:'+color+';padding:10px 0 5px;border-bottom:2px solid '+color+';margin-bottom:6px;">'+label+' <span style="font-weight:400;">('+list.length+'건)</span></div>'
      +list.map(r=>scheduleCardHtml(r)).join('');
  }
  document.getElementById('riskListFull').innerHTML=risks.length
    ? grpHtml(urgentList,'긴급 / 리스크','#dc3545')+grpHtml(warnList,'확인 필요','#E8960A')
    : '<div class="risk-card" style="border-left-color:#28a745;color:#28a745;text-align:center;font-weight:600;">현재 알림 항목 없음</div>';
}

// ── BUILD VERSION AUTO-RESET ──────────────────────
(function(){
  const VER='20260614c';
  const KEY='chemicalDashboard_version';
  if(localStorage.getItem(KEY)!==VER){
    Object.keys(localStorage).filter(function(k){return k.startsWith('chemicalDashboard_');}).forEach(function(k){localStorage.removeItem(k);});
    localStorage.setItem(KEY,VER);
  }
})();

// ── LOCALSTORAGE + ADMIN MODE ─────────────────────
const LS = {
  EDU:        'chemicalDashboard_edu',
  HAND:       'chemicalDashboard_hand',
  INV:        'chemicalDashboard_inv',
  INSP:       'chemicalDashboard_insp',
  GD:         'chemicalDashboard_gd',
  DAILY:      'chemicalDashboard_daily',
  N2:         'chemicalDashboard_n2',
  META:       'chemicalDashboard_meta',
  CONTRACTOR: 'chemicalDashboard_contractorReport',
  DEADLINE:   'chemicalDashboard_deadlineData',
  EVIDENCE:   'chemicalDashboard_evidenceData',
  MSDS:       'chemicalDashboard_msdsData',
  SOP:        'chemicalDashboard_sopData',
  LEDGER:     'chemicalDashboard_chemicalLedgerData',
  PERF:       'chemicalDashboard_performanceReportData',
  SELFCHK:    'chemicalDashboard_facilitySelfCheckData',
  CHEMMGR:    'chemicalDashboard_chemicalManagerData'
};
const ADMIN_PASSWORD = '1';
let isAdminMode = false;

function lsSave(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch(e) {}
}
function lsLoad(key) {
  try { const v=localStorage.getItem(key); return v?JSON.parse(v):null; } catch(e) {return null;}
}

function lsLoadArr(key, defaultArr) {
  try {
    const v=localStorage.getItem(key);
    if(!v) return defaultArr;
    const p=JSON.parse(v);
    if(!Array.isArray(p)||p.length===0) return defaultArr;
    return p;
  } catch(e) { console.warn('loadSavedData error:',key,e); return defaultArr; }
}

function loadSavedData() {
  const edu = lsLoad(LS.EDU);
  if(edu && edu.depts && Array.isArray(edu.depts) && edu.depts.length>0) {
    D.depts=edu.depts; D.dept_total=edu.dept_total||D.deptTotal; D.dept_miss=edu.dept_miss||D.deptMiss;
  }
  const hand = lsLoad(LS.HAND);
  if(hand && typeof hand==='object' && Object.keys(hand).length>0) {
    D.handCfg=hand;
  }
  const inv = lsLoadArr(LS.INV, stocks);
  if(inv !== stocks) { stocks=inv; }
  const insp = lsLoad(LS.INSP);
  if(insp && insp.haz && Array.isArray(insp.haz) && insp.haz.length>0) {
    hazInsp=insp.haz; hpInsp=insp.hp||hpInsp;
  }
  gdData = lsLoadArr(LS.GD, gdData);
  dailyRecords = lsLoadArr(LS.DAILY, dailyRecords);
  const n2 = lsLoad(LS.N2);
  if(n2 && Array.isArray(n2) && n2.length>0) { n2Records=n2; }
  contractorData = lsLoadArr(LS.CONTRACTOR, contractorData);
  deadlineData = lsLoadArr(LS.DEADLINE, deadlineData);
  evidenceData = lsLoadArr(LS.EVIDENCE, evidenceData);
  msdsData = lsLoadArr(LS.MSDS, msdsData);
  sopData = lsLoadArr(LS.SOP, sopData);
  ledgerData = lsLoadArr(LS.LEDGER, ledgerData);
  perfData = lsLoadArr(LS.PERF, perfData);
  selfChkData = lsLoadArr(LS.SELFCHK, selfChkData);
  chemMgrData = lsLoadArr(LS.CHEMMGR, chemMgrData);
  const meta = lsLoad(LS.META);
  if(meta && meta.lastSaved) {
    const el=document.getElementById('editLastSaved');
    if(el) el.textContent=meta.lastSaved;
    updateHomeInfoBanner(meta.lastSaved, true);
  }
}

function updateLastSaved() {
  const now=new Date();
  const ts=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}:${String(now.getSeconds()).padStart(2,'0')}`;
  lsSave(LS.META, {lastSaved: ts});
  const el=document.getElementById('editLastSaved');
  if(el) el.textContent=ts;
  updateHomeInfoBanner(ts, true);
}

function updateHomeInfoBanner(savedTs, hasSavedData) {
  const statusEl=document.getElementById('homeDataStatus');
  const savedEl=document.getElementById('homeLastSaved');
  if(statusEl) statusEl.textContent=hasSavedData?'localStorage 저장 데이터 사용 중':'MVP 샘플 데이터 사용 중';
  if(savedEl) savedEl.textContent=savedTs||'기록 없음';
}

function showToast(msg, ms=2200) {
  const t=document.getElementById('editToast');
  if(!t) return;
  t.textContent=msg; t.style.display='block';
  clearTimeout(t._tid);
  t._tid=setTimeout(()=>{t.style.display='none';}, ms);
}

function setAdminMode(on) {
  isAdminMode=on;
  const vb=document.getElementById('editViewBanner');
  const ab=document.getElementById('editAdminBanner');
  const adminBtn=document.getElementById('editAdminBtn');
  if(vb) vb.style.display=on?'none':'flex';
  if(ab) ab.style.display=on?'flex':'none';
  if(adminBtn) {
    adminBtn.textContent=on?'🔓 ADMIN (편집 중)':'🔒 ADMIN';
    adminBtn.style.background=on?'rgba(232,150,10,0.25)':'transparent';
    adminBtn.style.borderColor=on?'#E8960A':'rgba(255,255,255,0.65)';
  }
  const cvb=document.getElementById('contViewBanner');
  const cab=document.getElementById('contAdminBanner');
  if(cvb) cvb.style.display=on?'none':'flex';
  if(cab) cab.style.display=on?'flex':'none';
  const dlvb=document.getElementById('dlViewBanner');
  const dlab=document.getElementById('dlAdminBanner');
  if(dlvb) dlvb.style.display=on?'none':'flex';
  if(dlab) dlab.style.display=on?'flex':'none';
  const evvb=document.getElementById('evViewBanner');
  const evab=document.getElementById('evAdminBanner');
  if(evvb) evvb.style.display=on?'none':'flex';
  if(evab) evab.style.display=on?'flex':'none';
  const msdsvb=document.getElementById('msdsViewBanner');
  const msdsab=document.getElementById('msdsAdminBanner');
  if(msdsvb) msdsvb.style.display=on?'none':'flex';
  if(msdsab) msdsab.style.display=on?'flex':'none';
  const sopvb=document.getElementById('sopViewBanner');
  const sopab=document.getElementById('sopAdminBanner');
  if(sopvb) sopvb.style.display=on?'none':'flex';
  if(sopab) sopab.style.display=on?'flex':'none';
  // 모든 편집 관련 버튼 활성/비활성
  ['saveEduBtn','saveInvBtn','saveInspBtn','editApplyBtn','editResetBtn','saveContractorBtn','addContractorBtn',
   'saveDeadlineBtn','addDeadlineBtn','saveEvidenceBtn','addEvidenceBtn',
   'saveDeadlineEditBtn','addDeadlineEditBtn','saveEvidenceEditBtn','addEvidenceEditBtn',
   'saveMsdsEditBtn','addMsdsEditBtn','saveSopEditBtn','addSopEditBtn',
   'saveGDEditBtn','addGDEditBtn',
   'saveLedgerBtn','addLedgerBtn','savePerfBtn','addPerfBtn',
   'saveSelfChkBtn','addSelfChkBtn','saveChemMgrBtn','addChemMgrBtn'].forEach(id=>{
    const btn=document.getElementById(id);
    if(btn) btn.disabled=!on;
  });
  // 도급신고 상세 패널 내 버튼 동기화
  document.querySelectorAll('#contractorDetailPanel button').forEach(btn=>{
    if(btn.textContent.trim()==='삭제') { btn.disabled=!on; btn.style.background=on?'#dc3545':'#EEF3FA'; btn.style.color=on?'white':'#9AB0C8'; }
  });
  // edit 인풋 모두 enable/disable
  document.querySelectorAll('#page-edit input, #page-edit select').forEach(el=>{
    el.disabled=!on;
    el.style.background=on?'':'#F7F9FC';
    el.style.color=on?'':'#9AB0C8';
  });
}

function openAdminModal() {
  if(isAdminMode) { setAdminMode(false); return; }
  const m=document.getElementById('adminModal');
  if(m) { m.style.display='flex'; document.getElementById('adminPwInput').value=''; document.getElementById('adminPwErr').textContent=''; setTimeout(()=>document.getElementById('adminPwInput').focus(),80); }
}
function closeAdminModal() {
  const m=document.getElementById('adminModal');
  if(m) m.style.display='none';
}
function confirmAdmin() {
  const pw=document.getElementById('adminPwInput').value;
  if(pw===ADMIN_PASSWORD) {
    closeAdminModal();
    setAdminMode(true);
    showToast('관리자 편집 모드입니다. 수정 후 저장 버튼을 눌러야 대시보드에 반영됩니다.');
  } else {
    document.getElementById('adminPwErr').textContent='관리자 비밀번호가 일치하지 않습니다.';
    document.getElementById('adminPwInput').select();
  }
}

function saveEduSection() {
  if(!isAdminMode) return;
  lsSave(LS.EDU, {depts:D.depts, dept_total:D.dept_total, dept_miss:D.dept_miss});
  lsSave(LS.HAND, D.hand_cfg);
  updateLastSaved();
  markEsSaved('edu');
  showToast('💾 교육 데이터가 저장되었습니다.');
}
function saveInvSection() {
  if(!isAdminMode) return;
  lsSave(LS.INV, stocks);
  updateLastSaved();
  markEsSaved('stock');
  showToast('💾 보관량 데이터가 저장되었습니다.');
}
function saveInspSection() {
  if(!isAdminMode) return;
  lsSave(LS.INSP, {haz:hazInsp, hp:hpInsp});
  updateLastSaved();
  markEsSaved('insp');
  showToast('💾 정기검사 데이터가 저장되었습니다.');
}
function saveGDData() {
  lsSave(LS.GD, gdData);
  updateLastSaved();
}

function resetToDefaults() {
  if(!isAdminMode) return;
  if(!confirm('저장된 데이터를 삭제하고 기본 샘플 데이터로 복구합니다. 계속하시겠습니까?')) return;
  Object.values(LS).forEach(k=>{ try{localStorage.removeItem(k);}catch(e){} });
  showToast('기본 샘플 데이터로 복구되었습니다.');
  setTimeout(()=>location.reload(), 1500);
}

// ── EDIT SECTION COLLAPSIBLE ──────────────────────
const ES_IDS = ['edu','stock','insp','deadline','evidence','msds','sop','gd','ledger','perf','selfchk','chemmgr'];

function toggleEditSection(id) {
  const sec = document.getElementById('es-'+id);
  const body = document.getElementById('es-body-'+id);
  const btn = document.getElementById('es-btn-'+id);
  if(!sec) return;
  const isOpen = sec.classList.contains('open');
  if(isOpen) {
    sec.classList.remove('open');
    sec.classList.add('collapsed');
    if(body) body.style.display='none';
    if(btn) btn.textContent='펼치기';
  } else {
    sec.classList.remove('collapsed');
    sec.classList.add('open');
    if(body) body.style.display='block';
    if(btn) btn.textContent='접기';
  }
}

function updateEditCounts() {
  function sc(id,txt,warn){
    const e=document.getElementById('es-count-'+id);
    if(e){e.textContent=txt;e.style.background=warn?'#FFF3CD':'';e.style.color=warn?'#664d03':'';}
  }
  const totalWorkers=D.deptTotal?D.deptTotal.reduce(function(a,b){return a+b;},0):0;
  const wMiss=D.workers?D.workers.filter(function(w){return w.s==='미이수';}).length:0;
  sc('edu','부서 '+D.depts.length+'개 / '+totalWorkers+'명'+(wMiss>0?' ⚠'+wMiss+'명 미이수':''),wMiss>0);
  sc('stock',D.chemicals.length+'종');
  sc('insp','검사항목 '+(hazInsp.length+hpInsp.length)+'건');
  const dlOver=deadlineData.filter(function(d){return calcDeadlineStatus(d)==='초과';}).length;
  sc('deadline',deadlineData.length+'건'+(dlOver>0?' ⚠'+dlOver+'건 초과':''),dlOver>0);
  const evNo=evidenceData.filter(function(e){return calcEvidenceStatus(e)==='미등록';}).length;
  sc('evidence',evidenceData.length+'건'+(evNo>0?' ⚠'+evNo+'건 미등록':''),evNo>0);
  const msdsNo=msdsData.filter(function(m){return calcMsdsStatus(m)==='미보유'||calcMsdsStatus(m)==='확인필요';}).length;
  sc('msds',msdsData.length+'건'+(msdsNo>0?' ⚠'+msdsNo+'건 확인':''),msdsNo>0);
  const sopNo=sopData.filter(function(s){return calcSopStatus(s)==='개정필요'||calcSopStatus(s)==='문서 미등록';}).length;
  sc('sop',sopData.length+'건'+(sopNo>0?' ⚠'+sopNo+'건 확인':''),sopNo>0);
  const gdActive=gdData.filter(function(d){return d[2]&&d[2]!=='';}).length;
  const gdOv=gdData.filter(function(d){const nxt=calcNextCal(d[11],d[10]);if(!nxt)return false;return Math.ceil((new Date(nxt)-new Date('2026-06-13'))/86400000)<0;}).length;
  sc('gd',gdActive+'대'+(gdOv>0?' ⚠'+gdOv+'건 초과':''),gdOv>0);
  const ldgNo=ledgerData.filter(function(d){return d.status==='확인필요'||d.status==='불일치';}).length;
  sc('ledger',ledgerData.length+'건'+(ldgNo>0?' ⚠'+ldgNo+'건 확인':''),ldgNo>0);
  const perfNo=perfData.filter(function(d){return d.status==='기한초과'||d.status==='제출필요';}).length;
  sc('perf',perfData.length+'건'+(perfNo>0?' ⚠'+perfNo+'건 확인':''),perfNo>0);
  const schkNo=selfChkData.filter(function(d){return d.result==='부적합'||d.actionStatus==='조치필요';}).length;
  sc('selfchk',selfChkData.length+'건'+(schkNo>0?' ⚠'+schkNo+'건 조치':''),schkNo>0);
  const mgrNo=chemMgrData.filter(function(d){const st=calcChemMgrStatus(d);return st==='미선임'||st==='교육기한초과';}).length;
  sc('chemmgr',chemMgrData.length+'명'+(mgrNo>0?' ⚠'+mgrNo+'명 확인':''),mgrNo>0);
}

function markEsSaved(id) {
  const el=document.getElementById('es-save-'+id);
  if(!el) return;
  const now=new Date();
  const ts=(now.getMonth()+1)+'/'+(now.getDate())+' '
    +String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0')+' 저장';
  el.textContent=ts;
  el.style.display='inline';
}

// ── EDIT PAGE ─────────────────────────────────────
function initEdit() {
  // Edu section - worker
  const eg=document.getElementById('editEduGrid');
  eg.innerHTML='<div style="grid-column:1/-1;font-size:11px;font-weight:700;color:#495057;">종사자교육 (전체 100명)</div>';
  D.depts.forEach((d,i)=>{
    const tot=D.deptTotal[i], miss=D.deptMiss[i];
    eg.innerHTML+=`<div class="edit-row">
      <label>${d} (전체 ${tot}명)</label>
      <input type="number" id="ew_${i}" value="${tot-miss}" min="0" max="${tot}" placeholder="이수 완료 수">
      <span style="font-size:10px;color:#6c757d;">/ ${tot}명</span>
    </div>`;
  });

  // Handler section
  const hg=document.getElementById('editHandlerGrid');
  hg.innerHTML='<div style="grid-column:1/-1;font-size:11px;font-weight:700;color:#495057;">취급자교육 (기술기획파트·개발2실)</div>';
  Object.entries(D.handCfg).forEach(([d,v])=>{
    hg.innerHTML+=`<div class="edit-row">
      <label>${d} (전체 ${v.total}명)</label>
      <input type="number" id="eh_${d}" value="${v.total-v.miss}" min="0" max="${v.total}" placeholder="이수 완료 수">
      <span style="font-size:10px;color:#6c757d;">/ ${v.total}명</span>
    </div>`;
  });

  // Stock section
  const sg=document.getElementById('editStockGrid');
  sg.innerHTML=D.chemicals.map((g,i)=>
    `<div class="edit-row">
      <label>${g} ${D.hazardous.has(g)?'<span class="br" style="font-size:8px;">유해</span>':'<span class="bg" style="font-size:8px;">고압</span>'}</label>
      <input type="number" id="es_${i}" value="${stocks[i]}" min="0" max="999">
    </div>`).join('');

  // Inspection flags
  const ig=document.getElementById('editInspGrid');
  const allI=[...hazInsp,...hpInsp];
  ig.innerHTML=allI.map((r,i)=>
    `<div class="edit-row">
      <label>${r[0]} - ${r[1]}</label>
      <select id="ei_${i}" style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:11px;">
        <option value="N" ${r[3]==='N'?'selected':''}>N (리스크 없음)</option>
        <option value="Y" ${r[3]==='Y'?'selected':''}>Y (리스크 있음)</option>
      </select>
    </div>`).join('');
  updateEditCounts();
}

function applyEdits() {
  if(!isAdminMode) return;
  // Update stocks from inputs
  D.chemicals.forEach((g,i)=>{
    const v=parseInt(document.getElementById('es_'+i)?.value)||0;
    stocks[i]=v;
  });

  // Update worker completion
  D.depts.forEach((d,i)=>{
    const inp=document.getElementById('ew_'+i);
    if(!inp) return;
    const newDone=parseInt(inp.value)||0;
    let cnt=0;
    D.workers.forEach(w=>{
      if(w.d===d){
        w.s = cnt<newDone ? '이수' : '미이수';
        w.dt = w.s==='이수' ? '2026-03-15' : '-';
        cnt++;
      }
    });
  });
  Object.keys(D.handCfg).forEach(d=>{
    const inp=document.getElementById('eh_'+d);
    if(!inp) return;
    const newDone=parseInt(inp.value)||0;
    let cnt=0;
    D.handlers.forEach(h=>{
      if(h.d===d){
        h.s = cnt<newDone ? '이수' : '미이수';
        h.dt = h.s==='이수' ? '2026-04-20' : '-';
        cnt++;
      }
    });
  });

  // Update inspection flags
  const allI=[...hazInsp,...hpInsp];
  allI.forEach((r,i)=>{
    const sel=document.getElementById('ei_'+i);
    if(!sel) return;
    r[3]=sel.value;
  });
  hazInsp.forEach((r,i)=>{ r[3]=allI[i][3]; });
  hpInsp.forEach((r,i)=>{ r[3]=allI[hazInsp.length+i][3]; });

  // Save everything to localStorage
  lsSave(LS.EDU, {depts:D.depts, dept_total:D.dept_total, dept_miss:D.dept_miss});
  lsSave(LS.HAND, D.handCfg);
  lsSave(LS.INV, stocks);
  lsSave(LS.INSP, {haz:hazInsp, hp:hpInsp});
  lsSave(LS.GD, gdData);
  lsSave(LS.CONTRACTOR, contractorData);
  lsSave(LS.DEADLINE, deadlineData);
  lsSave(LS.EVIDENCE, evidenceData);
  lsSave(LS.MSDS, msdsData);
  lsSave(LS.SOP, sopData);
  updateLastSaved();

  // Re-render all pages
  initSummary();
  initHome();
  initEdu();
  initChem();
  initInsp();
  initRisk();
  initGD();
  initGDEdit();
  initDeadline();
  initEvidence();
  initMsds();
  initSop();
  ES_IDS.forEach(function(id){markEsSaved(id);});
  updateEditCounts();
  showToast('✅ 전체 저장 및 대시보드 반영 완료');
}

// ── DAILY CHECK ──────────────────────────────────
const DAILY_ITEMS = [
  {no:1, name:'1차 압력',    desc:'실린더 측 압력 확인',                   type:'number', unit:'MPa', abnRule:'range', note:'A/B 실린더별 기록 권장'},
  {no:2, name:'2차 압력',    desc:'Regulator 후단 공급압력 확인',           type:'number', unit:'MPa', abnRule:'range', note:'장비 공급압 기준'},
  {no:3, name:'사용 실린더', desc:'현재 공급 중인 실린더 확인',             type:'ab',     unit:'',    abnRule:'none',  note:'자동절체 상태 확인'},
  {no:4, name:'실린더 무게', desc:'A/B 실린더 잔량 확인 (kg)',              type:'weight', unit:'kg',  abnRule:'none',  note:'Scale 값 기준'},
  {no:5, name:'배기 차압',   desc:'Cabinet 배기 차압 확인',                 type:'number', unit:'Pa',  abnRule:'range', note:'배기 이상 조기 확인'},
  {no:6, name:'Gas Detector',desc:'감지기 정상 표시 여부 확인',             type:'status2',unit:'ppm', abnRule:'status',note:'측정값 확인 가능 시 ppm 기록'},
  {no:7, name:'Alarm 상태',  desc:'현장 알람 발생 여부 확인',               type:'alarm',  unit:'',    abnRule:'status',note:'알람명 기록'},
  {no:8, name:'Interlock',   desc:'인터락 정상 여부 확인',                  type:'ilock',  unit:'',    abnRule:'status',note:'Bypass 시 사유 필수'},
  {no:9, name:'누출 의심',   desc:'냄새·소리·감지기 수치·연결부 이상',     type:'ok_ng',  unit:'',    abnRule:'status',note:'Neck/Pigtail 연결부 중점'},
  {no:10,name:'실린더 고정', desc:'체인·전도방지·Pigtail 체결 상태 확인',  type:'ok_ng',  unit:'',    abnRule:'status',note:'교체 후 재확인 필요'},
];

// gas-only chemicals (not KOH)
const gasCabinets = D.chemicals.filter(g=>g!=='KOH');

// daily records
let dailyRecords = [
  {date:'2026-06-02',gas:'NH3',inspector:'김지수',vals:['20.9','0.50','A','13.0','9.5','26','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-03',gas:'HF',inspector:'이민준',vals:['20.9','0.51','A','12.8','10.1','28','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-04',gas:'H2',inspector:'박서연',vals:['20.9','0.52','A','12.3','8.8','27','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-05',gas:'N2',inspector:'최동현',vals:['20.8','0.50','A','14.1','11.2','25','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-06',gas:'NH3',inspector:'정유진',vals:['20.9','0.51','B','13.5','9.8','26','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-09',gas:'HF',inspector:'강민서',vals:['20.8','0.49','A','12.0','9.2','29','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-10',gas:'H2',inspector:'윤재원',vals:['20.9','0.52','A','12.5','8.2','28','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-11',gas:'NH3',inspector:'임하늘',vals:['20.7','0.48','B','10.2','14.6','32','정상','','정상','정상','정상','이상'],result:'이상'},
  {date:'2026-06-12',gas:'HF',inspector:'오승현',vals:['20.9','0.50','A','11.0','9.8','30','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-12',gas:'H2',inspector:'황지민',vals:['20.8','0.51','A','11.8','8.0','27','이상','5ppm','정상','정상','정상','정상'],result:'이상'},
  {date:'2026-06-13',gas:'N2',inspector:'신현우',vals:['20.9','0.60','A','15.3','12.1','25','정상','','정상','정상','정상','정상'],result:'정상'},
  {date:'2026-06-14',gas:'NH3',inspector:'조예린',vals:['20.9','0.50','A','13.1','9.7','26','정상','','정상','정상','정상','정상'],result:'정상'},
];

function buildDailyFormRow(item) {
  let inputHtml='';
  const id='df_'+item.no;
  switch(item.type){
    case 'number':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${id}" step="0.01" placeholder="수치 입력"
          style="width:90px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;"
          oninput="evalRow(${item.no})">
        <span style="font-size:11px;color:#6c757d;">${item.unit}</span>
      </div>`;
      break;
    case 'ab':
      inputHtml=`<select id="${id}" onchange="evalRow(${item.no})"
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
        <select id="${id}" onchange="evalRow(${item.no})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>이상</option>
        </select>
        <input type="text" id="${id}_ppm" placeholder="ppm"
          style="width:65px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
      </div>`;
      break;
    case 'alarm':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <select id="${id}" onchange="evalRow(${item.no})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>알람</option>
        </select>
        <input type="text" id="${id}_name" placeholder="알람명"
          style="width:90px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
      </div>`;
      break;
    case 'ilock':
      inputHtml=`<div style="display:flex;gap:6px;align-items:center;">
        <select id="${id}" onchange="evalRow(${item.no})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>이상</option><option>Bypass</option>
        </select>
        <input type="text" id="${id}_reason" placeholder="사유(Bypass 시 필수)"
          style="width:110px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
      </div>`;
      break;
    case 'ok_ng':
      inputHtml=`<select id="${id}" onchange="evalRow(${item.no})"
        style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
        <option value="">선택</option><option>정상</option><option>이상</option>
      </select>`;
      break;
  }
  return `<tr id="row_${item.no}">
    <td style="text-align:center;font-weight:700;color:#003087;">${item.no}</td>
    <td style="font-weight:600;">${item.name}</td>
    <td style="font-size:11px;color:#495057;">${item.desc}</td>
    <td>${inputHtml}</td>
    <td style="text-align:center;" id="judge_${item.no}"><span style="color:#6c757d;font-size:11px;">—</span></td>
    <td><input type="text" id="note_${item.no}" placeholder="${item.note}"
      style="width:100%;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:11px;"></td>
  </tr>`;
}

function evalRow(no) {
  const item=DAILY_ITEMS[no-1];
  const id='df_'+no;
  const v=document.getElementById(id)?.value||'';
  let status=''; // ''=미입력, '정상', '이상'
  if(item.type==='status2'||item.type==='alarm'||item.type==='ok_ng'){
    if(v) status=(v==='이상'||v==='알람')?'이상':'정상';
  } else if(item.type==='ilock'){
    if(v) status=(v==='이상'||v==='Bypass')?'이상':'정상';
  } else if(item.type==='number'){
    const n=parseFloat(document.getElementById(id)?.value);
    if(!isNaN(n)) status='정상';
  } else if(item.type==='ab'){
    if(v) status='정상';
  } else if(item.type==='weight'){
    const va=parseFloat(document.getElementById('df_4a')?.value);
    const vb=parseFloat(document.getElementById('df_4b')?.value);
    if(!isNaN(va)||!isNaN(vb)) status='정상';
  }
  const cell=document.getElementById('judge_'+no);
  if(cell){
    if(status==='이상') cell.innerHTML='<span class="br" style="font-size:10px;">이상</span>';
    else if(status==='정상') cell.innerHTML='<span class="bg" style="font-size:10px;">정상</span>';
    else cell.innerHTML='<span style="color:#6c757d;font-size:11px;">—</span>';
  }
  updateOverallJudge();
}

function updateOverallJudge() {
  let hasAbn=false;
  DAILY_ITEMS.forEach(item=>{
    const v=document.getElementById('df_'+item.no)?.value||'';
    if(v==='이상'||v==='알람'||v==='Bypass') hasAbn=true;
  });
  const badge=document.getElementById('dailyStatusBadge');
  if(badge) badge.textContent=hasAbn?'⚠️ 이상 감지':'✅ 정상';
}

function clearDailyForm() {
  DAILY_ITEMS.forEach(item=>{
    const el=document.getElementById('df_'+item.no);
    if(el) el.value='';
    ['_ppm','_name','_reason'].forEach(s=>{
      const e2=document.getElementById('df_'+item.no+s);
      if(e2) e2.value='';
    });
    const n=document.getElementById('note_'+item.no);
    if(n) n.value='';
    const j=document.getElementById('judge_'+item.no);
    if(j) j.innerHTML='<span style="color:#6c757d;font-size:11px;">—</span>';
  });
  const e4a=document.getElementById('df_4a'); if(e4a) e4a.value='';
  const e4b=document.getElementById('df_4b'); if(e4b) e4b.value='';
  document.getElementById('dailyStatusBadge').textContent='—';
}

function submitDaily() {
  const date=document.getElementById('dailyDate').value;
  const gas=document.getElementById('dailyGas').value;
  const inspector=document.getElementById('dailyInspector').value||'미입력';
  if(!date||!gas){ alert('날짜와 가스를 선택해주세요.'); return; }

  let hasAbn=false;
  const vals=[];
  DAILY_ITEMS.forEach(item=>{
    const id='df_'+item.no;
    let v=document.getElementById(id)?.value||'';
    if(item.no===4){
      const a=document.getElementById('df_4a')?.value||'';
      const b=document.getElementById('df_4b')?.value||'';
      v=a+'/'+b;
    }
    if(item.type==='status2') v+=(document.getElementById(id+'_ppm')?.value?(' '+document.getElementById(id+'_ppm').value+'ppm'):'');
    if(item.type==='alarm')   v+=(document.getElementById(id+'_name')?.value?' '+document.getElementById(id+'_name').value:'');
    if(item.type==='ilock')   v+=(document.getElementById(id+'_reason')?.value?' ('+document.getElementById(id+'_reason').value+')'  :'');
    if(v==='이상'||v==='알람'||v==='Bypass'||v.startsWith('이상')||v.startsWith('Bypass')) hasAbn=true;
    vals.push(v||'—');
  });
  // If required fields missing and no abnormal → 확인필요
  let emptyReq=false;
  DAILY_ITEMS.forEach((item,idx)=>{
    if(['number','status2','alarm','ok_ng','ilock','ab'].includes(item.type)&&(vals[idx]==='—'||!vals[idx])) emptyReq=true;
  });
  const finalResult=hasAbn?'이상':(emptyReq?'확인필요':'정상');

  dailyRecords.unshift({date,gas,inspector,vals,result:finalResult});
  lsSave(LS.DAILY, dailyRecords);
  renderDailyHistory();
  renderDailyCalendar();
  clearDailyForm();
  showToast('✓ '+gas+' 점검 저장 ('+finalResult+')');
}

function renderDailyHistory() {
  const filter=document.getElementById('dailyHistFilter')?.value||'';
  const rows=filter ? dailyRecords.filter(r=>r.gas===filter) : dailyRecords;
  document.getElementById('dailyHistCount').textContent='총 '+rows.length+'건';
  const cols=['1차압','2차압','사용Cyl','무게A','무게B','배기차압','GasDet.','Alarm','Interlock','누출','고정'];
  document.getElementById('dailyHistBody').innerHTML=rows.map(r=>{
    const isAbn=r.result==='이상', isWarn=r.result==='확인필요';
    const judge=isAbn?'<span class="br" style="font-size:10px;">이상</span>'
      :isWarn?'<span class="bw" style="font-size:10px;">확인필요</span>'
      :'<span class="bg" style="font-size:10px;">정상</span>';
    const rowBg=isAbn?'background:#fff5f5;':isWarn?'background:#fffdf0;':'';
    const valCells=r.vals.map((v,i)=>{
      const abn=v==='이상'||v==='알람'||v==='Bypass'||v.startsWith('이상')||v.startsWith('Bypass');
      return `<td style="${abn?'color:#dc3545;font-weight:700;':''}font-size:11px;">${v}</td>`;
    }).join('');
    return `<tr style="${rowBg}">
      <td style="white-space:nowrap;">${r.date}</td>
      <td><span style="background:${D.hazardous.has(r.gas)?'#f8d7da':'#d1ecf1'};color:${D.hazardous.has(r.gas)?'#842029':'#0c5460'};font-size:10px;font-weight:700;padding:1px 5px;border-radius:5px;">${r.gas}</span></td>
      <td>${r.inspector}</td>
      ${valCells}
      <td style="text-align:center;">${judge}</td>
    </tr>`;
  }).join('') || '<tr><td colspan="16" style="text-align:center;color:#6c757d;padding:20px;">점검 이력이 없습니다.</td></tr>';
}

// ── DAILY CALENDAR ───────────────────────────────
let dailyCalYear=2026, dailyCalMonth=5; // 0-indexed: 5=June
let n2CalYear=2026, n2CalMonth=5;
const CAL_MN=['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'];
const CAL_DN=['일','월','화','수','목','금','토'];
const TODAY_STR='2026-06-13';
let dailySelDate=null, n2SelDate=null;

function _calBuildHtml(records, year, month, accentColor, onClickFn) {
  const firstDay=new Date(year,month,1).getDay();
  const daysInMonth=new Date(year,month+1,0).getDate();
  const dateMap={};
  records.forEach(r=>{const k=r.date; if(!dateMap[k])dateMap[k]=[]; dateMap[k].push(r);});
  const btnStyle=`background:#EEF3FA;border:1px solid #C8D8F0;color:${accentColor};padding:4px 12px;border-radius:5px;font-size:12px;font-weight:700;cursor:pointer;`;
  let h=`<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
    <button style="${btnStyle}" onclick="${onClickFn}(-1)">◀</button>
    <span style="font-weight:700;color:${accentColor};font-size:13px;">${year}년 ${CAL_MN[month]}</span>
    <button style="${btnStyle}" onclick="${onClickFn}(1)">▶</button>
  </div><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;margin-bottom:3px;">`;
  CAL_DN.forEach((d,i)=>{
    h+=`<div style="text-align:center;font-size:10px;font-weight:600;color:${i===0?'#dc3545':i===6?accentColor:'#6c757d'};padding:2px 0;">${d}</div>`;
  });
  h+=`</div><div style="display:grid;grid-template-columns:repeat(7,1fr);gap:2px;">`;
  for(let i=0;i<firstDay;i++) h+=`<div style="min-height:44px;"></div>`;
  for(let d=1;d<=daysInMonth;d++){
    const ds=`${year}-${String(month+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
    const recs=dateMap[ds]||[];
    const cnt=recs.length;
    const hasAbn=recs.some(r=>r.result==='이상');
    const hasWarn=recs.some(r=>r.result==='확인필요');
    const isToday=ds===TODAY_STR;
    let bg='#FFFFFF', dotClr='';
    if(cnt>0){
      if(hasAbn){bg='#FFF0F0';dotClr='#dc3545';}
      else if(hasWarn){bg='#FFFBF0';dotClr='#E8960A';}
      else{bg='#F0FFF4';dotClr='#28a745';}
    }
    const detailFn=onClickFn==='moveDailyCal'?'showDailyDateDetail':'showN2DateDetail';
    h+=`<div onclick="${detailFn}('${ds}')" data-date="${ds}"
      style="min-height:44px;border:${isToday?`2px solid ${accentColor}`:'1px solid #E8EEF5'};border-radius:5px;padding:3px;cursor:pointer;background:${bg};"
      onmouseover="this.style.boxShadow='0 2px 6px rgba(0,0,0,0.12)'"
      onmouseout="this.style.boxShadow=''">
      <div style="font-size:11px;font-weight:${isToday?'800':'400'};color:${isToday?accentColor:dotClr||'#495057'};text-align:right;">${d}</div>
      ${cnt>0?`<div style="text-align:center;font-size:10px;font-weight:700;color:${dotClr};margin-top:2px;">${cnt}건</div>`:''}
    </div>`;
  }
  h+=`</div>`;
  // Monthly summary
  const monthStr=String(month+1).padStart(2,'0');
  const yrStr=String(year);
  const mRecs=records.filter(r=>{const s=String(r.date).slice(0,7);return s===yrStr+'-'+monthStr;});
  const mDates=[...new Set(mRecs.map(r=>r.date))];
  const mChk=mDates.length;
  const mOk=mDates.filter(dt=>mRecs.filter(r=>r.date===dt).every(r=>r.result==='정상')).length;
  const mAbn=mDates.filter(dt=>mRecs.filter(r=>r.date===dt).some(r=>r.result==='이상'||r.result==='확인필요')).length;
  const mTot=daysInMonth;
  const mPct=mTot>0?Math.round(mChk/mTot*100):0;
  h+=`<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-top:8px;padding:8px;background:#F5F8FD;border-radius:7px;border:1px solid #E4EDF8;">
    <div style="text-align:center;"><div style="font-size:9px;color:#7A96C0;font-weight:600;">점검률</div><div style="font-size:16px;font-weight:700;color:${mPct>=80?'#28a745':mPct>=50?'#E8960A':'#dc3545'};">${mPct}%</div></div>
    <div style="text-align:center;"><div style="font-size:9px;color:#7A96C0;font-weight:600;">점검일수</div><div style="font-size:16px;font-weight:700;color:#003087;">${mChk}일</div><div style="font-size:9px;color:#9AB0C8;">/${mTot}일</div></div>
    <div style="text-align:center;"><div style="font-size:9px;color:#7A96C0;font-weight:600;">정상일수</div><div style="font-size:16px;font-weight:700;color:#28a745;">${mOk}일</div></div>
    <div style="text-align:center;"><div style="font-size:9px;color:#7A96C0;font-weight:600;">이상/확인</div><div style="font-size:16px;font-weight:700;color:${mAbn>0?'#dc3545':'#9AB0C8'};">${mAbn}일</div></div>
  </div>`;
  return h;
}

function renderDailyCalendar() {
  const box=document.getElementById('dailyCalBox');
  if(!box) return;
  box.innerHTML=_calBuildHtml(dailyRecords,dailyCalYear,dailyCalMonth,'#003087','moveDailyCal');
  if(dailySelDate){const el=document.querySelector('#dailyCalBox [data-date="'+dailySelDate+'"]');if(el)el.style.outline='2px solid #003087';}
}
function moveDailyCal(dir) {
  dailyCalMonth+=dir;
  if(dailyCalMonth<0){dailyCalMonth=11;dailyCalYear--;}
  if(dailyCalMonth>11){dailyCalMonth=0;dailyCalYear++;}
  renderDailyCalendar();
}

function renderN2Calendar() {
  const box=document.getElementById('n2CalBox');
  if(!box) return;
  box.innerHTML=_calBuildHtml(n2Records,n2CalYear,n2CalMonth,'#1A6B45','moveN2Cal');
  if(n2SelDate){const el=document.querySelector('#n2CalBox [data-date="'+n2SelDate+'"]');if(el)el.style.outline='2px solid #1A6B45';}
}
function moveN2Cal(dir) {
  n2CalMonth+=dir;
  if(n2CalMonth<0){n2CalMonth=11;n2CalYear--;}
  if(n2CalMonth>11){n2CalMonth=0;n2CalYear++;}
  renderN2Calendar();
}

function normDate(s){if(!s)return s;return s.replace(/[./]/g,'-').replace(/-(\d)-/,'-0$1-').replace(/-(\d)$/,'-0$1');}
function showDailyDateDetail(dateStr) {
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
  if(!recs.length){
    detailEl.innerHTML='<div style="color:#6c757d;padding:28px;text-align:center;font-size:12px;">해당 날짜의 고압가스점검 이력이 없습니다.</div>';
    return;
  }
  const cols=['1차 압력','2차 압력','사용 실린더','무게A','무게B','배기 차압','Gas Detector','Alarm 상태','Interlock','누출 의심','실린더 고정'];
  detailEl.innerHTML=recs.map((r,ri)=>{
    const isAbn=r.result==='이상',isWarn=r.result==='확인필요';
    const judge=isAbn?'<span class="br">이상</span>':isWarn?'<span class="bw">확인필요</span>':'<span class="bg">정상</span>';
    const rows=cols.map((c,i)=>{
      const v=r.vals[i]||'—';
      const abn=v==='이상'||v==='알람'||v==='Bypass'||v.startsWith('이상')||v.startsWith('Bypass');
      return `<div style="display:flex;gap:4px;font-size:11px;"><span style="color:#7A96C0;min-width:80px;">${c}</span><span style="color:${abn?'#dc3545':'#333'};font-weight:${abn?'700':'400'};">${v}</span></div>`;
    }).join('');
    return `<div style="border:1px solid ${isAbn?'#f5c6cb':isWarn?'#ffe082':'#C8D8F0'};border-radius:7px;padding:10px 14px;margin-bottom:10px;background:${isAbn?'#fff5f5':isWarn?'#fffdf0':'#FAFCFF'};">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:700;font-size:12px;color:#003087;">[${ri+1}] ${r.gas} — ${r.inspector}</span>${judge}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px 20px;">${rows}</div>
    </div>`;
  }).join('');
}

function showN2DateDetail(dateStr) {
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
  if(!recs.length){
    detailEl.innerHTML='<div style="color:#6c757d;padding:28px;text-align:center;font-size:12px;">해당 날짜의 옥외질소탱크점검 이력이 없습니다.</div>';
    return;
  }
  const cols=['액면계','탱크 1차 압력','공급 2차 압력','기화기 상태','안전밸브/방출구','배관/밸브 누설','밸브 개폐 상태','차압/필터','외관 및 기초','주변 환경/표지'];
  detailEl.innerHTML=recs.map((r,ri)=>{
    const isAbn=r.result==='이상';
    const judge=isAbn?'<span class="br">이상</span>':'<span class="bg">정상</span>';
    const rows=cols.map((c,i)=>{
      const v=r.vals[i]||'—';
      const abn=v==='이상'||v.includes('이상');
      return `<div style="display:flex;gap:4px;font-size:11px;"><span style="color:#6c757d;min-width:90px;">${c}</span><span style="color:${abn?'#dc3545':'#333'};font-weight:${abn?'700':'400'};">${v}</span></div>`;
    }).join('');
    return `<div style="border:1px solid ${isAbn?'#f5c6cb':'#B8E0CB'};border-radius:7px;padding:10px 14px;margin-bottom:10px;background:${isAbn?'#fff5f5':'#F0FBF5'};">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span style="font-weight:700;font-size:12px;color:#1A6B45;">[${ri+1}] ${r.tank} — ${r.inspector}</span>${judge}
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:3px 20px;">${rows}</div>
    </div>`;
  }).join('');
}

function initDailyCheck() {
  // Set today
  document.getElementById('dailyDate').value='2026-06-13';

  // Populate gas selector
  const gs=document.getElementById('dailyGas');
  gasCabinets.forEach(g=>{
    const o=document.createElement('option'); o.value=g; o.textContent=g;
    gs.appendChild(o);
  });

  // History filter
  const hf=document.getElementById('dailyHistFilter');
  gasCabinets.forEach(g=>{
    const o=document.createElement('option'); o.value=g; o.textContent=g;
    hf.appendChild(o);
  });

  // Build form
  document.getElementById('dailyFormBody').innerHTML=DAILY_ITEMS.map(buildDailyFormRow).join('');

  renderDailyHistory();
  renderDailyCalendar();
}

// ── N2 TANK INSPECTION ───────────────────────────
const N2_ITEMS = [
  {no:1,  name:'액면계',          desc:'저장탱크 액면/잔량 확인',                      type:'level',  unit:'%',   note:'잔량 추이 관리 (Low Level 접근 주의)'},
  {no:2,  name:'탱크 1차 압력',   desc:'탱크 내부 압력 확인',                          type:'number', unit:'MPa', note:'탱크 압력계 기준'},
  {no:3,  name:'공급 2차 압력',   desc:'Regulator 후단 공급압력 확인',                 type:'number', unit:'MPa', note:'공장 공급압 기준'},
  {no:4,  name:'기화기 상태',     desc:'기화기 결빙·손상·이상소음 확인',               type:'ok_ng',  unit:'',    note:'Vaporizer — 과도한 결빙·공급불량 주의'},
  {no:5,  name:'안전밸브/방출구', desc:'안전밸브 주변 막힘·방출 흔적 확인',            type:'ok_ng',  unit:'',    note:'방출구 방향 확인'},
  {no:6,  name:'배관/밸브 누설',  desc:'밸브·플랜지·연결부 누설 확인',                type:'ok_ng',  unit:'',    note:'서리·소리·압력저하 시 이상 판정'},
  {no:7,  name:'밸브 개폐 상태',  desc:'Main/공급/By-pass 밸브 상태 확인',             type:'ok_ng',  unit:'',    note:'운전상태와 밸브포지션 불일치 = 이상'},
  {no:8,  name:'차압/필터',       desc:'필터 또는 차압계 상태 확인',                   type:'dp',     unit:'kPa', note:'해당 설비 있는 경우 — 차압 상승 주의'},
  {no:9,  name:'외관 및 기초',    desc:'탱크 외관·도장·부식·지지대·앵커 확인',        type:'ok_ng',  unit:'',    note:'옥외 노출부 — 부식·기초균열·앵커 풀림'},
  {no:10, name:'주변 환경/표지',  desc:'출입통제·적치물·충돌방지대·위험표지 확인',    type:'ok_ng',  unit:'',    note:'안전거리 확보·표지 훼손·방호대 손상'},
];

let n2Records = [
  {date:'2026-06-02',tank:'N2-TANK-01',inspector:'김지수',vals:['88','1.45','0.53','정상','정상','정상','정상','14','정상','정상'],result:'정상'},
  {date:'2026-06-03',tank:'N2-TANK-02',inspector:'이민준',vals:['72','1.39','0.51','정상','정상','정상','정상','11','정상','정상'],result:'정상'},
  {date:'2026-06-04',tank:'N2-TANK-01',inspector:'박서연',vals:['85','1.44','0.52','정상','정상','정상','정상','13','정상','정상'],result:'정상'},
  {date:'2026-06-05',tank:'N2-TANK-02',inspector:'최동현',vals:['68','1.38','0.50','정상','정상','정상','정상','10','정상','정상'],result:'정상'},
  {date:'2026-06-06',tank:'N2-TANK-01',inspector:'정유진',vals:['82','1.42','0.52','정상','정상','정상','정상','12','정상','정상'],result:'정상'},
  {date:'2026-06-09',tank:'N2-TANK-01',inspector:'강민서',vals:['79','1.41','0.51','정상','정상','정상','정상','12','정상','정상'],result:'정상'},
  {date:'2026-06-10',tank:'N2-TANK-02',inspector:'윤재원',vals:['66','1.38','0.50','정상','정상','정상','정상','10','정상','정상'],result:'정상'},
  {date:'2026-06-11',tank:'N2-TANK-01',inspector:'임하늘',vals:['76','1.40','0.51','정상','정상','정상','정상','11','정상','정상'],result:'정상'},
  {date:'2026-06-11',tank:'N2-TANK-02',inspector:'오승현',vals:['63','1.37','0.50','이상','정상','정상','정상','10','정상','정상'],result:'이상'},
  {date:'2026-06-12',tank:'N2-TANK-01',inspector:'황지민',vals:['74','1.40','0.51','정상','정상','이상','정상','13','정상','정상'],result:'이상'},
  {date:'2026-06-13',tank:'N2-TANK-02',inspector:'신현우',vals:['61','1.37','0.49','정상','정상','정상','정상','11','정상','정상'],result:'정상'},
  {date:'2026-06-14',tank:'N2-TANK-01',inspector:'조예린',vals:['83','1.43','0.52','정상','정상','정상','정상','13','정상','정상'],result:'정상'},
];

function buildN2Row(item) {
  const id='n2_'+item.no;
  let inp='';
  switch(item.type){
    case 'level':
      inp=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${id}" min="0" max="100" step="0.1" placeholder="0–100"
          style="width:80px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${item.no})">
        <span style="font-size:11px;color:#6c757d;">%</span>
        <input type="number" id="${id}_L" step="1" placeholder="L"
          style="width:70px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${item.no})">
        <span style="font-size:11px;color:#6c757d;">L</span>
      </div>`;
      break;
    case 'number':
      inp=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${id}" step="0.01" placeholder="수치 입력"
          style="width:90px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${item.no})">
        <span style="font-size:11px;color:#6c757d;">${item.unit}</span>
      </div>`;
      break;
    case 'dp':
      inp=`<div style="display:flex;gap:6px;align-items:center;">
        <input type="number" id="${id}_num" step="0.1" placeholder="수치"
          style="width:70px;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;" oninput="evalN2Row(${item.no})">
        <span style="font-size:11px;color:#6c757d;">kPa</span>
        <select id="${id}" onchange="evalN2Row(${item.no})"
          style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
          <option value="">선택</option><option>정상</option><option>이상</option>
        </select>
      </div>`;
      break;
    case 'ok_ng':
      inp=`<select id="${id}" onchange="evalN2Row(${item.no})"
        style="padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:12px;">
        <option value="">선택</option><option>정상</option><option>이상</option>
      </select>`;
      break;
  }
  return `<tr id="n2row_${item.no}">
    <td style="text-align:center;font-weight:700;color:#1A6B45;">${item.no}</td>
    <td style="font-weight:600;">${item.name}</td>
    <td style="font-size:11px;color:#495057;">${item.desc}</td>
    <td>${inp}</td>
    <td style="text-align:center;" id="n2judge_${item.no}"><span style="color:#6c757d;font-size:11px;">—</span></td>
    <td><input type="text" id="n2note_${item.no}" placeholder="${item.note}"
      style="width:100%;padding:4px 6px;border:1px solid #ced4da;border-radius:5px;font-size:11px;"></td>
  </tr>`;
}

const N2_JUDGE_OK   = '<span style="background:#d4edda;color:#155724;font-size:10px;font-weight:700;padding:2px 7px;border-radius:6px;">정상</span>';
const N2_JUDGE_ABN  = '<span style="background:#f8d7da;color:#842029;font-size:10px;font-weight:700;padding:2px 7px;border-radius:6px;">이상</span>';

function evalN2Row(no) {
  const item=N2_ITEMS[no-1];
  const id='n2_'+no;
  let abn=false;
  if(item.type==='ok_ng'){
    abn=document.getElementById(id)?.value==='이상';
  } else if(item.type==='dp'){
    abn=document.getElementById(id)?.value==='이상';
  } else if(item.type==='level'){
    const v=parseFloat(document.getElementById(id)?.value);
    abn=!isNaN(v)&&v<20;
  } else if(item.type==='number'){
    abn=false; // just needs a value
  }
  const cell=document.getElementById('n2judge_'+no);
  if(cell) cell.innerHTML=abn?N2_JUDGE_ABN:N2_JUDGE_OK;
  // update header badge
  let anyAbn=false;
  N2_ITEMS.forEach(it=>{
    const v=document.getElementById('n2_'+it.no)?.value||'';
    if(v==='이상') anyAbn=true;
    if(it.type==='level'){const lv=parseFloat(v);if(!isNaN(lv)&&lv<20)anyAbn=true;}
  });
}

function clearN2Form() {
  N2_ITEMS.forEach(item=>{
    const el=document.getElementById('n2_'+item.no); if(el) el.value='';
    const el2=document.getElementById('n2_'+item.no+'_L'); if(el2) el2.value='';
    const el3=document.getElementById('n2_'+item.no+'_num'); if(el3) el3.value='';
    const n=document.getElementById('n2note_'+item.no); if(n) n.value='';
    const j=document.getElementById('n2judge_'+item.no);
    if(j) j.innerHTML='<span style="color:#6c757d;font-size:11px;">—</span>';
  });
}

function submitN2() {
  const date=document.getElementById('n2Date').value;
  const tank=document.getElementById('n2Tank').value;
  const inspector=document.getElementById('n2Inspector').value||'미입력';
  if(!date){ alert('날짜를 입력해주세요.'); return; }

  let hasAbn=false;
  const vals=[];
  N2_ITEMS.forEach(item=>{
    const id='n2_'+item.no;
    let v='';
    if(item.type==='level'){
      const pct=document.getElementById(id)?.value||'';
      const L=document.getElementById(id+'_L')?.value||'';
      v=pct?(pct+'%'+(L?' / '+L+'L':'')):L?L+'L':'—';
      if(parseFloat(pct)<20) hasAbn=true;
    } else if(item.type==='dp'){
      const num=document.getElementById(id+'_num')?.value||'';
      const st=document.getElementById(id)?.value||'';
      v=(num?num+'kPa ':'')+st||'—';
      if(st==='이상') hasAbn=true;
    } else {
      v=document.getElementById(id)?.value||'—';
      if(v==='이상') hasAbn=true;
    }
    vals.push(v);
  });

  n2Records.unshift({date,tank,inspector,vals,result:hasAbn?'이상':'정상'});
  lsSave(LS.N2, n2Records);
  renderN2History();
  renderN2Calendar();
  clearN2Form();
  showToast('✓ '+tank+' 점검 저장 ('+(hasAbn?'이상':'정상')+')');
}

function renderN2History() {
  const filter=document.getElementById('n2HistFilter')?.value||'';
  const rows=filter?n2Records.filter(r=>r.tank===filter):n2Records;
  document.getElementById('n2HistCount').textContent='총 '+rows.length+'건';
  document.getElementById('n2HistBody').innerHTML=rows.map(r=>{
    const isAbn=r.result==='이상';
    const judge=isAbn?N2_JUDGE_ABN:N2_JUDGE_OK;
    const vcells=r.vals.map((v,i)=>{
      const abn=v==='이상'||v.includes('이상');
      return `<td style="${abn?'color:#dc3545;font-weight:700;':''}font-size:11px;white-space:nowrap;">${v}</td>`;
    }).join('');
    return `<tr style="${isAbn?'background:#fff5f5;':''}">
      <td style="white-space:nowrap;">${r.date}</td>
      <td><span class="bb">${r.tank}</span></td>
      <td>${r.inspector}</td>
      ${vcells}
      <td style="text-align:center;">${judge}</td>
    </tr>`;
  }).join('')||'<tr><td colspan="14" style="text-align:center;color:#6c757d;padding:20px;">점검 이력이 없습니다.</td></tr>';
}

function initN2Check() {
  document.getElementById('n2Date').value='2026-06-13';
  document.getElementById('n2FormBody').innerHTML=N2_ITEMS.map(buildN2Row).join('');
  renderN2History();
  renderN2Calendar();
}

// ── Gas Detector Management ───────────────────────
let gdData = [[1, "GD-001", "5F Gas Room", "NH₃", "GASTRON", "GTD-5000", "확산식", "ppm", "25ppm", "50ppm", 6, "2026-01-15", "정상", ""], [2, "GD-002", "5F Gas Cabinet Area", "H₂", "HONEYWELL", "MIDAS", "흡입식", "%LEL", "10%LEL", "25%LEL", 6, "2026-01-20", "정상", ""], [3, "GD-003", "5F VMB Area", "SiF₄", "GASTRON", "GTD-5000", "확산식", "ppm", "1ppm", "3ppm", 6, "2025-12-10", "정상", "감지방식 확인 필요"], [4, "GD-004", "4F Gas Room", "HF", "GASTRON", "GTD-5000EX", "전기화학식", "ppm", "1ppm", "3ppm", 6, "2026-02-05", "정상", ""], [5, "GD-005", "4F Gas Cabinet Area", "NF₃", "GASTRON", "GTD-5000", "적외선(NDIR)", "ppm", "10ppm", "25ppm", 6, "2026-02-05", "정상", ""], [6, "GD-006", "4F VMB Area", "NH₃", "GASTRON", "GTD-5000", "확산식", "ppm", "25ppm", "50ppm", 6, "2026-01-15", "정상", ""], [7, "GD-007", "3F Gas Room", "C₃F₈", "MSA", "Ultima X", "적외선(NDIR)", "ppm", "100ppm", "200ppm", 6, "2026-03-01", "정상", ""], [8, "GD-008", "3F Gas Cabinet Area", "C₄F₈", "MSA", "Ultima X", "적외선(NDIR)", "ppm", "100ppm", "200ppm", 6, "2026-03-01", "정상", ""], [9, "GD-009", "3F VMB Area", "CF₄", "MSA", "Ultima X", "적외선(NDIR)", "ppm", "100ppm", "200ppm", 6, "2026-03-01", "정상", ""], [10, "GD-010", "2F Gas Room", "H₂", "GASTRON", "GTS-200", "촉매연소식", "%LEL", "10%LEL", "25%LEL", 6, "2026-02-20", "정상", ""]];
// Fill placeholders for rows 11-100
for(let i=gdData.length+1;i<=100;i++){
  gdData.push([i,'GD-'+String(i).padStart(3,'0'),'','','','','','','','',6,'','','']);
}
let gdShowAll = false;
function toggleGDShowAll() {
  gdShowAll=!gdShowAll;
  const btn=document.getElementById('gdShowAllBtn');
  if(btn) btn.textContent=gdShowAll?'📋 등록 감지기만 보기':'📋 전체 보기 (미등록 포함)';
  renderGDTable();
}

function calcNextCal(lastCal, months) {
  if(!lastCal) return '';
  const d=new Date(lastCal);
  d.setMonth(d.getMonth()+months);
  return d.toISOString().slice(0,10);
}

function getCalStatus(nextCal, today) {
  if(!nextCal) return {text:'',style:'',diff:null};
  const diff=Math.ceil((new Date(nextCal)-today)/86400000);
  if(diff<0) return {text:'기한초과 D+'+Math.abs(diff),style:'color:#dc3545;font-weight:700;',diff};
  if(diff<=30) return {text:'D-'+diff,style:'color:#E8960A;font-weight:700;',diff};
  if(diff<=90) return {text:'D-'+diff,style:'color:#856404;',diff};
  return {text:'D-'+diff,style:'color:#28a745;',diff};
}

function gdRefreshNext(no) {
  const d=gdData[no-1];
  const nxt=calcNextCal(d[11],d[10]);
  const el=document.getElementById('gdnext_'+no); if(!el) return;
  if(!nxt){el.textContent='—';el.removeAttribute('style');return;}
  const cs=getCalStatus(nxt,new Date('2026-06-13'));
  el.textContent=nxt+(cs.text?' ('+cs.text+')':'');
  el.style.cssText=cs.style;
  updateGDKpi();
  saveGDData();
}

function updateGDKpi() {
  const today=new Date('2026-06-13');
  let total=0,overdue=0,soon30=0,abnormal=0;
  gdData.forEach(d=>{
    if(d[3]) total++;
    const nxt=calcNextCal(d[11],d[10]);
    if(nxt){const diff=Math.ceil((new Date(nxt)-today)/86400000);if(diff<0)overdue++;else if(diff<=30)soon30++;}
    if(d[12]==='이상') abnormal++;
  });
  document.getElementById('gdKpiGrid').innerHTML=`
    <div class="kpi-card"><div class="kpi-label">등록 감지기</div><div class="kpi-value">${total}대</div><div class="kpi-sub">총 100개 슬롯</div></div>
    <div class="kpi-card ${overdue>0?'kc-risk':'kc-ok'}"><div class="kpi-label">교정 기한초과</div><div class="kpi-value" style="color:${overdue>0?'#dc3545':'#28a745'}">${overdue}건</div><div class="kpi-sub">즉시 교정 필요</div></div>
    <div class="kpi-card ${soon30>0?'kc-warn':'kc-ok'}"><div class="kpi-label">30일내 교정</div><div class="kpi-value" style="color:${soon30>0?'#E8960A':'#28a745'}">${soon30}건</div><div class="kpi-sub">예정 접근</div></div>
    <div class="kpi-card ${abnormal>0?'kc-risk':'kc-ok'}"><div class="kpi-label">이상 감지기</div><div class="kpi-value" style="color:${abnormal>0?'#dc3545':'#28a745'}">${abnormal}대</div><div class="kpi-sub">즉시 점검</div></div>`;
  const ob=document.getElementById('gdOverdueBadge');
  if(ob) ob.textContent=overdue>0?'⚠️ '+overdue+'건 기한초과':'✅ 교정 정상';
}

const GD_INP = (val,idx,row,w='90px') =>
  `<input type="text" value="${val}" onchange="gdData[${row}][${idx}]=this.value;updateGDKpi();saveGDData();"
    style="width:${w};padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">`;

function renderGDRow(d, today) {
  const no=d[0]; const nxt=calcNextCal(d[11],d[10]); const cs=getCalStatus(nxt,today);
  const ri=no-1;
  // Row background based on urgency
  let rowBg='';
  if(d[12]==='이상') rowBg='background:#fff5ec;';
  else if(cs.diff!==null&&cs.diff<0) rowBg='background:#fff0f0;';
  else if(cs.diff!==null&&cs.diff<=30) rowBg='background:#fffdf0;';
  // D-Day badge
  let dBadge='<span style="font-size:10px;color:#9AB0C8;">—</span>';
  if(nxt&&cs.diff!==null) {
    if(cs.diff<0) dBadge='<span class="br">D+'+Math.abs(cs.diff)+'초과</span>';
    else if(cs.diff===0) dBadge='<span class="br">D-Day</span>';
    else if(cs.diff<=30) dBadge='<span class="bw">D-'+cs.diff+'</span>';
    else if(cs.diff<=90) dBadge='<span style="background:#FFF3CD;color:#856404;font-size:9px;font-weight:700;padding:2px 6px;border-radius:6px;">D-'+cs.diff+'</span>';
    else dBadge='<span class="bg">D-'+cs.diff+'</span>';
  }
  const stOpts=['','정상','점검중','교정중','이상'].map(v=>`<option ${d[12]===v?'selected':''} value="${v}">${v||'-'}</option>`).join('');
  return `<tr style="${rowBg}">
    <td style="text-align:center;font-weight:700;color:#003087;font-size:11px;">${no}</td>
    <td style="font-weight:600;font-size:11px;">${d[1]}</td>
    <td>${GD_INP(d[2],2,ri,'118px')}</td>
    <td>${GD_INP(d[3],3,ri,'58px')}</td>
    <td>${GD_INP(d[4],4,ri,'70px')}</td>
    <td>${GD_INP(d[5],5,ri,'82px')}</td>
    <td>${GD_INP(d[6],6,ri,'98px')}</td>
    <td>${GD_INP(d[7],7,ri,'68px')}</td>
    <td>${GD_INP(d[8],8,ri,'72px')}</td>
    <td>${GD_INP(d[9],9,ri,'72px')}</td>
    <td style="text-align:center;font-size:11px;">${d[10]}개월</td>
    <td><input type="date" value="${d[11]}" onchange="gdData[${ri}][11]=this.value;gdRefreshNext(${no});"
      style="width:105px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;"></td>
    <td id="gdnext_${no}" style="font-size:11px;">${nxt||'—'}</td>
    <td style="text-align:center;">${dBadge}</td>
    <td><select onchange="gdData[${ri}][12]=this.value;updateGDKpi();saveGDData();"
      style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">
      ${stOpts}</select></td>
    <td>${GD_INP(d[13],13,ri,'130px')}</td>
  </tr>`;
}

function renderGDTable() {
  const today=new Date('2026-06-13');
  const fLoc=document.getElementById('gdFilterLoc')?.value||'';
  const fGas=document.getElementById('gdFilterGas')?.value||'';
  const fSt=document.getElementById('gdFilterSt')?.value||'';
  const fCal=document.getElementById('gdFilterCal')?.value||'';
  // Base: registered only unless gdShowAll
  let base = gdShowAll ? gdData : gdData.filter(d=>d[3]);
  const filtered=base.filter(d=>{
    if(fLoc&&d[2]!==fLoc) return false;
    if(fGas&&d[3]!==fGas) return false;
    if(fSt&&d[12]!==fSt) return false;
    if(fCal){
      const nxt=calcNextCal(d[11],d[10]); if(!nxt) return false;
      const df=Math.ceil((new Date(nxt)-today)/86400000);
      if(fCal==='overdue'&&df>=0) return false;
      if(fCal==='soon30'&&(df<0||df>30)) return false;
      if(fCal==='soon90'&&(df<0||df>90)) return false;
    }
    return true;
  });
  // Priority sort: 기한초과(1) → 교정예정30일(2) → 이상(3) → 정상(4) → 미등록(5)
  filtered.sort((a,b)=>{
    const pri=d=>{
      if(!d[3]) return 5;
      if(d[12]==='이상') return 3;
      const nxt=calcNextCal(d[11],d[10]);
      if(nxt){const df=Math.ceil((new Date(nxt)-today)/86400000);if(df<0)return 1;if(df<=30)return 2;}
      return 4;
    };
    const pa=pri(a),pb=pri(b);
    return pa!==pb?pa-pb:a[0]-b[0];
  });
  const fc=document.getElementById('gdFilterCount');
  if(fc) fc.textContent='총 '+filtered.length+'건 표시'+(gdShowAll?'':', 등록 감지기만');
  document.getElementById('gdTableBody').innerHTML=filtered.map(d=>renderGDRow(d,today)).join('');
  updateGDKpi();
}

function initGD() {
  const locs=[...new Set(gdData.filter(d=>d[2]).map(d=>d[2]))].sort();
  const gases=[...new Set(gdData.filter(d=>d[3]).map(d=>d[3]))].sort();
  const lSel=document.getElementById('gdFilterLoc');
  locs.forEach(l=>{const o=document.createElement('option');o.value=l;o.textContent=l;lSel.appendChild(o);});
  const gSel=document.getElementById('gdFilterGas');
  gases.forEach(g=>{const o=document.createElement('option');o.value=g;o.textContent=g;gSel.appendChild(o);});
  renderGDTable();
}

// ── GD save helper ───────────────────────────────
function saveGDData() { lsSave(LS.GD, gdData); }

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
const mkContDocs=()=>CONT_DOC_NAMES.map(n=>({name:n,needed:'확인필요',status:'미준비',link:'',note:''}));
const mkContPlan=()=>CONT_PLAN_NAMES.map(n=>({name:n,status:'미작성'}));
let contractorData=[{"id": "C-001", "name": "특수가스 배관업체", "workType": "배관공사", "workDesc": "NH3 VMB 배관 연결", "material": "NH3", "facility": "NH3 VMB", "handlesChem": "Y", "reportTarget": "대상", "reportReason": "NH3 취급시설(VMB) 배관 연결 작업으로 유해화학물질 라인 개방 포함", "reportStatus": "준비중", "workDate": "2026-07-05", "reportDate": "2026-06-28", "docStatus": "일부완료", "receiptNo": "", "docLink": "", "remarks": "", "checklist": ["Y", "Y", "Y", "Y", "Y", "Y", "Y", "Y", "확인필요", "Y"], "docs": [{"name": "유해화학물질 취급 도급신고서", "needed": "필요", "status": "준비중", "link": "", "note": ""}, {"name": "신청인 주요 생산품 및 매출액 자료", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "도급인 주요 생산품 및 매출액 자료", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "수급인 주요 생산품 및 매출액 자료", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "도급계획서", "needed": "필요", "status": "준비중", "link": "", "note": ""}, {"name": "긴급 도급 사유서", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "수급인 교육 이수증", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "도급인 유해화학물질 영업허가증", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "작업허가서/TBM 기록", "needed": "필요", "status": "미준비", "link": "", "note": ""}], "planItems": [{"name": "작업명", "status": "완료"}, {"name": "작업장소", "status": "완료"}, {"name": "작업기간", "status": "완료"}, {"name": "도급사유", "status": "완료"}, {"name": "작업개요", "status": "완료"}, {"name": "대상 물질", "status": "완료"}, {"name": "대상 시설", "status": "완료"}, {"name": "예상 취급량", "status": "완료"}, {"name": "투입인력", "status": "완료"}, {"name": "수급인 보유 장비", "status": "작성중"}, {"name": "PPE 명세", "status": "작성중"}, {"name": "작업 전 조치", "status": "미작성"}, {"name": "작업 중 조치", "status": "미작성"}, {"name": "작업 후 조치", "status": "미작성"}, {"name": "작업허가서/TBM", "status": "미작성"}]}, {"id": "C-002", "name": "가스감지기 검교정업체", "workType": "검교정", "workDesc": "감지기 검교정 및 센서 점검", "material": "NH3, HF", "facility": "Gas Detector", "handlesChem": "확인필요", "reportTarget": "확인필요", "reportReason": "가스감지기 교정 작업 중 유해화학물질 노출 가능성 검토 필요", "reportStatus": "미검토", "workDate": "2026-07-15", "reportDate": "2026-07-08", "docStatus": "확인필요", "receiptNo": "", "docLink": "", "remarks": "", "checklist": ["Y", "N", "Y", "확인필요", "N", "N", "확인필요", "N", "확인필요", "Y"], "docs": [{"name": "유해화학물질 취급 도급신고서", "needed": "확인필요", "status": "미준비", "link": "", "note": ""}, {"name": "신청인 주요 생산품 및 매출액 자료", "needed": "확인필요", "status": "미준비", "link": "", "note": ""}, {"name": "도급인 주요 생산품 및 매출액 자료", "needed": "확인필요", "status": "미준비", "link": "", "note": ""}, {"name": "수급인 주요 생산품 및 매출액 자료", "needed": "확인필요", "status": "미준비", "link": "", "note": ""}, {"name": "도급계획서", "needed": "확인필요", "status": "미준비", "link": "", "note": ""}, {"name": "긴급 도급 사유서", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "수급인 교육 이수증", "needed": "확인필요", "status": "미준비", "link": "", "note": ""}, {"name": "도급인 유해화학물질 영업허가증", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "작업허가서/TBM 기록", "needed": "필요", "status": "미준비", "link": "", "note": ""}], "planItems": [{"name": "작업명", "status": "미작성"}, {"name": "작업장소", "status": "미작성"}, {"name": "작업기간", "status": "미작성"}, {"name": "도급사유", "status": "미작성"}, {"name": "작업개요", "status": "미작성"}, {"name": "대상 물질", "status": "미작성"}, {"name": "대상 시설", "status": "미작성"}, {"name": "예상 취급량", "status": "미작성"}, {"name": "투입인력", "status": "미작성"}, {"name": "수급인 보유 장비", "status": "미작성"}, {"name": "PPE 명세", "status": "미작성"}, {"name": "작업 전 조치", "status": "미작성"}, {"name": "작업 중 조치", "status": "미작성"}, {"name": "작업 후 조치", "status": "미작성"}, {"name": "작업허가서/TBM", "status": "미작성"}]}, {"id": "C-003", "name": "일반 전기업체", "workType": "전기/계장", "workDesc": "제어반 전원 작업", "material": "해당없음", "facility": "전기제어반", "handlesChem": "N", "reportTarget": "비대상", "reportReason": "유해화학물질 취급 행위 없음 — 전기 작업에 한정", "reportStatus": "비대상", "workDate": "2026-07-20", "reportDate": "해당없음", "docStatus": "해당없음", "receiptNo": "", "docLink": "", "remarks": "", "checklist": ["Y", "N", "N", "N", "N", "N", "N", "N", "N", "Y"], "docs": [{"name": "유해화학물질 취급 도급신고서", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "신청인 주요 생산품 및 매출액 자료", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "도급인 주요 생산품 및 매출액 자료", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "수급인 주요 생산품 및 매출액 자료", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "도급계획서", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "긴급 도급 사유서", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "수급인 교육 이수증", "needed": "불필요", "status": "해당없음", "link": "", "note": ""}, {"name": "도급인 유해화학물질 영업허가증", "needed": "필요", "status": "완료", "link": "", "note": ""}, {"name": "작업허가서/TBM 기록", "needed": "필요", "status": "완료", "link": "", "note": ""}], "planItems": [{"name": "작업명", "status": "해당없음"}, {"name": "작업장소", "status": "해당없음"}, {"name": "작업기간", "status": "해당없음"}, {"name": "도급사유", "status": "해당없음"}, {"name": "작업개요", "status": "해당없음"}, {"name": "대상 물질", "status": "해당없음"}, {"name": "대상 시설", "status": "해당없음"}, {"name": "예상 취급량", "status": "해당없음"}, {"name": "투입인력", "status": "해당없음"}, {"name": "수급인 보유 장비", "status": "해당없음"}, {"name": "PPE 명세", "status": "해당없음"}, {"name": "작업 전 조치", "status": "해당없음"}, {"name": "작업 중 조치", "status": "해당없음"}, {"name": "작업 후 조치", "status": "해당없음"}, {"name": "작업허가서/TBM", "status": "해당없음"}]}];
let contractorSelId=null;
let deadlineData=[{"id": "DL-001", "category": "교정", "item": "가스감지기 정기교정 (상반기)", "target": "GD-001~GD-010 전체", "material": "NH3,HF,H2,SiF4,NF3", "baseDate": "2026-06-14", "dueDate": "2026-07-15", "prepDate": "2026-06-24", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "가스감지기 관리", "relatedId": "GD-001", "note": "교정업체 예약 완료 (C-002)"}, {"id": "DL-002", "category": "검사", "item": "유해화학물질 취급시설 정기검사", "target": "5F Gas Room (NH3,HF,SiF4)", "material": "NH3,HF,SiF4", "baseDate": "2026-06-14", "dueDate": "2026-08-30", "prepDate": "2026-07-30", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "정기검사", "relatedId": "HI001", "note": "환경부 지정 검사기관 섭외 필요"}, {"id": "DL-003", "category": "교육", "item": "유해화학물질 종사자 교육 (연간)", "target": "전체 출입자 100명", "material": "", "baseDate": "2026-06-14", "dueDate": "2026-07-10", "prepDate": "2026-06-24", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "교육관리", "relatedId": "EDU-WT", "note": "16명 미이수 — 이수 독촉 필요"}, {"id": "DL-004", "category": "신고", "item": "유해화학물질 취급 도급신고", "target": "특수가스 배관업체 (C-001)", "material": "NH3", "baseDate": "2026-06-01", "dueDate": "2026-06-28", "prepDate": "2026-06-20", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "도급신고 관리", "relatedId": "C-001", "note": "작업 7일 전 신고 필수 — 준비중"}, {"id": "DL-005", "category": "검사", "item": "고압가스 완성검사 (NH3 VMB)", "target": "NH3 VMB", "material": "NH3", "baseDate": "2026-01-10", "dueDate": "2026-03-31", "prepDate": "2026-03-01", "doneDate": "2026-03-25", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "정기검사", "relatedId": "HG001", "note": "완료 — 검사필증 수령"}, {"id": "DL-006", "category": "검사", "item": "고압가스 정기검사 (H2 GC 2BT)", "target": "H2 Gas Cabinet (2BT)", "material": "H2", "baseDate": "2026-06-14", "dueDate": "2026-07-05", "prepDate": "2026-06-25", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "정기검사", "relatedId": "HG004", "note": "D-21 — 서류 준비 시작 필요"}, {"id": "DL-007", "category": "교정", "item": "NH3 감지기 차기 교정", "target": "GD-001, GD-006", "material": "NH3", "baseDate": "2026-01-15", "dueDate": "2026-07-15", "prepDate": "2026-06-30", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "가스감지기 관리", "relatedId": "GD-001", "note": "교정일 DL-001과 병합 처리 가능"}, {"id": "DL-008", "category": "검사", "item": "NH3 Gas Cabinet 정기검사", "target": "NH3 Gas Cabinet (5F)", "material": "NH3", "baseDate": "2026-06-14", "dueDate": "2026-08-10", "prepDate": "2026-07-20", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "정기검사", "relatedId": "HI005", "note": ""}, {"id": "DL-009", "category": "교육", "item": "취급자 교육 (기술기획파트)", "target": "기술기획파트 취급자 10명", "material": "", "baseDate": "2026-06-14", "dueDate": "2026-08-31", "prepDate": "2026-08-01", "doneDate": "", "manager": "한상휘", "needsEvidence": "Y", "relatedMenu": "교육관리", "relatedId": "EDU-HT", "note": "2명 미이수 — 연간 2회 의무"}];
let evidenceData=[{"id": "DOC-001", "docType": "성적서", "relatedWork": "가스감지기 교정 (2026-상반기)", "relatedId": "DL-001", "docName": "GD-004 HF 감지기 검교정 성적서 (2026-02)", "target": "GD-004", "issueDate": "2026-02-07", "expireDate": "2026-08-07", "storage": "사내 공유폴더/GD/교정/2026", "link": "", "status": "보관중", "manager": "한상휘", "note": ""}, {"id": "DOC-002", "docType": "성적서", "relatedWork": "가스감지기 교정 (2026-상반기)", "relatedId": "DL-001", "docName": "GD-001 NH3 감지기 검교정 성적서 (2026-01)", "target": "GD-001", "issueDate": "2026-01-17", "expireDate": "2026-07-17", "storage": "사내 공유폴더/GD/교정/2026", "link": "", "status": "만료임박", "manager": "한상휘", "note": "차기 교정 DL-001 예약 완료"}, {"id": "DOC-003", "docType": "검사필증", "relatedWork": "고압가스 완성검사", "relatedId": "DL-005", "docName": "NH3 VMB 고압가스 완성검사 필증", "target": "NH3 VMB", "issueDate": "2026-03-25", "expireDate": "2027-03-24", "storage": "사내 공유폴더/정기검사/2026/NH3-VMB", "link": "", "status": "등록", "manager": "한상휘", "note": "완성검사 통과"}, {"id": "DOC-004", "docType": "수료증", "relatedWork": "종사자 교육 (2026)", "relatedId": "DL-003", "docName": "유해화학물질 종사자교육 수료증 (2026-03)", "target": "전체 출입자 (84명 이수)", "issueDate": "2026-03-15", "expireDate": "2027-03-14", "storage": "사내 공유폴더/교육/수료증/2026", "link": "", "status": "등록", "manager": "한상휘", "note": "16명 미이수 — 추가 교육 일정 수립 중"}, {"id": "DOC-005", "docType": "신고서", "relatedWork": "도급신고 (C-001)", "relatedId": "DL-004", "docName": "유해화학물질 취급 도급신고서 (특수가스 배관업체)", "target": "C-001", "issueDate": "", "expireDate": "", "storage": "준비중", "link": "", "status": "준비중", "manager": "한상휘", "note": "2026-06-28 제출 예정"}, {"id": "DOC-006", "docType": "검사필증", "relatedWork": "정기검사 (HI005)", "relatedId": "DL-008", "docName": "NH3 Gas Cabinet 정기검사 필증", "target": "NH3 Gas Cabinet (5F)", "issueDate": "", "expireDate": "", "storage": "", "link": "", "status": "미등록", "manager": "한상휘", "note": "2026-08 검사 예정"}, {"id": "DOC-007", "docType": "기록지", "relatedWork": "N2 정기점검", "relatedId": "", "docName": "N2 탱크 정기점검 기록지 (2026-05)", "target": "N2-TANK-01, N2-TANK-02", "issueDate": "2026-05-31", "expireDate": "", "storage": "사내 공유폴더/N2/점검기록/2026", "link": "", "status": "등록", "manager": "한상휘", "note": ""}, {"id": "DOC-008", "docType": "작업허가서", "relatedWork": "NH3 실린더 교체", "relatedId": "", "docName": "NH3 실린더 교체 작업허가서 (2026-06-10)", "target": "NH3 Gas Cabinet", "issueDate": "2026-06-10", "expireDate": "2026-06-10", "storage": "현장 비치 후 회수 → 공유폴더", "link": "", "status": "보관중", "manager": "한상휘", "note": "SOP-001 준용 작업"}];
let msdsData=[{"id": "MSDS-001", "name": "NH3", "nameEn": "Ammonia", "cas": "7664-41-7", "supplier": "Linde Korea", "location": "5F Gas Room", "storage": "NH3 Gas Cabinet", "isHazChem": "Y", "isHP": "Y", "category": "독성", "hasMsds": "보유", "revDate": "2026-01-10", "lastCheckDate": "2026-06-01", "nextCheckDate": "2026-12-01", "postLocation": "5F Gas Room 게시함", "link": "", "label": "완료", "eduLinked": "완료", "relatedSopId": "SOP-001", "hazardSummary": "독성(흡입), 고압가스. TLV-TWA: 25ppm. LC50(rat): 4837ppm/1h.", "firstAid": "흡입: 즉시 신선한 공기로 이동, 의식 없으면 인공호흡. 눈/피부 노출: 다량의 물로 15분 이상 세척.", "handling": "방독마스크(NH3용) 착용, 환기 확인 후 작업. 가스누출 알람 작동 시 즉시 대피.", "ppe": "방독마스크(NH3용 정화통), 내화학 장갑, 보안경, Face Shield, 내화학복", "status": "정상", "manager": "한상휘", "note": ""}, {"id": "MSDS-002", "name": "HF", "nameEn": "Hydrogen Fluoride", "cas": "7664-39-3", "supplier": "Air Liquide Korea", "location": "5F Gas Room", "storage": "HF Gas Cabinet", "isHazChem": "Y", "isHP": "Y", "category": "독성·부식성", "hasMsds": "보유", "revDate": "2025-12-01", "lastCheckDate": "2026-04-01", "nextCheckDate": "2026-10-01", "postLocation": "5F Gas Room 게시함", "link": "", "label": "완료", "eduLinked": "완료", "relatedSopId": "SOP-002", "hazardSummary": "고독성, 부식성. TLV-C: 0.5ppm. 피부 침투 시 저칼슘혈증 위험. 생명을 위협하는 화학물질.", "firstAid": "흡입: 즉시 신선한 공기, 119 즉시 신고. 피부: 다량의 물로 세척 후 칼슘글루코네이트 겔 도포, 즉시 응급실.", "handling": "반드시 2인 1조 작업, HF 응급처치 훈련자만 취급. 칼슘글루코네이트 겔 상시 휴대.", "ppe": "HF용 내화학복, HF용 내화학 장갑(두께 0.4mm↑), 고글+Face Shield, 방독마스크(HF용)", "status": "SOP 연계 완료", "manager": "한상휘", "note": "최고 위험 등급 물질 — 추가 안전교육 필수"}, {"id": "MSDS-003", "name": "SiF4", "nameEn": "Silicon Tetrafluoride", "cas": "7783-61-1", "supplier": "Linde Korea", "location": "5F Gas Room", "storage": "SiF4 Gas Cabinet", "isHazChem": "Y", "isHP": "Y", "category": "독성", "hasMsds": "확인필요", "revDate": "", "lastCheckDate": "", "nextCheckDate": "2026-08-01", "postLocation": "", "link": "", "label": "확인필요", "eduLinked": "해당없음", "relatedSopId": "SOP-003", "hazardSummary": "독성, 부식성. 물과 반응 시 HF 생성 가능. TLV-C: 0.1ppm.", "firstAid": "흡입: 신선한 공기, 의사 호출. 눈: 다량의 물 세척. HF 생성 가능성 고려하여 응급실 이송.", "handling": "건조 조건 유지. 수분 접촉 금지. 내식성 배관 사용.", "ppe": "내화학 장갑, 고글, 방독마스크(산성가스용), Face Shield", "status": "확인필요", "manager": "한상휘", "note": "MSDS 보유 여부 확인 필요 — 공급사에 재요청 예정"}, {"id": "MSDS-004", "name": "NF3", "nameEn": "Nitrogen Trifluoride", "cas": "7783-54-2", "supplier": "SK Materials", "location": "4F Gas Room", "storage": "NF3 Gas Cabinet", "isHazChem": "Y", "isHP": "Y", "category": "독성·산화성", "hasMsds": "보유", "revDate": "2026-02-01", "lastCheckDate": "2026-05-01", "nextCheckDate": "2026-11-01", "postLocation": "4F Gas Room 게시함", "link": "", "label": "완료", "eduLinked": "완료", "relatedSopId": "", "hazardSummary": "독성, 강산화제. TLV-TWA: 10ppm. 연소 지원 물질로 가연성 물질과 격리 보관.", "firstAid": "흡입: 신선한 공기, 산소 투여. 눈: 다량의 물로 세척. 의사 호출.", "handling": "가연성 물질과 격리. 밸브 조작 시 화기 금지. 슬로우 오픈.", "ppe": "방독마스크(산성가스용), 내화학 장갑, 보안경", "status": "SOP 미연계", "manager": "한상휘", "note": "SOP 작성 예정 (2026-Q3)"}, {"id": "MSDS-005", "name": "C3F8", "nameEn": "Octafluoropropane", "cas": "76-19-7", "supplier": "Linde Korea", "location": "3F Gas Room", "storage": "C3F8 Gas Cabinet", "isHazChem": "Y", "isHP": "N", "category": "독성·온실가스", "hasMsds": "보유", "revDate": "2025-10-01", "lastCheckDate": "2026-03-01", "nextCheckDate": "2026-09-01", "postLocation": "3F Gas Room 게시함", "link": "", "label": "완료", "eduLinked": "해당없음", "relatedSopId": "", "hazardSummary": "질식성, 고농도 노출 시 의식 상실. GWP: 8900. 누출 시 환기 필수.", "firstAid": "흡입: 신선한 공기, 산소 투여. 의식 없으면 인공호흡.", "handling": "밀폐 공간 작업 금지. 환기 충분히 확보.", "ppe": "산소 농도계 휴대, 방독마스크(필요 시), 보안경", "status": "정상", "manager": "한상휘", "note": "온실가스 관리 대장 별도 유지"}, {"id": "MSDS-006", "name": "KOH", "nameEn": "Potassium Hydroxide", "cas": "1310-58-3", "supplier": "OCI", "location": "Utility Area", "storage": "화학물질 보관소", "isHazChem": "Y", "isHP": "N", "category": "부식성", "hasMsds": "보유", "revDate": "2025-08-01", "lastCheckDate": "2026-02-01", "nextCheckDate": "2026-08-01", "postLocation": "화학물질 보관소 게시함", "link": "", "label": "완료", "eduLinked": "완료", "relatedSopId": "SOP-005", "hazardSummary": "강염기 부식성 물질. pH 13.5 이상. 눈 노출 시 실명 위험. 피부 심부 화상 가능.", "firstAid": "눈: 다량의 물로 15분 이상 세척 후 즉시 응급실. 피부: 물로 15분 세척. 섭취: 구토 유발 금지, 물 음용 후 응급실.", "handling": "얼굴 보호구 필수. 산성 물질과 격리. 누출 시 물로 희석 후 처리.", "ppe": "Face Shield+고글, 내화학 앞치마, 내화학 장갑(긴팔형), 고무장화", "status": "정상", "manager": "한상휘", "note": "KOH 리사이클 시스템 연동 물질"}, {"id": "MSDS-007", "name": "H2", "nameEn": "Hydrogen", "cas": "1333-74-0", "supplier": "Linde Korea", "location": "5F/3F Gas Room", "storage": "H2 Gas Cabinet", "isHazChem": "N", "isHP": "Y", "category": "인화성", "hasMsds": "보유", "revDate": "2025-09-01", "lastCheckDate": "2025-12-01", "nextCheckDate": "2026-06-01", "postLocation": "Gas Room 게시함", "link": "", "label": "완료", "eduLinked": "필요", "relatedSopId": "", "hazardSummary": "인화성(LFL 4%, UFL 75%). 고압가스. 무색무취로 누출 감지 어려움. 정전기 위험.", "firstAid": "흡입(질식): 신선한 공기, 산소. 화상: 즉시 냉각 후 응급실.", "handling": "화기 금지. 정전기 접지 필수. 환기 충분. H2 감지기 정상 작동 확인 후 작업.", "ppe": "방폭형 장갑, 보안경, 방폭 공구 사용", "status": "교육연계 필요", "manager": "한상휘", "note": "교육 자료에 H2 인화성 위험 내용 추가 필요"}, {"id": "MSDS-008", "name": "N2", "nameEn": "Nitrogen", "cas": "7727-37-9", "supplier": "Linde Korea", "location": "Utility Area", "storage": "N2 탱크(외부)", "isHazChem": "N", "isHP": "Y", "category": "질식성", "hasMsds": "보유", "revDate": "2025-06-01", "lastCheckDate": "2026-01-01", "nextCheckDate": "2026-07-01", "postLocation": "Utility Area 게시함 / N2 공급실", "link": "", "label": "완료", "eduLinked": "해당없음", "relatedSopId": "SOP-006", "hazardSummary": "질식성 가스. 고농도 시 산소 결핍 유발. 밀폐 공간 작업 시 특히 주의.", "firstAid": "흡입(질식): 즉시 신선한 공기, 산소 공급, 119 신고.", "handling": "밀폐 공간 진입 전 산소 농도 측정(18% 이상 확인). 환기 충분.", "ppe": "산소 농도계 휴대 필수", "status": "정상", "manager": "한상휘", "note": "N2 정기점검 일지 별도 유지"}, {"id": "MSDS-009", "name": "SF6", "nameEn": "Sulfur Hexafluoride", "cas": "2551-62-4", "supplier": "Linde Korea", "location": "3F Gas Room", "storage": "SF6 Gas Cabinet", "isHazChem": "Y", "isHP": "N", "category": "독성·온실가스", "hasMsds": "보유", "revDate": "2025-11-01", "lastCheckDate": "2026-04-01", "nextCheckDate": "2026-10-01", "postLocation": "3F Gas Room 게시함", "link": "", "label": "완료", "eduLinked": "해당없음", "relatedSopId": "", "hazardSummary": "질식성. GWP: 23500. 고농도 시 의식 상실. 분해산물(SOF2 등) 독성 주의.", "firstAid": "흡입: 신선한 공기. 분해산물 노출 의심 시 즉시 응급실.", "handling": "환기 충분. 밀폐 공간 작업 금지. 온실가스 관리 기록 유지.", "ppe": "산소 농도계, 방독마스크(필요 시)", "status": "정상", "manager": "한상휘", "note": "온실가스 배출량 관리 대장 별도 기록"}, {"id": "MSDS-010", "name": "LO2", "nameEn": "Liquid Oxygen", "cas": "7782-44-7", "supplier": "Air Liquide Korea", "location": "Utility Area", "storage": "LO2 탱크(외부)", "isHazChem": "N", "isHP": "Y", "category": "산화성·극저온", "hasMsds": "보유", "revDate": "2026-01-01", "lastCheckDate": "2026-05-01", "nextCheckDate": "2026-11-01", "postLocation": "Utility Area 게시함", "link": "", "label": "완료", "eduLinked": "필요", "relatedSopId": "", "hazardSummary": "강산화제. 극저온(-183°C). 가연성 물질 산화 촉진. 극저온 화상 위험.", "firstAid": "극저온 화상: 빠르게 따뜻한 물(38~42°C)로 세척, 응급실. 흡입: 신선한 공기.", "handling": "가연성 물질 격리. 극저온 보호 장갑 착용. 슬로우 오픈.", "ppe": "극저온 장갑, Face Shield, 보호복(내화학)", "status": "교육연계 필요", "manager": "한상휘", "note": "LO2 탱크 정기점검 시 추가 PPE 착용 필요"}];
let sopData=[{"id": "SOP-001", "sopName": "NH3 실린더 교체 SOP", "workType": "실린더 교체", "material": "NH3", "facility": "NH3 Gas Cabinet (5F)", "relatedMsdsId": "MSDS-001", "version": "Rev.1", "initDate": "2026-01-10", "lastRevDate": "2026-06-01", "nextReviewDate": "2027-06-01", "author": "한상휘", "reviewer": "박준혁 팀장", "approver": "소장", "approvalStatus": "승인완료", "eduLinked": "완료", "ppe": "내화학복(전신), 내화학 장갑, 고글, Face Shield, 방독마스크(NH3용 황색 정화통)", "beforeWork": "① MSDS 확인 및 숙지 ② 작업허가서 취득 ③ 환기팬 작동 확인 ④ LOTO 적용 ⑤ PPE 전착용 ⑥ 가스감지기(GD-001, GD-006) 정상 확인", "duringWork": "① 감시자 1명 배치 ② 환기 유지(환기팬 ON) ③ 감지기 상태 상시 모니터링 ④ 실린더 교체 후 연결부 Leak Test ⑤ 이상 시 즉시 중단", "afterWork": "① Leak Test(비눗물/검지지) 재확인 ② 밸브 잠금 상태 확인 ③ LOTO 해제 ④ 작업일지 작성 ⑤ 감지기 알람 리셋", "emergency": "① 누출 감지 시 즉시 작업 중단 ② 밸브 차단 ③ 전원 차단 ④ 대피(바람 방향 유의) ⑤ 119 신고 ⑥ 관리자 즉시 보고", "link": "", "status": "정상", "manager": "한상휘", "note": "반기 1회 재교육 실시"}, {"id": "SOP-002", "sopName": "HF 배관작업 SOP", "workType": "배관작업", "material": "HF", "facility": "HF Gas Cabinet (5F)", "relatedMsdsId": "MSDS-002", "version": "Rev.0", "initDate": "2026-03-01", "lastRevDate": "2026-03-01", "nextReviewDate": "2027-03-01", "author": "한상휘", "reviewer": "박준혁 팀장", "approver": "", "approvalStatus": "검토중", "eduLinked": "완료", "ppe": "HF용 내화학복(전신), HF용 내화학 장갑(두께 0.4mm↑), 고글+Face Shield(일체형), 방독마스크(HF용 백색 정화통), 칼슘글루코네이트 겔 상시 휴대", "beforeWork": "① MSDS(MSDS-002) 확인 ② HF 응급처치 훈련 이수자 확인 ③ 작업허가서 취득 ④ N2 Purge 실시 ⑤ 칼슘글루코네이트 겔 현장 비치 ⑥ PPE 착용", "duringWork": "① 감시자 1명 필수 배치 ② HF 감지기(GD-004) 상시 확인 ③ 누출부위 육안 확인 ④ 최소 인원(2인) 투입 ⑤ 30분마다 상황 보고", "afterWork": "① Leak Test 실시 ② N2 Purge 후 복구 ③ 밸브 잠금 확인 ④ 기록 작성 ⑤ 칼슘글루코네이트 겔 재보충", "emergency": "① HF 누출 시 즉시 대피(바람 방향 등지) ② 피부 노출: 즉시 물로 세척 후 칼슘글루코네이트 겔 도포 ③ 119 신고 및 응급실 이송 ④ 절대 방치 금지", "link": "", "status": "승인필요", "manager": "한상휘", "note": "승인자(소장) 확정 후 최종 승인 예정. HF 특성상 최우선 처리 필요."}, {"id": "SOP-003", "sopName": "SiF4 Hook-up SOP", "workType": "Hook-up", "material": "SiF4", "facility": "SiF4 Gas Cabinet (5F)", "relatedMsdsId": "MSDS-003", "version": "Draft", "initDate": "2026-05-01", "lastRevDate": "", "nextReviewDate": "", "author": "한상휘", "reviewer": "", "approver": "", "approvalStatus": "작성중", "eduLinked": "해당없음", "ppe": "내화학복, 방독마스크(산성가스용), 고글+Face Shield, 내화학 장갑", "beforeWork": "(작성 예정)", "duringWork": "(작성 예정)", "afterWork": "(작성 예정)", "emergency": "누출 시 대피, 119 신고. SiF4+수분 → HF 발생 가능 — HF SOP 비상조치 준용.", "link": "", "status": "MSDS 확인 필요", "manager": "한상휘", "note": "MSDS-003 확인 완료 후 SOP 완성 예정 (2026-08)"}, {"id": "SOP-004", "sopName": "가스감지기 알람 대응 SOP", "workType": "비상대응", "material": "공통", "facility": "전 층 Gas Detector", "relatedMsdsId": "해당없음", "version": "Rev.1", "initDate": "2025-12-01", "lastRevDate": "2026-01-01", "nextReviewDate": "2027-01-01", "author": "한상휘", "reviewer": "박준혁 팀장", "approver": "소장", "approvalStatus": "승인완료", "eduLinked": "필요", "ppe": "방독마스크(해당 가스 정화통), 보호복 (현장 상황에 따라 선택)", "beforeWork": "① 알람 발생 층 즉시 확인 ② 알람 가스 종류 파악 ③ 해당 MSDS 확인 ④ 대피 준비 태세", "duringWork": "① 가스 종류·농도 확인 (감지기 디스플레이) ② 1차 알람: 경고(작업 중단, 원인 파악) ③ 2차 알람: 즉시 대피 지시 ④ 비상연락망 가동", "afterWork": "① 원인 조사 및 기록 ② 가스 공급 차단 후 환기 ③ 재발 방지 대책 수립 ④ 관련 기관 보고(필요 시)", "emergency": "① 지속 알람: 즉시 전원 대피 ② 비상구 이용 ③ 119 + 관리소장 동시 신고 ④ 대피 후 인원 확인", "link": "", "status": "교육연계 필요", "manager": "한상휘", "note": "비상대응 훈련 반기 1회 실시 필요"}, {"id": "SOP-005", "sopName": "KOH 취급 및 보충 SOP", "workType": "점검", "material": "KOH", "facility": "KOH 리사이클 시스템 / 화학물질 보관소", "relatedMsdsId": "MSDS-006", "version": "Rev.1", "initDate": "2025-11-01", "lastRevDate": "2026-02-01", "nextReviewDate": "2027-02-01", "author": "한상휘", "reviewer": "박준혁 팀장", "approver": "소장", "approvalStatus": "승인완료", "eduLinked": "완료", "ppe": "Face Shield+고글, 내화학 앞치마, 내화학 장갑(긴팔형), 고무장화, 내화학복(전신 필요 시)", "beforeWork": "① MSDS(MSDS-006) 확인 ② 보호구 착용 ③ 누출 대응 자재(흡착포, 중화제) 준비 ④ 환기 확인", "duringWork": "① 슬로우 오픈으로 밸브 조작 ② 누출 여부 육안 확인 ③ 눈 보호(Face Shield) 상시 착용", "afterWork": "① 밸브 잠금 확인 ② 사용 용기 밀봉 보관 ③ 작업 구역 세척 ④ 작업일지 기록", "emergency": "① 눈 노출: 즉시 다량의 물로 15분 세척 후 응급실 ② 피부: 다량의 물 세척 ③ 섭취: 구토 유발 금지, 응급실", "link": "", "status": "정상", "manager": "한상휘", "note": ""}, {"id": "SOP-006", "sopName": "N2 공급 설비 점검 SOP", "workType": "점검", "material": "N2", "facility": "N2 탱크 / N2 공급 라인", "relatedMsdsId": "MSDS-008", "version": "Rev.0", "initDate": "2025-10-01", "lastRevDate": "2025-10-01", "nextReviewDate": "2026-10-01", "author": "한상휘", "reviewer": "", "approver": "", "approvalStatus": "검토중", "eduLinked": "해당없음", "ppe": "산소 농도계 필수 휴대, 보안경, 보호장갑", "beforeWork": "① 산소 농도 측정(18% 이상 확인) ② 환기 확인 ③ 개인 산소 농도계 착용", "duringWork": "① 산소 농도 상시 모니터링 ② 밀폐 공간 진입 금지 ③ 2인 1조 작업", "afterWork": "① 밸브 잠금 확인 ② 산소 농도 재확인 ③ 점검 기록 작성", "emergency": "① 산소 결핍 의심 시 즉시 대피 ② 119 신고 ③ 구조 시 구조자도 보호장비 필수 착용", "link": "", "status": "승인필요", "manager": "한상휘", "note": "N2 정기점검 일지와 연계"}, {"id": "SOP-007", "sopName": "NF3 실린더 교체 SOP", "workType": "실린더 교체", "material": "NF3", "facility": "NF3 Gas Cabinet (4F)", "relatedMsdsId": "MSDS-004", "version": "", "initDate": "", "lastRevDate": "", "nextReviewDate": "", "author": "한상휘", "reviewer": "", "approver": "", "approvalStatus": "작성중", "eduLinked": "해당없음", "ppe": "내화학복, 방독마스크(산성가스용), 고글, 내화학 장갑", "beforeWork": "(작성 예정)", "duringWork": "(작성 예정)", "afterWork": "(작성 예정)", "emergency": "NF3 누출 시 즉시 대피, 산화성 가스이므로 가연성 물질 즉시 격리, 119 신고.", "link": "", "status": "작성중", "manager": "한상휘", "note": "MSDS-004 연계 예정"}, {"id": "SOP-008", "sopName": "H2 Gas Cabinet 정기점검 SOP", "workType": "점검", "material": "H2", "facility": "H2 Gas Cabinet", "relatedMsdsId": "MSDS-007", "version": "Rev.0", "initDate": "2026-04-01", "lastRevDate": "2026-04-01", "nextReviewDate": "2027-04-01", "author": "한상휘", "reviewer": "박준혁 팀장", "approver": "", "approvalStatus": "검토중", "eduLinked": "필요", "ppe": "방폭형 보호장갑, 보안경, 정전기 방지 의류, 방폭 공구", "beforeWork": "① 화기 금지 표시 확인 ② 정전기 접지 확인 ③ 환기 팬 작동 ④ H2 감지기 정상 확인", "duringWork": "① 화기 및 전자기기 사용 금지 ② 슬로우 오픈 ③ Leak Test 실시 ④ 감지기 알람 상시 확인", "afterWork": "① 밸브 잠금 ② 점검 기록 작성 ③ 감지기 정상 복귀 확인", "emergency": "인화 시 즉시 대피, 화기 금지, 119 신고. 소화: CO2 또는 건식 분말 소화기.", "link": "", "status": "승인필요", "manager": "한상휘", "note": "H2 고압가스 특성상 방폭 공구 필수 사용"}];
let ledgerData=[{"id": "LEDGER-001", "chemName": "NH3", "casNo": "7664-41-7", "category": "유해화학물질(독성)", "year": 2026, "month": 1, "prevStock": 1, "inQty": 2, "outQty": 0, "useQty": 0, "stockQty": 3, "inDate": "2026-01-15", "outDate": "", "manager": "한상휘", "remark": "계획입고", "docLinked": "DOC-004", "status": "정상", "note": ""}, {"id": "LEDGER-002", "chemName": "HF", "casNo": "7664-39-3", "category": "유해화학물질(독성)", "year": 2026, "month": 1, "prevStock": 2, "inQty": 1, "outQty": 0, "useQty": 0, "stockQty": 3, "inDate": "2026-01-20", "outDate": "", "manager": "한상휘", "remark": "계획입고", "docLinked": "", "status": "확인필요", "note": "MSDS 업데이트 확인 필요"}, {"id": "LEDGER-003", "chemName": "KOH", "casNo": "1310-58-3", "category": "유해화학물질(부식성)", "year": 2026, "month": 6, "prevStock": 5, "inQty": 0, "outQty": 0, "useQty": 0, "stockQty": 5, "inDate": "", "outDate": "2026-06-13", "manager": "한상휘", "remark": "재고조사", "docLinked": "DOC-008", "status": "정상", "note": "재고 수량 일치"}, {"id": "LEDGER-004", "chemName": "SiF4", "casNo": "7783-61-1", "category": "유해화학물질(독성)", "year": 2026, "month": 2, "prevStock": 3, "inQty": 0, "outQty": 0, "useQty": 0, "stockQty": 3, "inDate": "", "outDate": "", "manager": "한상휘", "remark": "현황유지", "docLinked": "", "status": "확인필요", "note": "MSDS 보유 확인 필요"}, {"id": "LEDGER-005", "chemName": "NF3", "casNo": "7783-54-2", "category": "유해화학물질(독성·산화성)", "year": 2026, "month": 4, "prevStock": 3, "inQty": 2, "outQty": 2, "useQty": 0, "stockQty": 3, "inDate": "2026-04-05", "outDate": "2026-04-15", "manager": "한상휘", "remark": "입출고 발생", "docLinked": "DOC-008", "status": "정상", "note": ""}];
let perfData=[{"id": "PERF-001", "reportType": "유해화학물질 취급실적보고", "period": "2025 하반기", "targetChems": "NH3, HF, SiF4, NF3, C3F8, KOH", "submitTarget": "Y", "dueDate": "2026-01-31", "submitDate": "2026-01-28", "status": "제출완료", "docLinked": "", "receiptNo": "2026-환경-001", "manager": "한상휘", "note": "환경부 화학물질안전원 보고 완료"}, {"id": "PERF-002", "reportType": "유해화학물질 취급실적보고", "period": "2026 상반기", "targetChems": "NH3, HF, SiF4, NF3, C3F8, KOH", "submitTarget": "Y", "dueDate": "2026-07-31", "submitDate": "", "status": "제출필요", "docLinked": "", "receiptNo": "", "manager": "한상휘", "note": "2026-07-31까지 제출 필요 — 취급량 집계 준비 중"}, {"id": "PERF-003", "reportType": "온실가스 배출량 신고", "period": "2026년 1분기", "targetChems": "C3F8, SF6", "submitTarget": "Y", "dueDate": "2026-04-30", "submitDate": "2026-04-25", "status": "제출완료", "docLinked": "", "receiptNo": "2026-온실-Q1", "manager": "한상휘", "note": "온실가스 GWP 환산 완료"}, {"id": "PERF-004", "reportType": "온실가스 배출량 신고", "period": "2026년 2분기", "targetChems": "C3F8, SF6", "submitTarget": "Y", "dueDate": "2026-07-31", "submitDate": "", "status": "제출필요", "docLinked": "", "receiptNo": "", "manager": "한상휘", "note": "Q2 실적 집계 중 — 7월 말 제출 예정"}];
let selfChkData=[{"id": "SELF-CHK-001", "facility": "5F Gas Room (NH3 취급시설)", "checkDate": "2026-05-10", "checkType": "정기 자체점검", "inspector": "한상휘", "checkItems": 10, "passItems": 10, "failItems": 0, "result": "정상", "actionRequired": "N", "actionDeadline": "", "actionStatus": "해당없음", "docLinked": "", "remark": "점검 이상 없음"}, {"id": "SELF-CHK-002", "facility": "5F Gas Room (HF 취급시설)", "checkDate": "2026-05-10", "checkType": "정기 자체점검", "inspector": "한상휘", "checkItems": 10, "passItems": 8, "failItems": 2, "result": "조치필요", "actionRequired": "Y", "actionDeadline": "2026-06-10", "actionStatus": "조치완료", "docLinked": "", "remark": "배기팬 진동·배관 클램프 보강 조치 완료"}, {"id": "SELF-CHK-003", "facility": "Utility Area (KOH 취급시설)", "checkDate": "2026-06-01", "checkType": "정기 자체점검", "inspector": "한상휘", "checkItems": 8, "passItems": 6, "failItems": 2, "result": "확인필요", "actionRequired": "Y", "actionDeadline": "2026-06-30", "actionStatus": "조치중", "docLinked": "", "remark": "누출 탐지 장치 교체 필요 — 견적 접수 중"}, {"id": "SELF-CHK-004", "facility": "4F Gas Room (NF3 취급시설)", "checkDate": "2026-06-05", "checkType": "정기 자체점검", "inspector": "한상휘", "checkItems": 10, "passItems": 10, "failItems": 0, "result": "정상", "actionRequired": "N", "actionDeadline": "", "actionStatus": "해당없음", "docLinked": "", "remark": ""}];
let chemMgrData=[{"id": "CHEM-MGR-001", "name": "한상휘", "dept": "기술기획파트", "role": "유해화학물질관리자", "isAppointed": "Y", "appointDate": "2024-03-01", "reportDate": "2024-03-10", "deputyName": "김민준", "deputyDept": "개발2실", "deputyAppointed": "Y", "trainingDone": "Y", "trainingDate": "2025-10-15", "trainingDeadline": "2026-10-15", "nextTrainingDate": "2026-10-15", "docLinked": "", "status": "정상", "note": "3년 주기 재선임 예정 (2027-03)"}, {"id": "CHEM-MGR-002", "name": "김민준", "dept": "개발2실", "role": "대리자", "isAppointed": "Y", "appointDate": "2024-03-01", "reportDate": "2024-03-10", "deputyName": "", "deputyDept": "", "deputyAppointed": "N", "trainingDone": "Y", "trainingDate": "2025-10-15", "trainingDeadline": "2026-10-15", "nextTrainingDate": "2026-10-15", "docLinked": "", "status": "정상", "note": "관리자 부재 시 대리 수행"}, {"id": "CHEM-MGR-003", "name": "이서연", "dept": "개발3실", "role": "유해화학물질관리자", "isAppointed": "Y", "appointDate": "2023-09-01", "reportDate": "2023-09-15", "deputyName": "", "deputyDept": "", "deputyAppointed": "N", "trainingDone": "N", "trainingDate": "", "trainingDeadline": "2026-09-01", "nextTrainingDate": "2026-09-01", "docLinked": "", "status": "교육필요", "note": "교육 수료 기한 2026-09-01 — 이수 예약 필요"}];
let deadlineSelId=null;
let evidenceSelId=null;
let msdsSelId=null;
let sopSelId=null;

function contBadge(val) {
  const m={'대상':'background:#f8d7da;color:#842029;','확인필요':'background:#FFF3CD;color:#664d03;','비대상':'background:#EEF3FA;color:#6c757d;',
    '신고완료':'background:#d4edda;color:#155724;','준비중':'background:#cce5ff;color:#004085;','미검토':'background:#EEF3FA;color:#6c757d;',
    '보완필요':'background:#f8d7da;color:#842029;','미완료':'background:#f8d7da;color:#842029;','일부완료':'background:#FFF3CD;color:#664d03;',
    '완료':'background:#d4edda;color:#155724;','해당없음':'background:#EEF3FA;color:#6c757d;',
    'Y':'background:#d4edda;color:#155724;','N':'background:#EEF3FA;color:#6c757d;'};
  return '<span style="'+(m[val]||'background:#EEF3FA;color:#6c757d;')+'font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+( val||'—')+'</span>';
}

function calcContractorKpi() {
  const today=new Date('2026-06-13');
  let target=0,confirm_=0,done=0,docInc=0,urgent=0;
  contractorData.forEach(c=>{
    if(c.reportTarget==='대상') target++;
    if(c.reportTarget==='확인필요') confirm_++;
    if(c.reportStatus==='신고완료') done++;
    if(['미완료','일부완료','확인필요'].includes(c.docStatus)&&c.reportTarget!=='비대상') docInc++;
    if(c.reportStatus!=='신고완료'&&c.workDate&&c.workDate!=='해당없음') {
      const diff=Math.ceil((new Date(c.workDate)-today)/86400000);
      if(diff>=0&&diff<=7) urgent++;
    }
  });
  return {total:contractorData.length,target,confirm_,done,docInc,urgent};
}

function renderContractorKpi(elId) {
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
}

function renderContractorTable() {
  const el=document.getElementById('contractorTableBody');
  if(!el) return;
  const today=new Date('2026-06-13');
  el.innerHTML=contractorData.map(function(c) {
    const diff=c.workDate&&c.workDate!=='해당없음'?Math.ceil((new Date(c.workDate)-today)/86400000):null;
    const wdSt=diff!==null&&diff<=7&&diff>=0&&c.reportStatus!=='신고완료'?'color:#dc3545;font-weight:700;':'';
    return '<tr style="cursor:pointer;'+(contractorSelId===c.id?'background:#EEF3FA;':'')+'" onclick="showContractorDetail(\''+c.id+'\')" data-cid="'+c.id+'">'
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
      +'<td style="text-align:center;"><button onclick="event.stopPropagation();showContractorDetail(\''+c.id+'\')" style="background:#EEF3FA;border:1px solid #C8D8F0;color:#003087;padding:2px 8px;border-radius:4px;font-size:10px;font-weight:600;cursor:pointer;">상세</button></td>'
      +'</tr>';
  }).join('')||'<tr><td colspan="11" style="text-align:center;color:#6c757d;padding:20px;">등록된 도급업체가 없습니다.</td></tr>';
  const tc=document.getElementById('contractorTableCount');
  if(tc) tc.textContent='총 '+contractorData.length+'개 업체';
  renderContractorKpi('contractorKpi');
}

function calcDocStatus(c) {
  if(c.reportTarget==='비대상') return '해당없음';
  const needed=c.docs.filter(function(d){return d.needed==='필요';});
  if(!needed.length) return '해당없음';
  if(needed.some(function(d){return d.status==='확인필요';})) return '확인필요';
  if(needed.every(function(d){return d.status==='완료'||d.status==='해당없음';})) return '완료';
  if(needed.some(function(d){return d.status==='완료';})) return '일부완료';
  return '미완료';
}

function clAutoJudge(cl) {
  if(!cl||!cl.length) return '판단 불가';
  if(cl[0]==='N') return '비대상 가능성 높음';
  if(cl.some(function(v){return v==='확인필요';})) return '확인필요';
  if(cl[0]==='Y'&&cl[1]==='Y'&&cl[2]==='Y'&&cl[3]==='Y') return '대상 가능성 높음';
  if(cl[4]==='Y'||cl[5]==='Y'||cl[6]==='Y') return '대상 또는 확인필요';
  return '최종 판단은 담당자 검토 필요';
}

function contFRow(lbl,content) {
  return '<div style="display:grid;grid-template-columns:110px 1fr;gap:6px;align-items:center;margin-bottom:6px;">'
    +'<span style="font-size:11px;color:#7A96C0;font-weight:600;">'+lbl+'</span>'+content+'</div>';
}
function contInp(id,fld,val,ph) {
  return '<input type="text" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updCont(\''+id+'\',\''+fld+'\',this.value)" style="width:100%;padding:4px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">';
}
function contSel(id,fld,val,opts) {
  return '<select onchange="updCont(\''+id+'\',\''+fld+'\',this.value)" style="width:100%;padding:4px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';
}
function contDate(id,fld,val) {
  return '<input type="date" value="'+(val&&val!=='해당없음'?val:'')+'" onchange="updCont(\''+id+'\',\''+fld+'\',this.value)" style="width:100%;padding:4px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;">';
}

function showContractorDetail(id) {
  contractorSelId=id;
  const c=contractorData.find(function(x){return x.id===id;});
  if(!c) return;
  renderContractorTable();
  const panel=document.getElementById('contractorDetailPanel');
  if(!panel) return;
  panel.style.display='block';
  const judge=clAutoJudge(c.checklist||[]);
  const judgeClr=judge==='대상 가능성 높음'?'#dc3545':judge==='비대상 가능성 높음'?'#28a745':judge==='확인필요'?'#E8960A':'#6c757d';

  // Checklist
  const clHtml=CONTRACTOR_CL_Q.map(function(q,i) {
    const val=(c.checklist||[])[i]||'확인필요';
    const s=['Y','N','확인필요'].map(function(v){return '<option'+(val===v?' selected':'')+'>'+v+'</option>';}).join('');
    return '<div style="display:flex;align-items:center;gap:8px;padding:4px 0;border-bottom:1px solid #F0F4FA;font-size:11px;">'
      +'<span style="min-width:16px;text-align:center;font-weight:700;color:#7A96C0;">'+(i+1)+'</span>'
      +'<span style="flex:1;">'+q+'</span>'
      +'<select onchange="updContCL(\''+id+'\','+i+',this.value)" style="width:80px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+s+'</select></div>';
  }).join('');

  // Docs
  const docsHtml=c.docs.map(function(d,i) {
    const nS=['필요','불필요','확인필요'].map(function(v){return '<option'+(d.needed===v?' selected':'')+'>'+v+'</option>';}).join('');
    const stS=['미준비','준비중','완료','해당없음'].map(function(v){return '<option'+(d.status===v?' selected':'')+'>'+v+'</option>';}).join('');
    return '<tr><td style="font-size:11px;">'+d.name+'</td>'
      +'<td><select onchange="updContDoc(\''+id+'\','+i+',\'needed\',this.value)" style="width:72px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+nS+'</select></td>'
      +'<td><select onchange="updContDoc(\''+id+'\','+i+',\'status\',this.value)" style="width:72px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+stS+'</select></td>'
      +'<td><input type="text" value="'+(d.link||'')+'" onchange="updContDoc(\''+id+'\','+i+',\'link\',this.value)" placeholder="URL" style="width:130px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;"></td>'
      +'<td><input type="text" value="'+(d.note||'')+'" onchange="updContDoc(\''+id+'\','+i+',\'note\',this.value)" style="width:110px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;"></td>'
      +'</tr>';
  }).join('');

  // Plan items
  const planHtml=c.planItems.map(function(p,i) {
    const stS=['미작성','작성중','완료','해당없음'].map(function(v){return '<option'+(p.status===v?' selected':'')+'>'+v+'</option>';}).join('');
    return '<div style="display:flex;align-items:center;gap:8px;padding:3px 0;border-bottom:1px solid #F0F4FA;font-size:11px;">'
      +'<span style="flex:1;">'+p.name+'</span>'
      +'<select onchange="updContPlan(\''+id+'\','+i+',this.value)" style="width:80px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+stS+'</select></div>';
  }).join('');

  const delBtn='<button onclick="deleteContractor(\''+id+'\')" '+(isAdminMode?'':'disabled')+' style="background:'+(isAdminMode?'#dc3545':'#EEF3FA')+';color:'+(isAdminMode?'white':'#9AB0C8')+';border:none;padding:5px 12px;border-radius:5px;font-size:11px;font-weight:600;cursor:'+(isAdminMode?'pointer':'default')+';">삭제</button>';
  const closeBtn='<button onclick="document.getElementById(\'contractorDetailPanel\').style.display=\'none\';contractorSelId=null;renderContractorTable();" style="background:#EEF3FA;color:#6c757d;border:1px solid #C8D8F0;padding:5px 12px;border-radius:5px;font-size:11px;cursor:pointer;">닫기</button>';

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
}

function updCont(id,field,val) {
  const c=contractorData.find(function(x){return x.id===id;});
  if(!c) return;
  c[field]=val;
  if(field==='reportTarget') { c.docStatus=calcDocStatus(c); renderContractorTable(); }
  renderContractorKpi('contractorKpi');
}
function updContCL(id,idx,val) {
  const c=contractorData.find(function(x){return x.id===id;});
  if(!c||!c.checklist) return;
  c.checklist[idx]=val;
  const judge=clAutoJudge(c.checklist);
  const judgeClr=judge==='대상 가능성 높음'?'#dc3545':judge==='비대상 가능성 높음'?'#28a745':judge==='확인필요'?'#E8960A':'#6c757d';
  const sm=document.querySelector('#contractorDetailPanel details:first-of-type summary');
  if(sm) {
    const spans=sm.querySelectorAll('span');
    if(spans[0]) {spans[0].textContent='[자동판단: '+judge+']'; spans[0].style.color=judgeClr;}
  }
}
function updContDoc(id,idx,field,val) {
  const c=contractorData.find(function(x){return x.id===id;});
  if(!c||!c.docs) return;
  c.docs[idx][field]=val;
  c.docStatus=calcDocStatus(c);
  renderContractorKpi('contractorKpi');
  renderContractorTable();
}
function updContPlan(id,idx,val) {
  const c=contractorData.find(function(x){return x.id===id;});
  if(!c||!c.planItems) return;
  c.planItems[idx].status=val;
}
function addNewContractor() {
  if(!isAdminMode) return;
  const nextNum=contractorData.length+1;
  const nid='C-'+String(nextNum).padStart(3,'0');
  contractorData.push({
    id:nid,name:'새 도급업체 '+nextNum,workType:'기타',workDesc:'',material:'',facility:'',
    handlesChem:'확인필요',reportTarget:'확인필요',reportReason:'',reportStatus:'미검토',
    workDate:'',reportDate:'',docStatus:'확인필요',receiptNo:'',docLink:'',remarks:'',
    checklist:Array(10).fill('확인필요'),docs:mkContDocs(),planItems:mkContPlan()
  });
  renderContractorTable();
  showContractorDetail(nid);
  saveContractorData_();
}
function deleteContractor(id) {
  if(!isAdminMode) return;
  if(!confirm('이 도급업체를 삭제하시겠습니까?')) return;
  contractorData=contractorData.filter(function(c){return c.id!==id;});
  contractorSelId=null;
  document.getElementById('contractorDetailPanel').style.display='none';
  renderContractorTable();
  saveContractorData_();
  showToast('도급업체가 삭제되었습니다.');
}
function saveContractorData_() {
  lsSave(LS.CONTRACTOR, contractorData);
}
function saveContractorSection() {
  saveContractorData_();
  const now=new Date();
  const ts=now.getFullYear()+'-'+String(now.getMonth()+1).padStart(2,'0')+'-'+String(now.getDate()).padStart(2,'0')+' '+String(now.getHours()).padStart(2,'0')+':'+String(now.getMinutes()).padStart(2,'0');
  const el=document.getElementById('contLastSaved');
  if(el) el.textContent=ts;
  initRisk();
  initHome();
  initSummary();
  showToast('도급신고 데이터가 저장되었습니다.');
}
function contRiskClick(cid) {
  gpDirect('contractor');
  setTimeout(function(){
    showContractorDetail(cid);
    const panel=document.getElementById('contractorDetailPanel');
    if(panel) panel.scrollIntoView({behavior:'smooth'});
  },100);
}
function initContractor() {
  renderContractorTable();
  renderContractorKpi('contractorKpi');
}

// ── DEADLINE & EVIDENCE FUNCTIONS ─────────────────
const TODAY_DL = new Date('2026-06-13');

function calcDDay(dueDate) {
  if(!dueDate) return null;
  const d=new Date(dueDate);
  if(isNaN(d.getTime())) return null;
  return Math.ceil((d - TODAY_DL) / 86400000);
}

function calcDeadlineStatus(dl) {
  if(!dl) return '확인필요';
  if(dl.doneDate) return '완료';
  if(!dl.dueDate) return '확인필요';
  const dday=calcDDay(dl.dueDate);
  if(dday===null) return '확인필요';
  if(dday<0) return '초과';
  if(dday<=30) return '임박';
  if(dday<=90) return '예정';
  return '정상';
}

function calcEvidenceStatus(ev) {
  if(!ev) return '확인필요';
  if(!ev.relatedId) return '연결필요';
  const hasStorage=ev.storage&&ev.storage.trim()&&ev.storage!=='확인필요';
  const hasLink=ev.link&&ev.link.trim();
  if(!hasStorage&&!hasLink) return '미등록';
  if(ev.expireDate) {
    const d=new Date(ev.expireDate);
    if(!isNaN(d.getTime())) {
      const diff=Math.ceil((d-TODAY_DL)/86400000);
      if(diff<0) return '만료';
      if(diff<=30) return '만료예정';
    }
  }
  if(hasStorage||hasLink) {
    if(!ev.expireDate) return '보관중';
    return '등록';
  }
  return '확인필요';
}

function getLinkedEvidence(deadlineId) {
  return evidenceData.filter(e=>e.relatedId===deadlineId);
}

function calcDeadlineKpi() {
  let total=0,normal=0,scheduled=0,urgent=0,overdue=0,done=0,noEvidence=0;
  deadlineData.forEach(d=>{
    total++;
    const st=calcDeadlineStatus(d);
    if(st==='정상') normal++;
    else if(st==='예정') scheduled++;
    else if(st==='임박') urgent++;
    else if(st==='초과') overdue++;
    else if(st==='완료') done++;
    const evLinked=getLinkedEvidence(d.id);
    if(d.needsEvidence==='Y'&&evLinked.length===0&&st!=='완료') noEvidence++;
  });
  return {total,normal,scheduled,urgent,overdue,done,noEvidence};
}

function calcEvidenceKpi() {
  let total=0,registered=0,notRegistered=0,expiringSoon=0,expired=0,needsLink=0;
  evidenceData.forEach(e=>{
    total++;
    const st=calcEvidenceStatus(e);
    if(st==='등록'||st==='보관중') registered++;
    else if(st==='미등록') notRegistered++;
    else if(st==='만료예정') expiringSoon++;
    else if(st==='만료') expired++;
    else if(st==='연결필요'||st==='확인필요') needsLink++;
  });
  return {total,registered,notRegistered,expiringSoon,expired,needsLink};
}

function dlStatusBadge(st) {
  const m={'완료':'bg','정상':'bb','예정':'bb','임박':'bw','초과':'br','확인필요':'bw'};
  return `<span class="${m[st]||'bgr'}">${st}</span>`;
}

function evStatusBadge(st) {
  const m={'등록':'bg','보관중':'bb','미등록':'br','만료':'br','만료예정':'bw','연결필요':'bw','확인필요':'bw'};
  return `<span class="${m[st]||'bgr'}">${st}</span>`;
}

function renderDeadlineKpi(gridId) {
  const kpi=calcDeadlineKpi();
  const el=document.getElementById(gridId);
  if(!el) return;
  el.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">전체 항목</div><div class="kpi-value">${kpi.total}</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">${kpi.normal}</div></div>
    <div class="kpi-card"><div class="kpi-label">예정</div><div class="kpi-value" style="color:#0047B0;">${kpi.scheduled}</div></div>
    <div class="kpi-card kc-warn"><div class="kpi-label">임박</div><div class="kpi-value" style="color:#E8960A;">${kpi.urgent}</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">초과</div><div class="kpi-value" style="color:#dc3545;">${kpi.overdue}</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">완료</div><div class="kpi-value" style="color:#28a745;">${kpi.done}</div></div>
    <div class="kpi-card ${kpi.noEvidence>0?'kc-warn':'kc-ok'}"><div class="kpi-label">증빙 미등록</div><div class="kpi-value" style="color:${kpi.noEvidence>0?'#E8960A':'#28a745'}">${kpi.noEvidence}</div></div>`;
}

function renderEvidenceKpi(gridId) {
  const kpi=calcEvidenceKpi();
  const el=document.getElementById(gridId);
  if(!el) return;
  el.innerHTML=`
    <div class="kpi-card"><div class="kpi-label">전체 문서</div><div class="kpi-value">${kpi.total}</div></div>
    <div class="kpi-card kc-ok"><div class="kpi-label">등록 완료</div><div class="kpi-value" style="color:#28a745;">${kpi.registered}</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">미등록</div><div class="kpi-value" style="color:#dc3545;">${kpi.notRegistered}</div></div>
    <div class="kpi-card kc-warn"><div class="kpi-label">만료 예정</div><div class="kpi-value" style="color:#E8960A;">${kpi.expiringSoon}</div></div>
    <div class="kpi-card kc-risk"><div class="kpi-label">만료</div><div class="kpi-value" style="color:#dc3545;">${kpi.expired}</div></div>
    <div class="kpi-card kc-warn"><div class="kpi-label">연결 필요</div><div class="kpi-value" style="color:#E8960A;">${kpi.needsLink}</div></div>`;
}

let dlFiltered=[];
function filterDeadlines() {
  const cat=(document.getElementById('dlFilterCat')||{}).value||'';
  const st=(document.getElementById('dlFilterSt')||{}).value||'';
  const ev=(document.getElementById('dlFilterEv')||{}).value||'';
  const kw=((document.getElementById('dlSearch')||{}).value||'').toLowerCase();
  dlFiltered=deadlineData.filter(d=>{
    const status=calcDeadlineStatus(d);
    const evLinked=getLinkedEvidence(d.id);
    const evReg=evLinked.length>0?'등록':d.needsEvidence==='N'?'해당없음':'미등록';
    if(cat&&d.category!==cat) return false;
    if(st&&status!==st) return false;
    if(ev&&evReg!==ev) return false;
    if(kw&&!(d.item+d.target+(d.material||'')+(d.manager||'')).toLowerCase().includes(kw)) return false;
    return true;
  });
  renderDeadlineTable();
}

function renderDeadlineTable() {
  const tbody=document.getElementById('deadlineTableBody');
  if(!tbody) return;
  const cnt=document.getElementById('dlFilterCount');
  if(cnt) cnt.textContent=dlFiltered.length+'건';
  if(!dlFiltered.length){tbody.innerHTML='<tr><td colspan="11" style="text-align:center;color:#9AB0C8;padding:20px;">등록된 법정기한 데이터가 없습니다.</td></tr>';return;}
  tbody.innerHTML=dlFiltered.map(d=>{
    const status=calcDeadlineStatus(d);
    const dday=calcDDay(d.dueDate);
    const ddayText=dday===null?'—':dday===0?'<span class="br">D-Day</span>':dday<0?'<span class="br">D+'+Math.abs(dday)+'</span>':dday<=30?'<span class="bw">D-'+dday+'</span>':dday<=90?'<span class="bb">D-'+dday+'</span>':'<span class="bgr">D-'+dday+'</span>';
    const evLinked=getLinkedEvidence(d.id);
    const evReg=evLinked.length>0?'<span class="bg">등록</span>':d.needsEvidence==='N'?'<span class="bgr">해당없음</span>':'<span class="br">미등록</span>';
    const rowStyle=status==='초과'?'background:#fff5f5;':status==='임박'?'background:#fffdf0;':'';
    return `<tr style="${rowStyle}">
      <td style="font-size:10px;color:#7A96C0;">${d.id}</td>
      <td><span class="bgr" style="font-size:9px;">${d.category}</span></td>
      <td style="font-weight:600;">${d.item}</td>
      <td style="font-size:10px;">${d.target}</td>
      <td style="font-size:10px;">${d.dueDate||'—'}</td>
      <td>${ddayText}</td>
      <td>${dlStatusBadge(status)}</td>
      <td style="font-size:10px;">${d.manager||'—'}</td>
      <td>${evReg}</td>
      <td style="font-size:10px;">${d.relatedMenu||'—'}</td>
      <td><button class="btn-sort" style="padding:3px 8px;font-size:10px;" onclick="showDeadlineDetail('${d.id}')">상세</button></td>
    </tr>`;
  }).join('');
}

function showDeadlineDetail(id) {
  const d=deadlineData.find(x=>x.id===id);
  if(!d) return;
  deadlineSelId=id;
  const status=calcDeadlineStatus(d);
  const dday=calcDDay(d.dueDate);
  const ddayText=dday===null?'—':dday===0?'D-Day':dday<0?'D+'+Math.abs(dday)+'일 초과':'D-'+dday+'일';
  const evLinked=getLinkedEvidence(id);
  const evHtml=evLinked.length?evLinked.map(e=>`
    <div style="background:#F0F8FF;border:1px solid #C8D8F0;border-radius:6px;padding:10px;margin-top:8px;">
      <div style="font-size:11px;font-weight:700;color:#003087;">${e.id} / ${e.docName}</div>
      <div style="font-size:10px;color:#7A96C0;margin-top:3px;">구분: ${e.docType} | 보관위치: ${e.storage||'—'} | 유효기한: ${e.expireDate||'—'} | 상태: ${calcEvidenceStatus(e)}</div>
    </div>`).join(''):'<div style="font-size:11px;color:#9AB0C8;padding:8px 0;">연결된 증빙자료 없음</div>';
  const panel=document.getElementById('deadlineDetailPanel');
  if(!panel) return;
  panel.style.display='block';
  panel.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:14px;font-weight:700;color:#003087;">${d.id} — ${d.item}</div>
      <div style="display:flex;gap:8px;">
        ${isAdminMode?`<button class="btn-sort" style="padding:5px 12px;font-size:11px;background:#dc3545;color:white;border-color:#dc3545;" onclick="deleteDeadline('${d.id}')">삭제</button>`:''}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px;">
      <div><span style="font-size:10px;color:#7A96C0;">구분</span><br><b>${d.category}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">관리항목</span><br><b>${d.item}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">대상</span><br><b>${d.target}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">관련물질</span><br>${d.material||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">기준일</span><br>${d.baseDate||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">예정일/만료일</span><br><b>${d.dueDate||'—'}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">사전준비 시작일</span><br>${d.prepDate||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">완료일</span><br>${d.doneDate||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">담당자</span><br>${d.manager||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">D-Day</span><br><b>${ddayText}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">상태</span><br>${dlStatusBadge(status)}</div>
      <div><span style="font-size:10px;color:#7A96C0;">증빙 필요</span><br>${d.needsEvidence==='Y'?'<span class="br">필요</span>':'<span class="bgr">해당없음</span>'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">관련 메뉴</span><br>${d.relatedMenu||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">관련ID</span><br>${d.relatedId||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">비고</span><br>${d.note||'—'}</div>
    </div>
    <div style="font-size:12px;font-weight:700;color:#003087;margin-bottom:6px;">연결 증빙자료</div>
    ${evHtml}`;
  panel.scrollIntoView({behavior:'smooth'});
}

function addNewDeadline() {
  if(!isAdminMode) return;
  const newId='DL-'+String(deadlineData.length+1).padStart(3,'0');
  const newDl={id:newId,category:'교육',item:'신규 항목',target:'',material:'',
    baseDate:'2026-06-13',dueDate:'',prepDate:'',doneDate:'',manager:'한상휘',
    needsEvidence:'Y',relatedMenu:'',relatedId:'',note:''};
  deadlineData.push(newDl);
  filterDeadlines();
  renderEditDeadlineTable();
  showDeadlineDetail(newId);
  updateEditCounts();
  showToast('신규 법정기한 항목이 추가되었습니다. 내용을 입력하고 저장하세요.');
}

function deleteDeadline(id) {
  if(!isAdminMode) return;
  if(!confirm('이 항목을 삭제하시겠습니까? ('+id+')')) return;
  deadlineData=deadlineData.filter(d=>d.id!==id);
  const panel=document.getElementById('deadlineDetailPanel');
  if(panel) panel.style.display='none';
  filterDeadlines();
  renderEditDeadlineTable();
  renderDeadlineKpi('deadlineKpiGrid');
  showToast('삭제되었습니다.');
}

function saveDeadlineSection() {
  if(!isAdminMode) return;
  lsSave(LS.DEADLINE, deadlineData);
  const ts=new Date().toLocaleString('ko-KR');
  const dlSaved=document.getElementById('dlLastSaved');
  if(dlSaved) dlSaved.textContent=ts;
  updateLastSaved();
  initSummary(); initHome(); initRisk();
  filterDeadlines();
  renderDeadlineKpi('deadlineKpiGrid');
  markEsSaved('deadline'); updateEditCounts();
  showToast('💾 법정기한 데이터가 저장되었습니다.');
}

function deadlineRiskClick(id) {
  gpDirect('deadline');
  setTimeout(()=>{showDeadlineDetail(id);},100);
}

function renderEditDeadlineTable() {
  const tbody=document.getElementById('editDeadlineTbody');
  if(!tbody) return;
  tbody.innerHTML=deadlineData.map((d,i)=>{
    const status=calcDeadlineStatus(d);
    return `<tr>
      <td><input type="text" value="${d.id}" onchange="deadlineData[${i}].id=this.value" style="width:70px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><select onchange="deadlineData[${i}].category=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}>
        ${['교육','검사','교정','신고','점검','인허가'].map(c=>`<option ${d.category===c?'selected':''}>${c}</option>`).join('')}
      </select></td>
      <td><input type="text" value="${d.item}" onchange="deadlineData[${i}].item=this.value" style="width:150px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="text" value="${d.target}" onchange="deadlineData[${i}].target=this.value" style="width:100px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="date" value="${d.dueDate}" onchange="deadlineData[${i}].dueDate=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="date" value="${d.doneDate}" onchange="deadlineData[${i}].doneDate=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="text" value="${d.manager}" onchange="deadlineData[${i}].manager=this.value" style="width:70px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><select onchange="deadlineData[${i}].needsEvidence=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}>
        <option ${d.needsEvidence==='Y'?'selected':''}>Y</option>
        <option ${d.needsEvidence==='N'?'selected':''}>N</option>
      </select></td>
      <td><input type="text" value="${d.note}" onchange="deadlineData[${i}].note=this.value" style="width:100px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><button onclick="deleteDeadline('${d.id}')" style="padding:3px 8px;font-size:10px;background:${isAdminMode?'#dc3545':'#EEF3FA'};color:${isAdminMode?'white':'#9AB0C8'};border:none;border-radius:4px;cursor:${isAdminMode?'pointer':'not-allowed'};" ${isAdminMode?'':'disabled'}>삭제</button></td>
    </tr>`;
  }).join('');
}

// Evidence functions
let evFiltered=[];
function filterEvidence() {
  const tp=(document.getElementById('evFilterType')||{}).value||'';
  const st=(document.getElementById('evFilterSt')||{}).value||'';
  const kw=((document.getElementById('evSearch')||{}).value||'').toLowerCase();
  evFiltered=evidenceData.filter(e=>{
    const status=calcEvidenceStatus(e);
    if(tp&&e.docType!==tp) return false;
    if(st&&status!==st) return false;
    if(kw&&!(e.docName+(e.target||'')+(e.manager||'')+(e.storage||'')).toLowerCase().includes(kw)) return false;
    return true;
  });
  renderEvidenceTable();
}

function renderEvidenceTable() {
  const tbody=document.getElementById('evidenceTableBody');
  if(!tbody) return;
  const cnt=document.getElementById('evFilterCount');
  if(cnt) cnt.textContent=evFiltered.length+'건';
  if(!evFiltered.length){tbody.innerHTML='<tr><td colspan="10" style="text-align:center;color:#9AB0C8;padding:20px;">등록된 증빙자료 데이터가 없습니다.</td></tr>';return;}
  tbody.innerHTML=evFiltered.map(e=>{
    const status=calcEvidenceStatus(e);
    const rowStyle=status==='만료'?'background:#fff5f5;':status==='미등록'?'background:#fff8f8;':'';
    return `<tr style="${rowStyle}">
      <td style="font-size:10px;color:#7A96C0;">${e.id}</td>
      <td><span class="bgr" style="font-size:9px;">${e.docType}</span></td>
      <td style="font-weight:600;">${e.docName}</td>
      <td style="font-size:10px;">${e.target||'—'}</td>
      <td style="font-size:10px;">${e.issueDate||'—'}</td>
      <td style="font-size:10px;">${e.expireDate||'—'}</td>
      <td>${evStatusBadge(status)}</td>
      <td style="font-size:10px;">${e.manager||'—'}</td>
      <td style="font-size:10px;color:#0047B0;">${e.relatedId||'—'}</td>
      <td><button class="btn-sort" style="padding:3px 8px;font-size:10px;" onclick="showEvidenceDetail('${e.id}')">상세</button></td>
    </tr>`;
  }).join('');
}

function showEvidenceDetail(id) {
  const e=evidenceData.find(x=>x.id===id);
  if(!e) return;
  evidenceSelId=id;
  const status=calcEvidenceStatus(e);
  const linkedDl=deadlineData.find(d=>d.id===e.relatedId);
  const dlHtml=linkedDl?`
    <div style="background:#F0F8FF;border:1px solid #C8D8F0;border-radius:6px;padding:10px;margin-top:8px;">
      <div style="font-size:11px;font-weight:700;color:#003087;">${linkedDl.id} / ${linkedDl.item}</div>
      <div style="font-size:10px;color:#7A96C0;margin-top:3px;">구분: ${linkedDl.category} | 예정일: ${linkedDl.dueDate||'—'} | 상태: ${calcDeadlineStatus(linkedDl)}</div>
    </div>`:'<div style="font-size:11px;color:#9AB0C8;padding:8px 0;">연결된 법정기한 없음</div>';
  const panel=document.getElementById('evidenceDetailPanel');
  if(!panel) return;
  panel.style.display='block';
  panel.innerHTML=`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
      <div style="font-size:14px;font-weight:700;color:#003087;">${e.id} — ${e.docName}</div>
      <div style="display:flex;gap:8px;">
        ${isAdminMode?`<button class="btn-sort" style="padding:5px 12px;font-size:11px;background:#dc3545;color:white;border-color:#dc3545;" onclick="deleteEvidence('${e.id}')">삭제</button>`:''}</div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin-bottom:14px;">
      <div><span style="font-size:10px;color:#7A96C0;">문서ID</span><br><b>${e.id}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">문서구분</span><br><b>${e.docType}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">관련업무</span><br>${e.relatedWork||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">관련ID</span><br><b>${e.relatedId||'—'}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">문서명</span><br><b>${e.docName}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">대상</span><br>${e.target||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">발행일</span><br>${e.issueDate||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">유효기한</span><br><b>${e.expireDate||'—'}</b></div>
      <div><span style="font-size:10px;color:#7A96C0;">보관위치</span><br>${e.storage||'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">증빙링크</span><br>${e.link?`<a href="${e.link}" target="_blank" style="color:#0047B0;">${e.link}</a>`:'—'}</div>
      <div><span style="font-size:10px;color:#7A96C0;">등록상태</span><br>${evStatusBadge(status)}</div>
      <div><span style="font-size:10px;color:#7A96C0;">담당자</span><br>${e.manager||'—'}</div>
      <div style="grid-column:1/-1"><span style="font-size:10px;color:#7A96C0;">비고</span><br>${e.note||'—'}</div>
    </div>
    <div style="font-size:12px;font-weight:700;color:#003087;margin-bottom:6px;">연결 법정기한</div>
    ${dlHtml}`;
  panel.scrollIntoView({behavior:'smooth'});
}

function addNewEvidence() {
  if(!isAdminMode) return;
  const newId='DOC-'+String(evidenceData.length+1).padStart(3,'0');
  const newEv={id:newId,docType:'성적서',relatedWork:'',relatedId:'',
    docName:'신규 문서',target:'',issueDate:'',expireDate:'',
    storage:'',link:'',status:'미등록',manager:'한상휘',note:''};
  evidenceData.push(newEv);
  filterEvidence();
  renderEditEvidenceTable();
  showEvidenceDetail(newId);
  updateEditCounts();
  showToast('신규 증빙자료가 추가되었습니다. 내용을 입력하고 저장하세요.');
}

function deleteEvidence(id) {
  if(!isAdminMode) return;
  if(!confirm('이 항목을 삭제하시겠습니까? ('+id+')')) return;
  evidenceData=evidenceData.filter(e=>e.id!==id);
  const panel=document.getElementById('evidenceDetailPanel');
  if(panel) panel.style.display='none';
  filterEvidence();
  renderEditEvidenceTable();
  renderEvidenceKpi('evidenceKpiGrid');
  showToast('삭제되었습니다.');
}

function saveEvidenceSection() {
  if(!isAdminMode) return;
  lsSave(LS.EVIDENCE, evidenceData);
  const ts=new Date().toLocaleString('ko-KR');
  const evSaved=document.getElementById('evLastSaved');
  if(evSaved) evSaved.textContent=ts;
  updateLastSaved();
  initSummary(); initHome(); initRisk();
  filterEvidence();
  renderEvidenceKpi('evidenceKpiGrid');
  markEsSaved('evidence'); updateEditCounts();
  showToast('💾 증빙자료 데이터가 저장되었습니다.');
}

function evidenceRiskClick(id) {
  gpDirect('evidence');
  setTimeout(()=>{showEvidenceDetail(id);},100);
}

function renderEditEvidenceTable() {
  const tbody=document.getElementById('editEvidenceTbody');
  if(!tbody) return;
  tbody.innerHTML=evidenceData.map((e,i)=>{
    return `<tr>
      <td><input type="text" value="${e.id}" onchange="evidenceData[${i}].id=this.value" style="width:70px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><select onchange="evidenceData[${i}].docType=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}>
        ${['검사필증','수료증','성적서','신고서','작업허가서','기타'].map(t=>`<option ${e.docType===t?'selected':''}>${t}</option>`).join('')}
      </select></td>
      <td><input type="text" value="${e.docName}" onchange="evidenceData[${i}].docName=this.value" style="width:150px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="text" value="${e.target}" onchange="evidenceData[${i}].target=this.value" style="width:90px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="text" value="${e.relatedId}" onchange="evidenceData[${i}].relatedId=this.value" style="width:80px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="date" value="${e.issueDate}" onchange="evidenceData[${i}].issueDate=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><input type="date" value="${e.expireDate}" onchange="evidenceData[${i}].expireDate=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><select onchange="evidenceData[${i}].status=this.value" style="padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}>
        ${['등록','보관중','미등록','만료','만료예정','연결필요','확인필요'].map(s=>`<option ${e.status===s?'selected':''}>${s}</option>`).join('')}
      </select></td>
      <td><input type="text" value="${e.manager}" onchange="evidenceData[${i}].manager=this.value" style="width:70px;padding:3px 5px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;" ${isAdminMode?'':'disabled'}></td>
      <td><button onclick="deleteEvidence('${e.id}')" style="padding:3px 8px;font-size:10px;background:${isAdminMode?'#dc3545':'#EEF3FA'};color:${isAdminMode?'white':'#9AB0C8'};border:none;border-radius:4px;cursor:${isAdminMode?'pointer':'not-allowed'};" ${isAdminMode?'':'disabled'}>삭제</button></td>
    </tr>`;
  }).join('');
}

function initDeadline() {
  dlFiltered=[...deadlineData];
  renderDeadlineKpi('deadlineKpiGrid');
  renderDeadlineTable();
  renderEditDeadlineTable();
}

function initEvidence() {
  evFiltered=[...evidenceData];
  renderEvidenceKpi('evidenceKpiGrid');
  renderEvidenceTable();
  renderEditEvidenceTable();
}

// ── MSDS & SOP FUNCTIONS ──────────────────────────
function calcMsdsStatus(m) {
  if(!m) return '확인필요';
  if(m.hasMsds==='미보유') return '미보유';
  if(m.hasMsds==='확인필요'||!m.lastCheckDate||!m.revDate) return '확인필요';
  if(TODAY_DL&&m.nextCheckDate) {
    const nd=new Date(m.nextCheckDate);
    if(!isNaN(nd.getTime())&&nd<TODAY_DL) return '확인필요';
  }
  if(!m.postLocation) return '게시위치 미등록';
  if(m.eduLinked==='필요') return '교육연계 필요';
  const hasNoSop=!m.relatedSopId||m.relatedSopId==='';
  if(hasNoSop) return 'SOP 미연계';
  return '정상';
}

function calcSopStatus(s) {
  if(!s) return '확인필요';
  if(!s.link||s.link==='') return '문서 미등록';
  if(s.approvalStatus!=='승인완료') return '승인필요';
  if(TODAY_DL&&s.nextReviewDate&&s.nextReviewDate!=='') {
    const nd=new Date(s.nextReviewDate);
    if(!isNaN(nd.getTime())&&nd<TODAY_DL) return '개정필요';
  }
  const noMsds=!s.relatedMsdsId||s.relatedMsdsId==='';
  if(noMsds) return 'MSDS 미연계';
  if(s.eduLinked==='필요') return '교육연계 필요';
  if(!s.version||s.version===''||!s.lastRevDate||s.lastRevDate==='') return '확인필요';
  if(!s.ppe||s.ppe==='') return '확인필요';
  return '정상';
}

function msdsBadge(st) {
  const m={'정상':'background:#d4edda;color:#155724;','확인필요':'background:#FFF3CD;color:#664d03;',
    '미보유':'background:#f8d7da;color:#842029;','게시위치 미등록':'background:#cce5ff;color:#004085;',
    '교육연계 필요':'background:#FFF3CD;color:#664d03;','SOP 미연계':'background:#e2d9f3;color:#4B0082;'};
  return '<span style="'+(m[st]||'background:#EEF3FA;color:#6c757d;')+'font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+st+'</span>';
}

function sopBadge(st) {
  const m={'정상':'background:#d4edda;color:#155724;','확인필요':'background:#FFF3CD;color:#664d03;',
    '승인필요':'background:#cce5ff;color:#004085;','개정필요':'background:#f8d7da;color:#842029;',
    '문서 미등록':'background:#f8d7da;color:#842029;','교육연계 필요':'background:#FFF3CD;color:#664d03;',
    'MSDS 미연계':'background:#e2d9f3;color:#4B0082;'};
  return '<span style="'+(m[st]||'background:#EEF3FA;color:#6c757d;')+'font-size:9px;font-weight:700;padding:2px 6px;border-radius:5px;">'+st+'</span>';
}

function calcMsdsKpi() {
  let total=0,normal=0,needCheck=0,noMsds=0,noPost=0,needEdu=0,noSop=0;
  msdsData.forEach(m=>{
    total++;
    const st=calcMsdsStatus(m);
    if(st==='정상') normal++;
    else if(st==='확인필요') needCheck++;
    else if(st==='미보유') noMsds++;
    else if(st==='게시위치 미등록') noPost++;
    else if(st==='교육연계 필요') needEdu++;
    else if(st==='SOP 미연계') noSop++;
  });
  return {total,normal,needCheck,noMsds,noPost,needEdu,noSop};
}

function calcSopKpi() {
  let total=0,normal=0,needAppr=0,needRev=0,noDoc=0,needEdu=0,noMsds=0;
  sopData.forEach(s=>{
    total++;
    const st=calcSopStatus(s);
    if(st==='정상') normal++;
    else if(st==='승인필요') needAppr++;
    else if(st==='개정필요') needRev++;
    else if(st==='문서 미등록') noDoc++;
    else if(st==='교육연계 필요') needEdu++;
    else if(st==='MSDS 미연계') noMsds++;
  });
  return {total,normal,needAppr,needRev,noDoc,needEdu,noMsds};
}

function renderMsdsKpi(gridId) {
  const el=document.getElementById(gridId);
  if(!el) return;
  const k=calcMsdsKpi();
  el.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">전체 MSDS</div><div class="kpi-value">'+k.total+'건</div><div class="kpi-sub">등록 물질 수</div></div>'
   +'<div class="kpi-card '+(k.normal===k.total?'kc-ok':'')+'"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">'+k.normal+'건</div></div>'
   +'<div class="kpi-card '+(k.needCheck>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">확인필요</div><div class="kpi-value" style="color:'+(k.needCheck>0?'#E8960A':'#28a745')+'">'+k.needCheck+'건</div></div>'
   +'<div class="kpi-card '+(k.noMsds>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">미보유</div><div class="kpi-value" style="color:'+(k.noMsds>0?'#dc3545':'#28a745')+'">'+k.noMsds+'건</div></div>'
   +'<div class="kpi-card '+(k.noPost>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">게시위치 미등록</div><div class="kpi-value" style="color:'+(k.noPost>0?'#E8960A':'#28a745')+'">'+k.noPost+'건</div></div>'
   +'<div class="kpi-card '+(k.needEdu>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">교육연계 필요</div><div class="kpi-value" style="color:'+(k.needEdu>0?'#E8960A':'#28a745')+'">'+k.needEdu+'건</div></div>'
   +'<div class="kpi-card '+(k.noSop>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">SOP 미연계</div><div class="kpi-value" style="color:'+(k.noSop>0?'#E8960A':'#28a745')+'">'+k.noSop+'건</div></div>';
}

function renderSopKpi(gridId) {
  const el=document.getElementById(gridId);
  if(!el) return;
  const k=calcSopKpi();
  el.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">전체 SOP</div><div class="kpi-value">'+k.total+'건</div><div class="kpi-sub">등록 SOP 수</div></div>'
   +'<div class="kpi-card '+(k.normal===k.total?'kc-ok':'')+'"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">'+k.normal+'건</div></div>'
   +'<div class="kpi-card '+(k.needAppr>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">승인필요</div><div class="kpi-value" style="color:'+(k.needAppr>0?'#E8960A':'#28a745')+'">'+k.needAppr+'건</div></div>'
   +'<div class="kpi-card '+(k.needRev>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">개정필요</div><div class="kpi-value" style="color:'+(k.needRev>0?'#dc3545':'#28a745')+'">'+k.needRev+'건</div></div>'
   +'<div class="kpi-card '+(k.noDoc>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">문서 미등록</div><div class="kpi-value" style="color:'+(k.noDoc>0?'#dc3545':'#28a745')+'">'+k.noDoc+'건</div></div>'
   +'<div class="kpi-card '+(k.needEdu>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">교육연계 필요</div><div class="kpi-value" style="color:'+(k.needEdu>0?'#E8960A':'#28a745')+'">'+k.needEdu+'건</div></div>'
   +'<div class="kpi-card '+(k.noMsds>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">MSDS 미연계</div><div class="kpi-value" style="color:'+(k.noMsds>0?'#E8960A':'#28a745')+'">'+k.noMsds+'건</div></div>';
}

let msdsFiltered=[];
let sopFiltered=[];

function filterMsds() {
  const haz=document.getElementById('msdsFilterHaz')?.value||'';
  const hp=document.getElementById('msdsFilterHP')?.value||'';
  const st=document.getElementById('msdsFilterSt')?.value||'';
  const q=(document.getElementById('msdsSearch')?.value||'').toLowerCase();
  msdsFiltered=msdsData.filter(m=>{
    if(haz&&m.isHazChem!==haz) return false;
    if(hp&&m.isHP!==hp) return false;
    if(st&&calcMsdsStatus(m)!==st) return false;
    if(q&&!(m.name.toLowerCase().includes(q)||m.nameEn.toLowerCase().includes(q)||(m.cas||'').includes(q)||(m.manager||'').toLowerCase().includes(q))) return false;
    return true;
  });
  renderMsdsTable();
}

function renderMsdsTable() {
  const tbody=document.getElementById('msdsTbody');
  if(!tbody) return;
  const q=(document.getElementById('msdsSearch')?.value||'').toLowerCase();
  if(!msdsFiltered.length) {
    tbody.innerHTML='<tr><td colspan="12" style="text-align:center;color:#9AB0C8;padding:20px;">등록된 MSDS 데이터가 없습니다.</td></tr>';
    return;
  }
  const cnt=document.getElementById('msdsFilterCount');
  if(cnt) cnt.textContent='전체 '+msdsData.length+'건 중 '+msdsFiltered.length+'건 표시';
  tbody.innerHTML=msdsFiltered.map(m=>{
    const st=calcMsdsStatus(m);
    const nameTxt=q?hlText(m.name,q):m.name;
    const nameEnTxt=q?hlText(m.nameEn,q):m.nameEn;
    const mgrTxt=q?hlText(m.manager,q):m.manager;
    // MSDS link mini-badges
    const linkBadges=
      (m.hasMsds==='보유'?'<span class="sb sb-green" style="font-size:8px;">MSDS</span> ':'')
      +(m.postLocation?'<span class="sb sb-green" style="font-size:8px;">게시</span> ':'<span class="sb sb-gray" style="font-size:8px;">게시</span> ')
      +(m.eduLinked==='완료'?'<span class="sb sb-green" style="font-size:8px;">교육</span> ':'')
      +(m.relatedSopId?'<span class="sb sb-blue" style="font-size:8px;">SOP</span>':'<span class="sb sb-gray" style="font-size:8px;">SOP</span>');
    return '<tr style="cursor:pointer;" data-msds="'+m.id+'" onclick="tblHl(this);showMsdsDetailEl(this)">'
      +'<td style="font-size:10px;color:#7A96C0;">'+m.id+'</td>'
      +'<td style="font-weight:600;">'+nameTxt+'<br><span style="font-size:9px;color:#9AB0C8;">'+nameEnTxt+'</span></td>'
      +'<td style="text-align:center;">'+(m.isHazChem==='Y'?'<span class="br">유해</span>':'<span class="bgr" style="font-size:9px;">N</span>')+'</td>'
      +'<td style="text-align:center;">'+(m.isHP==='Y'?'<span class="bg">고압</span>':'<span class="bgr" style="font-size:9px;">N</span>')+'</td>'
      +'<td style="font-size:10px;">'+m.category+'</td>'
      +'<td>'+msdsBadge(st)+'</td>'
      +'<td style="font-size:10px;white-space:nowrap;">'+linkBadges+'</td>'
      +'<td style="font-size:10px;">'+(m.nextCheckDate||'—')+'</td>'
      +'<td style="font-size:10px;">'+(m.postLocation?'<span style="color:#28a745;">✔</span> '+m.postLocation.substring(0,14):'<span style="color:#dc3545;">미등록</span>')+'</td>'
      +'<td style="font-size:10px;">'+mgrTxt+'</td>'
      +'</tr>';
  }).join('');
}

function mInp(id,fld,val,ph) {
  return '<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updMsds(this.dataset.id,this.dataset.fld,this.value)" '+(isAdminMode?'':'disabled')+' style="width:100%;padding:3px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;background:'+(isAdminMode?'white':'#F7F9FC')+';">';
}
function mDt(id,fld,val) {
  return '<input type="date" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" onchange="updMsds(this.dataset.id,this.dataset.fld,this.value)" '+(isAdminMode?'':'disabled')+' style="width:100%;padding:3px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;background:'+(isAdminMode?'white':'#F7F9FC')+';">';
}
function mSel(id,fld,opts,val) {
  return '<select data-id="'+id+'" data-fld="'+fld+'" onchange="updMsds(this.dataset.id,this.dataset.fld,this.value)" '+(isAdminMode?'':'disabled')+' style="width:100%;padding:3px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;background:'+(isAdminMode?'white':'#F7F9FC')+';">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';
}
function mTa(id,fld,val,ph) {
  return '<textarea data-id="'+id+'" data-fld="'+fld+'" rows="2" placeholder="'+(ph||'')+'" onchange="updMsds(this.dataset.id,this.dataset.fld,this.value)" '+(isAdminMode?'':'disabled')+' style="width:100%;padding:3px 6px;border:1px solid #C8D8F0;border-radius:4px;font-size:11px;font-family:inherit;resize:vertical;background:'+(isAdminMode?'white':'#F7F9FC')+';">'+(val||'')+'</textarea>';
}
function mRow(lbl,inp) {
  return '<div style="margin-bottom:8px;"><div style="font-size:9px;color:#7A96C0;font-weight:600;text-transform:uppercase;letter-spacing:0.4px;margin-bottom:2px;">'+lbl+'</div>'+inp+'</div>';
}

function closeMsdsPanel() {
  const p=document.getElementById('msdsDetailPanel');
  if(p) p.style.display='none';
  msdsSelId=null;
}
function closeSopPanel() {
  const p=document.getElementById('sopDetailPanel');
  if(p) p.style.display='none';
  sopSelId=null;
}
function showMsdsDetailEl(el) { showMsdsDetail(el.dataset.msds); }
function showSopDetailEl(el) { showSopDetail(el.dataset.sop); }
function openLinkedMsds(el) {
  const mid=el.dataset.msds;
  gpDirect('msds');
  setTimeout(function(){showMsdsDetail(mid);},100);
}
function openLinkedSop(el) {
  const sid=el.dataset.sop;
  gpDirect('sop');
  setTimeout(function(){showSopDetail(sid);},100);
}
function saveMsdsDetailEl(btn) { saveMsdsDetailEdit(btn.dataset.id); }

function showMsdsDetail(id) {
  const m=msdsData.find(function(x){return x.id===id;});
  if(!m) return;
  msdsSelId=id;
  const st=calcMsdsStatus(m);
  const linkedSops=sopData.filter(function(s){return s.relatedMsdsId===id;});
  const sopHtml=linkedSops.length
    ? linkedSops.map(function(s) {
        return '<div style="background:#F0F8FF;border:1px solid #C8D8F0;border-radius:6px;padding:8px 10px;margin-top:6px;cursor:pointer;" data-sop="'+s.id+'" onclick="openLinkedSop(this)">'
          +'<div style="font-size:11px;font-weight:700;color:#003087;">'+s.id+' / '+s.sopName+'</div>'
          +'<div style="font-size:10px;color:#7A96C0;margin-top:2px;">작업구분: '+s.workType+' | 승인: '+s.approvalStatus+'</div>'
          +'</div>';
      }).join('')
    : '<div style="font-size:11px;color:#9AB0C8;padding:6px 0;">연결된 SOP 없음</div>';
  const panel=document.getElementById('msdsDetailPanel');
  if(!panel) return;
  panel.style.display='block';
  const secH='font-size:12px;font-weight:700;color:#003087;margin:14px 0 8px;border-bottom:1px solid #C8D8F0;padding-bottom:4px;';
  const saveBtn=isAdminMode
    ? '<button data-id="'+id+'" onclick="saveMsdsDetailEl(this)" style="background:#003087;color:white;border:none;padding:5px 16px;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;">💾 저장</button>'
    : '<span style="font-size:10px;color:#9AB0C8;">ADMIN 모드에서 수정 가능</span>';
  panel.innerHTML=
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;border-bottom:2px solid #003087;padding-bottom:8px;">'
    +'<div style="font-size:14px;font-weight:700;color:#003087;">'+m.id+' — '+m.name+' ('+m.nameEn+')</div>'
    +'<div style="display:flex;gap:8px;align-items:center;">'+saveBtn
    +'<button onclick="closeMsdsPanel()" style="background:#EEF3FA;border:none;cursor:pointer;padding:5px 12px;border-radius:5px;font-size:11px;">✕ 닫기</button>'
    +'</div></div>'
    +msdsBadge(st)
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:14px;">'
    +'<div>'
    +'<div style="'+secH+'">기본 정보</div>'
    +mRow('물질명',mInp(id,'name',m.name,'NH₃'))
    +mRow('영문명',mInp(id,'nameEn',m.nameEn,'Ammonia'))
    +mRow('CAS No.',mInp(id,'cas',m.cas,'7664-41-7'))
    +mRow('공급사',mInp(id,'supplier',m.supplier,'Linde'))
    +mRow('사용위치',mInp(id,'location',m.location,'5F Gas Room'))
    +mRow('보관장소',mInp(id,'storage',m.storage,'Gas Cabinet'))
    +mRow('물질구분',mInp(id,'category',m.category,'독성'))
    +mRow('유해화학물질',mSel(id,'isHazChem',['Y','N','확인필요'],m.isHazChem))
    +mRow('고압가스',mSel(id,'isHP',['Y','N','확인필요'],m.isHP))
    +mRow('담당자',mInp(id,'manager',m.manager,'홍길동'))
    +'</div>'
    +'<div>'
    +'<div style="'+secH+'">문서 정보</div>'
    +mRow('MSDS 보유',mSel(id,'hasMsds',['보유','미보유','확인필요'],m.hasMsds))
    +mRow('MSDS 개정일',mDt(id,'revDate',m.revDate))
    +mRow('최종 확인일',mDt(id,'lastCheckDate',m.lastCheckDate))
    +mRow('차기 확인일',mDt(id,'nextCheckDate',m.nextCheckDate))
    +'<div style="'+secH+'">현장 게시/비치</div>'
    +mRow('게시위치',mInp(id,'postLocation',m.postLocation,'게시함 위치'))
    +mRow('경고표지',mSel(id,'label',['완료','미작성','확인필요'],m.label||'확인필요'))
    +mRow('증빙링크',mInp(id,'link',m.link,'https://...'))
    +'<div style="'+secH+'">교육 및 SOP 연계</div>'
    +mRow('교육연계',mSel(id,'eduLinked',['완료','필요','해당없음'],m.eduLinked))
    +mRow('관련 SOP ID',mInp(id,'relatedSopId',m.relatedSopId,'SOP-001'))
    +'</div></div>'
    +'<div style="'+secH+'">위험성 요약 (선택입력)</div>'
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">'
    +mRow('주요 유해성',mTa(id,'hazardSummary',m.hazardSummary,'예: 독성, 부식성'))
    +mRow('응급조치 요약',mTa(id,'firstAid',m.firstAid,'예: 흡입 시 신선한 공기'))
    +mRow('취급/저장 주의',mTa(id,'handling',m.handling,'취급 및 저장 시 주의사항'))
    +mRow('권장 PPE',mTa(id,'ppe',m.ppe,'예: 방독마스크, 내화학 장갑'))
    +'</div>'
    +mRow('비고',mTa(id,'note',m.note,'비고 입력'))
    +'<div style="'+secH+'">연결 SOP</div>'
    +sopHtml;
}

function saveMsdsDetailEdit(id) {
  if(!isAdminMode) return;
  const m=msdsData.find(function(x){return x.id===id;});
  if(!m) return;
  const panel=document.getElementById('msdsDetailPanel');
  if(panel) panel.querySelectorAll('[data-fld]').forEach(function(el){
    const fld=el.dataset.fld; if(fld) m[fld]=el.tagName==='TEXTAREA'?el.value:el.value;
  });
  lsSave(LS.MSDS, msdsData);
  updateLastSaved();
  initMsds();
  initSummary();
  initRisk();
  showMsdsDetail(id);
  showToast('💾 MSDS 상세 데이터가 저장되었습니다.');
}

function filterSop() {
  const tp=document.getElementById('sopFilterType')?.value||'';
  const ap=document.getElementById('sopFilterAppr')?.value||'';
  const st=document.getElementById('sopFilterSt')?.value||'';
  const q=(document.getElementById('sopSearch')?.value||'').toLowerCase();
  sopFiltered=sopData.filter(s=>{
    if(tp&&s.workType!==tp) return false;
    if(ap&&s.approvalStatus!==ap) return false;
    if(st&&calcSopStatus(s)!==st) return false;
    if(q&&!(s.sopName.toLowerCase().includes(q)||(s.material||'').toLowerCase().includes(q)||(s.manager||'').toLowerCase().includes(q))) return false;
    return true;
  });
  renderSopTable();
}

function renderSopTable() {
  const tbody=document.getElementById('sopTbody');
  if(!tbody) return;
  const q=(document.getElementById('sopSearch')?.value||'').toLowerCase();
  if(!sopFiltered.length) {
    tbody.innerHTML='<tr><td colspan="11" style="text-align:center;color:#9AB0C8;padding:20px;">등록된 SOP 데이터가 없습니다.</td></tr>';
    return;
  }
  const cnt=document.getElementById('sopFilterCount');
  if(cnt) cnt.textContent='전체 '+sopData.length+'건 중 '+sopFiltered.length+'건 표시';
  tbody.innerHTML=sopFiltered.map(s=>{
    const st=calcSopStatus(s);
    const nameTxt=q?hlText(s.sopName,q):s.sopName;
    const matTxt=q?hlText(s.material,q):s.material;
    const mgrTxt=q?hlText(s.manager,q):s.manager;
    const msdsLinked=s.relatedMsdsId&&s.relatedMsdsId!==''&&s.relatedMsdsId!=='해당없음';
    const msdsBadgeHtml=msdsLinked
      ?'<span style="font-size:10px;color:#0047B0;font-weight:600;">'+s.relatedMsdsId+'</span>'
      :s.relatedMsdsId==='해당없음'?'<span class="bgr" style="font-size:9px;">해당없음</span>'
      :'<span class="br" style="font-size:9px;">미연계</span>';
    return '<tr style="cursor:pointer;" data-sop="'+s.id+'" onclick="tblHl(this);showSopDetailEl(this)">'
      +'<td style="font-size:10px;color:#7A96C0;">'+s.id+'</td>'
      +'<td style="font-weight:600;">'+nameTxt+'</td>'
      +'<td style="font-size:10px;">'+s.workType+'</td>'
      +'<td style="font-size:10px;">'+matTxt+'</td>'
      +'<td style="font-size:10px;">'+(s.version||'—')+'</td>'
      +'<td>'+sopBadge(s.approvalStatus||'—')+'</td>'
      +'<td style="font-size:10px;">'+(s.nextReviewDate||'—')+'</td>'
      +'<td style="text-align:center;">'+sopBadge(s.eduLinked||'—')+'</td>'
      +'<td style="text-align:center;">'+msdsBadgeHtml+'</td>'
      +'<td>'+sopBadge(st)+'</td>'
      +'<td style="font-size:10px;">'+mgrTxt+'</td>'
      +'</tr>';
  }).join('');
}

function showSopDetail(id) {
  const s=sopData.find(x=>x.id===id);
  if(!s) return;
  sopSelId=id;
  const st=calcSopStatus(s);
  const linkedMsds=msdsData.find(m=>m.id===s.relatedMsdsId);
  const msdsHtml=linkedMsds
    ? '<div style="background:#F0F8FF;border:1px solid #C8D8F0;border-radius:6px;padding:8px 10px;cursor:pointer;" data-msds="'+linkedMsds.id+'" onclick="openLinkedMsds(this)">'
      +'<div style="font-size:11px;font-weight:700;color:#003087;">'+linkedMsds.id+' / '+linkedMsds.name+' ('+linkedMsds.nameEn+')</div>'
      +'<div style="font-size:10px;color:#7A96C0;margin-top:2px;">보유: '+linkedMsds.hasMsds+' | 상태: '+calcMsdsStatus(linkedMsds)+'</div>'
      +'</div>'
    : '<div style="font-size:11px;color:#9AB0C8;padding:6px 0;">'+(s.relatedMsdsId==='해당없음'?'해당없음':'연결된 MSDS 없음')+'</div>';
  const mkSection=(lbl,val)=>val
    ? '<div style="background:#F5F8FD;border-radius:6px;padding:8px 10px;margin-bottom:6px;"><div style="font-size:10px;font-weight:700;color:#003087;margin-bottom:3px;">'+lbl+'</div><div style="font-size:11px;color:#3A5A8A;">'+val+'</div></div>'
    : '';
  const panel=document.getElementById('sopDetailPanel');
  if(!panel) return;
  panel.style.display='block';
  panel.innerHTML=
    '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">'
    +'<div style="font-size:14px;font-weight:700;color:#003087;">'+s.id+' — '+s.sopName+'</div>'
    +'<button onclick="closeSopPanel()" style="background:#EEF3FA;border:none;cursor:pointer;padding:4px 10px;border-radius:5px;font-size:11px;">✕ 닫기</button>'
    +'</div>'
    +sopBadge(st)
    +'<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:12px 0;">'
    +'<div><span style="font-size:10px;color:#7A96C0;">작업구분</span><br><b>'+s.workType+'</b></div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">대상물질</span><br>'+s.material+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">대상설비</span><br>'+(s.facility||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">SOP 버전</span><br><b>'+(s.version||'—')+'</b></div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">제정일</span><br>'+(s.initDate||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">최근 개정일</span><br>'+(s.lastRevDate||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">차기 검토일</span><br><b>'+(s.nextReviewDate||'—')+'</b></div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">승인상태</span><br>'+sopBadge(s.approvalStatus||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">작성자</span><br>'+(s.author||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">검토자 / 승인자</span><br>'+(s.reviewer||'—')+' / '+(s.approver||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">교육연계</span><br>'+sopBadge(s.eduLinked||'—')+'</div>'
    +'<div><span style="font-size:10px;color:#7A96C0;">담당자</span><br>'+s.manager+'</div>'
    +'<div style="grid-column:1/-1;"><span style="font-size:10px;color:#7A96C0;">증빙링크</span><br>'+(s.link||'<span style="color:#9AB0C8;">미입력</span>')+'</div>'
    +'<div style="grid-column:1/-1;"><span style="font-size:10px;color:#7A96C0;">PPE 기준</span><br><b>'+(s.ppe||'—')+'</b></div>'
    +'</div>'
    +mkSection('작업 전 확인사항',s.beforeWork)
    +mkSection('작업 중 확인사항',s.duringWork)
    +mkSection('작업 후 확인사항',s.afterWork)
    +mkSection('비상조치',s.emergency)
    +'<div style="font-size:11px;font-weight:700;color:#003087;margin:10px 0 6px;border-top:1px solid #E4EDF8;padding-top:10px;">관련 MSDS</div>'
    +msdsHtml
    +(s.note?'<div style="margin-top:8px;font-size:11px;color:#6c757d;">비고: '+s.note+'</div>':'');
}

function addNewMsds() {
  if(!isAdminMode) return;
  const newId='MSDS-'+(String(msdsData.length+1).padStart(3,'0'));
  msdsData.push({id:newId,name:'',nameEn:'',cas:'',supplier:'',location:'',storage:'',
    isHazChem:'확인필요',isHP:'확인필요',category:'',hasMsds:'확인필요',revDate:'',lastCheckDate:'',nextCheckDate:'',
    postLocation:'',link:'',label:'확인필요',eduLinked:'해당없음',relatedSopId:'',status:'확인필요',manager:'한상휘',note:''});
  renderEditMsdsTable();
  updateEditCounts();
  showToast('MSDS 신규 행 추가됨 — 내용 입력 후 저장하세요.');
}

function deleteMsds(id) {
  if(!isAdminMode) return;
  if(!confirm(id+' MSDS를 삭제하시겠습니까?')) return;
  msdsData=msdsData.filter(m=>m.id!==id);
  saveMsdsSection();
  renderEditMsdsTable();
  initMsds();
}

function saveMsdsSection() {
  if(!isAdminMode) return;
  lsSave(LS.MSDS, msdsData);
  updateLastSaved();
  initMsds();
  initSummary();
  initRisk();
  markEsSaved('msds'); updateEditCounts();
  showToast('💾 MSDS 데이터가 저장되었습니다.');
}

function msdsRiskClick(id) {
  gpDirect('msds');
  setTimeout(()=>showMsdsDetail(id),120);
}

function renderEditMsdsTable() {
  const tbody=document.getElementById('editMsdsTbody');
  if(!tbody) return;
  if(!msdsData.length) {tbody.innerHTML='<tr><td colspan="12" style="text-align:center;color:#9AB0C8;padding:16px;">등록된 MSDS 없음</td></tr>';return;}
  const mkSel=(id,fld,opts,val)=>'<select data-id="'+id+'" data-fld="'+fld+'" onchange="updMsdsEl(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(o=>'<option'+(val===o?' selected':'')+'>'+o+'</option>').join('')+'</select>';
  const mkInp=(id,fld,val,ph,w)=>'<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updMsdsEl(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';
  const mkDate=(id,fld,val)=>'<input type="date" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" onchange="updMsdsEl(this)" style="width:100%;padding:2px 3px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';
  tbody.innerHTML=msdsData.map(m=>'<tr>'
    +'<td>'+mkInp(m.id,'id',m.id,'MSDS-XXX','80px')+'</td>'
    +'<td>'+mkInp(m.id,'name',m.name,'물질명','60px')+'</td>'
    +'<td>'+mkSel(m.id,'isHazChem',['Y','N','확인필요'],m.isHazChem)+'</td>'
    +'<td>'+mkSel(m.id,'isHP',['Y','N','확인필요'],m.isHP)+'</td>'
    +'<td>'+mkSel(m.id,'hasMsds',['보유','미보유','확인필요'],m.hasMsds)+'</td>'
    +'<td>'+mkDate(m.id,'nextCheckDate',m.nextCheckDate)+'</td>'
    +'<td>'+mkInp(m.id,'postLocation',m.postLocation,'게시위치')+'</td>'
    +'<td>'+mkSel(m.id,'eduLinked',['완료','필요','해당없음'],m.eduLinked)+'</td>'
    +'<td>'+mkInp(m.id,'relatedSopId',m.relatedSopId,'SOP-XXX','70px')+'</td>'
    +'<td>'+mkInp(m.id,'manager',m.manager,'담당자','60px')+'</td>'
    +'<td>'+mkInp(m.id,'note',m.note,'비고')+'</td>'
    +'<td><button data-id="'+m.id+'" onclick="delMsdsBtn(this)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
    +'</tr>').join('');
}

function updMsds(id,fld,val) {
  const m=msdsData.find(x=>x.id===id);
  if(m) m[fld]=val;
}
function updMsdsEl(el) { updMsds(el.dataset.id, el.dataset.fld, el.value); }
function delMsdsBtn(btn) { deleteMsds(btn.dataset.id); }

function addNewSop() {
  if(!isAdminMode) return;
  const newId='SOP-'+(String(sopData.length+1).padStart(3,'0'));
  sopData.push({id:newId,sopName:'',workType:'',material:'',facility:'',relatedMsdsId:'',
    version:'',initDate:'',lastRevDate:'',nextReviewDate:'',author:'',reviewer:'',approver:'',
    approvalStatus:'작성중',eduLinked:'해당없음',ppe:'',beforeWork:'',duringWork:'',afterWork:'',
    emergency:'',link:'',status:'확인필요',manager:'한상휘',note:''});
  renderEditSopTable();
  updateEditCounts();
  showToast('SOP 신규 행 추가됨 — 내용 입력 후 저장하세요.');
}

function deleteSop(id) {
  if(!isAdminMode) return;
  if(!confirm(id+' SOP를 삭제하시겠습니까?')) return;
  sopData=sopData.filter(s=>s.id!==id);
  saveSopSection();
  renderEditSopTable();
  initSop();
}

function saveSopSection() {
  if(!isAdminMode) return;
  lsSave(LS.SOP, sopData);
  updateLastSaved();
  initSop();
  initSummary();
  initRisk();
  markEsSaved('sop'); updateEditCounts();
  showToast('💾 SOP 데이터가 저장되었습니다.');
}

function sopRiskClick(id) {
  gpDirect('sop');
  setTimeout(()=>showSopDetail(id),120);
}

function renderEditSopTable() {
  const tbody=document.getElementById('editSopTbody');
  if(!tbody) return;
  if(!sopData.length) {tbody.innerHTML='<tr><td colspan="12" style="text-align:center;color:#9AB0C8;padding:16px;">등록된 SOP 없음</td></tr>';return;}
  const mkSel=(id,fld,opts,val)=>'<select data-id="'+id+'" data-fld="'+fld+'" onchange="updSopEl(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(o=>'<option'+(val===o?' selected':'')+'>'+o+'</option>').join('')+'</select>';
  const mkInp=(id,fld,val,ph,w)=>'<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updSopEl(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';
  const mkDate=(id,fld,val)=>'<input type="date" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" onchange="updSopEl(this)" style="width:100%;padding:2px 3px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';
  tbody.innerHTML=sopData.map(s=>'<tr>'
    +'<td>'+mkInp(s.id,'id',s.id,'SOP-XXX','70px')+'</td>'
    +'<td>'+mkInp(s.id,'sopName',s.sopName,'SOP명')+'</td>'
    +'<td>'+mkSel(s.id,'workType',['실린더 교체','배관작업','Hook-up','점검','비상대응','기타'],s.workType)+'</td>'
    +'<td>'+mkInp(s.id,'material',s.material,'물질','60px')+'</td>'
    +'<td>'+mkInp(s.id,'version',s.version,'Rev.X','50px')+'</td>'
    +'<td>'+mkSel(s.id,'approvalStatus',['작성중','검토중','승인완료','개정필요'],s.approvalStatus)+'</td>'
    +'<td>'+mkDate(s.id,'nextReviewDate',s.nextReviewDate)+'</td>'
    +'<td>'+mkInp(s.id,'relatedMsdsId',s.relatedMsdsId,'MSDS-XXX','80px')+'</td>'
    +'<td>'+mkSel(s.id,'eduLinked',['완료','필요','해당없음'],s.eduLinked)+'</td>'
    +'<td>'+mkInp(s.id,'manager',s.manager,'담당자','60px')+'</td>'
    +'<td>'+mkInp(s.id,'note',s.note,'비고')+'</td>'
    +'<td><button data-id="'+s.id+'" onclick="delSopBtn(this)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
    +'</tr>').join('');
}

function updSop(id,fld,val) {
  const s=sopData.find(x=>x.id===id);
  if(s) s[fld]=val;
}
function updSopEl(el) { updSop(el.dataset.id, el.dataset.fld, el.value); }
function delSopBtn(btn) { deleteSop(btn.dataset.id); }

function initMsds() {
  msdsFiltered=[...msdsData];
  renderMsdsKpi('msdsKpiGrid');
  renderMsdsTable();
  renderEditMsdsTable();
}

function initSop() {
  sopFiltered=[...sopData];
  renderSopKpi('sopKpiGrid');
  renderSopTable();
  renderEditSopTable();
}

// ── GD Edit Table ─────────────────────────────────
function renderEditGDTable() {
  const tbody=document.getElementById('editGDTbody');
  if(!tbody) return;
  const activeGD=gdData.filter(function(d){return d[2]&&d[2]!=='';});
  if(!activeGD.length){tbody.innerHTML='<tr><td colspan="14" style="text-align:center;color:#9AB0C8;padding:16px;">등록된 감지기 없음</td></tr>';return;}
  const stOpts=['정상','이상','교정중','비가동'];
  const inp=(idx,col,val,ph,w)=>'<input type="text" data-gd="'+idx+'" data-col="'+col+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updGDCell(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';
  const dt=(idx,col,val)=>'<input type="date" data-gd="'+idx+'" data-col="'+col+'" value="'+(val||'')+'" onchange="updGDCell(this)" style="width:100%;padding:2px 3px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';
  const sel=(idx,col,opts,val)=>'<select data-gd="'+idx+'" data-col="'+col+'" onchange="updGDCell(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';
  tbody.innerHTML=activeGD.map(function(d) {
    const idx=gdData.indexOf(d);
    return '<tr>'
      +'<td style="font-size:10px;color:#7A96C0;text-align:center;">'+d[1]+'</td>'
      +'<td>'+inp(idx,2,d[2],'위치')+'</td>'
      +'<td>'+inp(idx,3,d[3],'가스','50px')+'</td>'
      +'<td>'+inp(idx,4,d[4],'제조사','70px')+'</td>'
      +'<td>'+inp(idx,5,d[5],'모델','70px')+'</td>'
      +'<td>'+inp(idx,6,d[6],'방식','60px')+'</td>'
      +'<td>'+inp(idx,7,d[7],'단위','40px')+'</td>'
      +'<td>'+inp(idx,8,d[8],'Alarm1','55px')+'</td>'
      +'<td>'+inp(idx,9,d[9],'Alarm2','55px')+'</td>'
      +'<td><input type="number" data-gd="'+idx+'" data-col="10" value="'+(d[10]||6)+'" min="1" max="24" onchange="updGDCell(this)" style="width:40px;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;"></td>'
      +'<td>'+dt(idx,11,d[11])+'</td>'
      +'<td>'+sel(idx,12,stOpts,d[12])+'</td>'
      +'<td>'+inp(idx,13,d[13],'비고')+'</td>'
      +'<td><button data-gd="'+idx+'" onclick="delGDRow(this)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
      +'</tr>';
  }).join('');
}

function updGDCell(el) {
  const idx=parseInt(el.dataset.gd);
  const col=parseInt(el.dataset.col);
  if(isNaN(idx)||isNaN(col)) return;
  gdData[idx][col]=col===10?parseInt(el.value)||6:el.value;
}

function delGDRow(btn) {
  if(!isAdminMode) return;
  const idx=parseInt(btn.dataset.gd);
  if(isNaN(idx)) return;
  gdData[idx][2]=''; gdData[idx][3]=''; gdData[idx][12]='';
  saveGDSection();
  renderEditGDTable();
  initGD();
}

function addNewGD() {
  if(!isAdminMode) return;
  const used=gdData.filter(function(d){return d[2]&&d[2]!=='';}).length;
  const nextId='GD-'+String(used+1).padStart(3,'0');
  const emptySlot=gdData.find(function(d){return !d[2]||d[2]==='';});
  if(emptySlot) {
    emptySlot[1]=nextId; emptySlot[2]='신규 위치'; emptySlot[3]=''; emptySlot[4]=''; emptySlot[5]='';
    emptySlot[6]=''; emptySlot[7]='ppm'; emptySlot[8]=''; emptySlot[9]=''; emptySlot[10]=6;
    emptySlot[11]=''; emptySlot[12]='정상'; emptySlot[13]='';
  } else {
    gdData.push([gdData.length+1,nextId,'신규 위치','','','','','ppm','','',6,'','정상','']);
  }
  renderEditGDTable();
  updateEditCounts();
  showToast('감지기 신규 행 추가됨 — 내용 입력 후 저장하세요.');
}

function saveGDSection() {
  if(!isAdminMode) return;
  lsSave(LS.GD, gdData);
  updateLastSaved();
  initGD();
  initSummary();
  initHome();
  markEsSaved('gd'); updateEditCounts();
  showToast('💾 가스감지기 데이터가 저장되었습니다.');
}

function initGDEdit() {
  renderEditGDTable();
}

// ── Feature 1: 화학물질 관리대장 ────────────────────
function calcChemMgrStatus(d) {
  if(d.isAppointed!=='Y') return '미선임';
  if(!d.reportDate||d.reportDate==='') return '신고필요';
  const today=new Date('2026-06-14');
  if(d.trainingDone!=='Y') {
    if(d.trainingDeadline&&new Date(d.trainingDeadline)<today) return '교육기한초과';
    return '교육필요';
  }
  return '정상';
}

function calcLedgerKpi() {
  const total=ledgerData.length;
  const normal=ledgerData.filter(function(d){return d.status==='정상';}).length;
  const needCheck=ledgerData.filter(function(d){return d.status==='확인필요';}).length;
  const mismatch=ledgerData.filter(function(d){return d.status==='불일치';}).length;
  const noDoc=ledgerData.filter(function(d){return !d.docLinked||d.docLinked==='';
  }).length;
  const totalIn=ledgerData.reduce(function(a,d){return a+(d.inQty||0);},0);
  return {total,normal,needCheck,mismatch,noDoc,totalIn};
}

function renderEditLedgerTable() {
  const tbody=document.getElementById('editLedgerTbody');
  if(!tbody) return;
  const mkInp=function(id,fld,val,ph,w){return '<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updLedger(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';}
  const mkNum=function(id,fld,val){return '<input type="number" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||0)+'" onchange="updLedger(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';}
  const mkSel=function(id,fld,opts,val){return '<select data-id="'+id+'" data-fld="'+fld+'" onchange="updLedger(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';}
  tbody.innerHTML=ledgerData.map(function(d){return '<tr>'
    +'<td>'+mkInp(d.id,'id',d.id,'LDG-XXX','80px')+'</td>'
    +'<td>'+mkInp(d.id,'chemName',d.chemName,'물질','60px')+'</td>'
    +'<td>'+mkInp(d.id,'year',d.year,'연도','55px')+'</td>'
    +'<td>'+mkInp(d.id,'month',d.month,'월','40px')+'</td>'
    +'<td>'+mkNum(d.id,'prevStock',d.prevStock)+'</td>'
    +'<td>'+mkNum(d.id,'inQty',d.inQty)+'</td>'
    +'<td>'+mkNum(d.id,'outQty',d.outQty)+'</td>'
    +'<td>'+mkNum(d.id,'useQty',d.useQty)+'</td>'
    +'<td>'+mkNum(d.id,'stockQty',d.stockQty)+'</td>'
    +'<td>'+mkInp(d.id,'inDate',d.inDate,'날짜','85px')+'</td>'
    +'<td>'+mkInp(d.id,'remark',d.remark,'비고')+'</td>'
    +'<td>'+mkSel(d.id,'status',['정상','확인필요','불일치','증빙미등록'],d.status)+'</td>'
    +'<td><button data-id="'+d.id+'" onclick="deleteLedger(this.dataset.id)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
    +'</tr>';}).join('');
}

function updLedger(el) {
  const d=ledgerData.find(function(x){return x.id===el.dataset.id;});
  if(d) d[el.dataset.fld]=el.value;
}
function deleteLedger(id) {
  if(!isAdminMode) return;
  ledgerData=ledgerData.filter(function(d){return d.id!==id;});
  renderEditLedgerTable(); updateEditCounts();
}
function addNewLedger() {
  if(!isAdminMode) return;
  const idx=ledgerData.length+1;
  ledgerData.push({id:'LEDGER-'+String(idx).padStart(3,'0'),chemName:'',casNo:'',category:'유해화학물질',
    year:2026,month:new Date().getMonth()+1,prevStock:0,inQty:0,outQty:0,useQty:0,stockQty:0,
    inDate:'',outDate:'',manager:'',remark:'',docLinked:'',status:'확인필요',note:''});
  renderEditLedgerTable(); updateEditCounts();
}
function saveLedgerSection() {
  if(!isAdminMode) return;
  lsSave(LS.LEDGER, ledgerData);
  updateLastSaved();
  initLedger(); initSummary(); initHome(); initRisk(); updateSummaryNewKpis();
  markEsSaved('ledger'); updateEditCounts();
  showToast('💾 화학물질 관리대장이 저장되었습니다.');
}

function initLedger() {
  const k=calcLedgerKpi();
  const grid=document.getElementById('ledgerKpiGrid');
  if(grid) grid.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">등록 건수</div><div class="kpi-value">'+k.total+'건</div></div>'
    +'<div class="kpi-card kc-ok"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">'+k.normal+'건</div></div>'
    +'<div class="kpi-card '+(k.needCheck>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">확인필요</div><div class="kpi-value" style="color:'+(k.needCheck>0?'#E8960A':'#28a745')+';">'+k.needCheck+'건</div></div>'
    +'<div class="kpi-card '+(k.mismatch>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">불일치</div><div class="kpi-value" style="color:'+(k.mismatch>0?'#dc3545':'#28a745')+';">'+k.mismatch+'건</div></div>'
    +'<div class="kpi-card"><div class="kpi-label">연간 입고 합계</div><div class="kpi-value">'+k.totalIn+' EA</div></div>';
  const tb=document.getElementById('ledgerTbody');
  if(!tb) return;
  const stMap={'정상':'background:#d4edda;color:#155724','확인필요':'background:#FFF3CD;color:#664d03','불일치':'background:#f8d7da;color:#721c24','증빙미등록':'background:#f8d7da;color:#721c24'};
  tb.innerHTML=ledgerData.map(function(d){
    const stS=stMap[d.status]||'';
    return '<tr><td>'+d.id+'</td><td>'+d.chemName+'</td><td style="font-size:11px;">'+d.category+'</td>'
      +'<td>'+d.year+'/'+String(d.month).padStart(2,'0')+'</td>'
      +'<td style="text-align:right;">'+d.prevStock+'</td>'
      +'<td style="text-align:right;color:#0047B0;font-weight:600;">'+d.inQty+'</td>'
      +'<td style="text-align:right;color:#dc3545;">'+((d.outQty||0)+(d.useQty||0))+'</td>'
      +'<td style="text-align:right;font-weight:700;">'+d.stockQty+'</td>'
      +'<td>'+(d.inDate||'—')+'</td><td>'+d.manager+'</td>'
      +'<td>'+(d.remark||'—')+'</td>'
      +'<td><span style="'+stS+';padding:2px 7px;border-radius:4px;font-size:10px;font-weight:600;">'+d.status+'</span></td>'
      +'</tr>';
  }).join('');
  renderEditLedgerTable();
}

// ── Feature 1b: 실적보고 관리 ────────────────────────
function calcPerfKpi() {
  const today=new Date('2026-06-14');
  const total=perfData.length;
  const submitted=perfData.filter(function(d){return d.status==='제출완료';}).length;
  const needSubmit=perfData.filter(function(d){return d.status==='제출필요';}).length;
  const overdue=perfData.filter(function(d){
    if(d.status==='제출완료') return false;
    if(!d.dueDate) return false;
    return new Date(d.dueDate)<today;
  }).length;
  return {total,submitted,needSubmit,overdue};
}

function renderEditPerfTable() {
  const tbody=document.getElementById('editPerfTbody');
  if(!tbody) return;
  const mkInp=function(id,fld,val,ph,w){return '<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updPerf(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';}
  const mkSel=function(id,fld,opts,val){return '<select data-id="'+id+'" data-fld="'+fld+'" onchange="updPerf(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';}
  tbody.innerHTML=perfData.map(function(d){return '<tr>'
    +'<td>'+mkInp(d.id,'id',d.id,'PERF-XXX','80px')+'</td>'
    +'<td>'+mkInp(d.id,'reportType',d.reportType,'보고구분')+'</td>'
    +'<td>'+mkInp(d.id,'period',d.period,'기간','90px')+'</td>'
    +'<td>'+mkSel(d.id,'submitTarget',['Y','N'],d.submitTarget)+'</td>'
    +'<td>'+mkInp(d.id,'dueDate',d.dueDate,'날짜','85px')+'</td>'
    +'<td>'+mkInp(d.id,'submitDate',d.submitDate,'날짜','85px')+'</td>'
    +'<td>'+mkSel(d.id,'status',['제출완료','제출필요','기한초과'],d.status)+'</td>'
    +'<td>'+mkInp(d.id,'receiptNo',d.receiptNo,'접수번호','90px')+'</td>'
    +'<td>'+mkInp(d.id,'manager',d.manager,'담당자','60px')+'</td>'
    +'<td>'+mkInp(d.id,'note',d.note,'비고')+'</td>'
    +'<td><button data-id="'+d.id+'" onclick="deletePerf(this.dataset.id)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
    +'</tr>';}).join('');
}
function updPerf(el) {
  const d=perfData.find(function(x){return x.id===el.dataset.id;});
  if(d) d[el.dataset.fld]=el.value;
}
function deletePerf(id) {
  if(!isAdminMode) return;
  perfData=perfData.filter(function(d){return d.id!==id;});
  renderEditPerfTable(); updateEditCounts();
}
function addNewPerf() {
  if(!isAdminMode) return;
  const idx=perfData.length+1;
  perfData.push({id:'PERF-'+String(idx).padStart(3,'0'),reportType:'유해화학물질 취급실적보고',period:'',
    targetChems:'',submitTarget:'Y',dueDate:'',submitDate:'',status:'제출필요',
    docLinked:'',receiptNo:'',manager:'한상휘',note:''});
  renderEditPerfTable(); updateEditCounts();
}
function savePerfSection() {
  if(!isAdminMode) return;
  lsSave(LS.PERF, perfData);
  updateLastSaved();
  initPerf(); initSummary(); initHome(); initRisk(); updateSummaryNewKpis();
  markEsSaved('perf'); updateEditCounts();
  showToast('💾 실적보고 데이터가 저장되었습니다.');
}

function initPerf() {
  const k=calcPerfKpi();
  const grid=document.getElementById('perfKpiGrid');
  if(grid) grid.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">전체 보고</div><div class="kpi-value">'+k.total+'건</div></div>'
    +'<div class="kpi-card kc-ok"><div class="kpi-label">제출완료</div><div class="kpi-value" style="color:#28a745;">'+k.submitted+'건</div></div>'
    +'<div class="kpi-card '+(k.needSubmit>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">제출필요</div><div class="kpi-value" style="color:'+(k.needSubmit>0?'#E8960A':'#28a745')+';">'+k.needSubmit+'건</div></div>'
    +'<div class="kpi-card '+(k.overdue>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">기한초과</div><div class="kpi-value" style="color:'+(k.overdue>0?'#dc3545':'#28a745')+';">'+k.overdue+'건</div></div>';
  const tb=document.getElementById('perfTbody');
  if(!tb) return;
  const stMap={'제출완료':'background:#d4edda;color:#155724','제출필요':'background:#FFF3CD;color:#664d03','기한초과':'background:#f8d7da;color:#721c24'};
  tb.innerHTML=perfData.map(function(d){
    const stS=stMap[d.status]||'';
    return '<tr><td>'+d.id+'</td><td>'+d.reportType+'</td><td>'+d.period+'</td>'
      +'<td style="font-size:11px;">'+d.targetChems+'</td>'
      +'<td style="text-align:center;">'+d.submitTarget+'</td>'
      +'<td>'+d.dueDate+'</td><td>'+(d.submitDate||'—')+'</td>'
      +'<td><span style="'+stS+';padding:2px 7px;border-radius:4px;font-size:10px;font-weight:600;">'+d.status+'</span></td>'
      +'<td>'+(d.receiptNo||'—')+'</td><td>'+d.manager+'</td>'
      +'<td style="font-size:11px;">'+(d.note||'—')+'</td>'
      +'</tr>';
  }).join('');
  renderEditPerfTable();
}

// ── Feature 2: 취급시설 자체점검대장 ─────────────────
function calcSelfChkKpi() {
  const total=selfChkData.length;
  const normal=selfChkData.filter(function(d){return d.result==='정상';}).length;
  const needAction=selfChkData.filter(function(d){return d.actionRequired==='Y'&&d.actionStatus!=='조치완료';}).length;
  const actionDone=selfChkData.filter(function(d){return d.actionRequired==='Y'&&d.actionStatus==='조치완료';}).length;
  const overdue=selfChkData.filter(function(d){
    if(d.actionStatus==='조치완료'||d.actionRequired!=='Y') return false;
    if(!d.actionDeadline) return false;
    return new Date(d.actionDeadline)<new Date('2026-06-14');
  }).length;
  return {total,normal,needAction,actionDone,overdue};
}

function renderEditSelfChkTable() {
  const tbody=document.getElementById('editSelfChkTbody');
  if(!tbody) return;
  const mkInp=function(id,fld,val,ph,w){return '<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updSelfChk(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';}
  const mkNum=function(id,fld,val){return '<input type="number" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||0)+'" onchange="updSelfChk(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';}
  const mkSel=function(id,fld,opts,val){return '<select data-id="'+id+'" data-fld="'+fld+'" onchange="updSelfChk(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';}
  tbody.innerHTML=selfChkData.map(function(d){return '<tr>'
    +'<td>'+mkInp(d.id,'id',d.id,'SCK-XXX','95px')+'</td>'
    +'<td>'+mkInp(d.id,'facility',d.facility,'시설명')+'</td>'
    +'<td>'+mkInp(d.id,'checkDate',d.checkDate,'날짜','85px')+'</td>'
    +'<td>'+mkInp(d.id,'checkType',d.checkType,'구분','90px')+'</td>'
    +'<td>'+mkInp(d.id,'inspector',d.inspector,'점검자','60px')+'</td>'
    +'<td>'+mkNum(d.id,'checkItems',d.checkItems)+'</td>'
    +'<td>'+mkNum(d.id,'passItems',d.passItems)+'</td>'
    +'<td>'+mkNum(d.id,'failItems',d.failItems)+'</td>'
    +'<td>'+mkSel(d.id,'result',['정상','확인필요','조치필요'],d.result)+'</td>'
    +'<td>'+mkSel(d.id,'actionRequired',['N','Y'],d.actionRequired)+'</td>'
    +'<td>'+mkInp(d.id,'actionDeadline',d.actionDeadline,'날짜','85px')+'</td>'
    +'<td>'+mkSel(d.id,'actionStatus',['해당없음','조치중','조치완료'],d.actionStatus)+'</td>'
    +'<td>'+mkInp(d.id,'remark',d.remark,'비고')+'</td>'
    +'<td><button data-id="'+d.id+'" onclick="deleteSelfChk(this.dataset.id)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
    +'</tr>';}).join('');
}
function updSelfChk(el) {
  const d=selfChkData.find(function(x){return x.id===el.dataset.id;});
  if(d) d[el.dataset.fld]=el.value;
}
function deleteSelfChk(id) {
  if(!isAdminMode) return;
  selfChkData=selfChkData.filter(function(d){return d.id!==id;});
  renderEditSelfChkTable(); updateEditCounts();
}
function addNewSelfChk() {
  if(!isAdminMode) return;
  const idx=selfChkData.length+1;
  selfChkData.push({id:'SELF-CHK-'+String(idx).padStart(3,'0'),facility:'',checkDate:'',
    checkType:'정기 자체점검',inspector:'',checkItems:10,passItems:0,failItems:0,
    result:'확인필요',actionRequired:'N',actionDeadline:'',actionStatus:'해당없음',
    docLinked:'',remark:''});
  renderEditSelfChkTable(); updateEditCounts();
}
function saveSelfChkSection() {
  if(!isAdminMode) return;
  lsSave(LS.SELFCHK, selfChkData);
  updateLastSaved();
  initSelfChk(); initSummary(); initHome(); initRisk(); updateSummaryNewKpis();
  markEsSaved('selfchk'); updateEditCounts();
  showToast('💾 취급시설 자체점검 데이터가 저장되었습니다.');
}

function initSelfChk() {
  const k=calcSelfChkKpi();
  const grid=document.getElementById('selfChkKpiGrid');
  if(grid) grid.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">전체 점검</div><div class="kpi-value">'+k.total+'건</div></div>'
    +'<div class="kpi-card kc-ok"><div class="kpi-label">정상</div><div class="kpi-value" style="color:#28a745;">'+k.normal+'건</div></div>'
    +'<div class="kpi-card '+(k.needAction>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">조치 필요</div><div class="kpi-value" style="color:'+(k.needAction>0?'#dc3545':'#28a745')+';">'+k.needAction+'건</div></div>'
    +'<div class="kpi-card kc-ok"><div class="kpi-label">조치 완료</div><div class="kpi-value" style="color:#28a745;">'+k.actionDone+'건</div></div>'
    +'<div class="kpi-card '+(k.overdue>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">조치기한 초과</div><div class="kpi-value" style="color:'+(k.overdue>0?'#dc3545':'#28a745')+';">'+k.overdue+'건</div></div>';
  const tb=document.getElementById('selfChkTbody');
  if(!tb) return;
  const resMap={'정상':'background:#d4edda;color:#155724','확인필요':'background:#FFF3CD;color:#664d03','조치필요':'background:#f8d7da;color:#721c24'};
  const actMap={'해당없음':'color:#6c757d','조치중':'color:#E8960A;font-weight:600','조치완료':'color:#28a745;font-weight:600'};
  tb.innerHTML=selfChkData.map(function(d){
    const rS=resMap[d.result]||'';
    const aS=actMap[d.actionStatus]||'';
    return '<tr><td>'+d.id+'</td>'
      +'<td style="font-size:11px;">'+d.facility+'</td>'
      +'<td>'+d.checkDate+'</td><td>'+d.checkType+'</td><td>'+d.inspector+'</td>'
      +'<td style="text-align:center;">'+d.checkItems+'</td>'
      +'<td style="text-align:center;color:#28a745;font-weight:600;">'+d.passItems+'</td>'
      +'<td style="text-align:center;color:#dc3545;font-weight:600;">'+d.failItems+'</td>'
      +'<td><span style="'+rS+';padding:2px 7px;border-radius:4px;font-size:10px;font-weight:600;">'+d.result+'</span></td>'
      +'<td style="text-align:center;">'+d.actionRequired+'</td>'
      +'<td>'+(d.actionDeadline||'—')+'</td>'
      +'<td style="'+aS+'">'+d.actionStatus+'</td>'
      +'<td style="font-size:11px;">'+(d.remark||'—')+'</td>'
      +'</tr>';
  }).join('');
  renderEditSelfChkTable();
}

// ── Feature 3: 유해화학물질관리자 선임·교육 ───────────
function calcChemMgrKpi() {
  const today=new Date('2026-06-14');
  const total=chemMgrData.length;
  const appointed=chemMgrData.filter(function(d){return d.isAppointed==='Y';}).length;
  const reported=chemMgrData.filter(function(d){return d.reportDate&&d.reportDate!=='';}).length;
  const eduDone=chemMgrData.filter(function(d){return d.trainingDone==='Y';}).length;
  const eduNeeded=chemMgrData.filter(function(d){
    if(d.trainingDone==='Y') return false;
    return true;
  }).length;
  const overdue=chemMgrData.filter(function(d){
    if(d.trainingDone==='Y') return false;
    if(!d.trainingDeadline) return false;
    return new Date(d.trainingDeadline)<today;
  }).length;
  return {total,appointed,reported,eduDone,eduNeeded,overdue};
}

function renderEditChemMgrTable() {
  const tbody=document.getElementById('editChemMgrTbody');
  if(!tbody) return;
  const mkInp=function(id,fld,val,ph,w){return '<input type="text" data-id="'+id+'" data-fld="'+fld+'" value="'+(val||'')+'" placeholder="'+(ph||'')+'" onchange="updChemMgr(this)" style="width:'+(w||'100%')+';padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">';}
  const mkSel=function(id,fld,opts,val){return '<select data-id="'+id+'" data-fld="'+fld+'" onchange="updChemMgr(this)" style="width:100%;padding:2px 4px;border:1px solid #C8D8F0;border-radius:4px;font-size:10px;font-family:inherit;">'+opts.map(function(o){return '<option'+(val===o?' selected':'')+'>'+o+'</option>';}).join('')+'</select>';}
  tbody.innerHTML=chemMgrData.map(function(d){return '<tr>'
    +'<td>'+mkInp(d.id,'id',d.id,'MGR-XXX','90px')+'</td>'
    +'<td>'+mkInp(d.id,'name',d.name,'성명','60px')+'</td>'
    +'<td>'+mkInp(d.id,'dept',d.dept,'부서','80px')+'</td>'
    +'<td>'+mkSel(d.id,'role',['유해화학물질관리자','대리자','보조관리자'],d.role)+'</td>'
    +'<td>'+mkSel(d.id,'isAppointed',['Y','N'],d.isAppointed)+'</td>'
    +'<td>'+mkInp(d.id,'appointDate',d.appointDate,'날짜','85px')+'</td>'
    +'<td>'+mkInp(d.id,'reportDate',d.reportDate,'날짜','85px')+'</td>'
    +'<td>'+mkSel(d.id,'trainingDone',['Y','N'],d.trainingDone)+'</td>'
    +'<td>'+mkInp(d.id,'trainingDate',d.trainingDate,'날짜','85px')+'</td>'
    +'<td>'+mkInp(d.id,'trainingDeadline',d.trainingDeadline,'날짜','85px')+'</td>'
    +'<td>'+mkSel(d.id,'status',['정상','신고필요','교육필요','교육기한초과','미선임'],d.status)+'</td>'
    +'<td>'+mkInp(d.id,'note',d.note,'비고')+'</td>'
    +'<td><button data-id="'+d.id+'" onclick="deleteChemMgr(this.dataset.id)" style="background:#dc3545;color:white;border:none;padding:3px 8px;border-radius:4px;font-size:10px;cursor:pointer;" '+(isAdminMode?'':'disabled')+'>삭제</button></td>'
    +'</tr>';}).join('');
}
function updChemMgr(el) {
  const d=chemMgrData.find(function(x){return x.id===el.dataset.id;});
  if(d) d[el.dataset.fld]=el.value;
}
function deleteChemMgr(id) {
  if(!isAdminMode) return;
  chemMgrData=chemMgrData.filter(function(d){return d.id!==id;});
  renderEditChemMgrTable(); updateEditCounts();
}
function addNewChemMgr() {
  if(!isAdminMode) return;
  const idx=chemMgrData.length+1;
  chemMgrData.push({id:'CHEM-MGR-'+String(idx).padStart(3,'0'),name:'',dept:'',
    role:'유해화학물질관리자',isAppointed:'N',appointDate:'',reportDate:'',
    deputyName:'',deputyDept:'',deputyAppointed:'N',
    trainingDone:'N',trainingDate:'',trainingDeadline:'',nextTrainingDate:'',
    docLinked:'',status:'확인필요',note:''});
  renderEditChemMgrTable(); updateEditCounts();
}
function saveChemMgrSection() {
  if(!isAdminMode) return;
  lsSave(LS.CHEMMGR, chemMgrData);
  updateLastSaved();
  initChemMgr(); initSummary(); initHome(); initRisk(); updateSummaryNewKpis();
  markEsSaved('chemmgr'); updateEditCounts();
  showToast('💾 유해화학물질관리자 데이터가 저장되었습니다.');
}

function initChemMgr() {
  const k=calcChemMgrKpi();
  const grid=document.getElementById('chemMgrKpiGrid');
  if(grid) grid.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">전체 관리자</div><div class="kpi-value">'+k.total+'명</div></div>'
    +'<div class="kpi-card '+(k.appointed===k.total?'kc-ok':'kc-risk')+'"><div class="kpi-label">선임완료</div><div class="kpi-value" style="color:'+(k.appointed===k.total?'#28a745':'#dc3545')+';">'+k.appointed+'명</div></div>'
    +'<div class="kpi-card '+(k.reported===k.total?'kc-ok':'kc-warn')+'"><div class="kpi-label">신고완료</div><div class="kpi-value" style="color:'+(k.reported===k.total?'#28a745':'#E8960A')+';">'+k.reported+'명</div></div>'
    +'<div class="kpi-card kc-ok"><div class="kpi-label">교육완료</div><div class="kpi-value" style="color:#28a745;">'+k.eduDone+'명</div></div>'
    +'<div class="kpi-card '+(k.eduNeeded>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">교육필요</div><div class="kpi-value" style="color:'+(k.eduNeeded>0?'#E8960A':'#28a745')+';">'+k.eduNeeded+'명</div></div>'
    +'<div class="kpi-card '+(k.overdue>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">교육기한초과</div><div class="kpi-value" style="color:'+(k.overdue>0?'#dc3545':'#28a745')+';">'+k.overdue+'명</div></div>';
  const tb=document.getElementById('chemMgrTbody');
  if(!tb) return;
  const stMap={'정상':'background:#d4edda;color:#155724','신고필요':'background:#FFF3CD;color:#664d03','교육필요':'background:#FFF3CD;color:#664d03','교육기한초과':'background:#f8d7da;color:#721c24','미선임':'background:#f8d7da;color:#721c24','확인필요':'background:#FFF3CD;color:#664d03'};
  tb.innerHTML=chemMgrData.map(function(d){
    const st=calcChemMgrStatus(d);
    const stS=stMap[st]||'';
    const tdS=d.trainingDone==='Y'?'color:#28a745;font-weight:600;':'color:#dc3545;';
    return '<tr><td>'+d.id+'</td><td>'+d.name+'</td><td>'+d.dept+'</td><td>'+d.role+'</td>'
      +'<td style="text-align:center;font-weight:600;color:'+(d.isAppointed==='Y'?'#28a745':'#dc3545')+';">'+d.isAppointed+'</td>'
      +'<td>'+(d.appointDate||'—')+'</td>'
      +'<td>'+(d.reportDate||'—')+'</td>'
      +'<td style="text-align:center;'+tdS+'">'+d.trainingDone+'</td>'
      +'<td>'+(d.trainingDate||'—')+'</td>'
      +'<td>'+(d.trainingDeadline||'—')+'</td>'
      +'<td><span style="'+stS+';padding:2px 7px;border-radius:4px;font-size:10px;font-weight:600;">'+st+'</span></td>'
      +'<td style="font-size:11px;">'+(d.note||'—')+'</td>'
      +'</tr>';
  }).join('');
  renderEditChemMgrTable();
}

// ── initSummary 확장 (관리대장/실적보고/자체점검/관리자 KPI) ──
function updateSummaryNewKpis() {
  const lk=calcLedgerKpi(), pk=calcPerfKpi();
  const lpEl=document.getElementById('sumLedgerPerfKpi');
  if(lpEl) lpEl.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">관리대장 등록</div><div class="kpi-value">'+lk.total+'건</div></div>'
    +'<div class="kpi-card '+(lk.mismatch>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">재고 불일치</div><div class="kpi-value" style="color:'+(lk.mismatch>0?'#dc3545':'#28a745')+';">'+lk.mismatch+'건</div></div>'
    +'<div class="kpi-card '+(lk.needCheck>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">확인필요</div><div class="kpi-value" style="color:'+(lk.needCheck>0?'#E8960A':'#28a745')+';">'+lk.needCheck+'건</div></div>'
    +'<div class="kpi-card"><div class="kpi-label">실적보고 전체</div><div class="kpi-value">'+pk.total+'건</div></div>'
    +'<div class="kpi-card '+(pk.needSubmit>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">제출필요</div><div class="kpi-value" style="color:'+(pk.needSubmit>0?'#E8960A':'#28a745')+';">'+pk.needSubmit+'건</div></div>'
    +'<div class="kpi-card '+(pk.overdue>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">기한초과</div><div class="kpi-value" style="color:'+(pk.overdue>0?'#dc3545':'#28a745')+';">'+pk.overdue+'건</div></div>';
  const sk=calcSelfChkKpi(), mk=calcChemMgrKpi();
  const smEl=document.getElementById('sumSelfChkMgrKpi');
  if(smEl) smEl.innerHTML=
    '<div class="kpi-card"><div class="kpi-label">자체점검 전체</div><div class="kpi-value">'+sk.total+'건</div></div>'
    +'<div class="kpi-card '+(sk.needAction>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">조치 필요</div><div class="kpi-value" style="color:'+(sk.needAction>0?'#dc3545':'#28a745')+';">'+sk.needAction+'건</div></div>'
    +'<div class="kpi-card '+(sk.overdue>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">조치기한 초과</div><div class="kpi-value" style="color:'+(sk.overdue>0?'#dc3545':'#28a745')+';">'+sk.overdue+'건</div></div>'
    +'<div class="kpi-card"><div class="kpi-label">관리자 전체</div><div class="kpi-value">'+mk.total+'명</div></div>'
    +'<div class="kpi-card '+(mk.eduNeeded>0?'kc-warn':'kc-ok')+'"><div class="kpi-label">교육필요</div><div class="kpi-value" style="color:'+(mk.eduNeeded>0?'#E8960A':'#28a745')+';">'+mk.eduNeeded+'명</div></div>'
    +'<div class="kpi-card '+(mk.overdue>0?'kc-risk':'kc-ok')+'"><div class="kpi-label">교육기한초과</div><div class="kpi-value" style="color:'+(mk.overdue>0?'#dc3545':'#28a745')+';">'+mk.overdue+'명</div></div>';
}

// ── Bootstrap ─────────────────────────────────────
initSummary();
initHome();
initEdit();
initEdu();
initChem();
initLedger();
initPerf();
initInsp();
initRisk();
initDailyCheck();
initN2Check();
initSelfChk();
initGD();
initGDEdit();
initContractor();
initDeadline();
initEvidence();
initMsds();
initSop();
initChemMgr();
loadSavedData();
setAdminMode(false);
// Re-render after loadSavedData updates the data
initGD();
initGDEdit();
initDeadline();
initEvidence();
initMsds();
initSop();
initLedger();
initPerf();
initSelfChk();
initChemMgr();
initSummary();
initHome();
initRisk();
updateSummaryNewKpis();
