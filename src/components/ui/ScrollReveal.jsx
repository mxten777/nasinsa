import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
const VARIANTS = {
  'fade-up':    { hidden:{opacity:0,y:40},    visible:{opacity:1,y:0}    },
  'fade-in':    { hidden:{opacity:0},         visible:{opacity:1}        },
  'fade-left':  { hidden:{opacity:0,x:-40},   visible:{opacity:1,x:0}   },
  'fade-right': { hidden:{opacity:0,x:40},    visible:{opacity:1,x:0}   },
  'scale-up':   { hidden:{opacity:0,scale:.92},visible:{opacity:1,scale:1}},
}
export default function ScrollReveal({ children, variant='fade-up', delay=0, duration=0.65, className='', margin='-80px' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once:true, margin })
  return (
    <motion.div ref={ref} className={className} variants={VARIANTS[variant]} initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration, delay, ease:[0.22,1,0.36,1] }}>
      {children}
    </motion.div>
  )
}
