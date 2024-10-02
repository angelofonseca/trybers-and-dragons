import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  private static _countInstances = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._countInstances += 1;
  }

  public get maxLifePoints() : number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances() {
    return Elf._countInstances;
  }
}