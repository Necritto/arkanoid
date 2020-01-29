const canvas = document.querySelector('.canvas');
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext('2d');

export function fillAll(color) {
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);
}

export function clearAll() {
  ctx.clearRect(0, 0, width, height);
}

export function drawRect(x, y, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, height);
}