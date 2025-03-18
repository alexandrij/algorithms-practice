import { mockVertexGraph1 } from './mock-graph.js';

const bfs = (graph, startVertex, callback) => {
  const visited = {};

  const handleVertex = (activeVertex, queue) => {
    visited[activeVertex] = true;
    callback(activeVertex);
    queue.push(...graph[activeVertex]);
  };

  {
    const queue = [startVertex];
    while (queue.length) {
      const activeVertex = queue.shift();
      if (!visited[activeVertex]) {
        handleVertex(activeVertex, queue);
      }
    }
  }

  {
    const queue = Object.keys(graph).map((v) => Number(v));
    while (queue.length) {
      const activeVertex = queue.shift();
      if (!visited[activeVertex]) {
        handleVertex(activeVertex, queue);
      }
    }
  }
};

bfs(mockVertexGraph1, 1, console.debug);
