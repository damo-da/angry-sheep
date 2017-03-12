import C, {updateWindowInfo} from './constants';
import {createGame, getGame} from './game';
import * as elementActions from './elements';
import MainMenu from './MainMenu';


export default () => {
  const mainMenu = new MainMenu();


  const preload = () => {
    elementActions.preload();
  };

  const create = () => {
    elementActions.create();

    mainMenu.show((type, data) => {

      switch (type){

      }

      mainMenu.hide();

    });
  };

  const update = () => {
    if (mainMenu.isShowing()){

    }else{
      elementActions.update();
    }

  };


  updateWindowInfo();
  createGame(preload, create, update);
};
