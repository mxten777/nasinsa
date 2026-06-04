import { ExternalLink, ArrowRight } from 'lucide-react'
import ScrollReveal from '../ui/ScrollReveal'
import { COMPANY } from '../../constants/contact'
import { InstagramIcon, YoutubeIcon, NaverIcon, ThreadsIcon, KakaoIcon } from '../ui/SnsIcons'

// ─── 데이터 ─────────────────────────────────────────────────────
const INFLOW = [
  {
    key: 'instagram',
    label: '인스타그램',
    type: '카드뉴스',
    iconBg: 'bg-gradient-to-br from-purple-500 to-pink-500',
    href: COMPANY.instagramUrl,
    posts: ['F4 비자 연장 방법', '행정심판 승소 사례', '출입국법 변경사항'],
    renderIcon: () => <InstagramIcon />,
  },
  {
    key: 'youtube',
    label: '유튜브',
    type: 'Shorts',
    iconBg: 'bg-red-600',
    href: COMPANY.youtubeUrl,
    posts: ['외국인 비자 실수 BEST 3', '행정심판 승소 사례', '음주운전 구제 실제 사례'],
    renderIcon: () => <YoutubeIcon />,
  },
  {
    key: 'naverBlog',
    label: '네이버 블로그',
    type: 'SEO 포스팅',
    iconBg: 'bg-green-600',
    href: COMPANY.naverBlogUrl,
    posts: ['F4 비자 신청서류', '영주권 취득 절차', '행정심판 준비 방법'],
    renderIcon: () => <NaverIcon />,
  },
  {
    key: 'threads',
    label: '스레드',
    type: '실시간 소식',
    iconBg: 'bg-gray-900',
    href: COMPANY.threadsUrl,
    posts: ['법령 변경 알림', '수원 행정 정보', '무료 상담 이벤트'],
    renderIcon: () => <ThreadsIcon />,
  },
]

const CONVERT = [
  {
    key: 'kakao',
    label: '카카오채널',
    desc: '카카오톡으로 바로 상담 — 답장 빠름',
    iconBg: 'bg-yellow-400',
    href: COMPANY.kakaoUrl,
    cta: '채널 추가',
    renderIcon: () => <KakaoIcon />,
    iconTextClass: 'text-gray-900',
  },
  {
    key: 'naverTalk',
    label: '네이버 톡톡',
    desc: '네이버 검색 후 톡톡으로 바로 연결',
    iconBg: 'bg-green-500',
    href: COMPANY.naverTalkUrl,
    cta: '톡톡 상담',
    renderIcon: () => <NaverIcon />,
    iconTextClass: 'text-white',
  },
]

const FLOW_STEPS = [
  { step: '01', title: '콘텐츠 구독', desc: 'SNS 팔로우' },
  { step: '02', title: '정보 습득', desc: '전문 사례·법령 정보' },
  { step: '03', title: '상담 신청', desc: '카카오·톡톡 연결' },
]

// ─── 컴포넌트 ────────────────────────────────────────────────────
export default function SnsHubSection() {
  return (
    <section id="sns" className="section-padding bg-gray-50">
      <div className="container-custom">

        {/* 헤더 */}
        <ScrollReveal className="text-center mb-14">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-widest mb-3">SNS 채널</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary-950 mb-4">
            콘텐츠로 만나고, 채널로 상담합니다
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base">
            인스타그램·유튜브·블로그에서 실제 사례와 정보를 확인하고<br className="hidden sm:block" />
            카카오채널·네이버 톡톡으로 바로 연결하세요
          </p>
        </ScrollReveal>

        {/* 3단계 흐름 */}
        <ScrollReveal className="flex items-center justify-center gap-2 sm:gap-4 mb-14 flex-wrap sm:flex-nowrap">
          {FLOW_STEPS.map((s, i) => (
            <div key={s.step} className="flex items-center gap-2 sm:gap-4">
              <div className="flex flex-col items-center gap-1.5 bg-white border border-gray-100 shadow-sm rounded-2xl px-5 sm:px-8 py-4 min-w-[110px]">
                <span className="text-xs font-bold text-gold-500 tracking-widest">{s.step}</span>
                <span className="font-bold text-primary-900 text-sm whitespace-nowrap">{s.title}</span>
                <span className="text-xs text-gray-400 whitespace-nowrap">{s.desc}</span>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <ArrowRight size={18} className="text-gray-300 flex-shrink-0" />
              )}
            </div>
          ))}
        </ScrollReveal>

        {/* 고객유입 채널 */}
        <ScrollReveal className="mb-12">
          <SectionLabel color="bg-gold-500" text="고객유입 채널" sub="팔로우하고 전문 정보를 무료로 받아보세요" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
            {INFLOW.map((p) => <InflowCard key={p.key} platform={p} />)}
          </div>
        </ScrollReveal>

        {/* 상담전환 채널 */}
        <ScrollReveal>
          <SectionLabel color="bg-primary-600" text="상담전환 채널" sub="지금 바로 전문가에게 질문하세요" />
          <div className="grid sm:grid-cols-2 gap-5 mt-6 max-w-2xl">
            {CONVERT.map((c) => <ConvertCard key={c.key} channel={c} />)}
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

function SectionLabel({ color, text, sub }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
      <div className="flex items-center gap-2">
        <span className={`w-2.5 h-2.5 rounded-full ${color} flex-shrink-0`} />
        <h3 className="text-primary-900 font-bold text-lg">{text}</h3>
      </div>
      {sub && <span className="text-gray-400 text-sm sm:border-l sm:border-gray-200 sm:pl-3">{sub}</span>}
    </div>
  )
}

function InflowCard({ platform: p }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card p-5 flex flex-col gap-4 hover:shadow-card-hover transition-shadow">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${p.iconBg} flex items-center justify-center flex-shrink-0 text-white`}>
          {p.renderIcon()}
        </div>
        <div>
          <p className="font-bold text-primary-900 text-sm leading-tight">{p.label}</p>
          <p className="text-xs text-gray-400">{p.type}</p>
        </div>
      </div>

      <ul className="flex-1 space-y-1.5">
        {p.posts.map((post) => (
          <li key={post} className="flex items-start gap-1.5 text-xs text-gray-600 leading-snug">
            <span className="text-gold-500 flex-shrink-0 mt-0.5">▸</span>
            {post}
          </li>
        ))}
      </ul>

      <a
        href={p.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-900 border border-primary-200 hover:border-primary-400 rounded-xl py-2.5 transition-all group"
      >
        팔로우하기 <ExternalLink size={13} className="group-hover:translate-x-0.5 transition-transform" />
      </a>
    </div>
  )
}

function ConvertCard({ channel: c }) {
  return (
    <a
      href={c.href}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white rounded-2xl border border-gray-100 shadow-card p-5 flex items-center gap-4 hover:shadow-card-hover transition-all group"
    >
      <div className={`w-12 h-12 rounded-xl ${c.iconBg} flex items-center justify-center flex-shrink-0 ${c.iconTextClass}`}>
        {c.renderIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-primary-900 text-sm">{c.label}</p>
        <p className="text-xs text-gray-500 leading-snug mt-0.5">{c.desc}</p>
      </div>
      <span className="btn-gold text-sm px-4 py-2 whitespace-nowrap flex-shrink-0">
        {c.cta}
      </span>
    </a>
  )
}
