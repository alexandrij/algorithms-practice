const bubbleSort = (arr) => {
    let counter = 0;
    for (let len = arr.length, i = len; i > 0; i--) {
        for (let j = 0, temp; j < i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            counter++;
        }
    }
    console.log('bubbleSort:', counter);
    return arr;
};

const selectionSort = (arr) => {
    let counter = 0;

    for (let i = 0, len = arr.length; i < len - 1; i++) {
        let min = i;

        for (let j = i; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
            counter++;
        }

        if (i !== min) {
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    console.log('selectionSort:', counter);
    return arr;
};
/**
 * quickSort([3, 5, 4, 8, 3]):
 * start:0, end:4, pivot:4, left:3, right:1, arr:[3,3,4,8,5]
 * start:0, end:1, pivot:3, left:1, right:0, arr:[3,3,4,8,5]
 * start:3, end:4, pivot:8, left:4, right:3, arr:[3,3,4,5,8]
 */
const quickSort = (arr) => {
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


/**
 * 
 * quickSort2([3, 5, 1, 8, 3]):
 * 
 * pivot":1,"arr":[3,5,1,8,3] => [1][3,5,8,3]
 * pivot":8,"arr":[3,5,8,3] => [1][3,5,3][8]
 * pivot":5,"arr":[3,5,3] => [1][3,3][5][8]
 * pivot":3,"arr":[3,3] => [1][3][3][5][8]
 * 
 * counter
 */
const quickSort2 = (arr) => {
    let counter = 0;
    const sorter = (arr) => {
        if (arr.length < 2) { return arr; }

        let len = arr.length;
        let a = [];
        let b = [];
        let pivot = Math.floor(len / 2);

        for (let i = 0; i < len; i++) {
            if (arr[i] < arr[pivot]) {
                a.push(arr[i]);
            } else if (i !== pivot) {
                b.push(arr[i]);
            }
            counter++;
        }
        console.log(JSON.stringify({
            pivot: arr[pivot],
            arr: arr
        }));
        return sorter(a).concat(arr[pivot], sorter(b));
    };
    const res = sorter(arr);
    console.log('quickSort', counter);
    return res;
};