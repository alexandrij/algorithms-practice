import { factorial } from './factorial';

describe(`Factorial`, () => {
  it(`Факторил отрицательного числа: factorial(-3)`, () => {
    expect(factorial(-3)).toBe(1);
  });

  it(`Факториал нуля: factorial(0)`, () => {
    expect(factorial(0)).toBe(1);
  });

  it(`Факториал 1: factorial(1)`, () => {
    expect(factorial(1)).toBe(1);
  });

  it(`Факториал положительного числа: factorial(3)`, () => {
    expect(factorial(3)).toBe(6);
  });

  it(`Фактоиал положительного числа: factorial(5)`, () => {
    expect(factorial(5)).toBe(120);
  });

  it(`Факториал большого положительного числа: factorial(1000000)`, () => {
    expect(factorial(1000000)).toBePositiveInfinity();
  });

  it(`Ошибка вычисления факториала не целого числа, пример 5.3, "df", [], null,undefined:`, () => {
    expect(() => factorial(5.3)).toThrow(Error, `Value "5.3" is not integer`);
    expect(() => factorial('df')).toThrow(Error, `Value "df" is not integer`);
    expect(() => factorial([])).toThrow(Error, `Value "" is not integer`);
    expect(() => factorial(null)).toThrow(Error, `Value "null" is not integer`);
    expect(() => factorial(undefined)).toThrow(
      Error,
      `Value "undefined" is not integer`,
    );
  });
});
