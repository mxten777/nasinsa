import { PhoneCall, Search, Target, Building, CheckCircle2 } from 'lucide-react'

export const PROCESS_STEPS = [
  {
    icon: PhoneCall,
    step: '01',
    title: '상담 접수',
    desc: '전화·온라인 무료 상담 신청. 사안을 간략히 설명해 주시면 담당 행정사를 즉시 배정합니다.',
  },
  {
    icon: Search,
    step: '02',
    title: '사안 검토',
    desc: '관련 법령, 판례, 행정기관 실무를 종합 검토하여 사건의 가능성과 최적 전략을 분석합니다.',
  },
  {
    icon: Target,
    step: '03',
    title: '대응 전략 수립',
    desc: '의뢰인의 목표와 상황에 맞는 맞춤형 전략을 수립하고 예상 결과와 비용을 명확히 안내합니다.',
  },
  {
    icon: Building,
    step: '04',
    title: '기관 대응',
    desc: '행정기관 협의, 심판 청구, 민원 제기 등 모든 행정 절차를 전문적으로 대리합니다.',
  },
  {
    icon: CheckCircle2,
    step: '05',
    title: '결과 도출',
    desc: '최종 처리 결과를 상세히 안내드리고, 이후 필요한 후속 조치까지 책임지고 마무리합니다.',
  },
]
