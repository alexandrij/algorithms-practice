// Конкуретное выполнение задач

class QueueTasks {
  constructor(limitConcurrency, callback) {
    this.queue = [];
    this.limit = limitConcurrency;
    this.callback = callback;
  }

  enqueue(task) {
    this.queue.push(task);
  }

  dequeue() {
    return this.queue.shift();
  }

  loop() {
    const processes = [];
    for (let i = 0; i < this.limit; i++) {
      processes.push(
        (async () => {
          let task;
          while ((task = this.dequeue())) {
            await task();
          }
        })(),
      );
    }
    return Promise.all(processes).finally(() => {
      if (typeof this.callback === 'function') {
        this.callback();
      }
    });
  }
}

const fakeFetch = (val, time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, time);
  });
};
const queueTasks = new QueueTasks(2, () => {
  console.log('tasks finish');
});

for (let i = 0; i < 100; i++) {
  queueTasks.enqueue(() =>
    fakeFetch(i, Math.random() * 1000).then((res) =>
      console.log('fetch: ', res),
    ),
  );
}

const start = Date.now();
queueTasks.loop().finally(() => {
  console.log('time ', (Date.now() - start) / 1000);
});
