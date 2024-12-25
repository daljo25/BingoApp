import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface VerificationModalProps {
  isOpen: boolean
  onClose: () => void
  onVerify: (cardNumber: string) => void
  type: 'line' | 'bingo' | null
}

export default function VerificationModal({ isOpen, onClose, onVerify, type }: VerificationModalProps) {
  const [cardNumber, setCardNumber] = useState('')

  const handleVerify = () => {
    onVerify(cardNumber)
    setCardNumber('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-primary dark:bg-primary-dark">
        <DialogHeader >
          <DialogTitle>Verificar {type === 'line' ? 'Línea' : 'Bingo'}</DialogTitle>
        </DialogHeader>
        <div className="py-4">
          <Input
            type="text"
            placeholder="Número de serie del cartón"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
          />
        </div>
        <DialogFooter>
          <Button variant="secondary" onClick={handleVerify}>Verificar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

