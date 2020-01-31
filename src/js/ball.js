import * as graph from './graph';

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
};