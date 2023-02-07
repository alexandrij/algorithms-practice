const dict = {
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
};

function combinations(nums, pos = 0, pfx = '') {
  if (nums.length < 1) {
    return [];
  }
  pos = typeof pos === 'number' ? pos : 0;
  pfx = typeof pfx === 'string' ? pfx : '';

  const prefixes = dict[nums[pos]];
  const end = nums.length - 1;
  let res = [];

  for (const i in prefixes) {
    if (pos < end) {
      res = res.concat(combinations(nums, pos + 1, pfx + prefixes[i]));
    } else {
      res.push(pfx + prefixes[i]);
    }
  }
  return res;
}

// console.log(combinations('23').join(' ')); // ad ae af bd be bf cd ce cf
// console.log(combinations('234').join(' '));

process.stdin.on('data', (data) => {
  process.stdout.write(combinations(data.toString().trim()).join(' '));
  process.exit();
});
