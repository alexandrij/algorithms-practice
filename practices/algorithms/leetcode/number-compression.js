export const numbersCompression = (nums) => {
  if (nums.length === 0) {
    return nums;
  }

  const result = [];
  let start = nums[0];
  let prev = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - prev > 1) {
      const str = prev - start > 0 ? `${start} -> ${prev}` : String(start);
      result.push(str);

      start = nums[i];
    }
    prev = nums[i];
  }

  const str = prev - start > 1 ? `${start} -> ${prev}` : String(start);
  result.push(str);

  return result;
};

console.info(numbersCompression([1, 2, 3, 6, 7, 8, 11, 23, 24, 34]));
console.info(numbersCompression([1, 2, 3, 4, 5]));
console.info(numbersCompression([1, 2, 3, 6, 7, 8]));
console.info(numbersCompression([1, 2, 3]));
console.info(numbersCompression([1]));
console.info(numbersCompression([]));
