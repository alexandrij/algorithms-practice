const dumpDFS = (node) => {
  return !node
    ? []
    : [node.value].concat(
        (node.children || []).flatMap((child) => dumpDFS(child)),
      );
};

const dumpBFS1 = (node) => {
  if (!node) return [];

  let iter = (nodes) => {
    let childs = [];
    return !nodes || !nodes.length
      ? []
      : nodes
          .reduce((res, { value, children = [] }) => {
            childs = [...childs, ...children];
            return [...res, value];
          }, [])
          .concat(iter(childs));
  };
  return [node.value].concat(iter(node.children || []));
};
const dumpBFS2 = (node) => {
  if (!node) return [];

  const res = [];
  let queue = [];
  let curNode = node;
  while (curNode) {
    queue = [...queue, ...(curNode.children || [])];
    res.push(curNode.value);
    curNode = queue.shift();
  }
  return res;
};

const tree = {
  value: 1,
  children: [
    {
      value: 2,
      children: [
        {
          value: 4,
          children: [
            {
              value: 8,
            },
            {
              value: 9,
            },
          ],
        },
        {
          value: 5,
        },
      ],
    },
    {
      value: 3,
      children: [
        {
          value: 6,
        },
        {
          value: 7,
        },
      ],
    },
  ],
};

// console.log('traverse1: ', traverse1(tree));
// console.log('traverse2: ', traverse2(tree));
console.log('dump: ', dumpDFS(tree));
console.log('dumpBFS1: ', dumpBFS1(tree));
console.log('dumpBFS2: ', dumpBFS2(tree));
