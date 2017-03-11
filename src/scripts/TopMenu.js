import C from './constants';
import {getGame} from './game'

export default class TopMenu{
  constructor(player){
    this._sprite = null;
    this._player = player;
    this.side = this._player.side;
  }

  init(){
    this.render();

  }

  render(){
    const game = getGame();

    if (!this._sprite) {
      const style = {font: '30px Arial', fill: '#ff0044', align: 'center'};

      const y = 20;
      const x = this.side == 'left' ? 0: C.SIDE_MENU.WIDTH+ C.GAME_X;

      this._sprite = game.add.text(x + 20, y, this._player.mana, style);

    }

  }


  update(){
    if(this._sprite){
      this._sprite.text = parseInt(this._player.mana);
    }
  }
}



