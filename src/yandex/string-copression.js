const stringCompression = (word) => {
    return word
        .split('')
        .reduceRight((res, s) => (res.length > 0 ? (res[0][0] === s ? res[0].push(s) : res.unshift([s])) && res : [[s]]), [])
        .map(arr => arr.length > 1 ? arr[0] + arr.length : arr[0])
        .join('');
}
module.exports = stringCompression;

console.log(stringCompression('aaaaaaaaaaaasssddfwfwessssfqqrtvvvverw'));
console.log(stringCompression(''));
console.log(stringCompression('aaaaa'));
