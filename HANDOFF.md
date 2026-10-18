# HANDOFF — whoishoo.github.io

이 레포 작업 전에 이 파일부터 읽을 것.

## 구조 (2026-10-16, 2페이지 체제)

- `index.html`: **게임 프로필 (메인)**. 상태창(스탯, 랭크, 캐릭터, 장비) +
  MISSION BOARD(미션 클릭 시 상세 모달) + 상태창 바로 아래 ENTER HOOWORLD 포털.
- `hooworld.html`: **은하 지도**. 레포 = 행성, main = 수도, 브랜치 = 위성
  (CSS 궤도 애니메이션). 행성 클릭 시 상세 모달, 아래에 인덱스 칩.
- `assets/css/hoo.css`: 공용 디자인 시스템 (토큰, 버튼, 포털, 모달, 크레딧).
- `assets/js/hoo.js`: 공용 동작 (BGM, 모달, 포털 워프, 딥링크).
- 미션 보드는 경력 카드 3장이다. "Engineer" 멀티클래스 정체성에 맞춰 클래스마다
  한 장: SYSTEMS(현재 직장, MAIN QUEST), DATA INFRASTRUCTURE(DEMETER), AI(Billion21).
  카드 구조: 클래스 태그, 역량을 말하는 제목, 직함·회사·기간 평문, 한 줄 요약, LOOT.
  논문·특허·리뷰는 상태창 카운터가 담당하고, 코드 레포는 hooWorld가 담당한다.
- 이름 표기는 "Younghoo Henry Cho". whoIsHoo는 이름에 넣지 않는다.
- 상태창 맨 위 VISION 배너: 학위논문 헌정 문구를 원문 그대로 인용
  ("To a future intelligence, raised on data worth trusting.", 논문 3쪽).
  출처 표기나 부연 문장은 넣지 않는다 (사용자 결정: 군더더기). 검색·공유
  미리보기 설명도 같은 문구. 세 미션은 이 비전의 증거다.
- 미션 상세 구조: BRIEFING(문제) → WHAT I BUILT / WHAT I OWN(한 일) →
  KEY DECISIONS(무엇을 왜 그렇게 설계했는지, 면접관이 CV에서 못 보는 판단) →
  LOOT(결과와 근거). CCS는 설계 세부가 기밀이라 KEY DECISIONS 없음.
- 상세 내용은 각 페이지의 `<template id="...">` 안에 있다. 내용 수정은 그
  템플릿만 고치면 된다. `페이지#템플릿id`로 딥링크 (예: `index.html#m-demeter`).
- 예전 레주메 페이지(resume.html, style.css 등)는 폐기됨. git 히스토리에 보존.

## 디자인 규칙

- 화풍: 성인 SF 애니메이션풍 카툰. 굵은 검정 외곽선, 플랫 컬러, 잉크 오프셋 그림자.
  특정 작품의 캐릭터, 로고, 소품은 사용 금지 (화풍만 차용).
- 그림은 한 번 생성하고, 텍스트, 라벨, UI는 전부 코드로 만든다. 그래서 내용을
  고쳐도 그림을 다시 만들 필요가 없다.
- 소개 타이틀은 어디서든 "Engineer" 단일.
- 내용은 최신 CV 기준 사실만. 군더더기 금지.
- 실제 얼굴 사진 사용 금지. 캐릭터(`avatar.webp`)만 쓴다.
- 체류·취업 자격(work authorization) 문구는 넣지 않는다 (사용자 결정: 불필요한 정보).

## 에셋

- `assets/img/avatar.webp`, `profile-bg.webp`, `galaxy.webp`: AI 생성 원화.
  고해상도 원본은 Figma 파일 "hooWorld assets"에 있다.
- `favicon.png`, `og.jpg`: avatar에서 잘라낸 것.
- `tobby-fly.webp`(투명 배경), `tobby.webp`: 사용자의 고양이 Tobby 카툰. 콘셉트는 AI 조수이고,
  사용자가 만들고 있는 자체 AI의 가칭도 Tobby다. 나는 버전은 마젠타 단색 배경으로 생성한 뒤
  배경을 지운 것(원본은 Figma 파일). 프로필 배경 들판을 패널 뒤로 왕복 비행하고, 클릭하면
  COMPANION 소개 창이 열린다.
- `assets/pdf/CV_Yc.pdf`: 최신 CV. CV를 갱신하면 이 파일도 같이 교체.
- 음악: Kevin MacLeod "Galactic Rap", "Phantom from Space", "Graveyard Shift"
  (incompetech.com, CC BY 4.0). **두 페이지 푸터의 음악 크레딧은 라이선스
  의무 사항이다. 삭제 금지.** 곡을 바꾸면 `hoo.js`의 PLAYLIST와 두 푸터를 같이 수정.

## hooWorld 행성 갱신법

- 행성 좌표(%)는 galaxy 원화를 이미지 분석으로 측정한 값이다. 반지름 `--r`은
  이미지 폭 기준 %.
- 오른쪽 아래 분홍 행성은 "???" 예약석이다. 새 레포가 생기면 여기에 배정한다.
- 레포나 브랜치가 바뀌면 세 곳을 같이 고친다: planet 버튼(라벨, orbit 개수 =
  브랜치 수), 해당 template, 아래 인덱스 칩.

## 현재 상태

- 최근 라이브 반영: 2026-10-17 (Dr. 표기, VISION 배너, 미션 보드 3장, Tobby). `hooworld`를 `main`에 fast-forward 머지.
  GitHub Pages는 `main` 브랜치 루트(`/`)에서 배포된다.
- 이후 작업도 `hooworld` 브랜치에서 하고, 확인되면 `main`에 fast-forward 머지한다.
- 로컬 미리보기: 레포 폴더에서 `python -m http.server` 실행 후 `/index.html`.
  기본 서버는 캐시 금지 헤더를 안 보내서 브라우저가 예전 화면을 보여줄 수 있다.
  수정이 안 보이면 Ctrl+F5(강력 새로고침).

## 다음 할 일

- [x] `hooworld` → `main` 머지로 라이브 반영 (2026-10-16).
- [ ] 새 BGM 3곡을 들어보고 유지할지 결정.
- [ ] (제안, 사용자 결정 대기) DEMETER 상세에 SUB-QUESTS 추가: 출처 검증(DV),
      변환 추적(TI), 접근·재사용 관리, 대용량 이미지 확장. 근거는 예전 레주메
      (git 히스토리의 index.html).
- [ ] (제안, 사용자 결정 대기) QUEST LOG 버튼: 전체 이력 한 줄씩 (MAFRA 연구원,
      강의·초청 강연, 학회 발표). 미션 보드는 3장 유지. Undergrad RA는 넣지 않음
      (CV에서도 뺐고 Billion21 재직 기간과 겹침).
- [ ] hooWorld 행성 구성 업데이트: 어떤 프로젝트를 행성으로 넣을지 사용자와 정하기
      (지금은 공개 레포 9개 전부 + DEMETER + NDA Empire + 예약석 1개).
