const sapper = (n, m, mins) => {
  const matrix = new Array(n);
  for (let i = 0; i < n + 1; i++) {
    matrix[i] = new Array(m + 1).fill(0);
  }

  mins.forEach(([i, j]) => {
    matrix[i - 1][j - 1] += 1;
    matrix[i - 1][j] += 1;
    matrix[i - 1][j + 1] += 1;
    matrix[i][j - 1] += 1;
    matrix[i][j] += 1;
    matrix[i][j + 1] += 1;
    matrix[i + 1][j - 1] += 1;
    matrix[i + 1][j] += 1;
    matrix[i + 1][j + 1] += 1;
  });

  mins.forEach(([i, j]) => {
    matrix[i][j] = '*';
  });

  return matrix.slice(1, n + 1).map((row) => row.slice(1, m + 1));
};

console.debug(
  sapper(3, 3, [
    [1, 1],
    [2, 2],
  ]),
);

[
  [1, 1, 1, 0, 0],
  [1, '*', 2, 1, 0],
  [1, 2, '*', 1, 0],
  [0, 1, 1, 1, 0],
  [0, 0, 0, 0, 0],
];
