import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];
  constructor(fighter: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(fighter);
    super.fight();
    this._fighter = fighter;
    this._monsters = monsters;
  }

  /*   get fighter(): Fighter {
    return this._fighter;
  }

  get monsters(): Fighter[] | SimpleFighter[] {
    return this._monsters;
  } */

  fight(): number {
    this._monsters.forEach((eachMonster) => {
      this._fighter.attack(eachMonster);
      eachMonster.attack(this._fighter);
      if (this._fighter.lifePoints === -1 || eachMonster.lifePoints === -1) {
        return super.fight();
      }
    });
    return super.fight();
  }
}

export default PVE;
