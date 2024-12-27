import tickets from '@/lib/tickets';

type CheckType = 'line' | 'bingo';

export function validateTicket(ticketNumber: string, checkType: CheckType, drawnNumbers: number[]): boolean {
  const ticket = tickets[ticketNumber];
  if (!ticket) {
    return false; // Ticket no encontrado
  }

  if (checkType === 'line') {
    // Comprobar si alguna línea está completa
    return [ticket.row1, ticket.row2, ticket.row3].some(row => 
      row.every(num => num === null || drawnNumbers.includes(num))
    );
  } else if (checkType === 'bingo') {
    // Comprobar si todas las líneas están completas
    return [ticket.row1, ticket.row2, ticket.row3].every(row => 
      row.every(num => num === null || drawnNumbers.includes(num))
    );
  }

  return false; // Tipo de comprobación no válido
}