import C from './constants';
import {getGame} from './game';

export default class Sheep{
  constructor(index, row){
    this.index = index;
    this.row = row;
    this.speed = C.SHEEPS[index].SPEED;
    this.width = C.SHEEPS[index].WIDTH;
    this.strength = C.SHEEPS[index].STRENGTH;
    this.powers = [];
    this.col = 0.0; //should be between 0 to 1

    this.sprite = null;
  }

  move(){
    console.log('moving sheep');
    this.col += this.speed * 0.01;

    this.render();

  }


  render(){
    const game = getGame();

    if(!this.sprite){
      this.sprite = game.add.sprite(this.col * C.GAME_X,0,`sheep_${this.index}`);
      this.sprite.width = this.width * C.GAME_X;
      this.sprite.height = C.SPRITE_HEIGHT;
      this.sprite.position.y = this.row * C.SPRITE_HEIGHT + this.row * C.MARGIN;
    }

    this.sprite.position.x = this.col * C.GAME_X;
  }

  init(){
    console.log('Initing sheep');

    this.render();
  }
}
