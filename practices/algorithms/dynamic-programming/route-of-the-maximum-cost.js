// Динамическое программирование. Уровень Middle.
//
// Вывести маршрут максимальной стоимости.
//
// В левом верхнем углу прямоугольной таблицы размером N×M находится черепашка.
// В каждой клетке таблицы записано некоторое число. Черепашка может перемещаться
// вправо или вниз, при этом маршрут черепашки заканчивается в правом нижнем углу таблицы.
//
// Подсчитаем сумму чисел, записанных в клетках,через которую проползла черепашка
// (включая начальную и конечную клетку). Найдите наибольшее возможное значение этой
// суммы и маршрут, на котором достигается эта сумма.

const generateTableWithRandomCostCell = (n, m) => {
  const ways = new Array(n);
  for (let i = 0; i < n; i++) {
    ways[i] = new Array(m);
    for (let j = 0; j < m; j++) {
      ways[i][j] = Math.round(Math.random() * 10);
    }
  }
  return ways;
};

console.debug(generateTableWithRandomCostCell(4, 4));

const routeOfTheMaximumCost = (ways) => {
  if (ways.length === 0) return 0;
  if (ways[0].length === 0) return 0;

  const n = ways.length + 1;
  const m = ways[0].length + 1;

  const maxWays = new Array(n);
  maxWays[0] = new Array(m).fill(0);

  for (let i = 1; i < n; i++) {
    maxWays[i] = [0, ...ways[i - 1]];
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      maxWays[i][j] = Math.max(maxWays[i - 1][j], maxWays[i][j - 1]) + maxWays[i][j];
    }
  }

  console.debug(maxWays);

  return maxWays[n - 1][m - 1];
};

{
  const ways = [
    [9, 9, 9, 9, 9],
    [3, 0, 0, 0, 0],
    [9, 9, 9, 9, 9],
    [6, 6, 6, 6, 8],
    [9, 9, 9, 9, 9],
  ];
  console.debug(routeOfTheMaximumCost(ways));
}

{
  const ways = [
    [2, 6, 8, 7],
    [5, 2, 8, 9],
    [0, 5, 5, 7],
    [10, 5, 6, 3],
  ];
  const ways1 = [
    [0, 0, 0, 0, 0],
    [0, 2, 6, 8, 7],
    [0, 5, 2, 8, 9],
    [0, 0, 5, 5, 7],
    [0, 10, 5, 6, 3],
  ];
  console.debug(routeOfTheMaximumCost(ways));
}
