import readline from 'readline';

const getSequenceOfUnits = (n) => {
  let best = 0;
  let cur = 0;

  n.forEach((el) => {
    if (el === 1) {
      cur++;
      best = Math.max(best, cur);
    } else {
      cur = 0;
    }
  });
  return best;
};

const rl = readline.createInterface({
  input: process.stdin,
});

let lines = [];
rl.on('line', (line) => {
  lines.push(Number(line));
}).on('close', () => {
  process.stdout.write(String(getSequenceOfUnits(lines)));
});
