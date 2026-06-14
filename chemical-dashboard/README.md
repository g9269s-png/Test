# AX 기반 유해화학물질 관리 대시보드 MVP

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
| 유해화학물질 도급신고 관리 | 도급업체 신고 현황 관리 |
| 법정기한 관리 | D-Day 기준 교육·검사·교정·신고 기한 관리 |
| 증빙자료 관리 | 검사필증·수료증·성적서 등 문서 보관 관리 |
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
