const fakeFetch = async (url) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`fetched: ${url}`);
    }, 1000);
  });
};

export async function asyncRequests(urls, callback, limit = 5) {
  const asyncTasks = [];
  let results = [];
  let j = 0;

  for (let i = 0; i < limit; i++) {
    asyncTasks.push(
      (async () => {
        let url;
        const taskResults = [];

        while ((url = urls[j])) {
          j++;

          let res;
          try {
            res = {
              status: 'fulfilled',
              value: await fakeFetch(url),
            };
          } catch (e) {
            res = {
              status: 'rejected',
              reason: e,
            };
          }
          results.push(res);
          taskResults.push(res);

          if (results.length === limit) {
            callback(results);
            results = [];
          }
        }
        return taskResults;
      })(),
    );
  }

  const allresults = await Promise.all(asyncTasks);

  if (results.length > 0) {
    callback(results);
  }

  return allresults.flat();
}

// const urls = [
//   'http://example-app/async/data/1.json',
//   'http://example-app/async/data/2.json',
//   'http://example-app/async/data/3.json',
//   'http://example-app/async/data/4.json',
//   'http://example-app/async/data/5.json',
//   'http://example-app/async/data/6.json',
//   'http://example-app/async/data/7.json',
//   'http://example-app/async/data/8.json',
//   'http://example-app/async/data/9.json',
//   'http://example-app/async/data/10.json',
// ];
//
// asyncRequests(
//   urls,
//   (results) => {
//     console.log(results.length);
//     console.log('----');
//   },
//   3,
// ).then((results) => {
//   console.log(results);
// });
