export interface Sequence {
  increase(): number;
  resetNumber(): void;
}

class TurnNumberSequence implements Sequence {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public increase() {
    return this.turnNumber++;
  }

  public resetNumber() {
    this.turnNumber = 0;
  }
}

const sequence = new TurnNumberSequence();

export default sequence;
