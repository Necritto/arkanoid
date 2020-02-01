import * as graph from './graph';
import { grid } from './grid';
import { player } from './player';

export let ball = {
  speedX: 1,
  speedY: 1,
  dx: 1,
  dy: -1,

  color: 'yellow',
  x: 0,
  y: 0,
  radius: 6,

  draw() {
    graph.drawCircle(this.x, this.y, this.radius, this.color);
  },

  init(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  },

  move() {
    this.x += this.speedX * this.dx;
    this.y += this.speedY * this.dy;
  },

  collision() {
    for (let i in grid.nodes) {
      let item = grid.nodes[i];
      if (graph.isCollision(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2,
        item.enemyX, item.enemyY, item.enemyWidth, item.enemyHeight)) {
        this.dy *= -1;
        grid.delete(i);
        this.speedY += 0.1;
      }
    }

    if (graph.isCollision(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2,
      player.platformX, player.platformY, player.platformWidth, player.platformHeight)) {
      this.dy *= -1;

      if (this.dx === player.dx) {
        this.speedX *= 1.5;
      } else {
        this.speedX /= player.dx != 0 ? 1.5 : 1;
      }

      this.dx = player.dx || this.dx;
    }

    if (this.x + this.radius >= graph.width) {
      this.dx *= -1;
    }

    if (this.x - this.radius <= 0) {
      this.dx *= -1;
    }

    if (this.y - this.radius <= 0) {
      this.dy = 1;
    }
  }
};