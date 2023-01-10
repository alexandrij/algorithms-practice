const binarySearch = (arr, target) => {
  let start = 0;
  let end = arr.length - 1;
  let pivot;
  let result;

  do {
    pivot = Math.floor((start + end) / 2);

    if (arr[pivot] === target) {
      result = arr[pivot];
      break;
    } else if (end - start === 1) {
      result = Math.abs(target - arr[end]) < Math.abs(target - arr[start]) ? arr[end] : arr[start];
      break;
    } else if (arr[pivot] < target) {
      start = pivot;
    } else {
      end = pivot;
    }
  } while (0 < pivot && pivot < arr.length - 1);

  return result;
};

console.log(binarySearch([1, 2, 3, 4, 5, 8, 10, 11, 25], 10));
console.log(binarySearch([1, 2, 3, 4, 5, 8, 11, 25], 9));
console.log(binarySearch([1, 2, 3, 4, 5, 8, 10, 11, 25], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 8, 10, 11, 25], 1));
console.log(binarySearch([], 5));
//
// const arr = [];
// for (let i = 0; i < 1000000; i = i + 2) {
//   arr.push(i);
// }
//
// let start = performance.now();
// console.log(arr.indexOf(999999), performance.now() - start);
//
// start = performance.now();
// let found = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === found) {
//     found = i;
//     break;
//   }
// }
// console.log(arr.indexOf(999999), performance.now() - start);
//
// start = performance.now();
// console.log(binarySearch(arr, 999999), performance.now() - start);
