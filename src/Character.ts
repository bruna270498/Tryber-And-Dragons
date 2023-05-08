import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;
  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._defense = getRandomInt(1, 10);
    this._strength = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10),
    };
  }

  public get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get lifePoints() : number {
    return this._lifePoints;
  }

  get strength() : number {
    return this._strength;
  }

  get defense() : number {
    return this._defense;
  }

  get energy() : Energy {
    return this._energy;
  }

  receiveDamage(attackPoints: number):number {
    const damage = attackPoints - this._defense;
    this._lifePoints = damage < 0 ? this._lifePoints -= 1 : this._lifePoints;
    this._lifePoints = damage > 0 
      ? this._lifePoints - damage : this._lifePoints;
    this._lifePoints = this._lifePoints <= 0 
      ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints = getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) { 
      this._maxLifePoints = this._race.maxLifePoints; 
    } 
    this._lifePoints = this._lifePoints === this._maxLifePoints 
      ? this._lifePoints : this._maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._lifePoints += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}

export default Character;