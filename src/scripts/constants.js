const defaults = {
  ASSETS_ROOT: '/src/assets/images/',

  GAME_X: 1080,
  GAME_Y: 900,

  ROWS: 5,
  MARGIN: 12,
  SPRITE_HEIGHT: 100,

  SHEEPS: {
    0: {STRENGTH: 10, WIDTH: 0.05, COST: 10, SPEED: 0.10},
    1: {STRENGTH: 20, WIDTH: 0.07, COST: 20, SPEED: 0.08},
    2: {STRENGTH: 30, WIDTH: 0.08, COST: 30, SPEED: 0.07},
    3: {STRENGTH: 40, WIDTH: 0.09, COST: 40, SPEED: 0.05},
    4: {STRENGTH: 50, WIDTH: 0.10, COST: 50, SPEED: 0.04},
    5: {STRENGTH: 50, WIDTH: 0.12, COST: 60, SPEED: 0.03},
  }
};

export default defaults;
