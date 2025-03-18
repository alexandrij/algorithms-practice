/**
 * @param {Node} root
 */
function getMaxValue(root) {
  let max = root.val;
  if (root.left) {
    max = Math.max(max, getMaxValue(root.left));
  }
  if (root.right) {
    max = Math.max(max, getMaxValue(root.right));
  }
  return max;
}

console.log(
  getMaxValue({
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
