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
 * n log n <=> 2^x = n
 * ln x = 10^y = 6
 * 
 * quickSort([3, 5, 1, 8, 3]):
 * 1) pivot = 1; left = []; right = [3, 5, 8, 3]; res = [][1][3, 5, 8, 3]
 * 2) pivot = 8; left = [3, 5, 3]; right = [];    res = [][1][3, 5, 3][8][]
 * 3) pivot = 5; left = [3, 3]; right = [];       res = [][1][3, 3][5][][8][]
 * 3) pivot = 3; left = [3]; right = [];          res = [][1][3][3][][5][][8][]
 */
const quickSort = (arr) => {
    var counter = 0;
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
        return sorter(a).concat(arr[pivot], sorter(b));
    };
    const res = sorter(arr);
    console.log('quickSort', counter);
    return res;
};

/**
 * rangeFibonacci(5)  = [0 1 1 2 3]
 * rangeFibonacci(10) = [0 1 1 2 3 5 8 13 21 34]* 
 */
function rangeFibonacci(n) {
    if (n < 1) { return []; }
    if (n === 1) { return [0]; }

    let res = [0, 1];
    let i = 2;
    for (; i < n + 1; i++) {
        res.push(res[i - 1] + res[i - 2]);
    }
    return res;
};