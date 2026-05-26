import ScrollReveal from '../ui/ScrollReveal'
import { BookOpen, CheckCircle } from 'lucide-react'
import { TEAM_REP, TEAM_STAFF } from '../../data/team'

export default function TeamSection() {
  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-14">
          <p className="section-subtitle">전문가 소개</p>
          <h2 className="section-title">믿을 수 있는 행정사 팀</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-3 gap-8">
          <ScrollReveal variant="fade-left" className="lg:col-span-2">
            <div className="rounded-3xl bg-gradient-to-br from-primary-800 to-primary-950 p-8 lg:p-10 text-white h-full shadow-primary">
              <div className="flex items-start gap-6 mb-8">
                <div className="w-20 h-20 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold-400 text-3xl font-bold">{TEAM_REP.initial}</span>
                </div>
                <div>
                  <span className="inline-block text-xs font-semibold text-gold-400 bg-gold-400/10 border border-gold-400/20 px-3 py-1 rounded-full mb-2">{TEAM_REP.badge}</span>
                  <h3 className="text-2xl font-bold text-white">{TEAM_REP.name}</h3>
                  <p className="text-white/60">{TEAM_REP.title}</p>
                </div>
              </div>
              <p className="text-white/70 text-base leading-relaxed mb-8 border-l-2 border-gold-400/40 pl-5">{TEAM_REP.desc}</p>
              <div className="mb-6">
                <p className="text-xs text-white/40 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <BookOpen size={12} />경력
                </p>
                <ul className="space-y-2">
                  {TEAM_REP.career.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/70">
                      <CheckCircle size={14} className="text-gold-400 flex-shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2">
                {TEAM_REP.specialties.map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-xl bg-white/10 text-white/70 text-xs font-medium">{s}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-6">
            {TEAM_STAFF.map((member, i) => (
              <ScrollReveal key={member.name} variant="fade-right" delay={i * 0.15}>
                <div className="card h-full hover:shadow-card-hover transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary-700 text-xl font-bold">{member.name[0]}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-primary-900 text-lg">{member.name}</h3>
                      <p className="text-gray-400 text-sm">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {member.specialties.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-lg bg-primary-50 text-primary-600 text-xs font-medium">{s}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
