const getRanges = arr => arr
    .reduceRight((res, el) => res.length ? (res[0][0] === el + 1 ? res[0].unshift(el) : res.unshift([el])) && res : [[el]], [])
    .map(arr => arr.length > 1 ? [arr[0], [arr[arr.length - 1]]] : arr)
    .map(arr => arr.join('-'))
    .join(',');

console.log(getRanges([0, 1, 2, 3, 4, 7, 8, 10])); // "0-4,7-8,10"
console.log(getRanges([4, 7, 10])) // "4,7,10"
console.log(getRanges([2, 3, 8, 9])) // "2-3,8-9"
