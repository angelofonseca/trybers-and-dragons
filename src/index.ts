import { Mage, Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Elf, Halfling, Orc } from './Races';

const player1 = new Character('player1', Elf, Mage);
const player2 = new Character('player2', Halfling, Warrior);
const player3 = new Character('player3', Orc, Necromancer);

player1.levelUp();
player1.levelUp();
player1.levelUp();
const monster1 = new Monster();
const monster2 = new Dragon();
// console.log(player1.strength);
const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => { 
    console.log(player1.lifePoints);
    console.log(monster1);
    console.log(monster2);
    battle.fight(); 
  });
}

runBattles([pve, pvp]);

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};