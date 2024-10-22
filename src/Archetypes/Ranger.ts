import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private static _countInstances = 0;

  constructor(name: string) {
    super(name, 'stamina');
    Ranger._countInstances += 1;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    return this._countInstances;
  }
}