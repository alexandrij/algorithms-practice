import { Queue } from '../data-structures/queue.js';
import stream from './stream.json';

function benchmarkArrayEnqueueDequeue(len) {
  const t1 = performance.now();

  const queue1 = [];
  const queue2 = [];
  for (let i = 0; i < len; i++) {
    let obj = {};
    queue1.push({ ...stream });
    obj[i] = i;
    queue2.push({ ...stream });
    obj[i + 1] = i + 1;
    const el1 = queue1.shift();
    obj = undefined;
    const el2 = queue2.shift();
    // console.info(el);
  }

  return performance.now() - t1;
}

function benchmarkQueueEnqueueDequeue(len) {
  const t1 = performance.now();

  const queue1 = new Queue();
  const queue2 = new Queue();
  for (let i = 0; i < len; i++) {
    let obj = {};
    queue1.enqueue({ ...stream });
    obj[i] = i;
    queue2.enqueue({ ...stream });
    obj[i + 1] = i;
    const el1 = queue1.dequeue();
    obj = undefined;
    const el2 = queue2.dequeue();
    // console.info(el);
  }

  return performance.now() - t1;
}

for (let i = 0; i < 5; i++) {
  console.group(`benchmark queue: ${i}`);
  for (const len of [1000, 10000, 15000, 20000, 50000, 100000]) {
    console.group(`*** benchmark ${len} ***`);
    console.info(
      `Очередь на основе массива: array.push(el) и array.shift(): ${benchmarkArrayEnqueueDequeue(len).toFixed(2)}мс.`,
    );
    console.info(
      `Очередь на основе двусвязанного списка: queue.enqueue(el) и queue.dequeue(): ${benchmarkQueueEnqueueDequeue(
        len,
      ).toFixed(2)}мс.`,
    );
    console.groupEnd();
    console.info('\n');
  }
  console.groupEnd();
}
