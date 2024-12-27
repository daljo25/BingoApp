// Code for the Popover component
import CalculatePrizes from "@/components/CalculatePrizes"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

export function PopoverDemo() {
    return (
        <Popover>
            <PopoverTrigger>
                <Button>Calcular premios</Button>
            </PopoverTrigger>
            <PopoverContent className="w-full">
                <CalculatePrizes />
            </PopoverContent>
        </Popover>
    )
}
