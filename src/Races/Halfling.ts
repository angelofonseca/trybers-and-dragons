import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  private static _countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._countInstances += 1;
  }

  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Halfling._countInstances;
  }
}