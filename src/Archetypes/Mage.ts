import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energy: EnergyType;
  private static _countInstances = 0;
  constructor(name:string) {
    super(name);
    this._energy = 'mana';
    Mage._countInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    return Mage._countInstances;
  }
}

export default Mage;