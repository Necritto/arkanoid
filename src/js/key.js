const keys = {
  'A': 65,
  'D': 68,
  'LEFT': 37,
  'RIGHT': 39
};

let keyDown = {};

export function setKey(keyCode) {
  keyDown[keyCode] = true;
}

export function isKeyDown(keyName) {
  return keyDown[keys[keyName]] === true;
}

export function clearKey(keyCode) {
  keyDown[keyCode] = false;
}

document.addEventListener('keydown', (e) => {
  setKey(e.keyCode);
});

document.addEventListener('keyup', (e) => {
  clearKey(e.keyCode);
});
