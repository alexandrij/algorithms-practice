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

import { factorial } from './factorial.js';
import { nextPermutation } from './next-permutation.js';

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

function swap(str, a, b) {
  const arr = str.split('');
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr.join('');
}

export const permutation = (str, start = 0) => {
  if (start > str.length - 1) {
    return [];
  }

  const result = permutation(str, start + 1);

  for (let i = start + 1; i < str.length; i++) {
    const permutated = swap(str, start, i);
    result.push(permutated);
    result.push(...permutation(permutated, start + 1));
  }

  return result;
};

{
  const str = 'abc';
  const res = permutation(str);
  const exLength = factorial(str.length) - 1;
  console.log(exLength, res.length, new Set(res).size, res);
}
{
  const str = 'abcd';
  const res = permutation(str);
  const exLength = factorial(str.length) - 1;
  console.log(exLength, res.length, new Set(res).size, res);
}
{
  const str = 'abcdef';
  const res = permutation(str);
  const exLength = factorial(str.length) - 1;
  console.log(exLength, res.length, new Set(res).size, res);
}
