/**
 * Гоша и Тимофей нашли необычный тренажёр для скоростной печати и хотят освоить его.
 * Тренажёр представляет собой поле из клавиш 4× 4, в котором на каждом раунде
 * появляется конфигурация цифр и точек. На клавише написана либо точка, либо
 * цифра от 1 до 9. В момент времени t игрок должен одновременно нажать на все клавиши,
 * на которых написана цифра t. Гоша и Тимофей могут нажать в один момент времени на k
 * клавиш каждый. Если в момент времени t были нажаты все нужные клавиши, то игроки
 * получают 1 балл.
 *
 * Найдите число баллов, которое смогут заработать Гоша и Тимофей, если будут нажимать на клавиши вдвоём.
 */

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
});

let m;
let n;
const matrix = [];
let i = 0;
rl.on('line', (line) => {
  if (i === 0) {
    m = Number(line);
  } else if (i === 1) {
    n = Number(line);
  } else {
    matrix.push(line.split('').map((el) => Number(el)));
  }
  i++;

  if (i === m + 2) {
    rl.close();
  }
}).on('close', () => {
  const res = monitoring(m, n, matrix);
  console.log(res);
  process.stdout.write(res.map((arr) => arr.join('')).join('\n')) + '\n';
});

function monitoring(m, n, matrix) {
  for (let i = 0; i < m; i++) {
    for (let j = i; j < n; j++) {
      if (!(j in matrix)) {
        matrix[j] = new Array(m);
      }
      const temp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = temp;
    }
    matrix[i].length = m;
  }
  matrix.length = n;
  return matrix;
}
