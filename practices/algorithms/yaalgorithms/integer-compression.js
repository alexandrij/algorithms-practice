const integersCompression = (integers) => {
  return Array.from(new Set(integers))
    .sort((a, b) => a - b)
    .reduceRight((res, n) => {
      return (res.length > 0 ? (res[0][0] - n === 1 ? res[0].unshift(n) : res.unshift([n])) : res.unshift([n])) && res;
    }, [])
    .map((arr) => (arr.length > 1 ? [arr[0], arr.pop()] : arr))
    .map((arr) => arr.join('-'))
    .join(',');
};
export { integersCompression };

const compression = (numbers) => {
  if (numbers.length < 2) return numbers.toString();

  numbers = numbers.sort((a, b) => a - b);
  let res = numbers[0].toString();
  let i = 1;
  let count = '';

  while (i < numbers.length) {
    if (numbers[i] - numbers[i - 1] > 1) {
      res += count + ',' + numbers[i];
      count = '';
    } else {
      count = '-' + numbers[i];
    }
    i++;
  }

  return res + count;
};

console.log(integersCompression([])); //
console.log(integersCompression([1])); // 1
console.log(integersCompression([1, 2])); // 1-2
console.log(integersCompression([1, 2, 3])); // 1-3
console.log(integersCompression([3, 2, 2, 1, 5, 6, 7, -1, 10])); // -1,1-3,5-7,10
console.log(compression([])); //
console.log(compression([1])); // 1
console.log(compression([1, 2])); // 1-2
console.log(compression([1, 2, 3])); // 1-3
console.log(compression([3, 2, 2, 1, 5, 6, 7, -1, 10])); // -1,1-3,5-7,10
