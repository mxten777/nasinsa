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

## 미구현 항목 및 작업 순서 📋

### Phase 1 — SEO / 기술 완성 (우선순위 높음)
- [ ] **1-1** `public/sitemap.xml` 생성 (robots.txt에 명시됨)
- [ ] **1-2** `og:image` 생성 및 index.html 연결 (SNS 공유 시 썸네일)
- [ ] **1-3** Google Analytics 4 (GA4) 측정 ID 삽입 → `index.html`

### Phase 2 — 외부 서비스 연동
- [ ] **2-1** 카카오채널 실제 URL 연결 (MobileCtaBar + Footer)
  - 현재: `https://open.kakao.com/o/placeholder`
  - 필요: 실제 오픈채팅 또는 채널 URL
- [ ] **2-2** 네이버 블로그 링크 연결 (Footer SNS 영역 추가)
- [ ] **2-3** 인스타그램 / 유튜브 링크 (있을 경우 Footer에 추가)

### Phase 3 — 콘텐츠 강화
- [ ] **3-1** 팀 실제 사진 적용 (현재: 이니셜 placeholder)
- [ ] **3-2** 사무실/업무 사진 추가 (히어로 배경 또는 팀 섹션)
- [ ] **3-3** 실제 성공 사례 내용 업데이트 (현재: 예시 텍스트)
- [ ] **3-4** 실제 고객 후기 업데이트 (현재: 예시 텍스트)

### Phase 4 — 관리자 기능
- [ ] **4-1** 상담 문의 목록 관리 페이지 (`/admin`)
  - Supabase contacts 테이블 조회
  - 상태 변경 (신규 → 상담중 → 완료)
  - 관리자 메모(admin_note) 입력
- [ ] **4-2** 관리자 로그인 (Supabase Auth)

### Phase 5 — 배포
- [x] **5-0** `vercel.json` + `public/_redirects` SPA 폴백 설정 완료
- [ ] **5-1** 도메인 연결 결정 (Vercel / Netlify / 직접 서버)
- [ ] **5-2** `.env` Supabase 실제 키 설정
- [ ] **5-3** `sitemap.xml` 도메인 URL 업데이트
- [ ] **5-4** Google Search Console 등록
- [ ] **5-5** 네이버 서치어드바이저 등록

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
