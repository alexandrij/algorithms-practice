const memoize = (fn) => {
    const cached = {};
    return (...args) => {
        const arg1 = args[0];
        if (arg1 in cached) {
            return cached[arg1];
        }
        else {
            const result = fn(...args);
            cached[arg1] = result;
            return result;
        }
    }
};

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

function add(n) {
    if (n <= 1) {
        return 1;
    }
    return n + add(n - 1);
}
