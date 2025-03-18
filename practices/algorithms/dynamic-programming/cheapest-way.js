// Динамическое программирование. Уровень Middle.
//
// Самый дешевый путь. Уровень Middle
//
// В каждой клетке прямоугольной таблицы N×M записано некоторое число.
// Изначально игрок находится в левой верхней клетке. За один ход ему
// разрешается перемещаться в соседнюю клетку либо вправо, либо вниз
// (влево и вверх перемещаться запрещено). При проходе через клетку с
// игрока берут столько килограммов еды, какое число записано в этой клетке
// (еду берут также за первую и последнюю клетки его пути).
//
// Требуется найти минимальный вес еды в килограммах, отдав которую игрок может попасть в правый нижний угол.

// const generateCheapestWay = (n, m) => {
//   const ways = new Array(n);
//   for (let i = 0; i < n; i++) {
//     ways[i] = new Array(m);
//     for (let j = 0; j < m; j++) {
//       ways[i][j] = Math.round(Math.random() * 10);
//     }
//   }
//   return ways;
// };
//
// console.debug(generateCheapestWay(4, 4));

const cheapestWay = (ways) => {
  const m = ways.length + 1;
  const n = ways[0].length + 1;
  const minWays = new Array(m);
  minWays[0] = new Array(n).fill(Infinity);
  minWays[0][0] = 0;
  minWays[0][1] = 0;

  for (let i = 1; i < m; i++) {
    minWays[i] = new Array(n);
    minWays[i] = [Infinity, ...ways[i - 1]];
  }
  minWays[1][0] = 0;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      const min = Math.min(minWays[i - 1][j], minWays[i][j - 1]);
      minWays[i][j] = min + minWays[i][j];
    }
  }

  return minWays[m - 1][n - 1];
};

{
  const ways = [
    [8, 9, 6],
    [8, 7, 4],
    [5, 4, 2],
  ];

  // const ways1 = [
  //   [0, 0, 0, 0],
  //   [0, 8, 9, 6],
  //   [0, 8, 7, 4],
  //   [0, 5, 4, 2],
  // ];
  //
  // const ways2 = [
  //   [0, 0, Infinity, Infinity],
  //   [0, 8, 17, 23],
  //   [Infinity, 8, 7, 4],
  //   [Infinity, 5, 4, 2],
  // ];
  //
  // const ways3 = [
  //   [0, 0, Infinity, Infinity],
  //   [0, 8, 17, 23],
  //   [Infinity, 16, 23, 27],
  //   [Infinity, 5, 4, 2],
  // ];
  //
  // const ways4 = [
  //   [0, 0, Infinity, Infinity],
  //   [0, 8, 17, 23],
  //   [Infinity, 16, 23, 27],
  //   [Infinity, 21, 25, 27],
  // ];

  console.debug(cheapestWay(ways)); // 27
}

{
  const ways = [
    [8, 0, 4, 9],
    [9, 0, 2, 1],
    [2, 6, 3, 3],
    [2, 8, 2, 1],
  ];
  console.debug(cheapestWay(ways)); // 15
}
