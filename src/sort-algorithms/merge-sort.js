const mergeSort = function (arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    }
    if (arr[i] > pivot) {
      right.push(arr[i]);
    }
  }

  return [].concat(mergeSort(left), pivot, mergeSort(right));
};

export { mergeSort };
