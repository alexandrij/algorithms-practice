export function perfDecorator(fn) {
  return (...args) => {
    const start = performance.now();
    const result = fn(...args);

    console.info(Number((performance.now() - start).toFixed(2)));

    return result;
  };
}