import TurnNumberSequence from "./turn-number-sequence";
import { TurnNumberStorage } from "./turn-ticket";

export default class TicketDispenser {
  #db: TurnNumberStorage<number>;

  constructor(db: TurnNumberStorage<number>) {
    this.#db = db;
  }

  public getTurnTicket() {
    const newTurnNumber = TurnNumberSequence.getNextTurnNumber();
    //this.#db.insert(newTurnNumber);
    //const newTurnTicket = new TurnTicket(newTurnNumber);
    //return newTurnTicket;

    return this.#db;
  }
}
