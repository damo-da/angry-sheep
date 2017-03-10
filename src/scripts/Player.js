import Sheep from './Sheep';

export default class Player {
  constructor(side, game) {
    this.side = side;
    this.name += this.side;
    this.sheep = [];
    this.mana = 10;
    this.manaGrowthRate = 1.0; // per second
    this.powers = [];
    this._game = game;

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

  update() {
    this.sheep.forEach(s => s.move());

  }

}
