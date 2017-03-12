import Phaser from 'phaser';
import C from './constants';
let game;
import _ from 'lodash';

let _createHook = () => {
};
let _updateHook = () => {
};
let _preloadHook = () => {
};

const preload = () => {
  _.range(6)
    .forEach((i) => {
      game.load.image(`sheep_${i}`, `${C.ASSETS_ROOT}images/sheep_${i}.png`);
      game.load.audio(`sheep_${i}`, `${C.ASSETS_ROOT}audio/sheep${i}.mp3`);
    });
  game.load.audio(`bg_music`, `${C.ASSETS_ROOT}audio/background.wav`);


  [
    ['arrow-right', 'arrow-right.png'],
    ['row-bg', 'road.jpg'],
    ['selected-sheep', 'selected-sheep.gif']
  ].forEach(x => game.load.image(x[0], `${C.ASSETS_ROOT}images/${x[1]}`));

  _preloadHook();
};

const create = () => {

  _.range(C.ROWS).forEach(index => {
    const sprite = game.add.sprite(0, 0, 'row-bg');
    sprite.width = C.GAME_X;
    sprite.height = C.SPRITE_HEIGHT;

    sprite.x = C.SIDE_MENU.WIDTH;
    sprite.y = C.TOP_MENU.HEIGHT + C.SPRITE_HEIGHT * index + C.MARGIN * index;

  });

  const music = game.add.audio('bg_music', C.AUDIO.BG_VOLUME, true);
  music.play();


  _createHook();
};

const update = () => {

  _updateHook();
};

export const createGame = (preloadFun = _preloadHook, createFun = _createHook, updateFun = _updateHook) => {
  _preloadHook = preloadFun;
  _createHook = createFun;
  _updateHook = updateFun;

  game = new Phaser.Game(C.GAME_X + C.SIDE_MENU.WIDTH * 2, C.GAME_Y + C.TOP_MENU.HEIGHT + C.BOTTOM_MENU.HEIGHT, Phaser.AUTO, '', {
    preload,
    create,
    update
  });

  return getGame();
};


export const getGame = () => {
  return game;
};
