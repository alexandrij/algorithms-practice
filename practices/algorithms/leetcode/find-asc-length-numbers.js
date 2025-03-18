// в массиве из чисел нужно найти наибольший неубывающий подотрезок, то есть такой
// подотрезок из чисел, где каждое следующее число больше или равно предыдущему.
// При разработке алгоритма важно учитывать крайние случаи и время, за которое он выполнится.

const findMaxAscNumbers = (nums) => {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;

  let left = 0;
  let right = 1;
  let max = 0;

  while (right < nums.length) {
    if (nums[right - 1] > nums[right]) {
      left = right;
    }
    right++;

    max = Math.max(max, right - left);
  }

  return max;
};

{
  // 0,0 []
  // 0,1 [1]
  // 0,2 [1,2]
  // 0,3 [1,2,3]
  // 0,4 [1,2,3,]
  // 0,3 [1,2,3]
  console.debug(findMaxAscNumbers([1, 2, 3, -1, -3, 1, 2, 2, 3, 4, 4, 5, 0, 4]));
  console.debug(findMaxAscNumbers([1, 2, 3, -1, -3, 1, 2, 2, 3, 4, 4, 5]));
  console.debug(findMaxAscNumbers([-1, -3, 1, 2, 2, 3, 4, 4, 5]));
  console.debug(findMaxAscNumbers([1]));
  console.debug(findMaxAscNumbers([]));
}
