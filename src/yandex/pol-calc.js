/**
 * calc('7 2 * 3 +')    // 7 * 2 + 3 = 17
 * calc('7 2 3 * -')    // 7 - (2 * 3) = 1
 * calc('7 2 3 1 + * -') // 7 - 2 * (3 + 1) = -1
 *
 * calc('11 -12 -')       // 11 - -12 = 23
 * calc('7 2 3 1 * - - 3 5 + -') // 7 - (2 - 3 * 1) - 3 + 5 = 0
 *
 * calc('1 1 + +')      // Error in Syntax
 * calc('1 2 2 *')      // Error in Syntax
 * calc('1 b x + c -')    // Error in Operands
 */

function isOperator(s) {
  return s === '+' || s === '-' || s === '*' || s === '/';
}

function isOperand(s) {
  return !Number.isNaN(parseFloat(s));
}

function operate(a, b, op) {
  if (typeof a !== 'number') {
    throw new SyntaxError('Error in Syntax');
  }
  if (typeof b !== 'number') {
    throw new SyntaxError('Error in Syntax');
  }

  switch (op) {
    case '*': {
      return a * b;
    }
    case '/': {
      return a / b;
    }
    case '+': {
      return a + b;
    }
    case '-': {
      return a - b;
    }
  }

  throw new SyntaxError('Error in Syntax');
}

function calc(str) {
  const res = [];
  for (const s of str.split(' ')) {
    if (isOperator(s)) {
      const b = res.pop();
      const a = res.pop();
      res.push(operate(a, b, s));
    } else if (isOperand(s)) {
      res.push(parseFloat(s));
    } else {
      throw new SyntaxError('Error in Operands');
    }
  }
  if (res.length !== 1) {
    throw new SyntaxError('Error in Syntax');
  }
  return res.pop();
}

console.log(calc('7 2 * 3 +')); // 7 * 2 + 3 = 17
console.log(calc('7 2 3 * -')); // 7 - (2 * 3) = 1
console.log(calc('7 2 3 1 + * -')); // 7 - 2 * (3 + 1) = -1
console.log(calc('11 -12 -')); // 11 - -12 = 23
console.log(calc('7 2 3 1 * - - 3 5 + -')); // 7 - (2 - 3 * 1) - 3 + 5 = 0
console.log(calc('1')); // 1
console.log(calc('')); // 1
console.log(calc('1 1 + +')); // Error in Syntax
console.log(calc('1 2 2 *')); // Error in Syntax
console.log(calc('1 b x + c - ')); // Error in Sytax
