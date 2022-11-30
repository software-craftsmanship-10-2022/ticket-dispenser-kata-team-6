export interface TurnNumberStorage {
  getTurnNumber(): number;
  insert(number: number): void;
}

export default class TurnTicket implements TurnNumberStorage {
  #turnNumber: number;

  constructor(turnNumber: number = 0) {
    this.#turnNumber = turnNumber;
  }

  public getTurnNumber() {
    return this.#turnNumber;
  }

  insert(number: number): void {
    this.#turnNumber = number;
  }
}
