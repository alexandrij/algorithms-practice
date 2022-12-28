// eslint-disable-next-line no-undef
export const reverseString = (str) => {
  const arr = str.split('');
  let temp;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr.join('');
};
