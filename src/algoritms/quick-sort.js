const quickSort = (arr, start, end) => {
    if (arr.length < 2) return arr;

    start = typeof start === 'number' ? start : 0;
    end = typeof end === 'number' ? end : arr.length - 1;

    if ((end - start) < 1) return arr;

    const pivot = arr[Math.floor((start + end) / 2)];
    let left = start;
    let right = end;
    let temp;

    while (left <= right) {
        while (arr[left] < pivot) {
            left++;
        }
        while (arr[right] > pivot) {
            right--;
        }
        if (left <= right) {
            temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    if (left < end) {
        quickSort(arr, left, end);
    }
    if (right > start) {
        quickSort(arr, start, right);
    }
    return arr;
}

console.log(quickSort([1,23,5,6,4,4,4,2,8,99,1,23,46,6,6]));
console.log(quickSort([1,2,2,2,3]));
