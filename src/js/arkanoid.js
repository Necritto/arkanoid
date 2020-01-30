import * as key from './key';
import * as engine from './engine';
import * as graph from './graph';

let platformWidth = 100;
const platformHeight = 10;
let platformX = (graph.width / 2) - (platformWidth / 2);
const platformY = graph.height - 20;
let platformColor = 'blue';

graph.clearAll();

engine.startGame(function () {
  graph.fillAll('#add8e6');
  graph.drawRect(platformX, platformY, platformWidth, platformHeight, platformColor);

  if (key.isKeyDown('LEFT')) {
    platformX--;
  }

  if (key.isKeyDown('RIGHT')) {
    platformX++;
  }

  if (key.isKeyDown('A')) {
    platformX--;
  }

  if (key.isKeyDown('D')) {
    platformX++;
  }
});