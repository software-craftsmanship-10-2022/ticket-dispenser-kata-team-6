export interface Ticket {
  getNumber(): number;
}

export default class TurnTicket implements Ticket {
  private turnNumber: number;

  constructor(num: number) {
    this.turnNumber = num;
  }

  public getNumber(): number {
    return this.turnNumber;
  }
}
