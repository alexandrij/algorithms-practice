import { permutation } from './permutation.js';
import { factorial } from './factorial.js';

describe('algorithms: perumation', () => {
  {
    const example = 'abc';
    it(`перестановка ${example}`, () => {
      const permutations = permutation(example);
      const uniquePermutations = new Set(permutations);
      expect(uniquePermutations.size).toBe(factorial(example.length) - 1);
      expect(permutations[0]).toBe('acb');
      expect(permutations[1]).toBe('bac');
      expect(permutations[permutations.length - 1]).toBe('cab');
    });
  }

  {
    const example = 'abcdef';
    it(`перестановка ${example}`, () => {
      const permutations = permutation(example);
      const uniquePermutations = new Set(permutations);
      expect(uniquePermutations.size).toBe(factorial(example.length) - 1);
      expect(permutations[0]).toBe('abcdfe');
      expect(permutations[1]).toBe('abcedf');
    });
  }
});
