import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static counter = 0;
  private _type: EnergyType;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Ranger.counter += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger.counter;
  }

  get energyType(): EnergyType {
    return this._type;
  }
}

export default Ranger;