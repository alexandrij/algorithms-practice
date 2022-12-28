let memoize = (fn) => {
  const cached = new Map();
  return (...args) => {
    const arg = JSON.stringify(args);
    if (cached.has(arg)) {
      return cached.get(arg);
    } else {
      const result = fn(...args);
      cached.set(arg, result);
      return result;
    }
  };
};
const factorial = memoize((n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
});

console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
