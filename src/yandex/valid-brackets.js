function isValidBrackets(str) {
  const brackets = [];
  let isValid = true;

  for (const s of str) {
    switch (s) {
      case '(':
      case '[':
      case '{':
        brackets.push(s);
        break;
      case ')': {
        if (brackets.pop() !== '(') {
          return false;
        }
        break;
      }
      case ']':
        if (brackets.pop() !== '[') {
          return false;
        }
        break;
      case '}':
        if (brackets.pop() !== '{') {
          return false;
        }
        break;
    }
  }
  return isValid && brackets.length === 0;
}

console.log(isValidBrackets('(2+1),[3,10],{}')); // true
console.log(isValidBrackets('3 [5,a,(3,4, {4,6})]')); // true
console.log(isValidBrackets('[4,6{], (4,6)}')); // false
console.log(isValidBrackets('[{4,5}')); // false
console.log(isValidBrackets('')); // true;