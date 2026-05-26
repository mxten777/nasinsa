import { Shield, Star, Users, Award } from 'lucide-react'

export const METRICS = [
  {
    icon: Shield,
    target: 1200,
    suffix: '+',
    label: '누적 처리 건수',
    desc: '설립 이래 신뢰로 쌓아온 성과',
  },
  {
    icon: Star,
    target: 95,
    suffix: '%+',
    label: '고객 만족률',
    desc: '완료 후 재의뢰·추천 기준',
  },
  {
    icon: Users,
    target: 300,
    suffix: '+',
    label: '기업 고객 수',
    desc: '중소기업 전담 행정 파트너',
  },
  {
    icon: Award,
    target: 98,
    suffix: '%',
    label: '사건 해결률',
    desc: '행정심판·인허가 기준',
  },
]

export const HERO_STATS = [
  { label: '누적 처리 건수', value: '1,200+', icon: Shield },
  { label: '고객 만족률',   value: '95%+',  icon: Star   },
  { label: '기업 고객 수',  value: '300+',  icon: Users  },
  { label: '사건 해결률',   value: '98%',   icon: Award  },
]
