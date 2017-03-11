import C from './constants';
import {getGame} from './game';

export default class Sheep {
  constructor(index, row) {
    this.index = index;
    this.row = row;
    this.speed = C.SHEEPS[index].SPEED;
    this.width = C.SHEEPS[index].WIDTH;
    this.strength = C.SHEEPS[index].STRENGTH;
    this.powers = [];
    this.col = 0.0; //should be between 0 to 1

    this.sprite = null;
  }

  move() {
    this.col += (this.speed )* 0.01;

    this.render();

  }


  render() {
    const game = getGame();
    const posX = C.GAME_X * (this.col - this.width / 2.00);

    if (!this.sprite) {
      const posY = this.row * C.SPRITE_HEIGHT + this.row * C.MARGIN;
      this.sprite = game.add.sprite(posX, posY, `sheep_${this.index}`);
      this.sprite.width = this.width * C.GAME_X;
      this.sprite.height = C.SPRITE_HEIGHT;
    } else {
      this.sprite.position.x = posX;
    }

  }

  init() {
    console.log('Initing sheep');

    this.render();
  }
}
