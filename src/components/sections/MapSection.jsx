import ScrollReveal from '../ui/ScrollReveal'
import { MapPin, Phone, Clock, Mail, ExternalLink, Navigation } from 'lucide-react'
import { COMPANY } from '../../constants/contact'

const LOCATION_INFO = [
  { icon: MapPin, label: '주소',     value: `경기도 수원시 권선구\n서둔로 193, 201호` },
  { icon: Phone,  label: '대표 전화', value: COMPANY.phone,   href: `tel:${COMPANY.phone}`    },
  { icon: Mail,   label: '이메일',   value: COMPANY.email,   href: `mailto:${COMPANY.email}` },
  { icon: Clock,  label: '운영시간', value: COMPANY.hours,   sub: '주말·공휴일 휴무'          },
]

export default function MapSection() {
  return (
    <section id="location" className="section-padding bg-white">
      <div className="container-custom">
        <ScrollReveal className="text-center mb-10">
          <p className="section-subtitle">오시는 길</p>
          <h2 className="section-title">찾아오시기 편한 곳에 있습니다</h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-card border border-gray-100">
          <ScrollReveal variant="fade-left" className="relative min-h-[360px] lg:min-h-[520px]">
            <iframe
              src={COMPANY.mapEmbedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${COMPANY.name} 위치 – ${COMPANY.address}`}
            />
          </ScrollReveal>

          <ScrollReveal variant="fade-right">
            <div className="bg-white p-8 lg:p-10 flex flex-col h-full min-h-[360px] lg:min-h-[520px]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                  <Navigation size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-400">{COMPANY.name}</p>
                  <p className="font-bold text-primary-900">찾아오시는 방법</p>
                </div>
              </div>

              <ul className="space-y-6 flex-1">
                {LOCATION_INFO.map(({ icon: Icon, label, value, href, sub }) => (
                  <li key={label} className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={15} className="text-primary-700" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1">{label}</p>
                      {href ? (
                        <a href={href} className="font-semibold text-gray-800 hover:text-primary-700 transition-colors leading-snug">
                          {value}
                        </a>
                      ) : (
                        <p className="font-semibold text-gray-800 leading-snug whitespace-pre-line">{value}</p>
                      )}
                      {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
                    </div>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-2 gap-3 mt-8 pt-6 border-t border-gray-100">
                <a
                  href={COMPANY.mapNaverUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#03C75A] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} /> 네이버 지도
                </a>
                <a
                  href={COMPANY.mapKakaoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FEE500] text-[#3C1E1E] text-sm font-semibold hover:opacity-90 transition-opacity"
                >
                  <ExternalLink size={14} /> 카카오 지도
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
