const removeDuplicate = (nums) => {
  let len = 0;
  for (let i = 0, l = nums.length; i < l; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[len] = nums[i];
      len++;
    }
  }
  nums.length = len;

  return nums;
};

console.log(removeDuplicate([2, 3, 4, 4, 5]));
console.log(removeDuplicate([]));
console.log(removeDuplicate([1, 1, 0]));
