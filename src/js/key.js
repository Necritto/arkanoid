const keys = {
  'W': 87,
  'S': 83,
  'A': 65,
  'D': 68
};

const ctx = document.querySelector('.canvas').getContext('2d');

let keyDown = {};

function setKey(keyCode) {
  keyDown[keyCode] = true;
}

function isKeyDown(keyName) {
  return keyDown[keys[keyName]] === true;
}

function clearKey(keyCode) {
  keyDown[keyCode] = false;
}

function engine() {

  ctx.clearRect(0, 0, 100, 100);

  if (isKeyDown('W')) {
    ctx.fillText('Press W', 20, 20);
  }

  if (isKeyDown('S')) {
    ctx.fillText('Press S', 20, 30);
  }
}

function gameEngine() {
  if (typeof engine === 'function') {
    engine();
  } else {
    ctx.fillText('Add function Engine', 50, 50);
  }

  requestAnimationFrame(gameEngine);
}

document.addEventListener('DOMContentLoaded', () => {

  document.addEventListener('keydown', (e) => {
    setKey(e.keyCode);
  });

  document.addEventListener('keyup', (e) => {
    clearKey(e.keyCode);
  });

  gameEngine();

});