import C from './constants';
import Player from './Player';
import Sheep from './Sheep';
import _ from 'lodash';
import {createGame, getGame} from './game';
import {collide} from './collision'
import SideMenu from './SideMenu'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'


export default () => {
  let players = [new Player('left'), new Player('right')];
  let sideMenus = [new SideMenu(players[0]), new SideMenu(players[1])];
  let topMenus = [new TopMenu(players[0]), new TopMenu(players[1])];
  let bottomMenus = [new BottomMenu(players[0]), new BottomMenu(players[1])];

  const preload = () => {

  };

  const create = () => {
    players.forEach(player => {
      player.init();
    });

    sideMenus.forEach(menu => {
      menu.init();
    });

    topMenus.forEach(menu => menu.init());
    bottomMenus.forEach(menu => menu.init());


  };

  const update = () => {
    collide(players[0], players[1]);

    players.forEach(player => {
      player.update();

    });

    topMenus.forEach(menu => menu.update());
    bottomMenus.forEach(menu => menu.update());

  };


  createGame(preload, create, update);
};
