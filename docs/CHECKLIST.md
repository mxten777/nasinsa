# 납품 전 필수 체크리스트

> 작성일: 2026-05-28

---

## 🔴 블로커 — 납품 전 반드시 완료

작동 오류 또는 법적 문제가 발생하는 항목입니다.

### 1. 카카오톡 실제 URL 교체
- **파일**: `src/constants/contact.js`
- **현황**: `kakaoUrl: 'https://open.kakao.com/o/placeholder'` (클릭 시 오류)
- **작업**: 실제 오픈채팅 또는 카카오채널 URL로 1줄 교체
- [ ] 완료

### 1-A. SNS 채널 URL 교체 (SnsHubSection 연동)
- **파일**: `src/constants/contact.js`
- **현황**: 5개 SNS URL 모두 `placeholder` — 버튼 클릭 시 오류 또는 404
- **작업**: 각 URL을 실제 채널 주소로 교체
  ```js
  instagramUrl: 'https://www.instagram.com/실제계정'
  youtubeUrl:   'https://www.youtube.com/@실제채널'
  naverBlogUrl: 'https://blog.naver.com/실제블로그'
  threadsUrl:   'https://www.threads.net/@실제계정'
  naverTalkUrl: 'https://talk.naver.com/실제톡톡ID'
  ```
- 미개설 채널은 해당 `href`를 `#contact`로 임시 대체하거나 버튼 숨김 처리 권장
- [ ] 완료

### 2. Supabase 프로덕션 키 설정
- **파일**: 프로젝트 루트 `.env` (현재 미생성)
- **현황**: 키 미설정 시 상담 폼 제출 전혀 안 됨
- **작업**:
  1. `.env.example`을 복사해 `.env` 생성
  2. Supabase 대시보드에서 프로덕션 URL·ANON KEY 입력
  3. Supabase SQL Editor에서 `supabase/schema.sql` 실행
- [ ] 완료

### 3. 개인정보처리방침 페이지 ✅
- **파일**: `src/pages/PrivacyPage.jsx` (신규), `src/App.jsx`, `src/components/layout/Footer.jsx`
- **완료**: 2026-05-28 — 개인정보보호법 제30조 기준 9개 조항 작성, `/privacy` 라우트 생성, Footer 링크 연결
- [x] 완료

### 4. 신뢰 지표 수치 클라이언트 확인
- **파일**: `src/data/metrics.js`
- **현황**: 누적 처리 건수 1,200+건 / 고객 만족률 95%+ / 기업 고객 300+곳 / 사건 해결률 98%
- **작업**: 클라이언트에게 실제 수치 확인 — 허위·과장 광고 위험 (표시광고법)
- [ ] 완료

---

## 🟡 강력 권장 — 없으면 품질 문제

### 5. og:image (SNS 공유 썸네일)
- **파일**: `index.html`
- **현황**: `<meta property="og:image">` 태그 자체 없음 — SNS 공유 시 이미지 빈 칸
- **작업**: 1200×630px 브랜드 썸네일 제작 → `public/og-image.png` 저장 → `index.html`에 태그 추가
  ```html
  <meta property="og:image" content="https://nasinsa.co.kr/og-image.png" />
  <meta property="twitter:image" content="https://nasinsa.co.kr/og-image.png" />
  ```
- [ ] 완료

### 6. 팀원 실제 사진
- **파일**: `src/data/team.js`, `src/components/sections/TeamSection.jsx`
- **현황**: 이니셜 placeholder만 표시 (박, 이, 김)
- **작업**: 클라이언트로부터 증명사진 수령 → `public/team/` 저장 → `team.js`에 경로 추가
- [ ] 완료

### 7. 팀원 경력 상세화
- **파일**: `src/data/team.js`
- **현황**: "수백 건의 인허가 실적 보유" 등 추상적 표현
- **작업**: 자격증 취득 연도, 주요 실적 건수, 전문 분야 등 구체적 내용으로 교체
- [ ] 완료

### 8. sitemap.xml 생성
- **파일**: `public/sitemap.xml` (현재 없음 — `robots.txt`에 명시됐지만 파일 없음)
- **작업**: 도메인 확정 후 아래 내용으로 생성
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://nasinsa.co.kr/</loc>
      <lastmod>2026-05-28</lastmod>
      <changefreq>monthly</changefreq>
      <priority>1.0</priority>
    </url>
  </urlset>
  ```
- [ ] 완료

### 9. 지도 네이버 지도로 교체
- **파일**: `src/components/sections/MapSection.jsx`
- **현황**: Google Maps 임베드 — 국내 사용자 로드 느림·불안정
- **작업**: 네이버 지도 Static Map API 또는 임베드 URL로 교체
- [ ] 완료

---

## 🟢 납품 직후 클라이언트와 함께 진행

### 10. 네이버 서치어드바이저 등록
- https://searchadvisor.naver.com 접속
- 사이트 소유 확인 HTML 태그 → `index.html` `<head>`에 삽입
- 사이트맵 제출
- [ ] 완료

### 11. Google Search Console 등록
- https://search.google.com/search-console 접속
- 소유권 확인 후 `sitemap.xml` 제출
- [ ] 완료

### 12. GA4 추적 코드 삽입
- **파일**: `index.html`
- GA4 측정 ID 발급 후 `<head>`에 스크립트 한 줄 추가
- [ ] 완료

---

## 클라이언트 제공 자료 요청 목록

클라이언트에게 받아야 하는 항목입니다.

| # | 필요 자료 | 용도 |
|---|-----------|------|
| A | 카카오 오픈채팅 또는 채널 URL | 전 사이트 카카오 상담 버튼 |
| A-1 | 인스타그램 계정 URL | SNS Hub 섹션 |
| A-2 | 유튜브 채널 URL | SNS Hub 섹션 |
| A-3 | 네이버 블로그 URL | SNS Hub 섹션 |
| A-4 | 스레드(Threads) 계정 URL | SNS Hub 섹션 |
| A-5 | 네이버 톡톡 채널 URL | SNS Hub 섹션 |
| B | 대표·직원 증명사진 (JPG/PNG) | 팀 소개 섹션 |
| C | 실제 누적 처리 건수 / 고객 만족률 / 기업 고객 수 / 해결률 | 신뢰 지표 섹션 수치 |
| D | 실제 성공 사례 4건 (카테고리·제목·결과·세부 항목) | 성공 사례 섹션 |
| E | 실제 고객 후기 6건 (이름·지역·서비스·내용) | 고객 후기 섹션 |
| F | 대표·직원 상세 경력 (자격 취득 연도, 주요 실적) | 팀 소개 섹션 |
| G | 개인정보처리방침 내용 | Footer 링크 |
| H | 도메인 확정 및 네임서버 설정 | Vercel 연결 |

---

*최종 수정일: 2026-05-28*
