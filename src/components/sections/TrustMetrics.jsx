import AnimatedNumber from '../ui/AnimatedNumber'
import ScrollReveal from '../ui/ScrollReveal'
import { ChevronRight } from 'lucide-react'
import { METRICS } from '../../data/metrics'
import { scrollToContact } from '../../utils/scroll'

export default function TrustMetrics() {
  return (
    <section id="metrics" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-14">
          <p className="section-subtitle">왜 행정사법인 정유인가</p>
          <h2 className="section-title">숫자로 증명하는 신뢰</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {METRICS.map(({ icon: Icon, target, suffix, label, desc }, i) => (
            <ScrollReveal key={label} delay={i * 0.1} variant="fade-up">
              <div className="card text-center group hover:shadow-card-hover transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-primary-50 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center mx-auto mb-4">
                  <Icon size={26} className="text-primary-700 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-4xl font-extrabold text-primary-900 mb-2">
                  <AnimatedNumber target={target} suffix={suffix} />
                </p>
                <p className="font-semibold text-gray-800 mb-1">{label}</p>
                <p className="text-sm text-gray-400">{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="bg-primary-700 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <p className="text-white text-xl font-semibold text-center sm:text-left">지금 바로 전문가와 무료로 상담하세요</p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollToContact() }}
              className="btn-gold flex-shrink-0 flex items-center gap-2"
            >
              무료 상담 신청<ChevronRight size={18} />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
