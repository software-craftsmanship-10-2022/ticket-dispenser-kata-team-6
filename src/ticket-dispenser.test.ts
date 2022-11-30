import TicketDispenser from "./ticket-dispenser";
import sequence from "./turn-number-sequence";
import TurnTicket from "./turn-ticket";
/**
 * THINGS: turn number sequence does not reset after each test.
 * We can do an afterEach, but that involves mocking the class as well.
 */
describe("[TicketDispenser]", () => {
  afterEach(() => {
    sequence.resetTurnNumber();
  });

  it("should return a new ticket", () => {
    const storage = new TurnTicket(); // This can be mocked now
    const dispenser = new TicketDispenser(storage);
    const ticket = dispenser.getTurnTicket();
    expect(ticket.getTurnNumber()).toBe(0);
  });

  it("should return the next number after each new ticket", () => {
    const storage = new TurnTicket(); // this can be mocked now;
    const dispenser = new TicketDispenser(storage);
    const firstTicket = dispenser.getTurnTicket();
    expect(firstTicket.getTurnNumber()).toBe(0);

    const secondTicket = dispenser.getTurnTicket();
    expect(secondTicket.getTurnNumber()).toBe(1);
  });

  it("should be able to handle multiple ticket dispensers", () => {
    const storage = new TurnTicket();
    const storage2 = new TurnTicket();
    const firstDispenser = new TicketDispenser(storage);
    const secondDespenser = new TicketDispenser(storage2);

    const firstTicketDispenser1 = firstDispenser.getTurnTicket();
    const firstTicketDispenser2 = secondDespenser.getTurnTicket();
    const secondTicketDispenser1 = firstDispenser.getTurnTicket();

    expect(firstTicketDispenser1.getTurnNumber()).toBe(0);
    expect(firstTicketDispenser2.getTurnNumber()).toBe(1);
    expect(secondTicketDispenser1.getTurnNumber()).toBe(2);
  });
});

it("should not have same ticket number issued to two different customers", () => {
  const storage = new TurnTicket(0);
  const firstDispenser = new TicketDispenser(storage);
  const secondDespenser = new TicketDispenser(storage);

  const firstTicketDispenser1 = firstDispenser.getTurnTicket();
  const secondTicketDispenser1 = secondDespenser.getTurnTicket();

  expect(firstTicketDispenser1.getTurnNumber()).not.toBe(
    secondTicketDispenser1.getTurnNumber()
  );
});
