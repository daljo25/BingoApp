type TicketRow = (number | null)[];
type Ticket = {
  row1: TicketRow;
  row2: TicketRow;
  row3: TicketRow;
};

const tickets: Record<string, Ticket> = {
  1: {
    row1: [2, null, 25, 36, null, 57, null, null, 81],
    row2: [4, 17, 20, null, null, null, 64, null, 86],
    row3: [null, null, null, 32, 46, 53, 68, 75, null],
  },
  2: {
    row1: [null, null, 26, 34, 47, null, 66, null, 83],
    row2: [null, 12, 22, 39, null, 51, null, null, 87],
    row3: [3, 19, null, null, 44, 55, null, 70, null],
  },
  3: {
    row1: [null, 14, 28, null, 43, null, 61, null, 82],
    row2: [8, null, null, 31, null, 50, 63, 77, null],
    row3: [9, 10, null, 37, null, null, null, 72, 84],
  },
  4: {
    row1: [null, 13, 21, null, 42, null, 60, null, 90],
    row2: [null, 18, 29, null, 43, 54, null, 71, null],
    row3: [1, null, null, 30, null, 56, 65, 79, null],
  },
  5: {
    row1: [null, 15, 24, null, 40, 58, null, 73, null],
    row2: [null, null, 27, null, 45, null, 67, 76, 89],
    row3: [6, null, null, 38, null, 52, 69, null, 80],
  },
  6: {
    row1: [null, null, 23, null, 41, null, 62, 78, 85],
    row2: [5, 16, null, 33, null, 59, null, null, 88],
    row3: [7, 11, null, 35, 49, null, null, 74, null],
  },
  7: {
    row1: [1, 14, null, null, null, 50, 64, 77, null],
    row2: [null, null, 21, 35, null, 54, 67, null, 80],
    row3: [null, 17, 28, 39, 40, null, null, 73, null],
  },
  8: {
    row1: [null, 11, 20, 34, null, 55, null, null, 81],
    row2: [2, 16, 24, null, 41, null, 62, null, null],
    row3: [9, null, null, 30, 45, null, 68, 74, null],
  },
  9: {
    row1: [3, null, 27, null, 44, 56, null, 70, null],
    row2: [6, 18, null, 37, null, 59, null, null, 83],
    row3: [null, null, null, 36, 48, null, 61, 76, 87],
  },
  10: {
    row1: [null, 13, null, null, 42, 58, 65, null, 89],
    row2: [null, 15, null, 33, 49, null, null, 72, 86],
    row3: [5, null, 26, null, null, 53, 69, null, 82],
  },
  11: {
    row1: [null, 12, null, 48, null, 57, null, 78, 85],
    row2: [7, null, 29, null, 46, null, null, 75, 88],
    row3: [null, 19, 23, null, null, 57, 60, null, 90],
  },
  12: {
    row1: [4, null, 22, null, 43, null, null, 71, 84],
    row2: [null, 10, null, 31, 47, null, 63, 79, null],
    row3: [8, null, 25, 32, null, 51, 66, null, null],
  },
  13: {
    row1: [8, null, 21, null, 42, null, 63, 75, null],
    row2: [null, 14, 26, 33, null, 52, null, null, 80],
    row3: [null, null, null, 38, 49, 56, 68, null, 84],
  },
  14: {
    row1: [null, 18, null, 36, null, 55, 60, null, 87],
    row2: [9, 15, null, null, 40, 59, null, 72, null],
    row3: [3, null, 29, null, 49, null, 64, 79, null],
  },
  15: {
    row1: [null, 12, null, 39, null, 52, 66, null, 83],
    row2: [7, null, null, 31, null, 57, null, 74, 90],
    row3: [5, null, 28, null, 45, null, 69, 77, null],
  },
  16: {
    row1: [1, null, 23, null, 41, 53, null, 73, null],
    row2: [4, 10, 27, 35, null, null, 61, null, null],
    row3: [null, 16, 29, null, 46, null, 67, null, 82],
  },
  17: {
    row1: [2, 13, null, null, 48, null, 62, null, 81],
    row2: [null, 17, null, 30, 43, null, null, 70, 86],
    row3: [null, null, 22, 34, null, 54, null, 76, 88],
  },
  18: {
    row1: [6, 19, null, 32, null, 51, null, null, 85],
    row2: [null, 11, 23, 37, null, null, 65, 78, null],
    row3: [null, null, 25, null, 44, 58, null, 71, 89],
  },
  19: {
    row1: [null, 14, null, 36, 48, 50, 61, null, null],
    row2: [null, 17, null, 38, null, 54, null, 72, 83],
    row3: [5, null, 22, null, 46, null, 68, 79, null],
  },
  20: {
    row1: [null, 16, null, 33, null, 55, null, 71, 80],
    row2: [8, null, 21, null, 40, null, null, 77, 80],
    row3: [null, 19, null, 37, null, null, 65, 76, 88],
  },
  21: {
    row1: [7, null, 23, null, 41, null, 62, 70, null],
    row2: [null, 10, null, 35, null, 53, 66, null, 87],
    row3: [null, 13, 28, null, 44, 59, null, null, 89],
  },
  22: {
    row1: [6, null, 27, null, 43, 56, 69, null, null],
    row2: [null, 15, null, 30, null, 58, null, 75, 82],
    row3: [2, null, 29, null, 47, null, 64, null, 90],
  },
  23: {
    row1: [9, null, 20, null, 45, null, 67, 78, null],
    row2: [null, 11, null, 34, null, 51, null, 73, 85],
    row3: [9, null, 25, 39, null, 57, null, 74, null],
  },
  24: {
    row1: [1, 12, 24, 35, 49, null, null, null, null],
    row2: [null, 18, null, 31, null, 52, 60, null, 86],
    row3: [3, null, 26, null, 42, null, 63, null, 81],
  },
};

export default tickets;
