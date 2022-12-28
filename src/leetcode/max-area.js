const maxArea = (height) => {
  if (height.length < 2) {
    throw new Error("the number of height must be more than 2");
  }

  let i = 0;
  let j = height.length - 1;
  let maxiH = height[i];
  let maxjH = height[j];
  let maxS = 0;

  while (i < j) {
    const s = Math.min(maxiH, maxjH) * (j - i);

    if (s > maxS) {
      maxS = s;
    }

    if (height[i] <= height[j]) {
      while (height[i] <= maxiH && i < j) {
        i++;
      }
      maxiH = height[i];
    } else {
      while (height[j] <= maxjH && j > i) {
        j--;
      }
      maxjH = height[j];
    }
  }
  return maxS;
};

// const maxArea = (height) => {
//   let i = 0;
//   let j = height.length - 1;
//   let tempArea = 0
//   let area = 0;
//   let len = 0;
//
//   while (i < j) {
//     len = j - i;
//
//     if (height[i] < height[j]) {
//       tempArea = len * height[i];
//       i++;
//     } else {
//       tempArea = len * height[j];
//       j++;
//     }
//     area = area > tempArea ? area : tempArea;
//   }
//   return area;
// }

console.log(maxArea([1, 3, 2, 5, 25, 24, 5])); // 24
console.log(maxArea([1, 1])); // 1
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 2])); // 40
console.log(maxArea([1, 8, 6, 100, 100, 4, 8, 3, 2])); // 100
console.log(
  maxArea([1, 8, 6, 10, 10, 4, 8, 3, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1])
); // 18
