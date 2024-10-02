import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  private static _countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._countInstances += 1;
  }

  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Dwarf._countInstances;
  }
}