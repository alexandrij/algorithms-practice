import { maxProfit } from './max-profit';

describe('Yandex. Max Profit', () => {
  it(`Расчет, когда имеется колебания акций`, () => {
    expect(maxProfit([71, 11, 51, 31, 61, 41])).toBe(70);
    expect(maxProfit([5, 6, 5, 6])).toBe(2);
  });

  it(`Расчет, когда только увеличение акций`, () => {
    expect(maxProfit([13, 24, 35, 46, 57])).toBe(44);
  });

  it(`Расчет, когда только снижение акций`, () => {
    expect(maxProfit([700, 612, 445, 343, 10])).toBe(0);
  });

  it(`Расчет, когда одинаково каждый день`, () => {
    expect(maxProfit([78, 78, 78])).toBe(0);
  });

  it(`Проверка пустоты массива`, () => {
    expect(maxProfit([])).toBe(0);
  });
  // console.log(maxProfit(Array.apply(null, {length: 100000}).map(() => Math.floor(Math.random() * 100)))); //
});
