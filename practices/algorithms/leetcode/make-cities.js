import { perfDecorator } from '../../../packages/performance/perf-decorator.js';

/**
 * Игра в города. Расположить города так, чтобы каждое следующее
 * название начиналось с той буквы, на которую заканчивалось
 * предыдущее название. Если нет такого названия, то на п
 * редпоследнюю букву и так далее.
 */
const cities = [
  'New York',
  'Kansas City',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'Jacksonville',
  'San Francisco',
  'Indianapolis',
  'Columbus',
  'Fort Worth',
  'Charlotte',
  'Seattle',
  'Denver',
  'Washington',
  'Boston',
  'El Paso',
  'Detroit',
  'Nashville',
  'Portland',
  'Memphis',
  'Oklahoma City',
  'Las Vegas',
  'Louisville',
  'Baltimore',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Fresno',
  'Sacramento',
  'Mesa',
  'Los Angeles',
  'Atlanta',
  'Long Beach',
  'Omaha',
  'Raleigh',
];

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function makeCities1(cities) {
  const result = [cities[0]];
  let city = cities[0];

  for (let i = city.length - 1; i >= 0; i--) {
    const sym = city[i].toLowerCase();

    for (let j = 1; j < cities.length; j++) {
      if (cities[j] && cities[j].charAt(0).toLowerCase() === sym.toLowerCase()) {
        result.push(cities[j]);
        city = cities[j];
        cities[j] = '';
        i = city.length;
        break;
      }
    }
  }
  return result;
}

export function makeCities2(cities) {
  let cityIdx = 0;
  let city = cities[cityIdx];
  let symIdx = city.length - 1;

  while (symIdx >= 0) {
    const sym = city.charAt(symIdx).toLowerCase();

    for (let ii = cityIdx + 1; ii < cities.length; ii++) {
      if (sym === cities[ii].charAt(0).toLowerCase()) {
        swap(cities, cityIdx + 1, ii);
        city = cities[cityIdx + 1];
        symIdx = city.length;
        cityIdx++;
        break;
      }
    }

    symIdx--;
  }

  return cities.splice(0, cityIdx);
}

export function makeCities3(cities) {
  const result = new Set();
  const citiesMap = cities.reduce((acc, cur, i) => {
    if (i === 0) {
      return acc;
    }

    const last = cur.charAt(0).toLowerCase();
    if (acc.has(last)) {
      acc.get(last).push(cur);
    } else {
      acc.set(last, [cur]);
    }

    return acc;
  }, new Map());

  let curCity = cities[0];
  result.add(curCity);

  for (let i = curCity.length - 1; i >= 0; i--) {
    const curSym = curCity.charAt(i).toLowerCase();
    if (citiesMap.has(curSym) && citiesMap.get(curSym).length > 0) {
      curCity = citiesMap.get(curSym).shift();

      if (!result.has(curCity)) {
        result.add(curCity);
        i = curCity.length;
      }
    }
  }

  return Array.from(result);
}

console.log(cities.toString() + '\n');
console.log(perfDecorator(makeCities1)([...cities]).toString() + '\n');
console.log(perfDecorator(makeCities2)([...cities]).toString() + '\n');
console.log(perfDecorator(makeCities3)([...cities]).toString() + '\n');
