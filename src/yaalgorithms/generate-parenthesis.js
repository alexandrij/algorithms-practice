const generateParenthesis = (control, n1, n2, prefix) => {
  let res = [];
  if (n1 === 0 && n2 === 0) {
    res.push(prefix);
  } else {
    if (n1 > 0) {
      res = res.concat(generateParenthesis(control + 1, n1 - 1, n2, prefix + '('));
    }
    if (control > 0 && n2 > 0) {
      res = res.concat(generateParenthesis(control - 1, n1, n2 - 1, prefix + ')'));
    }
  }
  return res;
};

console.log(generateParenthesis(0, 2, 2, ''));
console.log(generateParenthesis(0, 3, 3, ''));
console.log(generateParenthesis(0, 4, 4, ''));
