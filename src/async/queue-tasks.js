// Конкуретное выполнение задач

class QueueTasks {

  #queue = [];
  #limit = 1;
  #callback;

  constructor(limitConcurrency, callback) {
    this.#queue = [];
    this.#limit = limitConcurrency;
    this.#callback = callback;
  }

  queue(task) {
    this.#queue.push(task);
  }

  qequeue() {
    return this.#queue.shift();
  }

  loop() {
    const processes = [];
    for (let i = 0; i < this.#limit; i++) {
      processes.push((async () => {
        let task;
        while (task = this.qequeue()) {
          await task();
        }
      })())
    }
    Promise.all(processes).finally(() => {
      if (typeof this.#callback === 'function') {
        this.#callback();
      }
    });
  }
}

const fakeFetch = (val, time = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(val);
    }, time)
  })
}
const queueTasks = new QueueTasks(2, () => {
  console.log('tasks finish')
});
for (let i = 0; i < 30; i++) {
  queueTasks.queue(() => fakeFetch(i, Math.random() * 1000).then((res) => console.log('fetch: ', res)));
}
queueTasks.loop();