/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) => {
    let i = 0;
    let reverse = 0;
    while (x >= reverse) {
        let rem = x % 10;
        reverse = reverse * 10 + rem;

        if (i % 2) {
            if (reverse === x)
                break;
            x = (x - rem) / 10;
        } else if ( x > 9) {
            x = (x - rem) / 10;
            if (reverse === x)
                break;
        }
        i++;
    }
    return x === reverse;
}

console.log(isPalindrome(121)); // true
console.log(isPalindrome(220)); // false
console.log(isPalindrome(10)); // false
console.log(isPalindrome(22122)); // true
console.log(isPalindrome(1234554321)); // true
console.log(isPalindrome(0)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(111)); // true
console.log(isPalindrome(-101)); // false
