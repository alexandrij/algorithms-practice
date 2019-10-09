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

const reverseString = function (str) {
    const arr = str.split('');
    let temp;
    let i = 0;
    let j = arr.length - 1;

    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr.join('');
};

const game = function (arr) {
    const n = arr.length;

    if (n < 3 || n > 999 || (n % 3) !== 0) { throw new Error('Количество карт должно быть кратно 3, больше или равно 3 и меньше или равно 999'); }

    let i = -1;
    let temp;
    let curGamer = {
        name: 'Petya',
        summ: 0,
        last: 0
    };
    let nextGamer = {
        name: 'Vasya',
        summ: 0,
        last: 0
    };

    while (++i < n) {
        curGamer.summ += arr[i];
        curGamer.last = arr[i];

        if (curGamer.last >= nextGamer.last) {
            temp = curGamer;
            curGamer = nextGamer;
            nextGamer = temp;
        }
    }
    return (curGamer.summ > nextGamer.summ) ? curGamer.name : nextGamer.name;
};

const complexNumber = function (k) {
    let sum = 0;
    let sumK = String(k).split('').reduce((sum, item) => { return sum += +item; }, 0);
    return (3 * k) / Math.pow(sumK, 2);
}

