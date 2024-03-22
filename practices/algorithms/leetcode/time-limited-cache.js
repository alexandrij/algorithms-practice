class TimeLimitedCache {
  constructor() {
    this.tasks = {};
    this.data = {};
    this.size = 0;
  }

  set(key, value, duration) {
    const ok = key in this.data;

    if (ok) {
      clearTimeout(this.tasks[key]);
    } else {
      this.size++;
    }

    this.data[key] = value;

    if (typeof duration === 'number') {
      this.tasks[key] = setTimeout(() => {
        delete this.data[key];
        this.size--;
      }, duration);
    }

    return ok;
  }

  get(key) {
    return key in this.data ? this.data[key] : -1;
  }

  count() {
    return this.size;
  }
}

const timeCache = new TimeLimitedCache();
timeCache.set(1, 42, 1000);
timeCache.set(2, 45, 1000);
timeCache.set(4, 48, 2000);
timeCache.set(5, 48);

console.log(timeCache.get(1), timeCache.count());
console.log(timeCache.get(2), timeCache.count());
setTimeout(() => {
  console.log(timeCache.get(1), timeCache.count());
  console.log(timeCache.get(5), timeCache.count());
}, 1000);
