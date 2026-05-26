import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'
import { NAV_ITEMS } from '../../constants/navigation'
import { COMPANY } from '../../constants/contact'
import { scrollToSection } from '../../utils/scroll'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const id = href.replace('#', '')
    setTimeout(() => scrollToSection(id), 300)
  }
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100' : 'bg-transparent'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <a
              href="#hero"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-3 group"
              aria-label="홈"
            >
              <div className="w-9 h-9 rounded-lg bg-primary-700 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                <span className="text-gold-400 font-bold text-base">정</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className={`text-xs font-medium tracking-wider transition-colors ${scrolled ? 'text-gray-400' : 'text-white/60'}`}>{COMPANY.nameEn}</span>
                <span className={`text-base font-bold tracking-tight transition-colors ${scrolled ? 'text-primary-900' : 'text-white'}`}>{COMPANY.name}</span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_ITEMS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-primary-50 hover:text-primary-700 ${scrolled ? 'text-gray-600' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${COMPANY.phone}`}
                className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${scrolled ? 'text-primary-700' : 'text-white/80 hover:text-white'}`}
              >
                <Phone size={15} /><span>{COMPANY.phone}</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                className="btn-gold text-sm px-5 py-2.5"
              >
                무료 상담 신청
              </a>
            </div>

            <button
              className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-primary-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴 열기"
              aria-expanded={menuOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col"
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-5 border-b border-gray-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary-700 flex items-center justify-center">
                    <span className="text-gold-400 font-bold text-sm">정</span>
                  </div>
                  <span className="font-bold text-primary-900">{COMPANY.name}</span>
                </div>
                <button onClick={() => setMenuOpen(false)} className="p-2 rounded-lg text-gray-500 hover:bg-gray-100" aria-label="메뉴 닫기">
                  <X size={20} />
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                {NAV_ITEMS.map(({ label, href }) => (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(href) }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-700 font-medium transition-colors"
                  >
                    {label}<ChevronRight size={16} className="text-gray-400" />
                  </a>
                ))}
              </nav>

              <div className="p-4 border-t border-gray-100 space-y-3">
                <a
                  href={`tel:${COMPANY.phone}`}
                  className="flex items-center justify-center gap-2 w-full py-3 border-2 border-primary-700 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-colors"
                >
                  <Phone size={18} />{COMPANY.phone}
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
                  className="btn-gold w-full py-3"
                >
                  무료 상담 신청
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
