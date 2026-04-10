# Mr_Resume: 전문 개발자 포트폴리오 🚀

[English Version](README.md) | [Log](README_LOG.md) | [한국어 버전](README_KR.md)

---

### 📌 프로젝트 개요

**Mr_Resume**는 **스위스 국제주의(Swiss International Style)** 디자인 철학을 기반으로 제작된 프리미엄 개발자 포트폴리오입니다. 유럽(독일, 네덜란드, 스웨덴 등) 빅테크 기업의 채용 기준에 맞춰, 단순한 나열이 아닌 '케이스 스터디' 기반의 기술적 깊이를 강조하도록 설계되었습니다.

### ✨ 핵심 기능

- **케이스 스터디 구조**: _문제 정의 → 해결 과정 → 성과_ 중심의 프로젝트 상세 설명.
- **데이터 시각화**: Recharts를 활용한 기술 스택 및 성장 지표 시각화.
- **인터랙티브 UI**: Framer Motion 기반의 부드러운 애니메이션과 Radix UI의 접근성 높은 컴포넌트.
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화 레이아웃.
- **SEO 최적화**: Next.js App Router를 통한 고성능 및 검색 엔진 최적화.

### 🛠 기술 스택

- **프레임워크**: Next.js 16 (App Router)
- **UI 라이브러리**: React 19, Radix UI, Tailwind CSS
- **아이콘**: Lucide React
- **애니메이션**: Framer Motion
- **데이터 시각화**: Recharts
- **데이터 관리**: React Query, Axios, Zustand
- **폼 및 검증**: React Hook Form, Zod
- **타이포그래피**: Playfair Display (제목), DM Sans (본문), JetBrains Mono (코드)

### 🎨 디자인 철학

**스위스 국제주의 타이포그래피 스타일 (바우하우스 계열)** 준수:

1. **그리드 시스템**: 엄격한 수직/수평 정렬을 통한 구조적 안정성.
2. **타이포그래피 중심**: 폰트의 크기와 굵기 대비로 시각적 위계 형성.
3. **컬러 팔레트**: Pure White (#FFFFFF)와 Deep Noir (#111111), 그리고 포인트 컬러 스위스 Red (#E63946).
4. **기능적 미니멀리즘**: 불필요한 장식 제거 및 정보 전달 효율 극대화.

### 📂 프로젝트 구조

```text
src/
├── app/            # Next.js App Router (Pages, Layouts)
├── components/     # UI Components (Hero, Skills, Projects, etc.)
│   └── ui/         # Base Shadcn/Radix components
├── store/          # Zustand Global States
├── providers/      # React Query & Context Providers
├── contexts/       # Legacy Contexts
├── hooks/          # Custom React Hooks (useQueries 등)
├── lib/            # Axios 인스턴스 및 공통 로직
└── styles/         # Global CSS & Tailwind 설정
```

### 🛠 인프라 및 설정 가이드

데이터 페칭 및 상태 관리를 위한 표준화된 패턴을 사용합니다:

- **Axios 공통화**: `src/lib/axios.ts`에서 인터셉터를 통한 응답 처리를 통합 관리합니다.
- **Query Provider**: `src/providers/QueryProvider.tsx`가 앱 전체를 래핑합니다.
- **전역 스토어**: `src/store/useStore.ts`에서 Zustand를 이용한 영구 상태(Local Storage)를 관리합니다.
- **공통 훅**: `src/hooks/useQueries.ts`의 `useApiGet`, `useApiMutation`을 통해 일관된 API 호출 패턴을 유지합니다.

### 🚀 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

---

_Created by Antigravity AI for RionChoi (ekko68)_
