import readline from 'readline';

const getCountInputSymbol = (a, b) => {
  const aSet = new Set(a);
  return b.split('').filter((s) => aSet.has(s)).length;
};

console.log(getCountInputSymbol('драгоценности', 'камни'));

const rl = readline.createInterface({
  input: process.stdin,
});

let lines = [];
rl.on('line', (line) => {
  lines.push(line);
}).on('close', () => {
  const [a, b] = lines;
  const aSet = new Set(a);
  const result = Array.from(b).filter((s) => aSet.has(s)).length;
  process.stdout.write(result.toString());
});
