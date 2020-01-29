import * as key from './key';
import * as engine from './engine';
import * as graph from './graph';

engine.startGame();

let x = 15;

graph.clearAll();
graph.fillAll('#add8e6');

if (key.isKeyDown('D')) {
  x++;
}

if (key.isKeyDown('A')) {
  x--;
}

graph.drawRect(x, 460, 100, 10, 'blue');