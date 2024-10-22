export default interface ISimpleFighter {
  lifePoints: number;
  strength: number;
  attack: (enemy: ISimpleFighter) => void;
  receiveDamage: (attackPoints: number) => number;
}