/**
 * 
 */
function uniqueInOrder (iterable) {
    const res = [];
    let prev;

    for (let i = 0; i < iterable.length; i++) {
        if (prev !== iterable[i]) {
            res.push(iterable[i]);
            prev = iterable[i];
        }
    }
    return res;
}