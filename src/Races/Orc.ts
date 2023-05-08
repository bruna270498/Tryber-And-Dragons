import Race from './Race';

class Orc extends Race {
  private _maxLifePoints: number;
  private static _countOrc = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Orc._countOrc += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Orc._countOrc;
  }
}
export default Orc;