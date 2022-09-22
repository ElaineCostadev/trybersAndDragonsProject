import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  static counter = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Warrior;