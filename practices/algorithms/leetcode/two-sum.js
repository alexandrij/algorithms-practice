const twoSum = (nums, target) => {
  const cache = new Map();
  let cur;
  let diff;
  for (let i = 0; i < nums.length; i++) {
    cur = nums[i];
    diff = target - cur;
    if (cache.has(diff)) {
      return [cache.get(diff), i];
    }
    cache.set(cur, i);
  }
  return [];
};
console.log(twoSum([3, 7, 11, 15, 3, 6, 3], 9));
console.log(twoSum([3, 6], 9));
