module.exports = getMaxSequenceOfUnits = (n) => {
    let best = 0;
    let cur = 0;

    n.forEach((el) => {
        if (el === 1) {
            cur++;
            best = Math.max(best, cur);
        } else {
            cur = 0;
        }
    })
    return best;
}

console.log(getMaxSequenceOfUnits([1,2,3,5,61,1,1,1,1,0]));
console.log(getMaxSequenceOfUnits([0,0]));
console.log(getMaxSequenceOfUnits([]));
