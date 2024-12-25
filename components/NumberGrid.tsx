import NumberBall from "@/components/NumberBall"

interface NumberGridProps {
  drawnNumbers: number[]
}

export default function NumberGrid({ drawnNumbers }: NumberGridProps) {
  return (
    <div className="grid grid-cols-10 gap-2">
      {Array.from({ length: 90 }, (_, i) => i + 1).map((num) => (
        <div key={num}>
          {drawnNumbers.includes(num) ? (
            <NumberBall number={num} />
          ) : (
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-400 text-sm font-bold dark:bg-gray-800 dark:text-gray-200">
              {num}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

