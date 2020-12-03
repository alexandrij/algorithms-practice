/**
 * calc('7 2 * 3 +')    // 7 * 2 + 3 = 17
 * calc('7 2 3 * -')    // 7 - (2 * 3) = 1
 * calc('7 2 3 1 + * -') // 7 - 2 * (3 + 1) = -1
 *
 * calc('11 -12 -)       // 11 - -12 = 23
 * calc('7 2 3 1 * - - 3 5 + -') // 7 - (2 - 3 * 1) - 3 + 5 = 0
 *
 * calc('1 1 + +')      // Error in Syntax
 * calc('1 2 2 *')      // Error in Syntax
 * calc('1 b x + c -')    // Error in Operands
 */

const calc = (str) => {
    return str
        .split(' ')
        .reduceRight((res, el) => {
            if (/^-?[0-9]+/.test(el)) {
                res[0].push(el);
            } else if (/^(+|-|*|)+/.test(el)) {

            }

            res.unshift(el);
            return res;
        }, []);
}

console.log(calc('7 2 * 3 +'));    // 7 * 2 + 3 = 17
console.log(calc('7 2 3 * -'));    // 7 - (2 * 3) = 1
console.log(calc('7 2 3 1 + * -')); // 7 - 2 * (3 - 1) = -1

console.log(calc('11 -12 -'));       // ??
console.log(calc('7 2 3 1 * - - 3 5 + -')); // ??

console.log(calc('1 1 + +'));      // Error in Syntax
console.log(calc('1 2 2 *'));      // Error in Syntax
console.log(calc('1 b x + c -'));    // Error in Operands

