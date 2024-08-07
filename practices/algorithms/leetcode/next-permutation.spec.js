import { nextPermutation } from './next-permutation.js';

describe(`algorithms: next permutattion`, () => {
  // For example, for arr = [1,2,3], the following are all the permutations of arr: [1,2,3], [1,3,2], [2, 1, 3], [2, 3, 1], [3,1,2], [3,2,1].

  // it(`следующая перестановка [1, 2, 3]`, () => {
  //   expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2]);
  // });
  // it(`следующая перестановка [1, 3, 2]`, () => {
  //   expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3]);
  // });
  // it(`следующая перестановка [2, 1, 3]`, () => {
  //   expect(nextPermutation([2, 1, 3])).toEqual([2, 3, 1]);
  // });
  it(`следующая перестановка [2, 3, 1]`, () => {
    expect(nextPermutation([2, 3, 1])).toEqual([3, 1, 2]);
  });
  // it(`следующая перестановка [3, 1, 2]`, () => {
  //   expect(nextPermutation([3, 1, 2])).toEqual([3, 2, 1]);
  // });
  // it(`следующая перестановка [3, 2, 1]`, () => {
  //   expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3]);
  // });
});
