import * as key from './key';
import * as graph from './graph';

export const player = {
  level: 1,
  hp: 3,
  speed: 2,
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
    }

    if (key.isKeyDown('RIGHT')) {
      this.platformX += this.speed;
    }

    if (key.isKeyDown('A')) {
      this.platformX -= this.speed;
    }

    if (key.isKeyDown('D')) {
      this.platformX += this.speed;
    }
  }
};