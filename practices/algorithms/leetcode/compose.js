const compose = (...args) => {
  const fns = Array.from(args);
  return (...args) => {
    const res = fns.pop()(...args);
    return fns.reduceRight((res, fn) => {
      return fn(res);
    }, res);
  };
};

const square = (x) => x * x;
const times2 = (x) => x * 2;
const sum = (a, b) => a + b;

console.log(compose(square, times2)(2) === square(times2(2)));
console.log(compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))));
