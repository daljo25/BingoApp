import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"
import { Printer, RotateCcw, Globe, LoaderPinwheel } from "lucide-react"
import Link from "next/link"

export default function Header({ onNewGame }: { onNewGame: () => void }) {
  return (
    <header className="bg-white text-primary shadow-md dark:bg-gray-800 dark:text-gray-400">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center justify-center gap-2 text-3xl font-bold ">
          <LoaderPinwheel className="animate-spin-slow" />Bingo
          </div>
        <div className="flex space-x-4">
          <Button variant="destructive" onClick={onNewGame}>
            <RotateCcw/>Nueva Partida
          </Button>
          <Button variant="default" asChild>
            <Link href="/tickets">
              <Printer/>Tickets
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

