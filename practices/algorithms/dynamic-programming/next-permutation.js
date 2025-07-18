// 1,2,3,4,5,6 => 1,2,3,4,6,5
// 1,2,4,3,5,6 => 1,2,4,5,3,6

const swap = (nums, i, j) => {
  const temp = nums[j];
  nums[j] = nums[i];
  nums[i] = temp;

  return nums;
};

const nextPermutation = (nums) => {
  let queue = [nums];

  for (let i = 0; i < nums.length; i++) {
    const nextQueue = [];
    while (queue.length > 0) {
      const curNums = queue.shift();
      for (let j = i; j < nums.length; j++) {
        nextQueue.push(swap([...curNums], i, j));
      }
    }
    queue = nextQueue;
  }

  return queue;
};

[1, 2, 3, 4, 5, 6];
[2, 1, 3, 4, 5, 6];
[3, 1, 2, 4, 5, 6];
[4, 1, 2, 3, 5, 6];
[5, 1, 2, 3, 4, 6];
[6, 1, 2, 3, 4, 5];

[1, 2, 3, 4, 5, 6];
[1, 2, 3, 4, 6, 5];
[1, 2, 3, 6, 5, 4];
[1, 2, 6, 4, 5, 3];
[1, 6, 3, 4, 5, 2];
[6, 2, 3, 4, 5, 1];

[1, 2, 3, 4, 5, 6];
[1, 2, 3, 5, 4, 6];
[1, 2, 5, 4, 3, 6];
[1, 5, 3, 4, 2, 6];
[5, 2, 3, 4, 1, 6];

[1, 2, 3, 4, 6, 5];
[1, 2, 3, 6, 4, 5];
[1, 2, 6, 4, 3, 5];
[1, 2, 6, 4, 3, 5];

console.debug(nextPermutation([1, 2, 3]));
console.debug(nextPermutation([1, 2, 3, 4]));
