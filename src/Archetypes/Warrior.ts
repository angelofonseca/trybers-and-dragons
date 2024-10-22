import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _countInstances = 0;

  constructor(name: string) {
    super(name, 'stamina');
    Warrior._countInstances += 1;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    return this._countInstances;
  }
}