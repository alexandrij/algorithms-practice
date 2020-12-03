const factorial = (n) => {
    if (!Number.isInteger(n)) {
        throw new Error(`Value "${n}" is not integer`);
    }
    let res = 1;
    while (n > 0) {
        res *= n--;
    }
    return res;
}
module.exports = factorial;
