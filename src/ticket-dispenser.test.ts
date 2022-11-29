import TicketDispenser from "./ticket-dispenser";
import sequence from "./turn-number-sequence";

/**
 * THINGS: turn number sequence does not reset after each test.
 * We can do an afterEach, but that involves mocking the class as well.
 */

describe("[TicketDispenser]", () => {
  afterEach(() => {
    sequence.resetTurnNumber();
  });

  it("should return a new ticket", () => {
    const dispenser = new TicketDispenser();
    const ticket = dispenser.getTurnTicket();
    expect(ticket.getTurnNumber()).toBe(0);
  });

  it("should return the next number after each new ticket", () => {
    const dispenser = new TicketDispenser();
    const firstTicket = dispenser.getTurnTicket();
    expect(firstTicket.getTurnNumber()).toBe(0);

    const secondTicket = dispenser.getTurnTicket();
    expect(secondTicket.getTurnNumber()).toBe(1);
  });

  it("should be able to handle multiple ticket dispensers", () => {
    const firstDispenser = new TicketDispenser();
    const secondDespenser = new TicketDispenser();

    const firstTicketDispenser1 = firstDispenser.getTurnTicket();
    const firstTicketDispenser2 = secondDespenser.getTurnTicket();
    const secondTicketDispenser1 = firstDispenser.getTurnTicket();

    expect(firstTicketDispenser1.getTurnNumber()).toBe(0);
    expect(firstTicketDispenser2.getTurnNumber()).toBe(1);
    expect(secondTicketDispenser1.getTurnNumber()).toBe(2);
  });
});
