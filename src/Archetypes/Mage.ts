import Archetype from './Archetype';

export default class Mage extends Archetype {
  private static _countInstances = 0;

  constructor(name: string) {
    super(name, 'mana');
    Mage._countInstances += 1;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    return this._countInstances;
  }
}