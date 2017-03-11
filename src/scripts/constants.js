const defaults = {
  ASSETS_ROOT: '/src/assets/images/',

  GAME_X: 1080,
  GAME_Y: 700,
  MENU_WIDTH: 100,
  MENU_BG_COLOR: '#0f0f0f',
  TOP_ICONS_HEIGHT: 100,
  TOP_ICONS_WIDTH: 5040,

  ROWS: 5,
  MARGIN: 12,
  SPRITE_HEIGHT: 100,

  SHEEPS: {
    0: {STRENGTH: 0.4, WIDTH: 0.05, COST: 10, SPEED: 1.0},
    1: {STRENGTH: 0.6, WIDTH: 0.07, COST: 20, SPEED: 0.8},
    2: {STRENGTH: 0.9, WIDTH: 0.08, COST: 30, SPEED: 0.7},
    3: {STRENGTH: 1.0, WIDTH: 0.09, COST: 40, SPEED: 0.5},
    4: {STRENGTH: 1.3, WIDTH: 0.10, COST: 50, SPEED: 0.4},
    5: {STRENGTH: 1.8, WIDTH: 0.12, COST: 60, SPEED: 0.3},
  },

  RESISTANCE_CONST: 0.1
};

export default defaults;
