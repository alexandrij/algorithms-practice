const factorial = (n) => {
    let res = 1;
    while (n > 0) {
        res *= n--;
    }
    return res;
}

console.log(factorial(-1));
console.log(factorial(0));
console.log(factorial(3));
console.log(factorial(5));
