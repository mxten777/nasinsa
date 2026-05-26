import ScrollReveal from '../ui/ScrollReveal'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '../../data/testimonials'

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-14">
          <p className="section-subtitle">고객 후기</p>
          <h2 className="section-title">고객이 직접 전하는 이야기</h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={18} className="text-gold-400 fill-gold-400" />
            ))}
            <span className="ml-2 font-bold text-primary-900 text-lg">4.98</span>
            <span className="text-gray-400">/ 5.0</span>
            <span className="text-gray-400 text-sm ml-1">({TESTIMONIALS.length * 42}+ 리뷰)</span>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map(({ name, location, service, stars, text }, i) => (
            <ScrollReveal key={name} delay={i * 0.08} variant="fade-up">
              <div className="card h-full hover:shadow-card-hover transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <Quote size={24} className="text-primary-100" />
                  <div className="flex gap-0.5">
                    {Array.from({ length: stars }).map((_, s) => (
                      <Star key={s} size={13} className="text-gold-400 fill-gold-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">{text}</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                  <div className="w-9 h-9 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary-700 font-bold text-sm">{name[0]}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">{name}</p>
                    <p className="text-xs text-gray-400">{location} · {service}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
