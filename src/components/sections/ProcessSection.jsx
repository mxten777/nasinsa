import ScrollReveal from '../ui/ScrollReveal'
import { PROCESS_STEPS } from '../../data/process'
import { scrollToContact } from '../../utils/scroll'

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-primary-950">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-16">
          <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mb-3">진행 절차</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">체계적인 5단계 프로세스</h2>
          <p className="text-white/50 max-w-xl mx-auto">접수부터 완료까지 모든 과정을 투명하게 공유합니다</p>
        </ScrollReveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-0.5 bg-white/10" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {PROCESS_STEPS.map(({ icon: Icon, step, title, desc }, i) => (
              <ScrollReveal key={step} delay={i * 0.1} variant="fade-up">
                <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary-800 border border-white/10 flex items-center justify-center mb-4 transition-colors">
                    <Icon size={22} className="text-gold-400" />
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-primary-950 border border-white/10 flex items-center justify-center text-[10px] font-bold text-white/60">{step}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        <ScrollReveal className="mt-14 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToContact() }}
            className="btn-gold inline-flex items-center gap-2"
          >
            지금 바로 상담 신청하기
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
