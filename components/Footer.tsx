import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className=" mt-auto p-4 text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800">
      Hecho por <Button variant={'link'} asChild>
        <a href="https://github.com/Daljo25">
          <Github className="inline-block mr-1" /> Daljo25
        </a>
      </Button>
    </footer>
  )
}