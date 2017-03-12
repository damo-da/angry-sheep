import C, {updateWindowInfo} from './constants';
import _ from 'lodash';
import {createGame, getGame} from './game';
import {collide} from './collision'
import * as elementActions from './elements';

import phaser from 'phaser';


export default () => {


  const preload = () => {
    elementActions.preload();
  };

  const create = () => {
    elementActions.create();

  };

  const update = () => {
    elementActions.update();


  };


  updateWindowInfo();
  createGame(preload, create, update);
};
