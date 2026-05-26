import ScrollReveal from '../ui/ScrollReveal'
import { TrendingUp, Check } from 'lucide-react'
import { CASES } from '../../data/cases'
import { scrollToContact } from '../../utils/scroll'

export default function CasesSection() {
  return (
    <section id="cases" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-14">
          <p className="section-subtitle">성공 사례</p>
          <h2 className="section-title">실제 사례로 증명된 전문성</h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASES.map(({ category, title, period, result, resultClass, bg, items }, i) => (
            <ScrollReveal key={title} delay={i * 0.1} variant="fade-up">
              <div className="card h-full hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">{category}</span>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl ${bg}`}>
                    <TrendingUp size={13} className={resultClass} />
                    <span className={`text-xs font-bold ${resultClass}`}>{result}</span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-400 mb-5">{period}</p>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <Check size={14} className="text-primary-600 flex-shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-10 text-center">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollToContact() }}
            className="btn-primary inline-flex items-center gap-2"
          >
            내 사건도 무료로 검토받기
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
