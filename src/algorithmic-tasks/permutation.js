// [a, b]  => [a,b], [b,a]
// [a,b,c] => [a,b,c], [b,a,c], [b,c,a], [c,b,a], [c,a,b], [a,c,b]

/**
 * 3 * 2 * 1 | 0, 1 <-> 2
 * 
 * // abc: ab c: abc, cab; ba c: bac, cba; bc a: bca, abc
 * 
 * abc:
 * ab ba c
 * 
 * abc
 * bac
 * cab
 * cba
 * 
 * abc <-> acb: 1 <-> 2
 * ac ca b
 * 
 * acb
 * cab +
 * bac +
 * bca
 * 
 */



/**
 * 4 * 3 * 2 * 1 | 0, 1 <-> 2, 2 <->3
 *
 * abcd:
 * ab ba cd dc
 *
 * abcd
 * abdc
 * bacd
 * badc
 *
 * cdab
 * cdba
 * dcab
 * dcba
 *
 * abcd <-> acbd: b <-> c: 1 <-> 2
 * ac ca bd db
 *
 * acbd
 * acdb
 * cabd
 * cadb
 *
 * bdac
 * bdca
 * dbac
 * dbca
 *
 * abcd <-> adcb: b <-> d: 2 <-> 3
 * ad da cb bc
 *
 * adcb
 * adbc
 * dacb
 * dabc
 *
 * cbad
 * cbda
 * bcad
 * bcda
 *
 */

 function swap(arr, a, b) {
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

/**
 * 'abcd' => ['a','b','c','d'];
 * 4 3 2 1
 * 
 */

function permutation(arr, start) {
    if (arr.length < 2) { return arr; }

    const len = arr.length;
    let res = [];

    start = typeof start === 'number' ? start : 0;

    if (start >= len) {
        return [];
    }

    for (let i = start; i < len; i++) {
        if (i !== start)
            res.push(arr.join(''));

        res = res.concat(permutation(arr, start + 1));
        
        if (i < (len-1) ) {
            swap(arr, start, i+1);
        }
    }
    return res;
};
