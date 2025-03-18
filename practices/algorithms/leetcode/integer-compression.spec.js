import { integerCompression } from './integer-compression.js';

describe(`algoritms: integer compression`, () => {
  it(`сжатие массива чисел: [0, 1, 2, 3, 4, 7, 8, 10]`, () => {
    expect(integerCompression([0, 1, 2, 3, 4, 7, 8, 10])).toBe('0-4,7-8,10');
  });
  it(`сжатие массива чисел: [4, 7, 10]`, () => {
    expect(integerCompression([4, 7, 10])).toBe('4,7,10');
  });
  it(`сжатие массива чисел: [2, 3, 8, 9]`, () => {
    expect(integerCompression([2, 3, 8, 9])).toBe('2-3,8-9');
  });
  it(`сжатие массива чисел: []`, () => {
    expect(integerCompression([])).toBe('');
  });
  it(`сжатие массива чисел: [1]`, () => {
    expect(integerCompression([1])).toBe('1');
  });
  it(`сжатие массива чисел: [1, 1]`, () => {
    expect(integerCompression([1, 1])).toBe('1,1');
  });
  it(`сжатие массива чисел: [1, 1, 3, 2]`, () => {
    expect(integerCompression([1, 1, 3, 2])).toBe('1,1,3,2');
  });
});
