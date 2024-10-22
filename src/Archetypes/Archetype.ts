import { EnergyType } from '../IEnergy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  constructor(
    private _name: string, 
    protected _energyType: EnergyType,
  ) { }

  public static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }
  
  public get name() : string {
    return this._name;
  }

  public get special() : number {
    return this._special;
  }

  public get cost() : number {
    return this._cost;
  }

  public abstract get energyType(): EnergyType;
}