# 포트폴리오 디자인 아이디어

## 배경: 유럽 기업 선호 웹 개발자 포트폴리오

유럽(특히 독일, 네덜란드, 스웨덴, 영국) 기업 채용 담당자들이 선호하는 포트폴리오 특성:
- 명확한 문제 정의 → 기여 → 결과 구조 (Problem → Solution → Impact)
- 케이스 스터디 방식의 프로젝트 설명
- 기술 선택 이유와 트레이드오프 설명
- 깔끔하고 전문적인 타이포그래피 중심 디자인
- 과도한 화려함보다 내용의 깊이를 중시

---

<response>
<probability>0.07</probability>
<idea>

## 아이디어 1: Swiss International Style (스위스 국제주의 타이포그래피)

**Design Movement**: Swiss International Typographic Style (바우하우스 계열)

**Core Principles**:
1. 그리드 시스템 기반의 엄격한 레이아웃 — 모든 요소가 수직/수평 축에 정렬
2. 타이포그래피가 디자인의 주인공 — 폰트 크기와 무게 대비로 시각적 위계 형성
3. 기능적 미니멀리즘 — 장식 없이 정보 자체가 미적 요소
4. 흑백 + 단일 강조색 팔레트

**Color Philosophy**:
- 배경: 순백 (#FFFFFF) — 종이처럼 깨끗한 캔버스
- 전경: 거의 검정 (#111111) — 인쇄물 같은 선명함
- 강조: 선명한 빨강 (#E63946) — 스위스 디자인의 시그니처 포인트 컬러
- 감정적 의도: 신뢰, 정밀함, 전문성

**Layout Paradigm**:
- 비대칭 2단 그리드: 좌측 좁은 컬럼(레이블/날짜), 우측 넓은 컬럼(내용)
- 섹션 구분선 대신 여백으로 구분
- 번호 매기기 시스템 (01, 02, 03...)

**Signature Elements**:
1. 대형 세리프 섹션 번호 (회색, 배경 텍스처처럼)
2. 얇은 수평선으로 헤더와 내용 구분
3. 모노스페이스 폰트로 기술 스택 표시

**Interaction Philosophy**:
- 스크롤 시 좌측 레이블이 sticky로 고정
- 호버 시 미묘한 밑줄 애니메이션
- 클릭 피드백은 색상 반전

**Animation**:
- 스크롤 진입 시 요소가 위에서 아래로 페이드인 (0.3s ease-out)
- 섹션 전환 시 좌측에서 우측으로 슬라이드
- 숫자 카운터 애니메이션

**Typography System**:
- 헤딩: Playfair Display (세리프, 대형)
- 본문: DM Sans (산세리프, 가독성)
- 코드/기술명: JetBrains Mono

</idea>
</response>

<response>
<probability>0.08</probability>
<idea>

## 아이디어 2: Scandinavian Brutalism (스칸디나비아 브루탈리즘)

**Design Movement**: Nordic Brutalism — 스칸디나비아 미니멀리즘 + 브루탈리즘의 날카로운 경계

**Core Principles**:
1. 날것의 솔직함 — UI 구조를 숨기지 않고 드러냄
2. 강한 타이포그래피 대비 — 극단적 폰트 크기 차이
3. 제한된 색상 + 강렬한 텍스처
4. 정보 밀도 — 많은 내용을 체계적으로 압축

**Color Philosophy**:
- 배경: 따뜻한 크림 (#F5F0E8) — 북유럽 종이 질감
- 전경: 거의 검정 (#1A1A1A)
- 강조: 딥 포레스트 그린 (#2D6A4F) — 스칸디나비아 자연
- 보조 강조: 버번 오렌지 (#E07A5F)
- 감정적 의도: 자연스러움, 지속가능성, 깊이

**Layout Paradigm**:
- 전체 너비 활용, 섹션별 배경색 변환
- 좌측 정렬 강조 (중앙 정렬 최소화)
- 테이블 형식의 기술 스택 나열

**Signature Elements**:
1. 굵은 테두리 박스 (border-width: 3px) — 브루탈리즘 특성
2. 배경 그리드 패턴 (미세한 도트 패턴)
3. 대형 따옴표 인용구

**Interaction Philosophy**:
- 호버 시 배경색 채우기 (fill from left)
- 버튼은 클릭 시 눌리는 효과 (transform: translate(2px, 2px))
- 커서 커스터마이징

**Animation**:
- 스크롤 트리거 카운터 애니메이션
- 섹션 진입 시 좌측에서 슬라이드인
- 텍스트 타이핑 효과 (Hero 섹션)

**Typography System**:
- 헤딩: Space Grotesk (기하학적, 강렬)
- 본문: Source Serif 4 (읽기 좋은 세리프)
- 레이블: Space Mono

</idea>
</response>

<response>
<probability>0.09</probability>
<idea>

## 아이디어 3: German Engineering Precision (독일 엔지니어링 정밀함)

**Design Movement**: Bauhaus Functionalism + Technical Documentation Aesthetic

**Core Principles**:
1. 기능이 형태를 결정 — 모든 시각 요소는 정보 전달 목적
2. 체계적 정보 아키텍처 — 타임라인, 다이어그램, 프로세스 플로우
3. 기술 문서 미학 — 명세서처럼 정확하고 체계적
4. 다크 모드 우선 — 개발자 친화적

**Color Philosophy**:
- 배경: 딥 네이비 (#0D1B2A) — 기술적 깊이감
- 표면: 슬레이트 (#1B2A3B)
- 강조: 일렉트릭 블루 (#4FC3F7) — 회로 기판 색상
- 보조: 앰버 (#FFB74D) — 경고/하이라이트
- 감정적 의도: 전문성, 기술적 역량, 신뢰

**Layout Paradigm**:
- 좌측 고정 사이드바 네비게이션
- 우측 메인 콘텐츠 (기술 문서 형식)
- 타임라인 기반 경력 표시

**Signature Elements**:
1. 코드 블록 스타일 케이스 스터디 (Before/After 코드 비교)
2. 기술 스택 레이더 차트 또는 스킬 바
3. 터미널 스타일 인트로 애니메이션

**Interaction Philosophy**:
- 사이드바 네비게이션으로 섹션 이동
- 코드 블록 복사 버튼
- 프로젝트 카드 펼치기/접기

**Animation**:
- 터미널 타이핑 효과 (Hero)
- 스킬 바 로딩 애니메이션
- 스크롤 진행 표시바

**Typography System**:
- 헤딩: IBM Plex Sans (기술적, 명확)
- 본문: IBM Plex Serif
- 코드: IBM Plex Mono

</idea>
</response>

---

## 선택: 아이디어 1 — Swiss International Style

**이유**: 유럽 기업(특히 독일, 네덜란드, 스위스) 채용 담당자들이 가장 선호하는 스타일로, 
타이포그래피 중심의 명확한 정보 전달이 강점. 
구 사이트 분석 → React SPA 마이그레이션이라는 기술적 깊이를 
깔끔하게 표현하기에 최적.

**핵심 디자인 결정**:
- 폰트: Playfair Display (헤딩) + DM Sans (본문) + JetBrains Mono (코드)
- 색상: 흰 배경 + 거의 검정 + 빨강 강조
- 레이아웃: 비대칭 2단 그리드, 좌측 레이블 sticky
- 섹션 번호: 01, 02, 03... 대형 회색 숫자
