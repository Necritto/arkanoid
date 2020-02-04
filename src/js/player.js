import * as key from './key';
import * as graph from './graph';

export const hpCount = document.querySelector('.hp-count');
export const scoreCount = document.querySelector('.score-count');
export const levelScore = document.querySelector('.level-count');

export const player = {
  level: 1,
  hp: hpCount.dataset.value,
  speed: 2,
  dx: 0,
  score: 0,
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

    if (player.platformX + player.platformWidth >= graph.width) {
      this.platformX = graph.width - this.platformWidth;
    }

    if (player.platformX <= 0) {
      this.platformX = 0;
    }
  },

  init(platformX, platformWidth, platformColor) {
    this.platformX = platformX;
    this.platformWidth = platformWidth;
    this.platformColor = platformColor;
  },

  updateScore(score) {
    this.score += score;
    scoreCount.textContent = this.score;
  },

  updateHp(hp) {
    this.hp -= hp;
    hpCount.textContent = this.hp;
  },

  updateLevel(level) {
    this.level += level;
    levelScore.textContent = this.level;
  }
};