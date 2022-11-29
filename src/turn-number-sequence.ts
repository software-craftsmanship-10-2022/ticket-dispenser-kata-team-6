class TurnNumberSequence {
  private turnNumber: number;

  constructor() {
    this.turnNumber = 0;
  }

  public getNextTurnNumber() {
    return this.turnNumber++;
  }

  public resetTurnNumber() {
    this.turnNumber = 0;
  }
}

const sequence = new TurnNumberSequence();

export default sequence;
