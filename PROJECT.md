# 행정사법인 정유(貞蕤) 홈페이지 — 프로젝트 문서

## 기본 정보

| 항목 | 내용 |
|------|------|
| 법인명 | 행정사법인 정유(貞蕤) |
| 대표 | 박신환 행정사 |
| 슬로건 | 정직함과 품격으로 해결합니다 |
| 전화 | 010-4502-8370 |
| 이메일 | nasinsa@naver.com |
| 주소 | 경기도 수원시 권선구 서둔로 193, 201호 |
| 소속 행정사 | 이민준 (토지보상·인허가), 김서연 (기업컨설팅·행정심판) |

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 18 + Vite 8 |
| 스타일 | TailwindCSS 3 (커스텀 컬러: primary, gold) |
| 애니메이션 | Framer Motion 11 |
| 아이콘 | Lucide React |
| 라우팅 | React Router DOM 7 |
| DB / 백엔드 | Supabase (PostgreSQL + RLS) |
| 폰트 | Pretendard Variable (CDN) |
| 개발 환경 | Node v24, Windows |

---

## 프로젝트 구조

```
C:\homepage777\nasinsa\
├── public/
│   ├── favicon.svg          # SVG 파비콘 (정 글자, 브랜드 컬러)
│   ├── robots.txt           # SEO 크롤러 설정
│   └── _redirects           # Netlify SPA 폴백
├── src/
│   ├── main.jsx             # React 진입점
│   ├── App.jsx              # BrowserRouter + Routes 정의
│   ├── index.css            # Tailwind + 전역 스타일 + 커스텀 클래스
│   ├── pages/
│   │   └── LandingPage.jsx  # 랜딩 페이지 (전체 섹션 조합)
│   ├── constants/
│   │   ├── contact.js       # 회사 정보 단일 진실 공급원 (COMPANY)
│   │   └── navigation.js    # 네비게이션 항목 (NAV_ITEMS)
│   ├── utils/
│   │   └── scroll.js        # 스크롤 유틸 (scrollToSection, scrollToContact)
│   ├── data/
│   │   ├── metrics.js       # TrustMetrics + HeroSection 통계 데이터
│   │   ├── services.js      # ServicesSection 카드 데이터 (5개)
│   │   ├── team.js          # TeamSection 구성원 데이터
│   │   ├── process.js       # ProcessSection 단계 데이터 (5단계)
│   │   ├── cases.js         # CasesSection 성공 사례 데이터 (4건)
│   │   └── testimonials.js  # TestimonialsSection 후기 데이터 (6건)
│   ├── lib/
│   │   └── supabase.js      # Supabase 클라이언트 초기화
│   ├── hooks/
│   │   └── useContactForm.js # 상담 폼 상태·유효성·제출 훅
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.jsx   # 고정 헤더 (스크롤 투명→흰색, 모바일 드로어)
│   │   │   └── Footer.jsx   # 4열 푸터
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx        # 풀스크린 히어로
│   │   │   ├── TrustMetrics.jsx       # 숫자 통계 4개
│   │   │   ├── ServicesSection.jsx    # 업무 분야 5개 카드
│   │   │   ├── TeamSection.jsx        # 팀 소개 (대표 1 + 직원 2)
│   │   │   ├── ProcessSection.jsx     # 5단계 진행 절차
│   │   │   ├── CasesSection.jsx       # 성공 사례 4개
│   │   │   ├── TestimonialsSection.jsx# 고객 후기 6개
│   │   │   ├── ContactSection.jsx     # 상담 문의 폼 (Supabase 연동)
│   │   │   └── MapSection.jsx         # 지도 + 찾아오는 방법
│   │   └── ui/
│   │       ├── ScrollReveal.jsx       # 스크롤 트리거 애니메이션 래퍼
│   │       ├── AnimatedNumber.jsx     # 숫자 카운팅 컴포넌트
│   │       └── MobileCtaBar.jsx       # 모바일 하단 고정 CTA 바
├── supabase/
│   └── schema.sql           # contacts 테이블 + RLS 정책 + 뷰
├── vercel.json              # Vercel SPA 폴백 설정
├── .env.example             # 환경변수 템플릿
├── index.html               # SEO 메타태그 + schema.org JSON-LD
├── tailwind.config.js       # 브랜드 컬러·폰트·그림자 설정
├── vite.config.js           # Vite 설정 (포트 3000, 코드 스플리팅)
└── postcss.config.js
```

---

## 환경 설정

### 1. 개발 서버 실행
```bash
cd C:\homepage777\nasinsa
npm run dev      # http://localhost:3000
npm run build    # dist/ 폴더 빌드
npm run preview  # 빌드 결과 미리보기
```

### 2. Supabase 연동
`.env.example`을 복사해 `.env` 파일 생성:
```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```
그 후 Supabase 대시보드 SQL Editor에서 `supabase/schema.sql` 실행.

---

## 구현 완료 ✅

- [x] React/Vite 프로젝트 초기 셋업
- [x] TailwindCSS 브랜드 테마 (primary #0F5B57, gold #C9A84C)
- [x] Pretendard 폰트 적용
- [x] SEO 최적화 (meta, OG 태그, schema.org LocalBusiness)
- [x] 고정 헤더 (스크롤 효과, 모바일 드로어 메뉴)
- [x] 히어로 섹션 (풀스크린, 통계 4개, CTA 버튼)
- [x] 신뢰 지표 섹션 (숫자 카운팅 애니메이션)
- [x] 업무 분야 5개 카드 (기업컨설팅/인허가/토지보상/고충민원/행정심판)
- [x] 팀 소개 섹션 (대표 박신환 + 이민준 + 김서연)
- [x] 5단계 진행 절차
- [x] 성공 사례 4건
- [x] 고객 후기 6건 (별점 4.98/5.0)
- [x] 상담 문의 폼 (Supabase contacts 테이블 연동, 유효성 검사)
- [x] 지도 섹션 (Google Maps 임베드, 위치 핀)
- [x] 4열 푸터
- [x] 모바일 하단 CTA 바 (전화/카카오/상담신청)
- [x] 스크롤 애니메이션 (ScrollReveal, 6가지 방향)
- [x] Supabase DB 스키마 + RLS 정책
- [x] favicon.svg, robots.txt

---

## 고도화 로드맵 📋

> 난이도: ⭐ 쉬움 / ⭐⭐ 보통 / ⭐⭐⭐ 복잡

---

### Phase 1 — SEO / 기술 완성 `(즉시 가능)`

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 1-1 | `sitemap.xml` 생성 | `robots.txt`에 이미 명시됨. 도메인 확정 후 작성 | ⭐ |
| 1-2 | `og:image` 생성 | SNS 공유 썸네일 (1200×630px), `index.html` 연결 | ⭐ |
| 1-3 | GA4 삽입 | `index.html`에 측정 ID 한 줄 추가 | ⭐ |
| 1-4 | 네이버 서치어드바이저 등록 | 국내 검색 노출 핵심 | ⭐ |
| 1-5 | Google Search Console 등록 | 구글 검색 노출 모니터링 | ⭐ |
| 1-6 | `vite-plugin-sitemap` 도입 | 빌드 시 sitemap 자동 생성 | ⭐⭐ |

---

### Phase 2 — 외부 서비스 연동

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 2-1 | 카카오채널 실제 URL | `src/constants/contact.js`의 `COMPANY.kakaoUrl` 한 곳만 수정 | ⭐ |
| 2-2 | 네이버 블로그 링크 | Footer SNS 영역 추가 | ⭐ |
| 2-3 | 채널톡 / 카카오 채팅 위젯 | 우측 하단 실시간 상담 버튼 (스크립트 한 줄 삽입) | ⭐⭐ |
| 2-4 | 네이버 지도 임베드 교체 | 현재 Google Maps → 네이버 지도 (국내 사용자 친화) | ⭐⭐ |

---

### Phase 3 — 콘텐츠 강화

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 3-1 | 팀 실제 사진 적용 | `src/data/team.js`에 이미지 경로 추가 (현재: 이니셜 placeholder) | ⭐ |
| 3-2 | 사무실 / 업무 사진 추가 | 히어로 배경 또는 팀 섹션 배경 이미지 | ⭐ |
| 3-3 | 실제 성공 사례 업데이트 | `src/data/cases.js` 내용 교체 (현재: 예시 텍스트) | ⭐ |
| 3-4 | 실제 고객 후기 업데이트 | `src/data/testimonials.js` 내용 교체 (현재: 예시 텍스트) | ⭐ |
| 3-5 | 업무 분야 상세 페이지 | 서비스 카드 클릭 시 `/services/:slug` 라우트로 이동 | ⭐⭐⭐ |

---

### Phase 4 — 관리자 기능

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 4-1 | 관리자 로그인 | Supabase Auth (이메일/비밀번호) | ⭐⭐ |
| 4-2 | 상담 문의 목록 페이지 (`/admin`) | contacts 테이블 조회, 상태 변경 (신규→상담중→완료) | ⭐⭐ |
| 4-3 | 관리자 메모 입력 | `admin_note` 컬럼 활용 (DB 스키마 이미 준비됨) | ⭐⭐ |
| 4-4 | 신규 문의 알림 | Supabase Realtime → 브라우저 알림 또는 이메일 발송 | ⭐⭐⭐ |
| 4-5 | 관리자 대시보드 통계 | 월별 문의 수 차트 (Recharts 등) | ⭐⭐⭐ |

---

### Phase 5 — 배포

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 5-0 | SPA 폴백 설정 | ✅ `vercel.json` + `public/_redirects` 완료 | — |
| 5-1 | 도메인 연결 | Vercel / Netlify / 직접 서버 결정 후 연결 | ⭐ |
| 5-2 | Supabase 실제 키 설정 | `.env` 파일에 프로덕션 키 입력 | ⭐ |
| 5-3 | `sitemap.xml` URL 업데이트 | 도메인 확정 후 절대 경로로 수정 | ⭐ |

---

### Phase 6 — 사용자 경험 개선

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 6-1 | 폼 제출 후 이메일 알림 | Supabase Edge Function + Resend/SendGrid | ⭐⭐⭐ |
| 6-2 | 상담 예약 시스템 | 날짜/시간 선택 캘린더 UI + Supabase 저장 | ⭐⭐⭐ |
| 6-3 | 토스트 알림 | 폼 제출 성공/실패 피드백 개선 (react-hot-toast 등) | ⭐⭐ |
| 6-4 | 이미지 스켈레톤 | 이미지 로드 전 placeholder 표시 | ⭐⭐ |
| 6-5 | 접근성(A11y) 강화 | aria-label 전수 점검, 키보드 네비게이션 보완 | ⭐⭐ |

---

### Phase 7 — 성능 최적화

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 7-1 | `hero.png` 경로 최적화 | `src/assets/` → `public/`으로 이동 (번들 제외) | ⭐ |
| 7-2 | 이미지 WebP 변환 + lazy load | `vite-imagetools` + `<img loading="lazy">` | ⭐⭐ |
| 7-3 | `vite-plugin-compression` | gzip/brotli 압축 번들 자동 생성 | ⭐ |
| 7-4 | Core Web Vitals 개선 | LCP / CLS / INP 측정 후 병목 제거 | ⭐⭐⭐ |

---

### Phase 8 — 기술 부채 / 장기 개선

| # | 항목 | 내용 | 난이도 |
|---|------|------|--------|
| 8-1 | 환경별 config 분리 | `.env.development` / `.env.production` 분리 | ⭐ |
| 8-2 | ESLint 룰 강화 | `react-hooks`, `jsx-a11y` 플러그인 추가 | ⭐⭐ |
| 8-3 | CI/CD 파이프라인 | GitHub Actions → Vercel 자동 배포 | ⭐⭐ |
| 8-4 | TypeScript 마이그레이션 | `.jsx` → `.tsx`, 데이터/props 타입 정의 | ⭐⭐⭐ |
| 8-5 | 컴포넌트 테스트 | Vitest + React Testing Library | ⭐⭐⭐ |
| 8-6 | E2E 테스트 | Playwright (폼 제출 플로우 자동화) | ⭐⭐⭐ |

---

## 브랜드 컬러

| 이름 | HEX | 용도 |
|------|-----|------|
| primary-700 | #0F5B57 | 메인 CTA, 버튼, 아이콘 |
| primary-950 | #031a18 | 다크 섹션 배경 |
| gold-400 | #C9A84C | 강조 텍스트, 골드 버튼 |
| gold-500 | #b8922e | 골드 버튼 hover |

---

## 작업 시 주의사항

- 모든 파일 수정은 `C:\homepage777\nasinsa\src\` 경로에서 진행
- 개발 서버 실행 중 저장 시 HMR 자동 반영
- `.env` 파일은 절대 git 커밋 금지 (`.gitignore`에 포함됨)
- 한국어 콘텐츠는 UTF-8 인코딩 유지
