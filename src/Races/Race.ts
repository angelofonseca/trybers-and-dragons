export default abstract class Race {
  private _name: string;
  private _dexterity: number;
  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public static createdRacesInstances() {
    throw new Error('Not implemented');
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }
  
  public abstract get maxLifePoints() : number;
}