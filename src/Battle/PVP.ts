import IFighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: IFighter;
  private _player2: IFighter;

  constructor(player1: IFighter, player2: IFighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  fight(): number {
    do {
      this._player1.attack(this._player2);
      if (this._player2.lifePoints < 1) break;
      this._player2.attack(this._player1);
    } while (this._player1.lifePoints > 0 && this._player2.lifePoints > 0);
    
    return super.fight();
  }
}