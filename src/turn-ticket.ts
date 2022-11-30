export interface Ticket {
  turnNumber: number;
  deploy(num: number): Ticket;
}

export default class TurnTicket implements Ticket {
  public turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public deploy(num: number): Ticket {
    this.turnNumber = num;

    return this;
  }
}
