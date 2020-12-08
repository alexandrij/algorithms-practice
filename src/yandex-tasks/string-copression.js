const stringCompression = (word) => {
    return word
        .split('')
        .reduceRight((res, s) => {
            if (res.length > 0) {
                if (res[0][0] === s)
                    res[0].push(s)
                else
                    res.unshift([s])
                return res;
            } else
                return [[s]];
        }, [])
        .map(arr => arr.length > 1 ? arr[0] + arr.length : arr[0])
        .join('');
}
module.exports = stringCompression;

console.log(stringCompression('aaaaaaaaaaaasssddfwfwessssfqqrtvvvverw'));
console.log(stringCompression(''));
console.log(stringCompression('aaaaa'));

