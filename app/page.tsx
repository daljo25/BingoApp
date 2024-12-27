'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import MainBoard from '@/components/MainBoard'
import NumberGrid from '@/components/NumberGrid'
import VerificationButtons from '@/components/VerificationButtons'
import VerificationModal from '@/components/VerificationModal'
import Footer from '@/components/Footer'
import CalculatePrizes from '@/components/CalculatePrizes'
import {PopoverDemo} from '@/components/Pop'

export default function BingoApp() {
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'line' | 'bingo' | null>(null)

  const drawNumber = () => {
    if (drawnNumbers.length === 90) return
    let newNumber
    do {
      newNumber = Math.floor(Math.random() * 90) + 1
    } while (drawnNumbers.includes(newNumber))
    setDrawnNumbers([newNumber, ...drawnNumbers])
  }

  const openModal = (type: 'line' | 'bingo') => {
    setModalType(type)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setModalType(null)
  }

  const verifyCard = (cardNumber: string) => {
    // Simulación de verificación
    const isValid = Math.random() > 0.5
    if (isValid) {
      if (modalType === 'line') {
        alert('¡Línea correcta! El juego continúa hacia el bingo.')
      } else {
        alert('¡BINGO! ¡Felicidades! La partida ha terminado.')
      }
    } else {
      alert('Verificación incorrecta. El juego debe continuar.')
    }
    closeModal()
  }

  return (
    <div className="flex flex-col min-h-screen  bg-gray-100 dark:bg-black text-gray-800 dark:text-white">
      <Header onNewGame={() => setDrawnNumbers([])} />
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
    </div>

  )
}

