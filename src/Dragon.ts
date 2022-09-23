import Monster from './Monster';

class Dragon extends Monster {
  constructor() {
    super();
    this._lifePoints = 999;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }
}

export default Dragon;
