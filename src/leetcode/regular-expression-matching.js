const isMatch = (s, p) => {

}

process.stdout.write(isMatch('aa', 'a')); // false
process.stdout.write(isMatch('aa', 'a*')); // true
process.stdout.write(isMatch('ab', '.*')); // true
process.stdout.write(isMatch("aab","c*a*b")); // true
process.stdout.write(isMatch("mississippi","mis*is*p*.")); // false
