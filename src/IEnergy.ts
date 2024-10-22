export type EnergyType = 'mana' | 'stamina';

export default interface IEnergy {
  type_: EnergyType;
  amount: number;
}