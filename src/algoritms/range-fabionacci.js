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



console.log(rangeFibonacci(1));
console.log(rangeFibonacci(2));
console.log(rangeFibonacci(3));
console.log(rangeFibonacci(4));
console.log(rangeFibonacci(5));
console.log(rangeFibonacci(40));
