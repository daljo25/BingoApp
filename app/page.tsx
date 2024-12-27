'use client'

import { useState, useCallback } from 'react'
import dynamic from 'next/dynamic'
import Header from '@/components/Header'
import MainBoard from '@/components/MainBoard'
import NumberGrid from '@/components/NumberGrid'
import VerificationButtons from '@/components/VerificationButtons'
import VerificationModal from '@/components/VerificationModal'
import Footer from '@/components/Footer'
import CalculatePrizes from '@/components/CalculatePrizes'
import {PopoverDemo} from '@/components/Pop'
import { useToast } from '@/hooks/use-toast'
import { validateTicket } from '@/lib/ticketsValidation'
import { Notification } from '@/components/Notification'

const Confetti = dynamic(() => import('react-confetti'), { ssr: false })

export default function BingoApp() {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'line' | 'bingo' | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)
  const { toast } = useToast()

  const drawNumber = useCallback(() => {
    if (drawnNumbers.length === 90) return
    let newNumber
    do {
      newNumber = Math.floor(Math.random() * 90) + 1
    } while (drawnNumbers.includes(newNumber))
    setDrawnNumbers(prev => [newNumber, ...prev])
  }, [drawnNumbers])

  const openModal = useCallback((type: 'line' | 'bingo') => {
    setModalType(type)
    setIsModalOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
    setModalType(null)
  }, [])

  const verifyCard = useCallback((cardNumber: string) => {
    const isValid = validateTicket(cardNumber, modalType!, drawnNumbers);
    if (isValid) {
      if (modalType === 'line') {
        toast({
          title: "¡Línea correcta!",
          description: "El juego continúa hacia el bingo.",
          variant: "default",
        })
      } else {
        toast({
          title: "¡BINGO!",
          description: "¡Felicidades! La partida ha terminado.",
          variant: "default",
        })
        setShowConfetti(true)
        setTimeout(() => setShowConfetti(false), 5000) // Detener el confeti después de 5 segundos
      }
    } else {
      toast({
        title: "Verificación incorrecta",
        description: "El juego debe continuar.",
        variant: "destructive",
      })
    }
    closeModal();
  }, [modalType, drawnNumbers, toast, closeModal]);

  const handleNewGame = useCallback(() => {
    setDrawnNumbers([])
    setShowConfetti(false)
  }, [])

  return (
    <div className="flex flex-col min-h-screen  bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      {showConfetti && <Confetti />}
      <Header onNewGame={handleNewGame} />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <MainBoard
              lastNumber={drawnNumbers[0]}
              lastThreeNumbers={drawnNumbers.slice(0, 3)}
              onDrawNumber={drawNumber}
            />
            <VerificationButtons onVerifyLine={() => openModal('line')} onVerifyBingo={() => openModal('bingo')} />
            <div className='flex items-center justify-center mt-4'><PopoverDemo /></div>
          </div>
          <NumberGrid drawnNumbers={drawnNumbers} />
        </div>
      </main>
      <footer><Footer /></footer>

      <VerificationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onVerify={verifyCard}
        type={modalType}
      />
      <Notification />
    </div>

  )
}

