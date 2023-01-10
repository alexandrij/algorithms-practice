const longestPalindrome = (s) => {
  const expandAroundCenter = (s, left, right) => {
    let res = '';
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      res = left !== right ? s.charAt(left) + res + s.charAt(right) : s.charAt(left) + res;
      left--;
      right++;
    }
    return res;
  };

  if (s == null || s.length < 1) return '';

  let best = '';

  for (let i = 0; i < s.length; i++) {
    let cur1 = expandAroundCenter(s, i, i);
    let cur2 = expandAroundCenter(s, i, i + 1);
    let cur = cur1.length >= cur2.length ? cur1 : cur2;
    best = cur.length > best.length ? cur : best;
  }
  return best;
};

console.log(longestPalindrome('bddb')); // bab or aba
console.log(longestPalindrome('bdddb')); // bab or aba
console.log(longestPalindrome('babad')); // bab or aba
console.log(longestPalindrome('babab')); // bab or aba
console.log(longestPalindrome('cbbd')); // bb
console.log(longestPalindrome('a')); // a
console.log(longestPalindrome('ac')); // a
