import { mockGraph1 } from './mock-graph.js';

const searchInDepth = (graph, startVertex) => {
  const treeGraph = graph.reduce((acc, [from, to]) => {
    if (!acc[from]) {
      acc[from] = [];
    }
    acc[from].push(to);

    return acc;
  }, {});

  let curV;
  const used = new Set();
  const stack = [startVertex];
  const result = [];

  while ((curV = stack.pop())) {
    if (used.has(curV)) {
      continue;
    }

    result.push(curV);
    if (curV in treeGraph) {
      stack.push(...treeGraph[curV]);
    }
  }

  return result;
};

console.debug(searchInDepth(mockGraph1, 1));
