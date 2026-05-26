import { Phone, MessageCircle, MessageSquare } from 'lucide-react'
import { COMPANY } from '../../constants/contact'
import { scrollToContact } from '../../utils/scroll'

export default function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden" role="navigation" aria-label="빠른 상담 메뉴">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md border-t border-gray-200" />
      <div className="relative flex items-stretch h-16">
        <a
          href={`tel:${COMPANY.phone}`}
          className="flex-1 flex flex-col items-center justify-center gap-0.5 text-primary-700 hover:bg-primary-50 active:bg-primary-100 transition-colors duration-150"
          aria-label="전화 상담"
        >
          <Phone size={20} strokeWidth={2} />
          <span className="text-[11px] font-semibold">전화상담</span>
        </a>
        <div className="w-px bg-gray-200 my-2" />
        <a
          href={COMPANY.kakaoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 hover:bg-yellow-50 active:bg-yellow-100 transition-colors duration-150"
          aria-label="카카오톡 상담"
        >
          <MessageCircle size={20} strokeWidth={2} className="text-yellow-400" />
          <span className="text-[11px] font-semibold text-gray-700">카카오톡</span>
        </a>
        <div className="w-px bg-gray-200 my-2" />
        <a
          href="#contact"
          className="flex-[1.6] flex flex-col items-center justify-center gap-0.5 bg-primary-700 text-white hover:bg-primary-600 active:bg-primary-800 transition-colors duration-150"
          aria-label="무료 상담 신청"
          onClick={(e) => { e.preventDefault(); scrollToContact() }}
        >
          <MessageSquare size={20} strokeWidth={2} />
          <span className="text-[11px] font-bold">무료상담 신청</span>
        </a>
      </div>
      <div className="bg-white" style={{ height: 'env(safe-area-inset-bottom)' }} />
    </div>
  )
}
