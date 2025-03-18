const dfs = (matrixOfAdjacency, index, from, used = new Set()) => {
  used.add(index);

  let paths = [];
  for (let i = 0; i < matrixOfAdjacency[index].length; i++) {
    if (i === from) {
      continue;
    }

    if (matrixOfAdjacency[index][i] === 1) {
      if (used.has(i)) {
        paths = Array.from(used).map((v) => v + 1);
        break;
      }

      paths = dfs(matrixOfAdjacency, i, index, used);
      if (paths) {
        break;
      }
    }
  }

  return paths;
};

const findCycleInGraph = (matrixOfAdjacency) => {
  for (let i = 0; i < matrixOfAdjacency.length; i++) {
    const paths = dfs(matrixOfAdjacency, i);
    if (paths.length > 0) {
      return paths;
    }
  }

  return [];
};

{
  const matrixOfAdjacency = [
    [0, 1, 1],
    [1, 0, 1],
    [1, 1, 0],
  ];

  console.debug(findCycleInGraph(matrixOfAdjacency));
}

{
  const matrixOfAdjacency = [
    [0, 0, 1, 0],
    [0, 0, 0, 1],
    [1, 0, 0, 0],
    [0, 1, 0, 0],
  ];

  console.debug(findCycleInGraph(matrixOfAdjacency, 0));
}

{
  const matrixOfAdjacency = [
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 1, 1, 0],
  ];

  console.debug(findCycleInGraph(matrixOfAdjacency, 0));
}
