import { mockAdjList1 } from './mock-graph.js';

export const shortestPaths = (adjList, from, to) => {
  const visited = new Set();
  const queue = [[from]];
  let minPath = [];

  while (queue.length > 0) {
    const nextList = queue.shift();
    const nextV = nextList[nextList.length - 1];

    if (nextV === to) {
      minPath = nextList;
      break;
    }

    visited.add(nextV);

    if (adjList.has(nextV)) {
      for (const v of adjList.get(nextV)) {
        if (!visited.has(v)) {
          queue.push([...nextList, v]);
        }
      }
    }
  }

  return minPath;
};

console.debug(shortestPaths(mockAdjList1, 3, 1));
console.debug(shortestPaths(mockAdjList1, 3, 7));
