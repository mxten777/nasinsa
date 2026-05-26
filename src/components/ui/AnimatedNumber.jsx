import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
export default function AnimatedNumber({ target, suffix='', prefix='', duration=2200, className='' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once:true, margin:'-60px' })
  useEffect(() => {
    if (!isInView) return
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      setCount(Math.floor(easedProgress * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    const id = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(id)
  }, [isInView, target, duration])
  return <span ref={ref} className={className}>{prefix}{count.toLocaleString('ko-KR')}{suffix}</span>
}
