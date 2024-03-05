function benchmarkArrayInsertByIndex(len) {
  const arr = new Array(len);

  const t1 = performance.now();
  for (let i = 0; i < len; i++) {
    arr[i] = i;
  }
  return performance.now() - t1;
}

function benchmarkArrayPush(len) {
  const arr = [];
  const t1 = performance.now();
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return performance.now() - t1;
}

function benchmarkArrayInsertSpread(len) {
  let arr = [];
  const t1 = performance.now();
  for (let i = 0; i < len; i++) {
    arr = [...arr, i];
  }
  return performance.now() - t1;
}

for (let i = 0; i < 5; i++) {
  console.group(`benchmark array push: ${i}`);
  for (const n of [1000, 10000, 15000, 20000, 50000, 100000]) {
    console.group(`*** benchmark ${n} ***`);
    console.info(`Память под массив выделен заранее: arr[i] = el: ${benchmarkArrayInsertByIndex(n).toFixed(2)}мc.`);
    console.info(`Добавление элементов с помощью: arr.push(el): ${benchmarkArrayPush(n).toFixed(2)}мс.`);
    console.info(
      `Добавление элементов пересозданием: arr = [...arr, el]: ${benchmarkArrayInsertSpread(n).toFixed(2)}мс.`,
    );
    console.groupEnd();
    console.info('\n');
  }
  console.groupEnd();
}
