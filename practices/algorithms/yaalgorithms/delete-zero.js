/**
 * Удаляем нули.
 *
 * Дан массив целых чисел. Нужно удалить из него нули.
 * Можно использовать только О(1) дополнительной памяти.
 */
const deleteZero = (nums) => {
  let len = 0;
  for (const el of nums) {
    if (el !== 0) {
      nums[len] = el;
      len += 1;
    }
  }
  nums.length = len;
  return nums;
};

console.log(deleteZero([1, 2, 3, 0, 0, 4, 5]));
