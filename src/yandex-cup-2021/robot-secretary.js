const readline = require('readline').createInterface({
  input: process.stdin,
});

const values = [];

readline
  .on('line', (line) => {
    values.push(line.split`\n`);
  })
  .on('close', () => {
    const str = values[0];
    const n = str.length;
    const dyn = [[0], [2 * n + 2]];
    for (let i = 0; i < n; i++) {
      const c = str.charAt(i);
      if (c >= 'a' && c <= 'z') {
        dyn[1][i + 1] = dyn[1][i] + 1;
        dyn[0][i + 1] = Math.min(dyn[0][i], dyn[1][i] + 2);
      } else if (c >= 'A' && c <= 'Z') {
        dyn[0][i + 1] = dyn[0][i] + 1;
        dyn[1][i + 1] = Math.min(dyn[1][i], dyn[0][i] + 2);
      } else {
        dyn[0][i + 1] = dyn[0][i];
        dyn[1][i + 1] = dyn[1][i];
      }
    }
    const res = Math.min(dyn[0][n], dyn[1][n]) + n;
    process.stdout.write(res.toString());
  });

/*

process.stdin.on('data', data => {
    const str = data.toString().trim();
    const n = str.length;
    const dyn = [[0], [2 * n + 2]];
    for (let i = 0; i < n; i++) {
        const c = str.charAt(i);
        if (c >= 'a' && c <= 'z') {
            dyn[1][i + 1] = dyn[1][i] + 1;
            dyn[0][i + 1] = Math.min(dyn[0][i], dyn[1][i] + 2);
        } else if (c >= 'A' && c <= 'Z') {
            dyn[0][i + 1] = dyn[0][i] + 1;
            dyn[1][i + 1] = Math.min(dyn[1][i], dyn[0][i] + 2);
        } else {
            dyn[0][i + 1] = dyn[0][i];
            dyn[1][i + 1] = dyn[1][i];
        }
    }
    const res = Math.min(dyn[0][n], dyn[1][n]) + n;
    process.stdout.write(res.toString());
    process.exit();
});*/
