export interface Sequence {
  increase(): number;
}

export default class TurnNumberSequence implements Sequence {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public increase() {
    return this.turnNumber++;
  }
}
