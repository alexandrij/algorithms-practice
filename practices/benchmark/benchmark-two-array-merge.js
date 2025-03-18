function benchmarkArrayMergeBySpread(arr1, arr2) {
  const m1 = process.memoryUsage();
  const t1 = performance.now();

  const merged = [...new Set([...arr1, ...arr2])];
  console.debug(`result merged: ${merged.length}`);

  return {
    time: performance.now() - t1,
    memory: process.memoryUsage().heapUsed - m1.heapUsed,
  };
}

function benchmarkArrayMergeByArrayFromSpread(arr1, arr2) {
  const m1 = process.memoryUsage();
  const t1 = performance.now();

  const merged = Array.from(new Set([...arr1, ...arr2]));
  console.debug(`result merged: ${merged.length}`);

  return {
    time: performance.now() - t1,
    memory: process.memoryUsage().heapUsed - m1.heapUsed,
  };
}

function benchmarkArrayMergeByArrayFromConcat(arr1, arr2) {
  const m1 = process.memoryUsage();
  const t1 = performance.now();

  const merged = Array.from(new Set(arr1.concat(arr2)));
  console.debug(`result merged: ${merged.length}`);

  return {
    time: performance.now() - t1,
    memory: process.memoryUsage().heapUsed - m1.heapUsed,
  };
}

for (const n of [10000, 50000, 100000]) {
  const arr1 = Array.from({ length: n }, (_, i) => i + 1);
  const arr2 = Array.from({ length: n }, (_, i) => i + 1);

  console.group(`*** benchmark ${n} ***`);
  {
    const { time, memory } = benchmarkArrayMergeBySpread(arr1, arr2);
    console.info(`[...new Set([...arr1, ...arr2])]: ${time.toFixed(2)}мc.; memory: ${memory}`);
  }
  {
    const { time, memory } = benchmarkArrayMergeByArrayFromSpread(arr1, arr2);
    console.info(`Array.from(new Set([...arr1, ...arr2])): ${time.toFixed(2)}мc.; memory: ${memory}`);
  }
  {
    const { time, memory } = benchmarkArrayMergeByArrayFromConcat(arr1, arr2);
    console.info(`Array.from(new Set(arr1.concat(arr2))): ${time.toFixed(2)}мc.; memory: ${memory}`);
  }

  console.groupEnd();
  console.info('\n');
}
