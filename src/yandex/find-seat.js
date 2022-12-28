function findSeat(arr) {
  let best = 0;
  let cur = 0;

  arr.forEach((el) => {
    if (el === 0) {
      cur++;
    } else {
      best = Math.max(best, Math.ceil(cur / 2));
      cur = 0;
    }
  });
  return Math.max(best, Math.ceil(cur / 2));
}

console.log(findSeat([0, 1, 0]));
console.log(findSeat([0, 1, 0, 0, 0, 1]));
console.log(findSeat([0, 1, 0, 0, 0, 0, 1]));
console.log(findSeat([0, 1, 0, 0, 0, 0, 0, 1]));
