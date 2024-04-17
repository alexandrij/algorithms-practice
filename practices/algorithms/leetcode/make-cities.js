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

export function makeCities(cities) {
  topLoop: for (let i = 0; i < cities.length; i++) {
    const city = cities[i];

    for (let j = city.length - 1; j >= 0; j--) {
      const sym = city[j];

      for (let ii = i + 1; ii < cities.length; ii++) {
        if (sym.toLowerCase() === cities[ii].charAt(0).toLowerCase()) {
          swap(cities, i + 1, ii);
          continue topLoop;
        }
      }
    }
  }

  return cities;
}

console.log(makeCities(cities));
