import { AnimatePresence, motion } from 'framer-motion'
import { useContactForm } from '../../hooks/useContactForm'
import ScrollReveal from '../ui/ScrollReveal'
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle, Send } from 'lucide-react'
import { COMPANY } from '../../constants/contact'

const CONTACT_INFO = [
  { icon: Phone,  label: '대표 전화', value: COMPANY.phone,    href: `tel:${COMPANY.phone}`    },
  { icon: Mail,   label: '이메일',   value: COMPANY.email,    href: `mailto:${COMPANY.email}` },
  { icon: MapPin, label: '주소',     value: COMPANY.address                                   },
  { icon: Clock,  label: '운영시간', value: COMPANY.hoursFull                                  },
]

const SERVICE_OPTIONS = ['기업컨설팅', '개발행위 인허가', '토지보상', '고충민원', '행정심판', '기타']
export default function ContactSection() {
  const { formData, loading, success, error, handleChange, handleSubmit, resetSuccess } = useContactForm()
  return (
    <section id="contact" className="section-padding bg-primary-950">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-14">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">무료 상담 신청</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">지금 바로 전문가와 상담하세요</h2>
          <p className="text-white/50 max-w-xl mx-auto">24시간 이내 담당 행정사가 직접 연락드립니다</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          <ScrollReveal variant="fade-left" className="lg:col-span-2">
            <div className="space-y-5">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <p className="text-white/40 text-xs mb-0.5">{label}</p>
                    {href
                      ? <a href={href} className="text-white hover:text-gold-400 transition-colors font-medium">{value}</a>
                      : <p className="text-white/80">{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" className="lg:col-span-3">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <AnimatePresence mode="wait">
                {success ? (
                  <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="text-center py-10">
                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle size={32} className="text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">상담 신청이 접수되었습니다!</h3>
                    <p className="text-white/50 mb-6 text-sm">24시간 이내 담당 행정사가 연락드립니다.</p>
                    <button onClick={resetSuccess} className="btn-gold">추가 상담 신청</button>
                  </motion.div>
                ) : (
                  <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-white/60 text-sm mb-2">이름 <span className="text-gold-400">*</span></label>
                        <input
                          name="name" value={formData.name} onChange={handleChange}
                          placeholder="홍길동" required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-white/60 text-sm mb-2">연락처 <span className="text-gold-400">*</span></label>
                        <input
                          name="phone" value={formData.phone} onChange={handleChange}
                          placeholder="010-0000-0000" required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">상담 분야</label>
                      <select
                        name="service_type" value={formData.service_type} onChange={handleChange}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all"
                      >
                        <option value="" className="bg-primary-900">분야 선택 (선택사항)</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s} className="bg-primary-900">{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-white/60 text-sm mb-2">문의 내용 <span className="text-gold-400">*</span></label>
                      <textarea
                        name="message" value={formData.message} onChange={handleChange}
                        placeholder="문의하실 내용을 자유롭게 적어주세요." required rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-gold-400/50 focus:bg-white/10 transition-all resize-none"
                      />
                    </div>
                    {error && (
                      <div className="flex items-start gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                        <AlertCircle size={16} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <p className="text-red-300 text-sm">{error}</p>
                      </div>
                    )}
                    <button
                      type="submit" disabled={loading}
                      className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading
                        ? <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        : <Send size={16} />
                      }
                      {loading ? '전송 중...' : '무료 상담 신청하기'}
                    </button>
                    <p className="text-white/30 text-xs text-center">입력하신 정보는 상담 목적으로만 사용됩니다.</p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
