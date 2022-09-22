import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  static counter = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    Necromancer.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Necromancer;