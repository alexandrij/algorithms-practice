// Дан неориентированный граф, возможно с петлями и кратными ребрами.
// Необходимо найти компоненту связности, содержащую вершину с номером 1.

const graphEdges = [
  [2, 2],
  [3, 4],
  [2, 3],
  [1, 3],
  [2, 4],
];

const graphVertexEdges = new Map();

for (const edge of graphEdges) {
  if (edge[0] === edge[1]) {
    continue;
  }

  if (!graphVertexEdges.has(edge[0])) {
    graphVertexEdges.set(edge[0], [edge[1]]);
  } else {
    graphVertexEdges.get(edge[0]).push(edge[1]);
  }

  if (!graphVertexEdges.has(edge[1])) {
    graphVertexEdges.set(edge[1], [edge[0]]);
  } else {
    graphVertexEdges.get(edge[1]).push(edge[0]);
  }
}

console.debug(graphVertexEdges);

const visited = new Set();

const dfs = (vertex) => {
  visited.add(vertex);

  if (!graphVertexEdges.has(vertex)) {
    return [];
  }

  const result = [vertex];
  const edges = graphVertexEdges.get(vertex);
  for (const v of edges) {
    if (!visited.has(v)) {
      result.push(...dfs(v));
    }
  }

  return result;
};

// 1: [3]
// result = [1]

// 3: [4,2,1]
// result = [3]

// 4: [3,2]
// result = [4]

console.debug(dfs(1).sort((a, b) => a - b));
