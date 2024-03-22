const zigZagConversion = (s, numRows) => {
  let length = 0;
  return s
    .split('')
    .reduce((res, s) => {
      let col = Math.floor(length / numRows);
      let row = length % numRows;
      let founded = col % (numRows - 1);

      if (!res[row]) res[row] = [];

      if (founded > 0) {
        while (row < numRows) {
          res[row].push(row === numRows - 1 - founded ? s : '');
          row++;
          length += 1;
        }
      } else {
        res[row].push(s);
        length += 1;
      }
      return res;
    }, [])
    .reduce((res, arr) => (res += arr.join('')), '');
};

console.log('\n');
console.log(zigZagConversion('PAYPALISHIRING', 3)); //PAHNAPLSIIGYIR
// P   A   H   N
// A P L S I I G
// Y   I   R
console.log('\n');
console.log(zigZagConversion('PAYPALISHIRING', 4)); //"PINALSIGYAHRPI"
// P     I    N
// A   L S  I G
// Y A   H R
// P     I
console.log('\n');
console.log(zigZagConversion('A', 1));
// A
console.log('\n');
console.log(zigZagConversion('AB', 1));
// AB
console.log('\n');
console.log(zigZagConversion('ABC', 1));
// ABC
console.log('\n');
console.log(zigZagConversion('ABCD', 2));
// ACBD
