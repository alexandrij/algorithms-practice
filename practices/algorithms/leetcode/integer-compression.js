export const integerCompression2 = (arr) =>
  arr
    .reduceRight((res, el) => {
      if (res.length > 0 && res[0][0] - el === 1) {
        res[0].unshift(el);
      } else {
        res.unshift([el]);
      }
      return res;
    }, [])
    .map((arr) => (arr.length > 1 ? arr[0] + '-' : '') + arr.pop())
    .join(',');

export const integerCompression = (numbers) => {
  if (numbers.length <= 1) {
    return numbers.join(',');
  }

  const compressed = [];
  let left = 0;
  let right = 1;

  while (right < numbers.length) {
    if (numbers[right] - numbers[right - 1] !== 1) {
      compressed.push(left === right - 1 ? numbers[left] : numbers[left] + '-' + numbers[right - 1]);
      left = right;
    }
    right++;
  }

  compressed.push(left === right - 1 ? numbers[left] : numbers[left] + '-' + numbers[right - 1]);

  return compressed.join(',');
};

// [0, 1, 2, 3, 4, 7, 8, 10]
// [0], left = 0, right = 0
// [0, 4] left = 0, right = 7 => left = 7, right = 7
// [7]
