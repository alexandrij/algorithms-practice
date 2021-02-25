/**
 * quickSort([3, 5, 4, 8, 3]):
 * start:0, end:4, pivot:4, left:3, right:1, arr:[3,3,4,8,5]
 * start:0, end:1, pivot:3, left:1, right:0, arr:[3,3,4,8,5]
 * start:3, end:4, pivot:8, left:4, right:3, arr:[3,3,4,5,8]
 */
const quickSort = function (arr) {
    let counter = 0;

    const sorter = (arr, start, end) => {
        if (arr.length < 2) { return arr; }

        start = typeof start === 'number' ? start : 0;
        end = typeof end === 'number' ? end : arr.length - 1;

        if ((end - start) < 1) { return arr; }

        const pivot = arr[Math.floor((start + end) / 2)];
        let left = start;
        let right = end;
        let temp;

        while (left <= right) {
            while (arr[left] < pivot) {
                left++;
                counter++;
            }
            while (arr[right] > pivot) {
                right--;
                counter++;
            }
            if (arr[left] >= pivot && arr[right] <= pivot) {
                counter++;
            }
            if (left <= right) {
                temp = arr[left];
                arr[left] = arr[right];
                arr[right] = temp;
                left++;
                right--;
            }
        }
        if (right > start) {
            sorter(arr, start, right);
        }
        if (left < end) {
            sorter(arr, left, end);
        }
        return arr;
    }

    const res = sorter(arr);
    console.log('quickSort', counter);
    return res;
};
export { quickSort };
