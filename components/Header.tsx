import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ModeToggle"

export default function Header({ onNewGame }: { onNewGame: () => void }) {
  return (
    <header className="bg-primary text-primary-foreground shadow-md dark:bg-dark dark:text-dark-foreground">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">Bingo</div>
        <Button variant="destructive" onClick={onNewGame}>Nueva Partida</Button>
        <ModeToggle />
      </div>
    </header>
  )
}

