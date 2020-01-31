import * as engine from './engine';
import * as graph from './graph';
import { player } from './player';
import { grid } from './grid';
import { ball } from './ball';

graph.clearAll();
grid.gen(10, 80, 20, 'red');
ball.init(player.platformX + Math.ceil(player.platformWidth / 2), player.platformY - ball.radius, 6, 'yellow');

engine.startGame(function () {
  graph.fillAll('#add8e6');

  grid.draw();

  ball.move();
  ball.draw();

  player.move();
  player.draw();
});