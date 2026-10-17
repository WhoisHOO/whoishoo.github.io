# HANDOFF — whoishoo.github.io

이 레포 작업 전에 이 파일부터 읽을 것.

## 구조

- `index.html` — whoIsHoo 프로필(레주메 페이지). hooWorld 작업에서 아직 손대지 않음.
- `hooworld.html` — hooWorld: 포트폴리오를 판타지 지도로 표현한 페이지 (v0.3).
- `assets/img/hooworld-map.png` — 지도 원화 (글자 없음, 라벨은 HTML 오버레이).
- `assets/audio/` — BGM 2곡 (CC BY 4.0).
- 라이브 배포는 `main` 브랜치만. 작업은 `hooworld` 브랜치에서, 완성되면 머지.

## hooWorld 규칙

- **나라 = 레포지토리 (이름은 레포 타이틀 그대로), 수도 = main 브랜치, 지방 = 나머지 브랜치.**
- 비공개 작업 2개는 특별 영토로 표현: DEMETER(아카이브 봉인), The NDA Empire(접근 거부).
- 데이터는 `hooworld.html`의 `COUNTRIES` 배열에 정적 스냅샷(2026-10-12 기준).
  레포/브랜치가 바뀌면 이 배열만 갱신. 라이브 API 안 씀 — 단순하게 유지.
- 라벨(리본 배너)은 % 좌표의 HTML 오버레이. 나라 추가 = 배열에 항목 추가 + 좌표 지정.
  지도 그림은 재생성하지 않는다.
- **푸터의 음악 크레딧은 CC BY 4.0 라이선스 의무 사항 — 삭제 금지.**
  (Video Game Soldiers / Twin Musicom, Death of Kings 2 / Kevin MacLeod)
- BGM 기본 ON: 브라우저 자동재생 정책 때문에 첫 사용자 입력 시 시작되는 구조.
- 톤: simple is best. 시각적 재미가 목적이므로 과한 기능(라이브 API, 세부 시뮬레이션) 금지.

## 현재 상태 (2026-10-12, hooworld 브랜치 @ 96e7266)

- v0.1 도트 타일맵 → v0.2 레포=나라 구조 → v0.3 회화풍 지도 + 배너 (git 히스토리에 전부 보존).
- 로컬 미리보기: 레포 폴더에서 `python -m http.server` 후 `/hooworld.html`.

## 페이지 3종 구조 (2026-10-16 재확정)

1. `index.html` — **게임 프로필 (메인/랜딩)**: 밝은 카툰 마을 배경
   (`assets/img/village.png`, AI 생성, 글자 없음) 위에 **전부 CSS로 만든 UI**:
   좌측 QUEST BOARD(퀘스트 6장 = CV 핵심 사실, 호버 확대, 클릭 시 resume
   해당 섹션), 중앙 상태창(이름 리본, RANK: PH.D., 초상, LEVEL 7/CLASS
   ENGINEER/논문 10/특허 2/리뷰 5 스탯, HP·MP 바는 순수 장식, EQUIP 슬롯
   5개 = 실제 스택 툴팁), 액션 버튼(FULL RESUME가 최우선 골드 버튼).
   다크 태버냐 버전(tavern.html)은 스타일 기각으로 삭제됨(히스토리에 있음).
2. `resume.html` — 구 index 전문 레주메 전체 (explore/leaflet 포함, 인쇄
   스타일 유지). 게임 프로필의 퀘스트·버튼이 여기 앵커로 연결.
3. `hooworld.html` — 세계지도 (나라=레포).
   소개 타이틀은 어디서든 "Engineer" 단일 (제너럴리스트 원칙).

## 다음 할 일

- [ ] 게임 프로필 육안 검수 (상태창/보드 비율, 모바일 스택 레이아웃).
- [ ] hooworld 배너 % 좌표 검수.
- [ ] resume.html Experience 섹션이 CV보다 구버전 (Solomon America 항목
      없음) — CV 기준으로 갱신할지 결정.
- [ ] 초상화를 도트 아바타로 교체할지 결정 (현재는 실제 사진).
- [ ] 완성 후 main 머지 → 공개.
