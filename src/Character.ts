import ArchetypeClass from './Archetypes';
import IEnergy from './IEnergy';
import IFighter, { ISimpleFighter } from './Fighter';
import RaceClass from './Races';
import getRandomInt from './utils';

export default class Character implements IFighter {
  private _race: RaceClass;
  private _archetype: ArchetypeClass;
  private _maxLifePoints: number;
  private _dexterity: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: IEnergy;

  constructor(
    name: string, 
    Race: new (name: string, dexterity: number) => RaceClass,
    Archetype: new (name: string) => ArchetypeClass,
  ) {
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._dexterity = getRandomInt(1, 10);
    this._race = new Race(name, this.dexterity);
    this._archetype = new Archetype(name);
    this._maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._energy = { type_: this.archetype.energyType, amount: getRandomInt(1, 10) };
  }

  public receiveDamage(attackPoints: number) {
    const damage = attackPoints - this._defense;
    if (damage > 0) {
      this._lifePoints -= damage;
    } else {
      this._lifePoints -= 1;
    }

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: ISimpleFighter) {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    if (this._maxLifePoints > this.race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  public special(enemy: IFighter) {
    const specialDamage = this._strength * 2;
    enemy.receiveDamage(specialDamage);
  }

  public get race() {
    return this._race;
  }

  public get archetype() {
    return this._archetype;
  }

  public get lifePoints() {
    return this._lifePoints;
  }
  
  public get dexterity() {
    return this._dexterity;
  }

  public get strength() {
    return this._strength;
  }

  public get defense() {
    return this._defense;
  }

  public get energy() {
    return { ...this._energy };
  }
}