"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


export default function PrizeCalculator() {
  const [ticketPrice, setTicketPrice] = useState<number | string>("");
  const [ticketsSold, setTicketsSold] = useState<number | string>("");
  const [totalRevenue, setTotalRevenue] = useState<number>(0);
  const [linePrize, setLinePrize] = useState<number>(0);
  const [bingoPrize, setBingoPrize] = useState<number>(0);

  const calculatePrizes = () => {
    const price = parseFloat(ticketPrice as string);
    const sold = parseInt(ticketsSold as string);

    if (isNaN(price) || isNaN(sold)) {
      alert("Por favor, ingresa valores válidos.");
      return;
    }

    const revenue = price * sold;
    setTotalRevenue(revenue);
    setLinePrize(revenue * 0.3); // 30% para línea
    setBingoPrize(revenue * 0.7); // 70% para bingo
  };

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle className="text-center">Calculadora de Premios</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 ">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Precio (€)
              </label>
              <Input
                type="number"
                value={ticketPrice}
                onChange={(e) => setTicketPrice(e.target.value)}
                placeholder="0.0"
                className="w-50"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">
                Vendidos
              </label>
              <Input
                type="number"
                value={ticketsSold}
                onChange={(e) => setTicketsSold(e.target.value)}
                placeholder="0"
                className="w-50"
              />
            </div>
          </div>
          <Button
            variant="default"
            className="w-full"
            onClick={calculatePrizes}
          >
            Calcular Premios
          </Button>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Resultados:</h3>
            <p className="text-sm text-gray-600">
              Total Recaudado: <span className="font-medium">€{totalRevenue.toFixed(2)}</span>
            </p>
            <p className="text-sm text-gray-600">
              Premio por Línea: <span className="font-medium">€{linePrize.toFixed(2)}</span>
            </p>
            <p className="text-sm text-gray-600">
              Premio por Bingo: <span className="font-medium">€{bingoPrize.toFixed(2)}</span>
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    
  );
}
