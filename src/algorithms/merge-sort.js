const mergeSort = (arr) => {
    if (arr.length < 2) { return arr; }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];
    const res = [];

    for (let i = 0; i < arr.length; i ++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if (arr[i] > pivot) {
            right.push(arr[i]);
        } else {
            res.push(arr[i]);
        }
    }
    return [].concat(
        mergeSort(left),
        res,
        mergeSort(right)
    );
}

console.log(mergeSort([1,23,5,6,4,4,4,2,8,99,1,23,46,6,6]));
console.log(mergeSort([1,2,2,2,3]));
