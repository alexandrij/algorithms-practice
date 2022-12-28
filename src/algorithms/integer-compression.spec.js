import { integerCompression } from './integer-compression';

describe(`Integer compression`, () => {
  it(`Cжатие массива чисел: [0, 1, 2, 3, 4, 7, 8, 10]`, () => {
    expect(integerCompression([0, 1, 2, 3, 4, 7, 8, 10])).toBe('0-4,7-8,10');
  });
  it(`Cжатие массива чисел: [4, 7, 10]`, () => {
    expect(integerCompression([4, 7, 10])).toBe('4,7,10');
  });
  it(`Cжатие массива чисел: [2, 3, 8, 9]`, () => {
    expect(integerCompression([2, 3, 8, 9])).toBe('2-3,8-9');
  });
});
