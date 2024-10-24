import IFighter, { ISimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _monsters: ISimpleFighter[];
  constructor(player: IFighter, monsters: ISimpleFighter[]) {
    super(player);
    this._monsters = monsters;
  }

  fight(): number {
    let index = 0;
    while (this._monsters.length > index && this.player.lifePoints > 0) {
      const monster = this._monsters[index];
      this.player.attack(monster);
      if (monster.lifePoints < 1) {
        index += 1;
      } else {
        monster.attack(this.player);
      }
    }
    return super.fight();
  }
}