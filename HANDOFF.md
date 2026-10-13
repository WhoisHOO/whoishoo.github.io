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

## 다음 할 일

- [ ] 배너 % 좌표 검수 (섬 위에 정확히 앉았는지 육안 확인 후 미세조정).
- [ ] index(whoIsHoo)에 도트/일러스트 캐릭터 프로필 — 컨셉: 이세계 엔지니어.
- [ ] index ↔ hooworld 상호 링크 배치 결정.
- [ ] 모바일 레이아웃 점검 (배너 크기 clamp는 넣어둠).
- [ ] 완성 후 main 머지 → https://whoishoo.github.io/hooworld.html 공개.
