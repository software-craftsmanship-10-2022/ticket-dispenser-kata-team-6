import TicketDispenser from "./ticket-dispenser";
import TurnNumberSequence from "./turn-number-sequence";
import { Ticket } from "./turn-ticket";

describe("[TicketDispenser]", () => {
  it("should return a new ticket", () => {
    const dispenser = new TicketDispenser(new TurnNumberSequence());
    const ticket: Ticket = dispenser.generateTicket();
    expect(ticket.getNumber()).toBe(0);
  });

  it("should return the next number after each new ticket", () => {
    const dispenser = new TicketDispenser(new TurnNumberSequence());
    const firstTicket: Ticket = dispenser.generateTicket();
    expect(firstTicket.getNumber()).toBe(0);

    const secondTicket: Ticket = dispenser.generateTicket();
    expect(secondTicket.getNumber()).toBe(1);
  });

  it("should be able to handle multiple ticket dispensers", () => {
    const sequence = new TurnNumberSequence();
    const firstDispenser = new TicketDispenser(sequence);
    const secondDespenser = new TicketDispenser(sequence);

    const firstTicketDispenser1 = firstDispenser.generateTicket();
    const firstTicketDispenser2 = secondDespenser.generateTicket();
    const secondTicketDispenser1 = firstDispenser.generateTicket();

    expect(firstTicketDispenser1.getNumber()).toBe(0);
    expect(firstTicketDispenser2.getNumber()).toBe(1);
    expect(secondTicketDispenser1.getNumber()).toBe(2);
  });
});
