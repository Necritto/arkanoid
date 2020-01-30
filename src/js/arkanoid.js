import * as engine from './engine';
import * as graph from './graph';
import { player } from './player';

graph.clearAll();

engine.startGame(function () {
  graph.fillAll('#add8e6');

  player.move();
  player.draw();
});