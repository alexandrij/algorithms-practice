// Дан массив чисел, требуется найти число подмассивов, в которых значения всех чисел различны.

const findUniqueSubArrayOfNumbers = (numbers) => {
  const numIndexes = new Map();
  const results = [];
  let count = 0;
  let left = 0;
  let right = 0;

  while (right < numbers.length) {
    if (numIndexes.has(numbers[right])) {
      left = numIndexes.get(numbers[right]) + 1;
    }

    if (left < right) {
      count++;
      const subNumbers = numbers.slice(left, right);
      results.push(subNumbers);
    }

    numIndexes.set(numbers[right], right);
    right++;
  }

  if (left < right) {
    count++;
    results.push(numbers.slice(left));
  }

  console.debug(results.length, count);

  return results;
};

{
  console.debug(findUniqueSubArrayOfNumbers([5, 2, 3, 5, 4, 3]));

  // Map(number: index)

  // 0, 0, []
  // 0, 1, [5, 2]
  // 0, 2, [5, 2, 3]
  // 1, 3, [2, 3, 5]
  // 1, 4, [2, 3, 5, 4]
  // 3, 5, [5, 4, 3]

  const results = [
    [5, 2, 3],
    [2, 3, 5, 4],
    [5, 4, 3],
  ];
}

{
  console.debug(findUniqueSubArrayOfNumbers([1, 2, 2, 3, 4, 5, 6, 6, 7, 8, 9, 10]));
}
