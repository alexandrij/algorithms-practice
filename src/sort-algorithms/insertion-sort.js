const insertionSort = function (arr) {
  for (let i = 1, len = arr.length; i < len; i++) {
    let cur = arr[i];
    let j = i;

    while (j > 0 && arr[j - 1] > cur) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = cur;
  }
  return arr;
};
export { insertionSort };
