import { areAnagram } from './are-anagram';

describe(`Yandex. Anagram`, () => {
    it(`Количество букв в словах одинаково`, () => {
        expect(areAnagram('ПРОГРАММИРОВАНИЕ', 'АОРВИЕПИРРМГНАМО')).toBeTrue();
    });

    it(`Количество букв в словах одинаково. Регистры разные `, () => {
        expect(areAnagram('ПРОГРамМИРОВаНИЕ', 'АОРВИепИРрМГнАМО')).toBeTrue();
    });

    it(`Количество букв в словах неодинаково`, () => {
        expect(areAnagram('ПРОГРАММИРОВАНИЕ', 'АОРВИЕПИРГНАМО')).toBeFalse();
    });

    it(`Одно слово пустое`, () => {
        expect(areAnagram('ПРОГРАММИРОВАНИЕ', '')).toBeFalse();
    });

    it(`Оба слова пустое`, () => {
        expect(areAnagram('', '')).toBeTrue();
    });

    it(`Оба слова пустое`, () => {
        expect(areAnagram('', '')).toBeTrue();
    });
});
