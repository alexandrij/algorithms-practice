function swap(str, a, b) {
  const arr = str.split('');
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  return arr.join('');
}

export const permutation = (str, start = 0) => {
  if (start > str.length - 1) {
    return [];
  }

  const result = permutation(str, start + 1);

  for (let i = start + 1; i < str.length; i++) {
    const permutated = swap(str, start, i);

    result.push(permutated);
    result.push(...permutation(permutated, start + 1));
  }

  return result;
};

export const permutationQueue = (str) => {
  let queue = [str];
  let start = 0;

  while (start < str.length) {
    const result = [];
    while (queue.length > 0) {
      const cur = queue.shift();

      result.push(cur);
      for (let i = start + 1; i < cur.length; i++) {
        const permutated = swap(cur, start, i);
        result.push(permutated);
      }
    }
    queue = [...result];
    start++;
  }

  return queue;
};

console.log(permutationQueue('abc'));
console.log(permutationQueue('abcd'));
console.log(permutationQueue('abcde'));

// abc 0, 1, 2
// acb 0, 2, 1
// bac 1, 0, 2
// bca 1, 2, 0
// cab 2, 0, 1
// cba 2, 1, 0