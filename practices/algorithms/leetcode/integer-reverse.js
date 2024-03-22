const integerReverse = (x) => {
  const maxValue = Math.pow(2, 31) - 1;
  const minValue = Math.pow(-2, 31);

  if (minValue >= x || x >= maxValue) {
    return 0;
  }

  let res = 0;
  while (x !== 0) {
    let rem = x % 10;
    x = x < 0 ? Math.ceil(x / 10) : Math.floor(x / 10);
    res = res * 10 + rem;
  }
  return minValue >= res || res >= maxValue ? 0 : res;
};

console.log(integerReverse(123));
console.log(integerReverse(-123));
console.log(integerReverse(120));
console.log(integerReverse(0));
console.log(integerReverse(1534236469));
