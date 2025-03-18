function maxLengthSubstring(str) {
  const words = new Set();
  let uniqBest = 0;

  for (const s of str) {
    if (words.has(s)) {
      words.clear();
    } else {
      words.add(s);
      uniqBest = Math.max(uniqBest, words.size);
    }
  }
  return uniqBest;
}

console.log(maxLengthSubstring('abcabcbb'));
console.log(maxLengthSubstring('aaaaaaa'));
console.log(maxLengthSubstring(''));
console.log(maxLengthSubstring('aaaabcaaabcd'));
