//contains root game elements

import {collide} from './collision';
import Player from './Player';
import Sheep from './Sheep';
import SideMenu from './SideMenu'
import TopMenu from './TopMenu'
import BottomMenu from './BottomMenu'

const _players = [];
const _sideMenus = [];
const _bottomMenus = [];
const _topMenus = [];

export const preload = () => {

};

const addPlayer = (side) => {
  const player = new Player(side);
  _players.push(player);

  _sideMenus.push(new SideMenu(player));
  _topMenus.push(new TopMenu(player));
  _bottomMenus.push(new BottomMenu(player));
};

export const create = () => {
  addPlayer('left');
  addPlayer('right');

  _players.forEach(player => player.init());
  _sideMenus.forEach(menu => menu.init());
  _topMenus.forEach(menu => menu.init());
  _bottomMenus.forEach(menu => menu.init());
};

export const update = () => {
  collide(_players[0], _players[1]);

  _players.forEach(player => {
    player.update();

  });

  _topMenus.forEach(menu => menu.update());
  _bottomMenus.forEach(menu => menu.update());
};
