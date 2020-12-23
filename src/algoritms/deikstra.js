const finsLowestCostNode = (costs, processed) => {
    let lowestCost = Number.POSITIVE_INFINITY;
    let lowestCostNode = null;
    for (let node in costs) {
        let cost = costs[node];
        if (cost < lowestCost && !processed.has(node)) {
            lowestCost = cost;
            lowestCostNode = node;
        }
    }
    return lowestCostNode;
}

const deikstra = (graph) => {
    const start = Object.keys(graph)[0];
    const costs = graph[start];
    const parents = Object.keys(graph[start]).reduce((res, node) => (res[node] = start) && res, {});
    const processed = new Set();

    let node;
    while ((node = finsLowestCostNode(costs, processed))) {
        let cost = costs[node];
        let neighbors = graph[node];
        for (let n in neighbors) {
            let newCost = cost + neighbors[n];
            if (costs[n] > newCost) {
                costs[n] = newCost;
                parents[n] = node;
            }
        }
        processed.add(node);
    }
    return parents;
}

console.log(deikstra({
    root: {
        a: 6,
        b: 2
    },
    a: {
        fin: 1
    },
    b: {
        a: 3,
        fin: 5
    },
    fin: {}
}));
