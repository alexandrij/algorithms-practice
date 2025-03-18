function IsBalanceBinaryTree(root) {
  let queue = [root];
  let node;
  let i = 0;

  while ((node = queue[i])) {
    if (node.left) {
      if (!node.right && (node.left.left || node.left.right)) {
        return false;
      }
      queue.push(node.left);
    }
    if (node.right) {
      if (!node.left && (node.right.left || node.right.right)) {
        return false;
      }
      queue.push(node.right);
    }
    i++;
  }
  return true;
}

function getHeight(root) {
  if (!root) {
    return 0;
  }
  return Math.max(getHeight(root.left), getHeight(root.right)) + 1;
}

console.log(
  IsBalanceBinaryTree({
    val: 1,
    left: {
      val: 1.2,
      left: {
        val: 5.1,
      },
    },
    right: {
      val: 1.3,
      left: {
        val: 3.1,
      },
      right: {
        val: 3.2,
      },
    },
  }),
);

console.log(
  IsBalanceBinaryTree({
    val: 1,
    left: {
      val: 1.2,
      left: {
        val: 5.1,
        left: {
          val: 6.1,
        },
      },
    },
    right: {
      val: 1.3,
      left: {
        val: 3.1,
      },
      right: {
        val: 3.2,
      },
    },
  }),
);

console.log(
  IsBalanceBinaryTree({
    val: 1,
    left: {
      val: 1.2,
      left: {
        val: 5.1,
      },
    },
  }),
);

console.log(
  IsBalanceBinaryTree({
    val: 1,
    left: {
      val: 1.2,
    },
  }),
);
