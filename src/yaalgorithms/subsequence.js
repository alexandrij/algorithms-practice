/**
 * Условие
 * Гоша любит играть в игру «Подпоследовательность»: даны 2 строки, и нужно понять, является ли первая из них подпоследовательностью второй.
 *
 * Когда строки достаточно длинные, очень трудно получить ответ на этот вопрос, просто посмотрев на них. Помогите Гоше написать функцию, которая решает эту задачу.
 *
 * Формат ввода
 * В первой строке записана строка s.
 *
 * Во второй —- строка t.
 *
 * Обе строки состоят из маленьких латинских букв, длины строк не превосходят 150000. Строки могут быть пустыми.
 *
 * Формат вывода
 * Выведите True, если s является подпоследовательностью t, иначе —– False.
 *
 * @param s
 * @param t
 * @returns {boolean}
 */
function subsequence(s, t) {
  const lens = s.length;
  const lent = t.length;

  if (lens === 0) {
    return true;
  }
  if (lens > lent) {
    return false;
  }

  let i = 0;
  let j = 0;
  for (; j < lent; j++) {
    if (s[i] === t[j]) {
      i++;
    }
    if (i === lens) {
      return true;
    }
  }
  return false;
}

// console.log(subsequence('abc', 'ahbgdcu')); // true
// console.log(subsequence('abcu', 'ahbgdcu')); // true
// console.log(subsequence('aa', 'ahbgdcu')); // false
// console.log(subsequence('abw', 'ahbgdcu')); // false
// console.log(subsequence('a', '')); // false
// console.log(subsequence('', '')); // true
// console.log(subsequence('', 'aa')); // true

import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
});

let s = '';
let t = '';
let i = 0;
rl.on('line', (line) => {
  if (i === 0) {
    s = line;
  } else {
    t = line;
    rl.close();
  }
  i++;
}).on('close', () => {
  process.stdout.write(subsequence(s, t) ? 'True' : 'False');
});
