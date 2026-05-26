# 행정사법인 정유(貞蕤) — 공식 홈페이지

> 작성일: 2026-05-26 · 최종 수정일: 2026-05-26

> 정직함과 품격으로 해결합니다

경기도 수원시 소재 행정사법인 정유의 공식 홈페이지 프로젝트입니다.

---

## 기술 스택

| 분류 | 기술 |
|------|------|
| 프레임워크 | React 18 + Vite 8 |
| 스타일 | TailwindCSS 3 |
| 애니메이션 | Framer Motion 11 |
| 라우팅 | React Router DOM 7 |
| 아이콘 | Lucide React |
| DB / 백엔드 | Supabase (PostgreSQL + RLS) |
| 폰트 | Pretendard Variable (CDN) |

---

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경변수 설정

`.env.example`을 복사하여 `.env` 파일을 생성하고 Supabase 키를 입력합니다.

```bash
cp .env.example .env
```

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

### 3. DB 초기화

Supabase 대시보드 → SQL Editor에서 `supabase/schema.sql`을 실행합니다.

### 4. 개발 서버 실행

```bash
npm run dev       # http://localhost:3000
npm run build     # 프로덕션 빌드 → dist/
npm run preview   # 빌드 결과 미리보기
```

---

## 프로젝트 구조

```
src/
├── pages/          # 페이지 컴포넌트 (LandingPage)
├── constants/      # 회사 정보, 네비게이션 상수
├── utils/          # 스크롤 유틸
├── data/           # 섹션별 정적 데이터
├── hooks/          # useContactForm (Supabase 연동)
├── lib/            # Supabase 클라이언트
└── components/
    ├── layout/     # Header, Footer
    ├── sections/   # 각 랜딩 페이지 섹션
    └── ui/         # ScrollReveal, AnimatedNumber, MobileCtaBar
```

---

## 주요 기능

- **상담 문의 폼** — Supabase contacts 테이블에 저장, 입력값 유효성 검사
- **스크롤 애니메이션** — ScrollReveal 컴포넌트 (fade-up/in/left/right, scale-up)
- **숫자 카운팅** — AnimatedNumber (easeOutExpo 이징)
- **반응형 헤더** — 스크롤 투명→흰색 전환, 모바일 드로어 메뉴
- **모바일 CTA 바** — 전화 / 카카오톡 / 무료상담 신청 하단 고정 버튼
- **SPA 배포 지원** — `vercel.json` (Vercel), `public/_redirects` (Netlify)

---

## 환경변수

| 변수명 | 설명 |
|--------|------|
| `VITE_SUPABASE_URL` | Supabase 프로젝트 URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase anon public key |

> `.env` 파일은 절대 git에 커밋하지 마세요. `.gitignore`에 포함되어 있습니다.

---

## 배포

### Vercel

```bash
vercel deploy
```

루트의 `vercel.json`이 SPA 라우팅을 처리합니다.

### Netlify

`public/_redirects` 파일이 포함되어 있어 별도 설정 없이 배포 가능합니다.
