import * as graph from './graph';
import { grid } from './grid';
import { player } from './player';

export let ball = {
  speed: 1,
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
    this.x += this.speed * this.dx;
    this.y += this.speed * this.dy;
  },

  collision() {
    for (let i in grid.nodes) {
      let item = grid.nodes[i];
      if (graph.isCollision(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2,
        item.enemyX, item.enemyY, item.enemyWidth, item.enemyHeight)) {
        this.dy *= -1;
        grid.delete(i);
        this.speed += 0.1;
      }
    }

    if (graph.isCollision(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2,
      player.platformX, player.platformY, player.platformWidth, player.platformHeight)) {
      this.dy *= -1;
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