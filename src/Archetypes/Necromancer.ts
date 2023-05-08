import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energy: EnergyType;
  private static _countInstances = 0;
  constructor(name: string) {
    super(name);
    this._energy = 'mana';
    Necromancer._countInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  static createdArchetypeInstances() {
    return Necromancer._countInstances;
  }
}

export default Necromancer;