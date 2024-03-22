export function searchMaxMinIndex(nums, target) {
  let leftStart = 0;
  let leftEnd = Math.round(nums.length / 2);
  let rightStart = leftEnd;
  let rightEnd = nums.length - 1;

  {
    let start = left;
    let end = middle;
    while (start < end) {
      if (nums[start] === target) {
        res[0] = start;
        break;
      }

      const middle = Math.floor((start + end) / 2);
      if (nums[middle] < target) {
        start = middle;
      } else if (nums[middle] > target) {
        end = middle;
      }
    }
  }

  {
    let start = middle;
    let end = right;
    while (start < end) {
      if (nums[end] === target) {
        res[1] = end;
        break;
      }

      const middle = Math.ceil((start + end) / 2);
      if (nums[middle] < target) {
        start = middle;
      } else if (nums[middle] > target) {
        end = middle;
      }
    }
  }

  return res;
}

console.log('search', searchMaxMinIndex([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9], 5));
// console.log('search', searchMaxMinIndex([1, 2, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9], 9));
