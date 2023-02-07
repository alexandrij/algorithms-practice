function getCountHappyChildsByCrackers(childGreeds, getCountHappyChildsByCrackersizes) {
  const sortedChildGreeds = childGreeds.sort((a, b) => a - b);
  const sortedgetCountHappyChildsByCrackersizes = getCountHappyChildsByCrackersizes.sort((a, b) => a - b);

  let happy = 0;
  let i = 0;
  let j = 0;
  for (; i < sortedgetCountHappyChildsByCrackersizes.length; i++) {
    if (sortedgetCountHappyChildsByCrackersizes[i] >= sortedChildGreeds[j]) {
      happy += 1;
      j += 1;
    }
    if (j === sortedChildGreeds.length) {
      break;
    }
  }
  return happy;
}

console.log(getCountHappyChildsByCrackers([1, 2], [2, 1, 3]));
console.log(getCountHappyChildsByCrackers([1, 2, 3], [2, 1, 3]));
console.log(getCountHappyChildsByCrackers([1, 2, 3, 4], []));
console.log(getCountHappyChildsByCrackers([], []));
console.log(getCountHappyChildsByCrackers([], [2]));
console.log(getCountHappyChildsByCrackers([9, 9, 9, 9, 9], [9, 1, 2, 0, 5]));
console.log(getCountHappyChildsByCrackers([9, 1, 2, 8, 8], [9, 1, 2, 0, 5]));
console.log(getCountHappyChildsByCrackers([], [9, 1, 2, 0, 5]));

// import readline from 'readline';
//
// const rl = readline.createInterface({
//   input: process.stdin,
// });
//
// let childGreeds;
// let getCountHappyChildsByCrackersizes;
// let i = 0;
// rl.on('line', (line) => {
//   if (i === 1) {
//     childGreeds = line.split(' ');
//   } else if (i === 3) {
//     getCountHappyChildsByCrackersizes = line.split(' ');
//     rl.close();
//   }
//   i++;
// }).on('close', () => {
//   process.stdout.write(getCountHappyChildsByCrackers(childGreeds, getCountHappyChildsByCrackersizes).toString());
// });
