// Написать поиск составных авиабилетов
// Необходимо написать функцию, которая найдет любую цепочку перелетов из пункта вылета в пункт назначения.
// Функция принимает на вход пункт вылета, пункт назначения и функцию поиска билетов.
// Функция должна вернуть промис, который зарезолвится - массивом из всех остановок
// (например, [’A’, ’B’, ’C’]); - или строкой ’no way’, если до пункта назначения добраться нельзя.
// Гарантируется, что составной авиабилет или отсутствует или единственно возможный (нет ромбовидных перелетов).
// Нельзя искать несколько билетов параллельно. Нельзя использовать async/await и генераторы.

const dfsInAdjList = (adjList, from, to, visited = new Set()) => {
  if (visited.has(from)) {
    return [];
  }

  visited.add(from);

  if (from === to) {
    return [to];
  }

  if (adjList.has(from)) {
    for (const nextV of adjList.get(from)) {
      const resultNextV = dfsInAdjList(adjList, nextV, to, visited);

      if (resultNextV.length > 0) {
        return [from, ...resultNextV];
      }
    }
  }

  return [];
};

// const dfsInAdjList = (adjList, from, to) => {
//   const visited = new Set();
//   const stack = [from];
//
//   while (stack.length > 0) {
//     const nextList = stack.pop();
//     const nextVrt = nextList[nextList.length - 1];
//
//     if (visited.has(nextVrt)) {
//       continue;
//     }
//
//     if (nextVrt === to) {
//       return nextList;
//     }
//
//     visited.add(nextVrt);
//
//     if (adjList.has(nextVrt)) {
//       adjList.get(nextVrt).forEach((vrt) => {
//         stack.push([...nextList, vrt]);
//       });
//     }
//   }
//
//   return [];
// }

// [A]
// [[A,B],[A,C],[A,D]]
// [[A,C],[A,D],[A,B,K],[A,B,P]]
// [[A,D],[A,B,K],[A,B,P],[A,C,P]]
// [[A,B,K],[A,B,P],[A,C,P],[A,D,N]]
const bfsInAdjList = (adjList, from, to) => {
  const visited = new Set();
  const queue = [[from]];

  while (queue.length > 0) {
    const nextList = queue.shift();
    const nextVrt = nextList[nextList.length - 1];

    if (visited.has(nextVrt)) {
      continue;
    }

    if (nextVrt === to) {
      return nextList;
    }

    visited.add(nextVrt);

    if (adjList.has(nextVrt)) {
      adjList.get(nextVrt).forEach((vrt) => {
        if (!visited.has(vrt)) {
          queue.push([...nextList, vrt]);
        }
      });
    }
  }

  return [];
};

const findPath = (graph, from, to, searchFn) => {
  const adjList = graph.reduce((acc, [from, to]) => {
    if (!acc.has(from)) {
      acc.set(from, []);
    }
    acc.get(from).push(to);

    return acc;
  }, new Map());

  return searchFn(adjList, from, to);
};

const flights = [
  ['A', 'B'],
  ['A', 'С'],
  ['A', 'D'],
  ['A', 'O'],
  ['D', 'K'],
  ['D', 'L'],
  ['D', 'M'],
  ['M', 'Q'],
  ['M', 'Z'],
  ['O', 'P'],
  ['L', 'G'],
  ['L', 'F'],
  ['F', 'Y'],
];

console.debug('dfsInAdjList:', findPath(flights, 'A', 'M', dfsInAdjList)); // ['A', 'D', 'M']
console.debug('bfsInAdjList:', findPath(flights, 'A', 'M', bfsInAdjList)); // ['A', 'D', 'M']
console.debug('---');
console.debug('dfsInAdjList:', findPath(flights, 'A', 'Q', dfsInAdjList)); // ["A", "D", "M", "Q"]
console.debug('bfsInAdjList:', findPath(flights, 'A', 'Q', bfsInAdjList)); // ["A", "D", "M", "Q"]
console.debug('---');
console.debug('dfsInAdjList:', findPath(flights, 'A', 'W', dfsInAdjList)); // []
console.debug('bfsInAdjList:', findPath(flights, 'A', 'W', bfsInAdjList)); // []
