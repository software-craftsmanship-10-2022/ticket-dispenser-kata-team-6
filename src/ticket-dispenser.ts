import { Sequence } from "./turn-number-sequence";
import TurnTicket, { Ticket } from "./turn-ticket";

export interface Dispenser {
  generateTicket(): Ticket;
}

export default class TicketDispenser implements Dispenser {
  private sequence: Sequence;

  constructor(sequence: Sequence) {
    this.sequence = sequence;
  }

  public generateTicket(): Ticket {
    return new TurnTicket(this.sequence.increase());
  }
}
