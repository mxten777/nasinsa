import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { COMPANY } from '../constants/contact'

const SECTIONS = [
  {
    title: '제1조 (개인정보의 처리 목적)',
    content: `${COMPANY.nameFull}(이하 "법인")은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.

① 무료 상담 신청 접수 및 처리
② 상담 결과 회신 및 사후 관리
③ 서비스 이용에 관한 계약 이행 및 서비스 제공`,
  },
  {
    title: '제2조 (개인정보의 처리 및 보유 기간)',
    content: `① 법인은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.

② 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다.

- 무료 상담 신청: 상담 완료 후 3년 (전자상거래법 기준)`,
  },
  {
    title: '제3조 (처리하는 개인정보 항목)',
    content: `법인은 다음의 개인정보 항목을 처리하고 있습니다.

① 무료 상담 신청
- 필수 항목: 이름, 연락처, 상담 내용
- 선택 항목: 이메일, 상담 분야`,
  },
  {
    title: '제4조 (개인정보의 제3자 제공)',
    content: `법인은 정보주체의 개인정보를 제1조(개인정보의 처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보 보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.

현재 법인은 이용자의 개인정보를 제3자에게 제공하고 있지 않습니다.`,
  },
  {
    title: '제5조 (개인정보처리의 위탁)',
    content: `법인은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.

① Supabase Inc. — 데이터베이스 저장 및 관리 (서버 소재지: 미국)

법인은 위탁계약 체결 시 개인정보 보호법 제26조에 따라 위탁업무 수행 목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.`,
  },
  {
    title: '제6조 (정보주체의 권리·의무 및 행사방법)',
    content: `① 정보주체는 법인에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.

1. 개인정보 열람 요구
2. 오류 등이 있을 경우 정정 요구
3. 삭제 요구
4. 처리정지 요구

② 제1항에 따른 권리 행사는 법인에 대해 서면, 전화, 전자우편 등을 통하여 하실 수 있으며 법인은 이에 대해 지체 없이 조치하겠습니다.`,
  },
  {
    title: '제7조 (개인정보의 파기)',
    content: `① 법인은 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체 없이 해당 개인정보를 파기합니다.

② 전자적 파일 형태의 개인정보는 복구 및 재생이 불가능한 방법으로 영구 삭제합니다.`,
  },
  {
    title: '제8조 (개인정보 보호책임자)',
    content: `① 법인은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.

- 성명: 박신환
- 직책: 대표 행정사
- 연락처: ${COMPANY.phone} / ${COMPANY.email}

② 정보주체께서는 법인의 서비스를 이용하시면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자에게 문의하실 수 있습니다.`,
  },
  {
    title: '제9조 (개인정보처리방침 변경)',
    content: `① 이 개인정보처리방침은 2026년 5월 28일부터 적용됩니다.

② 이전의 개인정보처리방침은 아래에서 확인하실 수 있습니다.
- 해당 사항 없음 (최초 제정)`,
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50 font-pretendard">
      {/* 상단 헤더 */}
      <div className="bg-primary-950 text-white py-12">
        <div className="container-custom">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} />
            홈으로 돌아가기
          </Link>
          <h1 className="text-3xl font-extrabold">개인정보처리방침</h1>
          <p className="text-white/50 mt-2 text-sm">
            {COMPANY.nameFull} · 시행일: 2026년 5월 28일
          </p>
        </div>
      </div>

      {/* 본문 */}
      <div className="container-custom py-14">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-8 sm:p-12">
          <p className="text-gray-600 text-sm leading-relaxed mb-10 pb-8 border-b border-gray-100">
            {COMPANY.nameFull}(이하 "법인")은 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보처리방침을 수립·공개합니다.
          </p>

          <div className="space-y-10">
            {SECTIONS.map(({ title, content }) => (
              <section key={title}>
                <h2 className="text-base font-bold text-gray-900 mb-3">{title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed whitespace-pre-line">{content}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100 text-center">
            <p className="text-gray-400 text-xs">
              문의: {COMPANY.phone} · {COMPANY.email}
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 mt-4 text-sm text-primary-700 hover:text-primary-600 font-medium transition-colors"
            >
              <ArrowLeft size={14} />
              홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
