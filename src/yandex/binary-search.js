export function binarySearch(arr, target, start, end) {
  start = typeof start === 'number' ? start : 0;
  end = typeof end === 'number' ? end : arr.length - 1;

  const middle = Math.floor((start + end) / 2);

  if (arr[middle] === target) {
    return arr[middle];
  }

  if (end - 1 === start) {
    return Math.abs(arr[start] - target) < Math.abs(arr[end] - target) ? arr[start] : arr[end];
  }
  if (target > arr[middle]) return binarySearch(arr, target, middle, end);
  if (target < arr[middle]) return binarySearch(arr, target, start, middle);
}
