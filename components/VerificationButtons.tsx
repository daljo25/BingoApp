import { Button } from "@/components/ui/button"

interface VerificationButtonsProps {
  onVerifyLine: () => void
  onVerifyBingo: () => void
}

export default function VerificationButtons({ onVerifyLine, onVerifyBingo }: VerificationButtonsProps) {
  return (
    <div className="flex justify-center gap-4 mt-8">
      <Button onClick={onVerifyLine}>Comprobar Línea</Button>
      <Button onClick={onVerifyBingo}>Comprobar Bingo</Button>
    </div>
  )
}

