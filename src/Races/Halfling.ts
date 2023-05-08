import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _countHalfling = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._countHalfling += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Halfling._countHalfling;
  }
}
export default Halfling;