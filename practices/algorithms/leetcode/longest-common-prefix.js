const longestCommonPrefix = (strs) => {
  let longestPfx = strs[0];
  for (let i = 1, len = strs.length; i < len; i++) {
    for (let j = 0, l = longestPfx.length; j < l; j++) {
      if (longestPfx[j] !== strs[i][j]) {
        longestPfx = longestPfx.substring(0, j);
        break;
      }
    }
  }
  return longestPfx;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight'])); // fl
console.log(longestCommonPrefix(['dog', 'racecar', 'car'])); // ''
console.log(longestCommonPrefix([''])); // ''
console.log(longestCommonPrefix(['dddd'])); // ''
console.log(longestCommonPrefix(['dddd', 'ssdd'])); // ''
console.log(longestCommonPrefix(['a', 'as'])); // ''
