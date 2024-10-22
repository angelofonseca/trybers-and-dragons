import Monster from './Monster';

export default class Dragon extends Monster {
  constructor(private _dragon = new Monster()) {
    super();
    super.lifePoints = 999;
  }
}