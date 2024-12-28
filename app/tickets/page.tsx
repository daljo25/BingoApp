"use client";

import React from "react";
import tickets from "@/lib/tickets";
import { Button } from "@/components/ui/button";
import { Clover, Github } from "lucide-react";

type TicketRow = (number | null)[];
type Ticket = {
    row1: TicketRow;
    row2: TicketRow;
    row3: TicketRow;
};

const Ticket = ({ ticketId, ticket }: { ticketId: string; ticket: Ticket }) => {
    return (
        <div className="border shadow-md rounded-md p-4 w-auto h-auto break-inside-avoid bg-white">
            <h2 className="text-center text-lg font-semibold mb-4">Ticket #{ticketId}</h2>
            {Object.entries(ticket).map(([rowKey, rowValues]) => (
                <div key={rowKey} className="grid grid-cols-9 gap-[5px] mb-1">
                    {rowValues.map((cell, index) => (
                        <div
                            key={index}
                            className={`h-10 w-10 flex items-center justify-center border ${cell ? "bg-gray-50 text-gray-800" : "bg-gray-300 text-green-800"
                                } text-xl font-medium`}
                        >
                            {cell || <Clover size={24} />}
                        </div>
                    ))}
                </div>
            ))}
            <div className="items-start justify-center">
                <a
                    href={`https://github.com/daljo25/BingoApp`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600"
                >
                    <Github size={16} />
                    /daljo25
                </a>
            </div>

        </div>
    );
};

const TicketsPage = () => {
    return (
        <div className="p-4 bg-gray-100 min-h-screen">
            <div className="mb-6 flex items-center justify-between print:hidden">
                <h1 className="text-3xl font-bold">Tickets para Imprimir</h1>
                <Button onClick={() => window.print()} variant="secondary">
                    Imprimir Tickets
                </Button>
            </div>
            <div
                className="grid grid-cols-3 gap-4 print:grid-cols-3 print:gap-2"
                style={{ breakInside: "avoid" }}
            >
                {Object.entries(tickets).map(([ticketId, ticket]) => (
                    <Ticket key={ticketId} ticketId={ticketId} ticket={ticket} />
                ))}
            </div>
        </div>
    );
};

export default TicketsPage;
