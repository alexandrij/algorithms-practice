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

function makeCitites(cities) {
  let curIdx = 0;
  let curCity = cities[curIdx];
  curIdx++;

  for (let i = curCity.length - 1; i >= 0; i--) {
    const lastSym = curCity.charAt(i).toLowerCase();

    for (let j = curIdx; j < cities.length; j++) {
      if (lastSym === cities[j].charAt(0).toLowerCase()) {
        curCity = cities[j];
        swap(cities, curIdx, j);
        curIdx++;
        i = curCity.length;

        break;
      }
    }
  }

  return cities;
}

console.log(makeCitites(cities));

// const sortedCities = [
//   'New York',
//   'Kansas City',
//   'Tucson',
//   'Nashville',
//   'El Paso',
//   'Oklahoma City',
//   'Indianapolis',
//   'San Diego',
//   'Omaha',
//   'Austin',
//   'San Jose',
//   'San Francisco',
//   'Columbus',
//   'San Antonio',
//   'Albuquerque',
//   'Raleigh',
//   'Houston',
//   'Seattle',
//   'Las Vegas',
//   'Sacramento',
//   'Memphis',
//   'Phoenix',
//   'Portland',
//   'Detroit',
//   'Denver',
//   'Dallas',
//   'Atlanta',
//   'Louisville',
//   'Los Angeles',
//   'Long Beach',
//   'Chicago',
//   'Charlotte',
//   'Milwaukee',
//   'Fresno',
//   'Washington',
//   'Mesa',
//   'Jacksonville',
//   'Philadelphia',
//   'Baltimore',
//   'Boston',
//   'Fort Worth',
// ];
