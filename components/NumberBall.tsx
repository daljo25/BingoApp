import { motion, AnimatePresence } from "framer-motion"

interface NumberBallProps {
  number: number
  size?: 'sm' | 'md' | 'lg'
  animate?: boolean
}

export default function NumberBall({ number, size = 'sm', animate = false }: NumberBallProps) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-16 h-16 text-2xl',
    lg: 'w-32 h-32 text-6xl'
  }

  const ball = (
    <div
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full bg-primary text-primary-foreground font-bold`}
    >
      {number}
    </div>
  )

  if (animate) {
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={number}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          {ball}
        </motion.div>
      </AnimatePresence>
    )
  }

  return ball
}

