import C from './constants';
import Player from './Player';
import Sheep from './Sheep';
import _ from 'lodash';
import {createGame, getGame} from './game';


export default () => {
  let players = [new Player('left'), new Player('right')];

  const preload = () => {

  };

  const create = () => {
    players.forEach(player => {
      player.init();
    });

    players[0].addSheep(new Sheep(0,0));
    players[0].addSheep(new Sheep(1,1));
    players[0].addSheep(new Sheep(2,2));
    players[0].addSheep(new Sheep(3,3));
    players[0].addSheep(new Sheep(4,4));
    players[1].addSheep(new Sheep(0,2));

  };

  const update = () => {
    players.forEach(player => {
      player.update();

    });

  };


  createGame(preload, create, update);

};
