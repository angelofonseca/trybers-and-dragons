import IEnergy from '../IEnergy';
import ISimpleFighter from './ISimpleFighter';

export default interface IFighter extends ISimpleFighter {
  defense: number;
  energy?: IEnergy;
  levelUp: () => void;
  special?: (enemy: IFighter) => void;
}