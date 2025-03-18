// Даны две последовательности, требуется найти и вывести их наибольшую общую подпоследовательность.

// Неэффективный
// const nopWithResponseRecovery = (x, y) => {
//   let max = [];
//
//   for (let i = 0; i < x.length; i++) {
//     let left = i;
//
//     for (let right = 0; right < y.length; right++) {
//       if (x[left] === y[right]) {
//         left++;
//       } else {
//         left = i;
//       }
//       max = left - i > max.length ? x.slice(i, left) : max;
//     }
//   }
//
//   return max;
// };

const nopWithResponseRecovery = (x, y) => {
  const lX = x.length + 1;
  const lY = y.length + 1;

  const matrix = new Array(lX);
  for (let i = 0; i < lX; i++) {
    matrix[i] = new Array(lY).fill('');
  }

  let max = '';

  for (let i = 1; i < lX; i++) {
    for (let j = 1; j < lY; j++) {
      if (x[i - 1] === y[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + y[j - 1];
        max = matrix[i][j].length > max.length ? matrix[i][j] : max;
      }
    }
  }

  console.debug(matrix);

  return max;
};

console.debug(nopWithResponseRecovery('1234', '23123')); // 123
console.debug(nopWithResponseRecovery('12445678', '23443678')); // [6,7,8]
console.debug(nopWithResponseRecovery('123', '321')); // [6,7,8]

// [
//   ['', '', '', '', '', ''],
//   ['', '', '1', '', '', ''],
//   ['2', '', '', '12', '', ''],
//   ['', '', '3', '', '123', ''],
//   ['', '', '', '', ''],
// ];
