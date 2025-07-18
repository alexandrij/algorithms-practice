export const graphPairsToAdjList = (pairs) => {
  const adjList = new Map();
  pairs.forEach(([from, to]) => {
    if (!adjList.has(from)) {
      adjList.set(from, []);
    }
    adjList.get(from).push(to);
  });
  return adjList;
};

export const adjListObjToAdjListMap = (adjListObj) => {
  const adjListMap = new Map();
  for (const key in adjListObj) {
    if (Object.prototype.toString.apply(adjListObj[key]) === '[object Object]') {
      const map = adjListObjToAdjListMap(adjListObj[key]);
      adjListMap.set(key, map);
    } else {
      adjListMap.set(key, adjListObj[key]);
    }
  }
  return adjListMap;
};

export const mockAdjList1 = new Map([
  [1, []],
  [2, [4, 5, 1]],
  [3, [4, 2, 1]],
  [4, [3, 2]],
  [5, [6, 7]],
  [6, [5, 7]],
  [7, [6, 5]],
]);

export const mockPairs1 = [
  [4, 5],
  [2, 2],
  [3, 4],
  [2, 3],
  [1, 3],
  [2, 4],
];

export const mockPairs2 = [
  [6, 4],
  [3, 1],
  [1, 2],
  [5, 4],
  [2, 3],
];

export const mockPairs3 = [
  ['a2', 'a5'],
  ['a3', 'a6'],
  ['a4', 'a5'],
  ['a7', 'a9'],
];

export const mockPairs4 = [
  [1, 2],
  [3, 2],
  [4, 2],
  [2, 5],
  [6, 5],
  [4, 6],
];

export const mockWeightsGraph = {
  A: { B: 1, C: 3 },
  B: { A: 1, C: 2 },
  C: { A: 3, B: 2 },
};
