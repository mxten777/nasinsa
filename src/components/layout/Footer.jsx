import { Phone, Mail, MapPin, ChevronRight, Clock } from 'lucide-react'
import { COMPANY } from '../../constants/contact'

const QUICK_LINKS = [
  { label: '업무분야', href: '#services' },
  { label: '소개',     href: '#team'     },
  { label: '성공사례', href: '#cases'    },
  { label: '상담문의', href: '#contact'  },
  { label: '오시는 길', href: '#location' },
]

const SERVICE_NAMES = ['기업컨설팅', '개발행위 인허가', '토지보상', '고충민원', '행정심판']

const CONTACT_INFO = [
  { icon: Phone,  label: '대표 전화', value: COMPANY.phone,   href: `tel:${COMPANY.phone}`         },
  { icon: Mail,   label: '이메일',   value: COMPANY.email,   href: `mailto:${COMPANY.email}`       },
  { icon: MapPin, label: '주소',     value: COMPANY.address                                        },
  { icon: Clock,  label: '운영시간', value: COMPANY.hours                                          },
]

export default function Footer() {
  return (
    <footer className="bg-primary-950 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary-700 flex items-center justify-center flex-shrink-0">
                <span className="text-gold-400 font-bold text-lg">정</span>
              </div>
              <div>
                <p className="text-xs text-white/40 tracking-widest">{COMPANY.nameEn}</p>
                <p className="font-bold text-white leading-tight">{COMPANY.name}</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              {COMPANY.slogan}.<br />기업컨설팅부터 행정심판까지<br />전문 행정사 법인이 함께합니다.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">빠른 메뉴</h3>
            <ul className="space-y-3">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="flex items-center gap-1.5 text-white/50 hover:text-gold-400 text-sm transition-colors group">
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />{label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">전문 분야</h3>
            <ul className="space-y-3">
              {SERVICE_NAMES.map((name) => (
                <li key={name}>
                  <a href="#services" className="flex items-center gap-1.5 text-white/50 hover:text-gold-400 text-sm transition-colors group">
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />{name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-5 text-sm tracking-wider uppercase">연락처</h3>
            <ul className="space-y-4">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  {href ? (
                    <a href={href} className="flex items-start gap-3 text-white/60 hover:text-white transition-colors">
                      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-gold-500" />
                      </div>
                      <div><p className="text-xs text-white/30 mb-0.5">{label}</p><p className="text-sm">{value}</p></div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-3 text-white/60">
                      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                        <Icon size={14} className="text-gold-500" />
                      </div>
                      <div><p className="text-xs text-white/30 mb-0.5">{label}</p><p className="text-sm">{value}</p></div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© {new Date().getFullYear()} {COMPANY.nameFull}. All rights reserved.</p>
          <a href="#contact" className="text-xs text-white/40 hover:text-gold-400 transition-colors">개인정보처리방침</a>
        </div>
      </div>
      <div className="h-16 lg:h-0" />
    </footer>
  )
}
