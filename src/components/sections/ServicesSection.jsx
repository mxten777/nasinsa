import ScrollReveal from '../ui/ScrollReveal'
import { Check, ChevronRight } from 'lucide-react'
import { SERVICES } from '../../data/services'
import { scrollToContact } from '../../utils/scroll'

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-14">
          <p className="section-subtitle">전문 업무 분야</p>
          <h2 className="section-title">어떤 행정 문제도 해결합니다</h2>
          <p className="section-description">기업 컨설팅부터 행정심판까지 — 행정 전 분야의 전문 법인</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map(({ icon: Icon, tag, title, desc, items, cta }, i) => (
            <ScrollReveal key={title} delay={i * 0.08} variant="fade-up">
              <div className="card h-full flex flex-col group hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center">
                    <Icon size={22} className="text-primary-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">{tag}</span>
                </div>
                <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1">{desc}</p>
                <ul className="space-y-2 mb-6">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <span className="w-4.5 h-4.5 rounded-full bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <Check size={11} className="text-primary-700" />
                      </span>{item}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollToContact() }}
                  className="flex items-center gap-1 text-sm font-semibold text-primary-700 hover:text-primary-500 transition-colors mt-auto group/link"
                >
                  {cta}<ChevronRight size={15} className="group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
