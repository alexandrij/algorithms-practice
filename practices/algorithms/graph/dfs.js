import { mockVertexGraph1 } from './mock-graph.js';

const dfs = (graph, vertex, fn, used) => {
  fn(vertex);

  used.add(vertex);

  for (const v of graph[vertex]) {
    if (!used.has(v)) {
      dfs(graph, v, fn, used);
    }
  }
};
const dfsStack = (listOfAdjency, startVertex, callback) => {
  let visited = {}; // посещенные вершины

  const handleVertex = (vertex, stack) => {
    callback(vertex);
    visited[vertex] = true;

    stack.push(...listOfAdjency[vertex]);
  };

  {
    // стек вершин для перебора
    let stack = [startVertex];
    // перебираем вершины из стека, пока он не опустеет
    while (stack.length) {
      const activeVertex = stack.pop();

      if (!visited[activeVertex]) {
        handleVertex(activeVertex, stack);
      }
    }
  }

  {
    // проверка на изолированные фрагменты
    const stack = Object.keys(listOfAdjency);

    while (stack.length) {
      const activeVertex = stack.pop();

      if (!visited[activeVertex]) {
        handleVertex(activeVertex, stack);
      }
    }
  }
};

dfs(mockVertexGraph1, 1, console.debug, new Set());
console.debug('------------');
dfsStack(mockVertexGraph1, 1, console.debug);
