/**
 * calc('7 2 * 3 +')    // 7 * 2 + 3 = 17
 * calc('7 2 3 * -')    // 7 - (2 * 3) = 1
 * calc('7 2 3 1 + * -') // 7 - 2 * (3 - 1) = -1
 * 
 * calc('11 -12 -)       // ??
 * calc('7 2 3 1 * - - 3 5 + -') // ??
 * 
 * calc('1 1 + +')      // Error in Syntax
 * calc('1 2 2 *')      // Error in Syntax
 * calc('1 b x + c -')    // Error in Operands
 */

const calc = (function () {
    const execOperation = (operand1, operand2, operation) => {
        switch (operation) {
            case '+': return operand1 + operand2;
            case '-': return operand1 - operand2;
            case '*': return operand1 * operand2;
            case '/': return operand1 / operand2;
        }
    };

    const calc = (str) => {
        const debugObj = {
            operations: [],
            operands: [],
            numbers: null
        };

        const args = str.split(' ');
        const ops = ['+', '-', '*', '/'];
        const numbers = [];
        let operand1;
        let operand2;
        let operation;
        let arg;

        for (let i = 0, len = args.length; i < len; i++) {
            arg = args[i];

            if (ops.indexOf(arg) > -1) {
                operand2 = numbers.pop();
                operand1 = numbers.pop();
                operation = arg;

                if (!operand1 || !operand2) { 
                    throw new Error('Error in Syntax'); 
                }
                numbers.push(execOperation(operand1, operand2, operation));
            } else if (/^[0-9-]+$/.test(arg)) {
                numbers.push(parseFloat(arg));
            } else {
                throw new Error('Error in Operands');
            }
        }

        if (numbers.length > 1) {
            throw new Error('Error in Syntax');
        }
        return numbers[0];
    }
    return calc;
})();
