// export function binarySearch(arr, target, start, end) {
//   start = typeof start === 'number' ? start : 0;
//   end = typeof end === 'number' ? end : arr.length - 1;
//
//   const middle = Math.floor((start + end) / 2);
//
//   if (arr[middle] === target) {
//     return arr[middle];
//   }
//
//   if (end - 1 === start) {
//     return Math.abs(arr[start] - target) < Math.abs(arr[end] - target) ? arr[start] : arr[end];
//   }
//   if (target > arr[middle]) return binarySearch(arr, target, middle, end);
//   if (target < arr[middle]) return binarySearch(arr, target, start, middle);
// }

export function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const middle = Math.floor((start + end) / 2);

    if (target === arr[middle]) {
      return arr[middle];
    }

    if (end - 1 === start) {
      return Math.abs(arr[start] - target) < Math.abs(arr[end] - target) ? arr[start] : arr[end];
    }

    if (target > arr[middle]) {
      start = middle;
    } else if (target < arr[middle]) {
      end = middle;
    }
  }
}



console.log('binary search', binarySearch([1, 1, 1, 2, 3, 4, 5, 6, 7, 8], 10));
