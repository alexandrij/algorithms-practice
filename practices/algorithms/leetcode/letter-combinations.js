const digitalLetters = {
  1: [],
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

const letterCombinations = (digits) => {
  return digits.split('').reduce((acc, d) => {
    const letters = d in digitalLetters ? digitalLetters[d].split('') : [];
    return acc.length === 0
      ? letters
      : letters.reduce((join, s) => {
          return join.concat(acc.map((a) => a + s));
        }, []);
  }, []);

  // const output = [];
  // const digit = digits[i];
  // const syms = digit in letters ? letters[digit] : '';
  //
  // for (const s of syms) {
  //   const ss = str + s;
  //
  //   if (i < digits.length - 1) {
  //     output.push(...letterCombinations(digits, ss, i + 1));
  //   } else {
  //     output.push(ss);
  //   }
  // }
  // return output;
};

console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('234')); // ["adg","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('2')); // ["a", "b", "c"]
console.log(letterCombinations('')); // []
