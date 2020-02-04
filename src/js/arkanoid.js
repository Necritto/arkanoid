import * as engine from './engine';
import * as graph from './graph';
import { player, hpCount, scoreCount, levelScore } from './player';
import { grid } from './grid';
import { ball } from './ball';
import { map } from './map';
import { isAnyKeyDown } from './key';

map.createMap(0);
graph.clearAll();
grid.create(map);
init();
hpCount.textContent = hpCount.dataset.value;
levelScore.textContent = levelScore.dataset.value;

function game() {
  graph.fillAll('#add8e6');
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
    engine.startGame(preGame);
  }

  if (player.hp < 1) {
    alert('You lose!');

    player.hp = hpCount.dataset.value;
    hpCount.textContent = player.hp;
    player.score = 0;
    scoreCount.textContent = 0;
    player.level = 1;
    init();
    engine.startGame(preGame);
  }
}

function preGame() {
  graph.fillAll('#add8e6');
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
    player.init(graph.width / 2 - player.platformWidth / player.platformWidth * 100, 200, 'blue'),
    ball.init(player.platformX + Math.ceil(player.platformWidth / 2), player.platformY - ball.radius, 6, 'yellow')
  );
}

engine.startGame(preGame);