import * as graph from './graph';

export let grid = {
  nodes: [],

  add(enemyX, enemyY, enemyWidth, enemyHeight, enemyColor) {
    let tmp = new _Enemy(enemyX, enemyY, enemyWidth, enemyHeight, enemyColor);
    tmp.draw(enemyX, enemyY, enemyWidth, enemyHeight, enemyColor);
    this.nodes.push(tmp);
  },

  gen(count, width, height, color) {
    let genMargin = 7;
    let genX = genMargin;
    let genCountX = Math.floor(graph.width / (width + genMargin));
    let genAsideMargin = Math.round((graph.width - (width + genMargin) * genCountX) / 2);
    let genY = genAsideMargin;

    for (let i = 0; i < count; i++) {
      for (let k = 0; k < genCountX; k++) {
        if (k === 0) {
          genX += Math.round(genAsideMargin - genMargin / 2);
        }
        this.add(genX, genY, width, height, color);
        genX += width + genMargin;
      }
      genY += height + genMargin;
      genX = genMargin;
    }
  },

  draw() {
    for (let enemy of this.nodes) {
      enemy.draw();
    }
  }
};

class _Enemy {
  constructor(enemyX, enemyY, enemyWidth, enemyHeight, enemyColor) {
    this.enemyX = enemyX;
    this.enemyY = enemyY;
    this.enemyWidth = enemyWidth;
    this.enemyHeight = enemyHeight;
    this.enemyColor = enemyColor;
  }

  draw() {
    graph.drawRect(this.enemyX, this.enemyY, this.enemyWidth, this.enemyHeight, this.enemyColor);
  }
}
