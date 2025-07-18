const execOperation = (val1, val2, operator) => {
  switch (operator) {
    case '&':
      return val1 && val2;
    case '|':
      return val1 || val2;
    case '^':
      return val1 ^ val2;
    case '!':
      return !val2;
    default:
      throw new Error('Invalid operator');
  }
};

const exprSet = new Set(['&', '|', '^', '!']);

export const valueOfABooleanExpression = (exprStr) => {
  const handleExec = (stack) => {
    if (stack.length > 1 && exprSet.has(stack[stack.length - 2])) {
      const val2 = stack.pop();
      const oper = stack.pop();
      const val1 = stack.pop();
      stack.push(execOperation(val1, val2, oper));
    }
  };

  const stack = [];

  for (const expr of exprStr) {
    if (expr === '(') {
      stack.push(expr);
      continue;
    } else if (expr === ')') {
      let lastValue;
      const valuesInBrackets = [];

      while ((lastValue = stack.pop()) !== undefined && lastValue !== '(') {
        valuesInBrackets.push(lastValue);
        handleExec(valuesInBrackets);
      }
      stack.push(...valuesInBrackets);
    } else {
      stack.push(/^\d+$/.test(expr) ? Number(expr) : expr);
    }

    handleExec(stack);
  }

  return stack.pop();
};

// let stack;
// stack = [1];
// stack = [1, '|'];
// stack = [1, '|', '('];
// stack = [1, '|', '(', 0];
// stack = [1, '|', '(', 0, '&'];
// stack = [1, '|', '(', 0, '&', 0];
// stack = [1, '|', '(', 0];
// stack = [1, '|', '(', 0, '^'];
// stack = [1, '|', '(', 0, '^', 1];
// stack = [1, '|', '(', 1];
// stack = [1, '|', '(', 1];
// stack = [1, '|', 1];
// stack = [1];

console.debug(valueOfABooleanExpression('1|(0&0^1)')); // 1
console.debug(valueOfABooleanExpression('0|(0&0^1)')); // 1
console.debug(valueOfABooleanExpression('0&(1&0^1)')); // 0
console.debug(valueOfABooleanExpression('1&(1&(0^0|1))')); // 1
console.debug(valueOfABooleanExpression('1&(0&(0^0|1))')); // 0
console.debug(valueOfABooleanExpression('(1&(0&(0^0|1)))')); // 0
