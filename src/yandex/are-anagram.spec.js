import { areAnagram } from './are-anagram';

describe(`Yandex. Anagram`, () => {
  it(`Количество букв в словах одинаково`, () => {
    expect(areAnagram('ПРОГРАММИРОВАНИЕ', 'АОРВИЕПИРРМГНАМО')).toBeTruthy();
  });

  it(`Количество букв в словах одинаково. Регистры разные`, () => {
    expect(areAnagram('ПРОГРамМИРОВаНИЕ', 'АОРВИепИРрМГнАМО')).toBeTruthy();
  });

  it(`Количество букв в словах неодинаково`, () => {
    expect(areAnagram('ПРОГРАММИРОВАНИЕ', 'АОРВИЕПИРГНАМО')).toBeFalsy();
  });

  it(`Одно слово пустое`, () => {
    expect(areAnagram('ПРОГРАММИРОВАНИЕ', '')).toBeFalsy();
  });

  it(`Оба слова пустое`, () => {
    expect(areAnagram('', '')).toBeTruthy();
  });
});
