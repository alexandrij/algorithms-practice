/**
 * Разница списков.
 *
 * Даны два списка, нужно вернуть элементы,
 * которые есть в 1-ом списке, но нет во 2-ом.
 * Оценить эффективность своего решения.
 */
const findMissing = (arr1, arr2) => {
  const arr2Set = new Set(arr2);
  let len = 0;
  for (const el of arr1) {
    if (!arr2Set.has(el)) {
      arr1[len] = el;
      len += 1;
    }
  }
  arr1.length = len;
  return arr1;
};

console.log(findMissing([1, 2, 3, 4, 5], [3, 4]));
console.log(findMissing([], []));
console.log(findMissing([], [1, 2]));
