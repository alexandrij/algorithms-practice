process.stdin.on('data', (data) => {
  const [h, m] = data.toString().split(' ');
  const res = mirrorTime(parseInt(h), parseInt(m));
  process.stdout.write(res.join(' '));
  process.exit();
});

function mirrorTime(hours, minutes) {
  if (hours < 0 || hours > 11) {
    throw new Error('The "hours" parameter must be greater than or equal to 0 and less than or equal to 11');
  }
  if (minutes < 0 || minutes > 59) {
    throw new Error('The "minutes" parameter must be greater than or equal to 0 and less than or equal to 59');
  }
  return [hours === 0 ? 0 : 12 - hours, minutes === 0 ? 0 : 60 - minutes];
}

//
// console.log(mirrorTime(2, 45)); // 10 15
// console.log(mirrorTime(10, 15)); // 10 15
// console.log(mirrorTime(0, 0)); // 10 15
// console.log(mirrorTime(11, 59)); // 10 15
// console.log(mirrorTime(1, 1)); // 10 15
// console.log(mirrorTime(6, 30)); // 10 15
