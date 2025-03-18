function polynomialHash(str, a, m) {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = (result * a + str.charCodeAt(i)) % m;
  }
  return result;
}

console.log(polynomialHash('a', 123, 100003));
console.log(polynomialHash('b', 123, 100003));
console.log(polynomialHash('ab', 123, 100003));
