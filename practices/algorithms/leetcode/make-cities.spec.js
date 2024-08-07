import { makeCities1, makeCities3 } from './make-cities.js';

describe(`algoritms: make-cities`, () => {
  it(`сортировка городов`, () => {
    const sourceCities = [
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
      'San Francisco',
      'Indianapolis',
      'Columbus',
      'Seattle',
      'Washington',
      'Boston',
      'El Paso',
      'Nashville',
      'Memphis',
      'Oklahoma City',
      'Las Vegas',
      'Louisville',
      'Baltimore',
      'Milwaukee',
      'Albuquerque',
      'Tucson',
      'Sacramento',
      'Los Angeles',
      'Atlanta',
      'Long Beach',
      'Omaha',
      'Raleigh',
    ];
    const expectedCities = [
      'New York',
      'Kansas City',
      'Tucson',
      'Nashville',
      'El Paso',
      'Oklahoma City',
      'Indianapolis',
      'San Antonio',
      'Omaha',
      'Austin',
      'San Diego',
      'Dallas',
      'San Jose',
      'San Francisco',
      'Chicago',
      'Albuquerque',
      'Raleigh',
      'Houston',
      'Seattle',
      'Las Vegas',
      'Sacramento',
      'Memphis',
      'Phoenix',
      'Philadelphia',
      'Atlanta',
      'Louisville',
      'Los Angeles',
      'Long Beach',
      'Columbus',
      'Boston',
      'Baltimore',
      'Milwaukee',
      'Washington',
    ];

    expect(makeCities3(sourceCities)).toEqual(expectedCities);
    expect(makeCities1(sourceCities)).toEqual(expectedCities);
  });
});
