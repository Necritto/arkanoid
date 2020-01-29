const keys = {
  'W': 87,
  'S': 83,
  'A': 65,
  'D': 68
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
