import * as engine from './engine';
import * as graph from './graph';
import { player } from './player';
import { grid } from './grid';
import { ball } from './ball';
import { map } from './map';
import { isAnyKeyDown } from './key';

graph.clearAll();
grid.create(map);
player.init(graph.width / 2, 200, 'blue');
ball.init(player.platformX + Math.ceil(player.platformWidth / 2), player.platformY - ball.radius, 6, 'yellow');

function game() {
  graph.fillAll('#add8e6');

  grid.draw();

  ball.collision();
  ball.move();
  ball.draw();

  player.move();
  player.draw();
}

function preGame() {
  graph.fillAll('#add8e6');
  grid.draw();
  ball.draw();
  player.draw();

  if(isAnyKeyDown()) {
    engine.setGame(game);
  }
}

engine.startGame(preGame);