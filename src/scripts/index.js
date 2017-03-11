import C from './constants';
import Player from './Player';
import Sheep from './Sheep';
import _ from 'lodash';
import {createGame, getGame} from './game';
import {collide} from './collision'


export default () => {
  let players = [new Player('left'), new Player('right')];

  const preload = () => {

  };

  const create = () => {
    players.forEach(player => {
      player.init();
    });

    players[0].addSheep(new Sheep(1,0));
    players[1].addSheep(new Sheep(0,0));

  };

  const update = () => {
    collide(players[0], players[1]);

    players.forEach(player => {
      player.update();

    });

  };


  createGame(preload, create, update);
};
