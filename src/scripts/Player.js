import Sheep from './Sheep';
import C from './constants';

export default class Player {
  constructor(side, game) {
    this.side = side;
    this.name += this.side;
    this.sheep = [];
    this.mana = C.DEFAULT_MANA;
    this.manaGrowthRate = 0.05; // per frame
    this.score = 0;
    this.powers = [];
    this._game = game;


    this.selectedSheepIndex = 0;

  }

  moveAllSheep() {
    this.sheep.forEach((s) => {
      s.move();
    });

  }

  init() {
    this.sheep.forEach(s => s.init());

    this.render();

  }

  render() {

  }

  addSheep(s) {
    this.sheep.push(s);

    if (this.side == 'right') {
      s.col = 1 - s.col;
      s.speed = -s.speed;
      s.col += s.width;
    } else {
      s.col -= s.width;
    }

    s.init();

    return s;
  }

  validateAndAddSheep(s){
    const manas = C.SHEEPS[s.index].MANA;
    if(this.mana > manas){
      this.mana -= manas;
      this.addSheep(s);
    }
  }

  update() {

    this.sheep = this.sheep.filter((s) => {
      if (s.col <= 0 && this.side == 'right'){
        this.score += 1;

        s.kill();
        return false;
      }else if(s.col >= 1 && this.side == 'left'){
        this.score += 1;

        s.kill();
        return false;
      }

      return true;

    });
    this.sheep.forEach(s => s.move());

    this.mana += this.manaGrowthRate;

  }

}
