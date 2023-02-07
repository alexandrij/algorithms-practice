const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
});

const getSequenceOfUnits = (nums) => {
  let best = 0;
  let cur = 0;

  for (const n of nums) {
    if (n === 1) {
      cur++;
      best = Math.max(best, cur);
    } else {
      cur = 0;
    }
  }
  return best;
};

let i = 0;
let lines = [];
rl.on('line', (line) => {
  if (++i > 1) lines.push(Number(line));
}).on('close', () => {
  process.stdout.write(String(getSequenceOfUnits(lines)));
});
