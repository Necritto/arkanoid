import * as engine from './engine';
import * as graph from './graph';
import { player } from './player';
import { grid } from './grid';

graph.clearAll();

engine.startGame(function () {
  graph.fillAll('#add8e6');

  grid.gen(10, 80, 20, 'red');

  player.move();
  player.draw();
});