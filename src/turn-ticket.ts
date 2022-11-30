export interface TurnNumberStorage<T> {
  getTurnNumber(): number;
  insert(number: number): void;
}

export default class TurnTicket<T> implements TurnNumberStorage<T> {
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
