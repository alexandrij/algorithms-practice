import { adjListObjToAdjListMap, mockWeightsGraph } from './mock-graph.js';

export const shortestPathsDijkstra = (adjList, from, to) => {
  const distances = new Map();
  for (const vertex of adjList.keys()) {
    distances.set(vertex, Infinity);
  }
  distances[from] = 0;

  const queue = [[0, from]];
  while (queue.length > 0) {
    const [curDistance, curVertex] = queue.pop();

    if (curVertex === to) {
      return curDistance;
    }

    if (curDistance > distances[curVertex]) {
      continue;
    }

    if (adjList.has(curVertex)) {
      for (const [neighbor, weight] of adjList.get(curVertex)) {
        const distance = curDistance + weight;

        if (distance < distances.get(neighbor)) {
          distances.set(neighbor, distance);
          queue.push(queue, [distance, neighbor]);
        }
      }
    }
  }

  return distances;
};

console.debug(shortestPathsDijkstra(adjListObjToAdjListMap(mockWeightsGraph), 'A', 'C'));
console.debug(shortestPathsDijkstra(adjListObjToAdjListMap(mockWeightsGraph), 'A', 'B'));
