import { Sequence } from "./turn-number-sequence";
import { Ticket } from "./turn-ticket";

export interface Dispenser {
  getTicket(ticket: Ticket): Ticket;
}

export default class TicketDispenser implements Dispenser {
  private sequence: Sequence;

  constructor(sequence: Sequence) {
    this.sequence = sequence;
  }

  public getTicket(ticket: Ticket): Ticket {
    return ticket.deploy(this.getNextSequence());
  }

  private getNextSequence(): number {
    return this.sequence.increase();
  }
}
