import { ISimpleFighter } from './Fighter';

export default class Monster implements ISimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  public receiveDamage(attackPoints: number) {
    this._lifePoints -= attackPoints;

    if (this._lifePoints <= 0) {
      this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  public attack(enemy: ISimpleFighter) {
    enemy.receiveDamage(this._strength);
  }

  public get lifePoints() {
    return this._lifePoints;
  }

  protected set lifePoints(life: number) {
    this._lifePoints = life;
  }

  public get strength() {
    return this._strength;
  }
}