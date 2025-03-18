const maxLengthNotZero = (nums) => {
  let max = 0;
  let left = 0;
  let right = 0;

  for (const num of nums) {
    if (num === 0) {
      left = right = right + 1;
    } else if (num === 1) {
      right++;
    }

    max = Math.max(max, right - left);
  }

  return max;
};

console.debug(maxLengthNotZero([0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0])); // 5
console.debug(maxLengthNotZero([0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1])); // 5
console.debug(maxLengthNotZero([0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1])); // 7
console.debug(maxLengthNotZero([0, 1, 0])); // 1
console.debug(maxLengthNotZero([1])); // 1
console.debug(maxLengthNotZero([1, 0])); // 1
console.debug(maxLengthNotZero([0, 0])); // 0
console.debug(maxLengthNotZero([1, 1])); // 2
console.debug(maxLengthNotZero([])); // 0
