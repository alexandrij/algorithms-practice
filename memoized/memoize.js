const memoize = (fn) => {
    const cached = new Map();
    return (...args) => {
        const arg1 = args[0];
        if (cached.has(arg1)) {
            return cached.get(arg1);
        }
        else {
            const result = fn(...args);
            cached.set(arg1, result);
            return result;
        }
    }
};
