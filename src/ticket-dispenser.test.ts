import TicketDispenser from "./ticket-dispenser";

/**
 * THINGS: turn number sequence does not reset after each test.
 * We can do an afterAll, but that involves mocking the class as well.
 */

describe("[TicketDispenser]", () => {
  it("should return a new ticket", () => {
    const dispenser = new TicketDispenser();
    const ticket = dispenser.getTurnTicket();
    expect(ticket.getTurnNumber()).toBe(0);
  });

  it("should be able to handle multiple ticket dispensers", () => {
    const firstDispenser = new TicketDispenser();
    const secondDespenser = new TicketDispenser();

    const firstTicket = firstDispenser.getTurnTicket();
    const secondTicket = secondDespenser.getTurnTicket();

    expect(firstTicket.getTurnNumber()).toBe(0);
    expect(secondTicket.getTurnNumber()).toBe(1);
  });
});
