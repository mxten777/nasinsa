import { motion } from 'framer-motion'
import { Phone, MessageSquare, ChevronDown } from 'lucide-react'
import { HERO_STATS } from '../../data/metrics'
import { COMPANY } from '../../constants/contact'
import { scrollToContact } from '../../utils/scroll'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-transparent to-primary-950/60 pointer-events-none" />

      <div className="container-custom relative z-10 py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-400/30 bg-gold-400/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-gold-300 text-sm font-medium">경기도 수원 전문 행정사법인</span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15] mb-6 tracking-tight"
          >
            행정 분야의 모든 문제를<br />
            <span className="text-gradient-gold">전문 법인이 해결합니다</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl"
          >
            기업 인허가·개발 허가·토지보상·행정심판까지, {COMPANY.name}가 {COMPANY.slogan}.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap gap-3 mb-16"
          >
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToContact() }}
              className="btn-gold flex items-center gap-2 text-base px-7 py-3.5"
            >
              <MessageSquare size={19} />무료 상담 신청
            </a>
            <a
              href={`tel:${COMPANY.phone}`}
              className="btn-outline flex items-center gap-2 text-base px-7 py-3.5 border-white/30 text-white hover:bg-white/10"
            >
              <Phone size={19} />전화 상담 바로가기
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {HERO_STATS.map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-4 text-center hover:bg-white/10 transition-colors">
                <Icon size={18} className="text-gold-400 mx-auto mb-2" />
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-white/50 text-xs">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
      >
        <ChevronDown size={22} />
      </motion.div>
    </section>
  )
}
