let _render = (function startGame() {
  return window.requestAnimationFrame;
})();

let _engine = function () {
  console.log('Not game loop');
};

export let startGame = function (game) {
  if (typeof game === 'function') {
    _engine = game;
  }
  gameLoop();
};

let gameLoop = function () {
  _engine();
  _render(gameLoop);
};