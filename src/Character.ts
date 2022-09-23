import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _name: string;
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    // instanciando primeiro para depois enviar como default
    const race = new Elf(this._name, this._dexterity);
    this._race = race;
    // instanciando primeiro para depois enviar como default
    const mage = new Mage(this._name);
    this._archetype = mage;

    this._maxLifePoints = (this._race.maxLifePoints / 2);

    this._lifePoints = this._maxLifePoints;

    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);

    this._energy = { type_: mage.energyType, amount: getRandomInt(1, 10) };
  }

  get name(): string {
    return this._name;
  }
  
  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;

    if (damage > 0) return damage - this._lifePoints;

    if (this._lifePoints <= 0) return -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const damage = enemy;
    damage.strength = this._strength; 
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
    // if (this._maxLifePoints > this._race.maxLifePoints) this._maxLifePoints; ?

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    const damage = enemy;
    damage.strength = this._strength * 2; 
  }
}

export default Character;

// para gerar numeros aleatorios dentro de um valor inteiro estipulado incluindo os valores min e max
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random