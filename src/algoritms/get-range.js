const getRanges = arr => arr
    .reduceRight((res, el) => {
        if (res.length > 0 && (res[0][0] - el) === 1) {
            res[0].unshift(el);
        } else {
            res.unshift([el]);
        }
        return res;
    }, [])
    .map(arr => arr.pop() + (arr.length > 0 ? '-' + arr[0] : ''))
    .join(',');

console.log(getRanges([0, 1, 2, 3, 4, 7, 8, 10])); // "0-4,7-8,10"
console.log(getRanges([4, 7, 10])) // "4,7,10"
console.log(getRanges([2, 3, 8, 9])) // "2-3,8-9"
