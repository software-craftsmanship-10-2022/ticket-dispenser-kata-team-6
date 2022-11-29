import TicketDispenser from "./ticket-dispenser";

describe("[TicketDispenser]", () => {
  it("should return a new ticket", () => {
    const dispenser = new TicketDispenser();
    const ticket = dispenser.getTurnTicket();
    expect(ticket.getTurnNumber()).toBe(-1);
  });
});
