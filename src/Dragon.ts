import Monster from './Monster';

export default class Dragon extends Monster {
  private _dragon: Monster;

  constructor() {
    super();
    this._dragon = new Monster();
    super.lifePoints = 999;
  }
}