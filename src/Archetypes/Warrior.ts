import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energy: EnergyType;
  private static _countInstaces = 0;
  constructor(name:string) {
    super(name);
    this._energy = 'stamina';
    Warrior._countInstaces += 1;
  }

  get energyType(): EnergyType {
    return this._energy;
  }

  public static createdArchetypeInstances(): number {
    return Warrior._countInstaces;
  }
}
export default Warrior;