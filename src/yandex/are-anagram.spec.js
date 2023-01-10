import { areAnagram } from './are-anagram';

describe(`yandex: anagram`, () => {
  it(`количество букв в словах одинаково`, () => {
    expect(areAnagram('ПРОГРАММИРОВАНИЕ', 'АОРВИЕПИРРМГНАМО')).toBeTruthy();
  });

  it(`количество букв в словах одинаково. Регистры разные`, () => {
    expect(areAnagram('ПРОГРамМИРОВаНИЕ', 'АОРВИепИРрМГнАМО')).toBeTruthy();
  });

  it(`количество букв в словах неодинаково`, () => {
    expect(areAnagram('ПРОГРАММИРОВАНИЕ', 'АОРВИЕПИРГНАМО')).toBeFalsy();
  });

  it(`одно слово пустое`, () => {
    expect(areAnagram('ПРОГРАММИРОВАНИЕ', '')).toBeFalsy();
  });

  it(`оба слова пустое`, () => {
    expect(areAnagram('', '')).toBeTruthy();
  });
});
