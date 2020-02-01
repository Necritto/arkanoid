import * as key from './key';
import * as graph from './graph';

export const player = {
  level: 1,
  hp: 3,
  speed: 2,
  dx: 0,
  platformWidth: 100,
  platformHeight: 10,
  platformX: 260,
  platformY: 460,
  platformColor: 'blue',

  draw() {
    graph.drawRect(this.platformX, this.platformY, this.platformWidth, this.platformHeight, this.platformColor);
  },

  move() {
    if (key.isKeyDown('LEFT')) {
      this.platformX -= this.speed;
      this.dx = -1;
    } else if (key.isKeyDown('RIGHT')) {
      this.platformX += this.speed;
      this.dx = 1;
    } else if (key.isKeyDown('A')) {
      this.platformX -= this.speed;
      this.dx = -1;
    } else if (key.isKeyDown('D')) {
      this.platformX += this.speed;
      this.dx = +1;
    } else {
      this.dx = 0;
    }
  },

  init(platformX, platformWidth, platformColor) {
    this.platformX = platformX;
    this.platformWidth = platformWidth;
    this.platformColor = platformColor;
  }
};