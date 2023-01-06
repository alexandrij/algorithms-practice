const fetch = require('node-fetch');

async function poolRequest(urls, callback, limit = 5) {
  urls = [...urls];

  if (urls.length === 0) return;

  while (urls.length > 0) {
    callback(await Promise.all(urls.splice(0, limit).map((url) => fetch(url))));
  }
}

const fakeFetch = async (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url + new Date());
    }, 1000);
  })
}

async function asyncRequests(urls, callback, limit = 5) {
  const asyncTasks = [];
  let results = [];

  for (let i = 0; i < limit; i++) {
    asyncTasks.push((async () => {
      let url;

      while (url = urls.shift()) {
        let res;
        try {
          res = {
            status: 'fulfilled',
            value: await fakeFetch(url)
          };
        } catch (e) {
          res = {
            status: 'rejected',
            reason: e
          }
        }
        results.push(res);
        if (results.length === limit) {
          callback(results);
          results = [];
        }
      }
    })());
  }

  await Promise.allSettled(asyncTasks);

  if (results.length > 0) {
    callback(results);
    results = [];
  }
}

const urls = [
  'http://example-app/async/data/1.json',
  'http://example-app/async/data/2.json',
  'http://example-app/async/data/3.json',
  'http://example-app/async/data/4.json',
  'http://example-app/async/data/5.json',
  'http://example-app/async/data/6.json',
  'http://example-app/async/data/7.json',
  'http://example-app/async/data/8.json',
  'http://example-app/async/data/9.json',
  'http://example-app/async/data/10.json',
];

asyncRequests(
  [...urls],
  (results) => {
    console.log('----');
    console.log(...results);
  },
  3,
);
