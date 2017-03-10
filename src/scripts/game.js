import Phaser from 'phaser';
import C from './constants';
let game;
import _ from 'lodash';

let _createHook = () => {};
let _updateHook = () => {};
let _preloadHook = () => {};

const preload = () => {
  _.range(6)
    .forEach((i) => {
      game.load.image(`sheep_${i}`, `${C.ASSETS_ROOT}sheep_${i}.png`);
    });

  _preloadHook();
};

const create = () => {


  _createHook();
};

const update = () => {

  _updateHook();
};

export const createGame = (preloadFun=_preloadHook, createFun=_createHook, updateFun=_updateHook) => {
  _preloadHook = preloadFun;
  _createHook = createFun;
  _updateHook = updateFun;

  game = new Phaser.Game(C.GAME_X, C.GAME_Y, Phaser.AUTO, '', { preload, create, update });

  return getGame();
};


export const getGame = () => {
  return game;
};
