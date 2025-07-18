const getMinDistance = (numbers, from, to) => {
  if (from > to) {
    let temp = from;
    from = to;
    to = temp;
  }

  const direct = to - from; // 3
  const reverse = numbers.length - direct; // 6

  return Math.min(direct, reverse);
};

console.debug(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6));
console.debug(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 3));
console.debug(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], 8, 4));
