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
