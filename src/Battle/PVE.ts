import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _fighter: Fighter;
  private _monsters: Fighter[] | SimpleFighter[];
  constructor(fighter: Fighter, monsters: Fighter[] | SimpleFighter[]) {
    super(fighter);
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
    // ajuda do Leo - mentoria - refatoração
    while (this._fighter.lifePoints !== -1 && this._monsters
      .some((eachMonster) => eachMonster.lifePoints !== -1)) {
      this._monsters.forEach((eachMonster) => {
        eachMonster.attack(this._fighter);
        this._fighter.attack(eachMonster);
      });
    }
    return super.fight();
  }
}

export default PVE;
