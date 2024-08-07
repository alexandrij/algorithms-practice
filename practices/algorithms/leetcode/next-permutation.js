const swap = (arr, i, j) => {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr;
};

export const nextPermutation = (nums) => {
  let i = nums.length - 1;

  while (i > 0 && nums[i - 1] > nums[i]) {
    if (nums[i - 1] > nums[i]) {
      nums = swap(nums, i, i - 1);
      break;
    }
    i--;
  }
  i--;

  let j = nums.length - 1;
  while (i < j) {
    swap(nums, i, j);
    j--;
    i++;
  }

  return nums;
};

// 1,2,3,4,5,6 => 1,2,3,4,6,5
// 1,2,4,3,5,6 => 1,2,4,5,3,6

// 1,2,3,4 => 1,2,4,3
// 1,2,4,3 => 1,3,2,4
// 1,3,2,4 => 1,3,4,2

// 4,3,2,1 => 4,3,1,2 => 4,1,3,2 => 1,4,3,2, 1,2,4,3, 1,2,3,4

// 4,1,2,3
// 1,4,2,3

// 4,2,1,3
// 4,2,3,1
// 4,3,2,1


// 1,2,3,4
// 1,2,4,3
// 1,3,2,4
// 1,3,4,2
// 1,4,2,3
// 1,4,3,2

// 1,2,3,4,5
// 1,2,3,5,4
// 1,2,4,3,5
// 1,2,4,5,3
// 1,2,5,3,4
// 1,2,5,4,3
// 1,3,2,4,5

// 1,2,3,4,5,6
// 1,2,3,4,6,5
// 1,2,3,5,4,6
// 1,2,3,5,6,4
// 1,2,3,6,4,5
// 1,2,3,6,5,4

// 1,2,4,3,5,6
// 1,2,4,3,6,5
// 1,2,4,5,3,6
// 1,2,4,5,6,3
// 1,2,4,6,3,5
// 1,2,4,6,5,3

// 1,3,2,4,5,6

// {
//   const nums = [1, 3, 2];
//   const res = nextPermutation(structuredClone(nums));
//   console.log(nums, res, res.toString() === '2,1,3');
// }
// {
//   const nums = [1, 2, 3];
//   const res = nextPermutation(structuredClone(nums));
//   console.log(nums, res, res.toString() === '1,3,2');
// }
// {
//   const nums = [1, 2, 3, 4];
//   const res = nextPermutation(structuredClone(nums));
//   console.log(nums, res, res.toString() === '1,2,4,3');
// }
// {
//   const nums = [1, 2, 3, 4, 5];
//   const res = nextPermutation(structuredClone(nums));
//   console.log(nums, res, res.toString() === '1,2,3,5,4');
// }
// {
//   const nums = [3, 2, 1];
//   const res = nextPermutation(structuredClone(nums));
//   console.log(nums, res, res.toString() === '1,2,3');
// }
