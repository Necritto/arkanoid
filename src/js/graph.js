const canvas = document.querySelector('.canvas');
export const width = canvas.width;
export const height = canvas.height;
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

export function drawCircle(x, y, r, c) {
  ctx.fillStyle = c;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2, false);
  ctx.fill();
}