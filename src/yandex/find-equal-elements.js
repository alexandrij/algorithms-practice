// Есть два сортированных массива с числами.
// Нужно написать функцию, которая возвращает новый массив,
// содержащий элементы, которые встречаются в обоих массивах.
const findEqualElements = (arr1, arr2) => {
    const mapArr2 = arr2.reduce((map, el) => (map.has(el) ? map.set(el, map.get(el) + 1) : map.set(el, 1)), new Map());

    return arr1.filter(el => {
        if (mapArr2.has(el) && mapArr2.get(el) > 0) {
            mapArr2.set(el, mapArr2.get(el) - 1);
            return true;
        }
        return false;
    });
}
module.exports = { findEqualElements: findEqualElements };

// Примеры
console.log(findEqualElements([1, 2, 3], [2])); // => [2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2, 4, 4, 4, 4])); // => [2, 2]
