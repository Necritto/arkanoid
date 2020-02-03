export let map = {
  color: 'red',
  width: 50,
  height: 20,
  offset: 5,

  tiles: [],
};

randomMap();

function randomMap() {
  const mapArr = [[
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 0, 1, 1],
  ],
  [
    [0, 1, 1, 1],
    [0, 0, 1, 1],
    [0, 0, 1, 1]
  ],

  ];

  return map.tiles.push(...[...mapArr[Math.round(Math.random() * 1)]]);
}