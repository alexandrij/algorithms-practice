const findLatestWeight = (weights) => {
  if (weights.length === 0) {
    return 0;
  }
  if (weights.length === 1) {
    return weights[0];
  }

  let max1 = 0;
  let max2 = 0;
  weights[0] > weights[1] ? (max1 = weights[1]) && (max2 = weights[0]) : (max2 = weights[1]) && (max1 = weights[0]);

  for (let i = 2; i < weights.length; i++) {
    if (max1 < weights[i]) {
      if (max2 < weights[i]) {
        max1 = max2;
        max2 = weights[i];
      } else {
        max1 = weights[i];
      }
    }
  }
  return;
};

// [1, 3, 2, 7, 9, 2][(1, 9, 1, 1, 1)];
//
// max1 = 1;
// max1 = 2;
// max2 = 3;
// max2;
