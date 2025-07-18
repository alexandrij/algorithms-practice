import { mockPairs2, mockPairs3 } from './mock-graph.js';

const conectivityComponents = (pairs) => {
  const adjList = pairs.reduce((acc, [from, to]) => {
    if (!acc.has(from)) {
      acc.set(from, []);
    }
    acc.get(from).push(to);

    if (!acc.has(to)) {
      acc.set(to, []);
    }
    acc.get(to).push(from);

    return acc;
  }, new Map());

  const visited = new Set();

  const resGroups = [];
  adjList.forEach((_, activeVertex) => {
    if (visited.has(activeVertex)) {
      return;
    }

    const stack = [activeVertex];
    const curGroup = [];
    while (stack.length) {
      const nextVertex = stack.shift();

      if (!visited.has(nextVertex)) {
        curGroup.push(nextVertex);
        visited.add(nextVertex);
        stack.push(...adjList.get(nextVertex));
      }
    }
    resGroups.push(curGroup);
  });

  return resGroups;
};

console.debug(conectivityComponents(mockPairs2));
console.debug(conectivityComponents(mockPairs3));
