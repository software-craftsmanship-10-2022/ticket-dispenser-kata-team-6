import TicketDispenser from "./ticket-dispenser";
import sequence from "./turn-number-sequence";
import TurnTicket from "./turn-ticket";

describe("[TicketDispenser]", () => {
  afterEach(() => {
    sequence.resetNumber();
  });

  it("should return a new ticket", () => {
    const dispenser = new TicketDispenser(sequence);
    const ticket: TurnTicket = dispenser.getTicket(new TurnTicket());
    expect(ticket.turnNumber).toBe(0);
  });

  it("should return the next number after each new ticket", () => {
    const dispenser = new TicketDispenser(sequence);
    const firstTicket: TurnTicket = dispenser.getTicket(new TurnTicket());
    expect(firstTicket.turnNumber).toBe(0);

    const secondTicket: TurnTicket = dispenser.getTicket(new TurnTicket());
    expect(secondTicket.turnNumber).toBe(1);
  });

  it("should be able to handle multiple ticket dispensers", () => {
    const firstDispenser = new TicketDispenser(sequence);
    const secondDespenser = new TicketDispenser(sequence);

    const firstTicketDispenser1 = firstDispenser.getTicket(new TurnTicket());
    const firstTicketDispenser2 = secondDespenser.getTicket(new TurnTicket());
    const secondTicketDispenser1 = firstDispenser.getTicket(new TurnTicket());

    expect(firstTicketDispenser1.turnNumber).toBe(0);
    expect(firstTicketDispenser2.turnNumber).toBe(1);
    expect(secondTicketDispenser1.turnNumber).toBe(2);
  });
});
