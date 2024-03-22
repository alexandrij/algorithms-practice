export const game = function (arr) {
  const n = arr.length;

  if (n < 3 || n > 999 || n % 3 !== 0) {
    throw new Error('Количество карт должно быть кратно 3, больше или равно 3 и меньше или равно 999');
  }

  let i = -1;
  let temp;
  let curGamer = {
    name: 'Petya',
    summ: 0,
    last: 0,
  };
  let nextGamer = {
    name: 'Vasya',
    summ: 0,
    last: 0,
  };

  while (++i < n) {
    curGamer.summ += arr[i];
    curGamer.last = arr[i];

    if (curGamer.last >= nextGamer.last) {
      temp = curGamer;
      curGamer = nextGamer;
      nextGamer = temp;
    }
  }
  return curGamer.summ > nextGamer.summ ? curGamer.name : nextGamer.name;
};
