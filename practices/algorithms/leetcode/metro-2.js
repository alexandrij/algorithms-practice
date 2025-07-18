const graph = [
  [2, []],
  [4, [1, 2, 3, 4]],
  [2, [5, 3]],
  [3, [1]],
];

console.debug(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], 3, 6));
console.debug(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], 6, 3));
console.debug(getMinDistance([1, 2, 3, 4, 5, 6, 7, 8, 9], 8, 4));
