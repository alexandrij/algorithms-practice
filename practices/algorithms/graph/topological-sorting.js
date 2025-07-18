import { graphPairsToAdjList, mockPairs4 } from './mock-graph.js';

const topologicalSortingDfs = (graph) => {
  const visited = new Set();
  const stack = [];

  const dfs = (vertex) => {
    visited.add(vertex);

    for (const neighbor of graph.get(vertex) || []) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }

    stack.push(vertex);
  };

  for (const vertex of graph.keys()) {
    if (!visited.has(vertex)) {
      dfs(vertex);
    }
  }

  return stack.reverse();
};

console.debug(topologicalSortingDfs(graphPairsToAdjList(mockPairs4))); // 4,6,3,1,2,5

// const adjList = {
//   1: [2],
//   3: [2],
//   4: [2, 6],
//   2: [5],
//   6: [5],
// };
//
// [1] => [2] => [5] => [5, 2, 1]
// [3]
// [4] => [2, 6] => [6]
