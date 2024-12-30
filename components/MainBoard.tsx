import { Button } from "@/components/ui/button"
import NumberBall from "@/components/NumberBall"
import NumberText from "@/components/NumberText"
import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface MainBoardProps {
  lastNumber: number | undefined
  lastThreeNumbers: number[]
  onDrawNumber: () => void
}

export default function MainBoard({ lastNumber, lastThreeNumbers, onDrawNumber }: MainBoardProps) {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === 'Space') {
        onDrawNumber()
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [onDrawNumber])

  return (
    <div className="text-center mb-8">
      <div className="mb-4 flex flex-col items-center">
        {lastNumber ? (
          <>
          <NumberBall number={lastNumber} size="lg" animate={true} />
          <NumberText number={lastNumber} />
        </>
        ) : (
          <div className="w-32 h-32 flex items-center justify-center text-6xl font-bold">?</div>
        )}
      </div>
      <div className="flex justify-center mb-4 h-16">
        <div className="relative w-[204px]">
          <AnimatePresence initial={false}>
            {lastThreeNumbers.slice(0, 3).map((num, index) => (
              <motion.div
                key={num}
                initial={{ x: -68, opacity: 0, rotate: 0 }}
                animate={{ 
                  x: index * 68, 
                  opacity: 1, 
                  rotate: 360,
                }}
                exit={{ 
                  x: 204, 
                  opacity: 0, 
                  rotate: 720,
                }}
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  rotate: { duration: 0.5, ease: "linear" },
                  opacity: { duration: 0.2 },
                }}
                className="absolute left-0"
                style={{ width: '64px' }}
              >
                <NumberBall number={num} size="md" />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <Button onClick={onDrawNumber} size="lg">Sacar Número</Button>
    </div>
  )
}

