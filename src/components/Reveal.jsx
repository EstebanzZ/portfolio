import { motion, useReducedMotion } from "framer-motion"

function Reveal({
  children,
  as = "div",
  delay = 0,
  duration = 0.55,
  distance = 20,
  amount = 0.2,
  once = true,
  className,
  ...props
}) {
  const reduceMotion = useReducedMotion()
  const MotionElement = motion[as] || motion.div

  const hiddenState = reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: distance }
  const visibleState = { opacity: 1, y: 0 }

  return (
    <MotionElement
      className={className}
      initial={hiddenState}
      whileInView={visibleState}
      viewport={{ once, amount }}
      transition={{
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      {...props}
    >
      {children}
    </MotionElement>
  )
}

export default Reveal