import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _countDwarf = 0;
  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._countDwarf += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return Dwarf._countDwarf;
  }
}
export default Dwarf;