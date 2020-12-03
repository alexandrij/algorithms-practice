const palindrome = (word) => {
    const pureWord = word.toLowerCase().split('').filter((s) => /[a-zа-я0-9]/.test(s));
    return pureWord.join('') === pureWord.reverse().join('');
}

console.log(palindrome('Кони, топот, инок,'));
console.log(palindrome('Идем, молод, долом меди.'));
console.log(palindrome('Но не речь, а черен он.'));
console.log(palindrome('И к вам и трем с смерти мавки.'));
console.log(palindrome(''));
console.log(palindrome('sssss'));
console.log(palindrome('sasha'));
console.log(palindrome('dsfasdfasfdasfasdfasdfasdfasdfas'));
