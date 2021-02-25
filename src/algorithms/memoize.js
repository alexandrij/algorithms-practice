export function memoize(fn, resolver) {
    if ((typeof fn !== 'function') || (resolver && typeof resolver !== 'function')) {
        throw new TypeError(`the parameters of the required functions`);
    }
    const cached = new Map();
    resolver = resolver || JSON.stringify;

    return (...args) => {
        const key = resolver(args);
        if (!cached.has(key)) {
            cached.set(key, fn.apply(this, args));
        }
        return cached.get(key);
    }
}
