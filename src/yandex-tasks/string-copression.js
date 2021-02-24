const stringCompression = (word) => {
    return word.split("")
        .reduceRight((res, el) => {
            if (res.length > 0 && res[0][0] === el) {
                res[0][1]++;
            } else {
                res.unshift([el, 1]);
            }
            return res;
        }, [])
        .map(el => el[1] > 1 ? el.join("") : el[0])
        .join("");
}
module.exports = stringCompression;

console.log(stringCompression('aaaaaaaaaaaasssddfwfwessssfqqrtvvvverww'));
console.log(stringCompression(''));
console.log(stringCompression('aaaaa'));

