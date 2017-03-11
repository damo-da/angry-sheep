const defaults = {
  ASSETS_ROOT: '/src/assets/images/',

  GAME_X: 1000,
  GAME_Y: 700,

  DEFAULT_MANA: 50,

  TOP_MENU: {
    MANA_WIDTH: 300,
    HEIGHT: 100,
    WIDTH: 500
  },
  BOTTOM_MENU: {
    HEIGHT: 100,
    WIDTH: 400,
    ITEM_SIZE: 60
  },

  ROWS: 6,
  MARGIN: 20,
  SPRITE_HEIGHT: 100,

  SHEEPS: {
    0: {STRENGTH: 0.4, WIDTH: 0.05, MANA: 10, SPEED: 1.0},
    1: {STRENGTH: 0.6, WIDTH: 0.07, MANA: 20, SPEED: 0.8},
    2: {STRENGTH: 0.9, WIDTH: 0.08, MANA: 30, SPEED: 0.7},
    3: {STRENGTH: 1.0, WIDTH: 0.09, MANA: 40, SPEED: 0.5},
    4: {STRENGTH: 1.3, WIDTH: 0.10, MANA: 50, SPEED: 0.4},
    5: {STRENGTH: 1.8, WIDTH: 0.12, MANA: 60, SPEED: 0.3},
  },

  SIDE_MENU: {
    WIDTH: 100,
    ITEM_WIDTH: 40

  },

  POINTS: {
    WIDTH: 100,
    FONT_SIZE: 20
  },

  SHEEP_MOVE_CONST: 0.005
};

export default defaults;
