import { makeCities } from './make-cities.js';

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
    const expectedCities = [
      'New York',
      'Kansas City',
      'Tucson',
      'Nashville',
      'El Paso',
      'Oklahoma City',
      'Indianapolis',
      'San Diego',
      'Omaha',
      'Austin',
      'San Jose',
      'San Francisco',
      'Columbus',
      'San Antonio',
      'Albuquerque',
      'Raleigh',
      'Houston',
      'Seattle',
      'Las Vegas',
      'Sacramento',
      'Memphis',
      'Phoenix',
      'Portland',
      'Detroit',
      'Denver',
      'Dallas',
      'Atlanta',
      'Louisville',
      'Los Angeles',
      'Long Beach',
      'Chicago',
      'Charlotte',
      'Milwaukee',
      'Washington',
      'Fresno',
      'Fort Worth',
      'Jacksonville',
      'Philadelphia',
      'Baltimore',
      'Mesa',
      'Boston',
    ];

    expect(makeCities(sourceCities)).toEqual(expectedCities);
  });
});
