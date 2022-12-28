// Есть два сортированных массива с числами.
// Нужно написать функцию, которая возвращает новый массив,
// содержащий элементы, которые встречаются в обоих массивах.
// const findEqualElements = (arr1, arr2) => {
//     let count = 0;
//     const mapArr2 = arr2.reduce((map, el) => {
//         count++;
//         return (map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1));
//     }, new Map());
//
//     const res = arr1.filter(el => {
//         count++;
//         if (mapArr2.has(el) && mapArr2.get(el) > 0) {
//             mapArr2.set(el, mapArr2.get(el) - 1);
//             return true;
//         }
//         return false;
//     });
//     console.log(count);
//     return res;
// };

const findEqualElements = (arr1, arr2) => {
  const res = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    while (arr1[i1] < arr2[i2]) {
      i1++;
    }
    while (arr1[i1] > arr2[i2]) {
      i2++;
    }
    if (arr1[i1] === arr2[i2]) {
      res.push(arr1[i1]);
    }
    i1++;
    i2++;
  }
  return res;
};

// Примеры
console.log(findEqualElements([1, 2, 3], [2])); // => [2]
console.log(findEqualElements([0, 1, 2, 3], [0, 2])); // => [2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2, 4, 4, 4, 4])); // => [2, 2]
console.log(
  findEqualElements([1, 2, 2, 3, 4, 4, 5, 6, 6], [2, 2, 2, 2, 4, 4, 4, 4]),
); // => [2, 2]
