import * as engine from './engine.js';
import * as graph from './graph.js';
import { player, hpCount, scoreCount, levelScore } from './player.js';
import { grid } from './grid.js';
import { ball } from './ball.js';
import { map } from './map.js';
import { isAnyKeyDown } from './key.js';

map.createMap(0);
graph.clearAll();
grid.create(map);
init();
hpCount.textContent = hpCount.dataset.value;
levelScore.textContent = levelScore.dataset.value;

function game() {
  graph.fillAll('#000000');
  grid.draw();
  ball.collision();
  ball.move();
  ball.draw();
  player.move();
  player.draw();

  if (grid.nodes.length === 0) {
    alert('You win!');

    player.updateLevel(1);
    map.clearMap();
    map.createMap(player.level - 1);
    if (player.level === 4) {
      alert('The end!');
      location.reload();
    }
    init();
    engine.setGame(preGame);
  }

  if (player.hp < 1) {
    alert('You lose!');

    player.hp = hpCount.dataset.value;
    hpCount.textContent = player.hp;
    player.score = 0;
    scoreCount.textContent = 0;
    player.level = 1;
    levelScore.textContent = player.level;
    map.clearMap();
    map.createMap(player.level - 1);
    init();
    engine.setGame(preGame);
  }
}

function preGame() {
  graph.fillAll('#000000');
  grid.clear();
  ball.clear();
  grid.create(map);
  grid.draw();
  ball.draw();
  player.draw();

  if (isAnyKeyDown()) {
    engine.setGame(game);
  }
}

function init() {
  return (
    player.init(graph.width / 2 - player.platformWidth / player.platformWidth * 100, 200, '#ad2bd4'),
    ball.init(player.platformX + Math.ceil(player.platformWidth / 2), player.platformY - ball.radius, 6, '#52d42b')
  );
}

engine.startGame(preGame);