import { Phone, Mail, MapPin, ChevronRight, Clock, MessageCircle } from 'lucide-react'
import { COMPANY } from '../../constants/contact'
import { NAV_ITEMS } from '../../constants/navigation'
import { SERVICES } from '../../data/services'
import { InstagramIcon, YoutubeIcon, NaverIcon, ThreadsIcon } from '../ui/SnsIcons'

const SNS_LINKS = [
  { href: COMPANY.instagramUrl, label: '인스타그램',    Icon: InstagramIcon, color: 'hover:text-pink-400'  },
  { href: COMPANY.youtubeUrl,   label: '유튜브',        Icon: YoutubeIcon,   color: 'hover:text-red-400'   },
  { href: COMPANY.naverBlogUrl, label: '네이버 블로그', Icon: NaverIcon,     color: 'hover:text-green-400' },
  { href: COMPANY.threadsUrl,   label: '스레드',        Icon: ThreadsIcon,   color: 'hover:text-white'     },
]

const CONTACT_INFO = [
  { icon: Phone,         label: '대표 전화',    value: COMPANY.phone,     href: `tel:${COMPANY.phone}`         },
  { icon: MessageCircle, label: '카카오톡 상담', value: '카카오톡 채널',   href: COMPANY.kakaoUrl               },
  { icon: Mail,          label: '이메일',      value: COMPANY.email,     href: `mailto:${COMPANY.email}`       },
  { icon: MapPin,        label: '주소',        value: COMPANY.address                                           },
  { icon: Clock,         label: '운영시간',    value: COMPANY.hours                                             },
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
              {NAV_ITEMS.map(({ label, href }) => (
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
              {SERVICES.map(({ title }) => (
                <li key={title}>
                  <a href="#services" className="flex items-center gap-1.5 text-white/50 hover:text-gold-400 text-sm transition-colors group">
                    <ChevronRight size={14} className="group-hover:translate-x-0.5 transition-transform" />{title}
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
          <div className="flex items-center gap-4">
            {SNS_LINKS.map(({ href, label, Icon, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-white/40 transition-colors hover:bg-white/10 ${color}`}
              >
                <Icon size={14} />
              </a>
            ))}
            <div className="w-px h-4 bg-white/10 mx-1" />
            <a href="/privacy" className="text-xs text-white/40 hover:text-gold-400 transition-colors">개인정보처리방침</a>
          </div>
        </div>
      </div>
      <div className="h-16 lg:h-0" />
    </footer>
  )
}
