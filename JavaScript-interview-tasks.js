// 1. Приоритет выполнения асинхронных вызовов
let a = 5;

setTimeout(() => {
  console.log(`from setTimeout ${a}`);
  a = 6;
}, 0);

const promise = new Promise((resolve) => {
  console.log(`from Promise ${a}`);
  a = 7;
  resolve();
});

promise.then(() => {
  console.log(`from Promise then ${a}`);
  a = 8;
});

console.log(`from ${a}`);


// 2. Реализовать функцию unique, которая возвращает массив уникальные элементов
const unique = (arr) => {

}
console.log([1, 4, 1, 4, 2, 9, 3, 4, 3, 7, 8]) // [1,4,2,9,3,7,8]

// 3. Реализовать n попыток авторизации в случае неудачного ответа.
const auth = (() => {
  let cur = 0;
  return (callback) => {
    setTimeout(() => {
      if (cur++ === 3) {
        cur = 0;
        callback(null, { sessionId: 'sssss' });
      } else {
        callback(new Error('auth is failed'));
      }
    }, 400);
  }
})();

const tryAuth = (n) => {

}
// tryAuth(1).then(data => console.log(data)).catch(error => console.log(error));
// tryAuth(3).then(data => console.log(data)).catch(error => console.log(error));
// tryAuth(5).then(data => console.log(data)).catch(error => console.log(error));

const auth = (() => {
  let cur = 0;
  return (callback) => {
    setTimeout(() => {
      if (cur++ === 3) {
        cur = 0;
        callback(null, { sessionId: 'sssss' });
      } else {
        callback(new Error('auth is failed'));
      }
    }, 1000);
  }
})();

// Написать функцию
const urls = [
  "http://example-app/async/data/1.json",
  "http://example-app/async/data/2.json",
  "http://example-app/async/data/3.json",
  "http://example-app/async/data/4.json",
  "http://example-app/async/data/5.json",
  "http://example-app/async/data/6.json",
  "http://example-app/async/data/7.json",
  "http://example-app/async/data/8.json",
  "http://example-app/async/data/9.json",
  "http://example-app/async/data/10.json",
];
const MAX_IN_POOL = 3
const poolRequest = async (urls, callback) => {
  if (!urls || !urls.length) {
    return
  }

  const executedPromises = []


  for (let url of urls) {
    if (executedPromises.length < MAX_IN_POOL) {
      executedPromises.push(fetch(url))
    }
  }

  const data = await Promise.allSettled(executedPromises)
  callback(data)
  poolRequest(urls.slice(MAX_IN_POOL))
};




