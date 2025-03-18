const twoSum = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return [];
};

console.debug(twoSum([-2, 1, 2, 2, 5, 6, 7, 9, 10], 10)); // [1,7]
console.debug(twoSum([], 10)); // [1,7]
console.debug(twoSum([-2, 1, 2, 2, 4, 7, 8, 10], 10)); // [1,7]
