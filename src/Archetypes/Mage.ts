import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _countInstances = 0;

  constructor(name: string, special = 0, cost = 0) {
    super(name, special, cost);
    Mage._countInstances += 1;
  }

  public get energyType() {
    return this._energyType;
  }

  public static createdArchetypeInstances() {
    return this._countInstances;
  }
}
