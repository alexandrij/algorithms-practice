// Найти максимальную длину отрезка из рядом стоящих 1

function maxLenNumbers(numbers) {
  let maxLen = 0;
  let len = 0;
  numbers.forEach((n) => {
    if (n > 0) {
      len += 1;
      maxLen = Math.max(len, maxLen);
    } else if (maxLen > 0) {
      len = 0;
    }
  });
  return maxLen;
}

console.log(maxLenNumbers([0, 0, 1, 1, 1, 0, 0, 1, 1])); // 3
console.log(maxLenNumbers([0, 0, 1, 1, 0, 0, 1, 1])); // 2
console.log(maxLenNumbers([1, 1, 1, 1])); // 4
console.log(maxLenNumbers([0, 0, 0, 0])); // 0
console.log(maxLenNumbers([])); // 0
