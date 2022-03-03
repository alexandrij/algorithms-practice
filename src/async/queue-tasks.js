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
    for (let i = 0; i < this.#limitParallel; i++) {
      processes.push((async () => {
        let task;
        while (task = this.qequeue()) {
          await task();
        }
      })())
    }
    Promise.allSettled(processes).then(() => {
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
queueTasks.queue(() => fakeFetch(1, 100).then((res) => console.log('fetch: ', res)));
queueTasks.queue(() => fakeFetch(2, 500).then((res) => console.log('fetch: ', res)));
queueTasks.queue(() => fakeFetch(3, 200).then((res) => console.log('fetch: ', res)));
queueTasks.queue(() => fakeFetch(4, 600).then((res) => console.log('fetch: ', res)));
queueTasks.queue(() => fakeFetch(5, 100).then((res) => console.log('fetch: ', res)));

queueTasks.loop();