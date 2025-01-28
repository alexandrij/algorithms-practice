// Написать поиск составных авиабилетов
// Необходимо написать функцию, которая найдет любую цепочку перелетов из пункта вылета в пункт назначения.
// Функция принимает на вход пункт вылета, пункт назначения и функцию поиска билетов.
// Функция должна вернуть промис, который зарезолвится - массивом из всех остановок
// (например, [’A’, ’B’, ’C’]); - или строкой ’no way’, если до пункта назначения добраться нельзя.
// Гарантируется, что составной авиабилет или отсутствует или единственно возможный (нет ромбовидных перелетов).
// Нельзя искать несколько билетов параллельно. Нельзя использовать async/await и генераторы.

const flights = [
  ['A', 'B'],
  ['A', 'С'],
  ['A', 'D'],
  ['A', 'O'],
  ['B', 'N'],
  ['D', 'K'],
  ['D', 'K'],
  ['D', 'L'],
  ['D', 'M'],
  ['D', 'N'],
  ['M', 'Q'],
  ['M', 'Z'],
  ['O', 'P'],
  ['O', 'Y'],
  ['L', 'G'],
  ['L', 'F'],
  ['F', 'Y'],
  ['Y', 'Q'],
];

const mFlights = flights.reduce((acc, [from, to]) => {
  if (from in acc) {
    acc[from].push(to);
  } else {
    acc[from] = [to];
  }
  return acc;
}, {});

/**
 *
 * @param {string} from
 * @returns {Promise<{to: string, ticket: number}[]>}
 */
function fetchFlighting(from) {
  return new Promise((resolve) => {
    resolve(
      (mFlights[from] || []).map((to) => {
        const ticket = Math.random() > 0.1 ? Math.floor(Math.random() * 10) : 0;

        return { to, ticket };
      }),
    );
  });
}

/**
 *
 * @param {string} from
 * @param {string} to
 * @param {(from: string) => Promise<Array<{to: string, ticket: number}>>} fetchFlighting
 * @returns {Promise<string[]>} Flighting
 */
function findPath(from, to, fetchFlighting) {
  return fetchFlighting(from).then((flights) => {
    return Promise.all(
      flights.map((flight) => {
        if (flight.ticket > 0) {
          if (flight.to === to) {
            return Promise.resolve([to]);
          } else {
            return findPath(flight.to, to, fetchFlighting).then((paths) => paths.flat());
          }
        } else {
          console.warn(`no tickets: ${from} - ${to}`);
          return Promise.resolve([]);
        }
      }),
    ).then((paths) => {
      return paths
        .filter((path) => path.length > 0)
        .map((path) => {
          return [from, ...path];
        });
    });
  });
}

// function findPathFlighting(from, to) {
//   let path = [];
//   const queue = mFlights[from] || [];
//
//   for (const cur of queue) {
//     if (cur === to) {
//       path.push(to);
//     } else if (mFlights[cur]) {
//       path = findPath(cur, to);
//     }
//
//     if (path.length > 0) {
//       break;
//     }
//   }
//
//   return path.length > 0 ? [from, ...path] : [];
// }

findPath('A', 'N', fetchFlighting).then(console.log); // Promise.resolve(['A', 'D', 'N'])
findPath('A', 'Q', fetchFlighting).then(console.log); // Promise.resolve(["A", "D", "M", "Q"])
findPath('A', 'W', fetchFlighting).then(console.log); // Promise.resolve([])
