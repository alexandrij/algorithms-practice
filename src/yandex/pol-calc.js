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

const calc = (str) => {
  const execOperation = (operand1, operand2, operation) => {
    switch (operation) {
      case '+':
        return operand1 + operand2;
      case '-':
        return operand1 - operand2;
      case '*':
        return operand1 * operand2;
      case '/':
        return operand1 / operand2;
    }
  };
  return str
    .split(' ')
    .reduce((res, el) => {
      if (/^-?[0-9]+$/.test(el)) {
        res.push(parseFloat(el));
      } else if (/[*+-]/.test(el)) {
        const b = res.pop();
        const a = res.pop();

        if (typeof a !== 'number' || typeof b !== 'number') {
          throw new Error('Error in Syntax');
        }
        res.push(execOperation(a, b, el));
      } else {
        throw new Error('Error in Operands');
      }
      return res;
    }, [])
    .reduce((res, el, i) => {
      if (i > 0) throw new SyntaxError('Error in Syntax');
      return el;
    });
};

console.log(calc('7 2 * 3 +')); // 7 * 2 + 3 = 17
console.log(calc('7 2 3 * -')); // 7 - (2 * 3) = 1
console.log(calc('7 2 3 1 + * -')); // 7 - 2 * (3 - 1) = -1

console.log(calc('11 -12 -')); // ??
console.log(calc('7 2 3 1 * - - 3 5 + -')); // ??

console.log(calc('1 1 + +')); // Error in Syntax
// console.log(calc('1 2 2 *'));      // Error in Syntax
// console.log(calc('1 b x + c -'));    // Error in Operands
