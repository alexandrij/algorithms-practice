export function sumDigPow(a, b) {
    const res = [];
    let curSumDigPow;

    for (let i = a; i < b; i++) {
        curSumDigPow = String(i).split('').reduce((res, item, i) => {
            return res + Math.pow(+item, i + 1)
        }, 0);
        if (curSumDigPow === i) {
            res.push(curSumDigPow);
        }
    }
    return res;
}
