import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  static counter = 0;
  private _type: EnergyType;

  constructor(name: string, special: number, cost: number) {
    super(name, special, cost);
    this._type = 'mana';
    Mage.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Mage;