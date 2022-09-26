import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  get player1(): Fighter {
    return this._player1;
  }

  get player2(): Fighter {
    return this._player2;
  }

  fight(): number {
    // ajuda do Leo - mentoria - refatoração
    while (this._player1.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this._player1.attack(this.player2);
      this._player2.attack(this.player1);
    }
    // outra possivel forma de escrever a condição - !monster1.lifePoints === -1 || !monster2.lifePoints === -1
    return super.fight();
  }
}

export default PVP;

// for (let i = 0; i < 500; i++) player1.levelUp();
