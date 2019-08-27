/**
 * rangeFibonacci(5)  = [0 1 1 2 3]
 * rangeFibonacci(10) = [0 1 1 2 3 5 8 13 21 34]* 
 */
const rangeFibonacci = function (n) {
    if (n < 1) { return []; }
    if (n === 1) { return [0]; }

    let res = [0, 1];
    let i = 2;
    for (; i < n + 1; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;
};


const binarySearch = function (arr, target, start, end) {
    start = typeof start === 'number' ? start : 0;
    end = typeof end === 'number' ? end : arr.length - 1;
    
    const middle = Math.floor((start + end) / 2);
    
    if (arr[middle] === target) { return arr[middle]; }
    
    if (end - 1 === start) {
      return Math.abs(arr[start] - target) < Math.abs(arr[end] - target) ? arr[start] : arr[end];
    }
    if (target > arr[middle]) return binarySearch(arr, target, middle, end);
    if (target < arr[middle]) return binarySearch(arr, target, start, middle);
  };