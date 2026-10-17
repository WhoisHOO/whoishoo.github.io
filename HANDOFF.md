# HANDOFF — whoishoo.github.io

이 레포 작업 전에 이 파일부터 읽을 것.

## 구조 (2026-10-16, 2페이지 체제)

- `index.html`: **게임 프로필 (메인)**. 상태창(스탯, 랭크, 캐릭터, 장비) +
  MISSION BOARD(미션 클릭 시 상세 모달) + 상태창 바로 아래 ENTER HOOWORLD 포털.
- `hooworld.html`: **은하 지도**. 레포 = 행성, main = 수도, 브랜치 = 위성
  (CSS 궤도 애니메이션). 행성 클릭 시 상세 모달, 아래에 인덱스 칩.
- `assets/css/hoo.css`: 공용 디자인 시스템 (토큰, 버튼, 포털, 모달, 크레딧).
- `assets/js/hoo.js`: 공용 동작 (BGM, 모달, 포털 워프, 딥링크).
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

## 에셋

- `assets/img/avatar.webp`, `profile-bg.webp`, `galaxy.webp`: AI 생성 원화.
  고해상도 원본은 Figma 파일 "hooWorld assets"에 있다.
- `favicon.png`, `og.jpg`: avatar에서 잘라낸 것.
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

- 작업은 `hooworld` 브랜치에 있다. 라이브 사이트(main)에는 아직 반영 전.
- 로컬 미리보기: 레포 폴더에서 `python -m http.server` 실행 후 `/index.html`.

## 다음 할 일

- [ ] 사용자 확인 후 `hooworld` → `main` 머지로 라이브 반영.
- [ ] 새 BGM 3곡을 들어보고 유지할지 결정.
- [ ] 프로필의 work authorization 문구가 정확한지 확인.
