/**
 * Обёртка, которая будет предоставлять тот же API, но на промисах.
 * @param {Object} api
 * @returns {Object}
 */
function promisify(api) {
  switch (Object.prototype.toString.apply(api)) {
    case '[object Array]': {
      return api.map((item) => {
        return promisify(item);
      });
    }
    case '[object Object]': {
      const promisedApi = {};
      for (const key in api) {
        promisedApi[key] = promisify(api[key]);
      }
      return promisedApi;
    }
    case '[object Map]': {
      const promisedApi = new Map();
      for (const key in api) {
        promisedApi.set(key, promisify(api[key]));
      }
      return promisedApi;
    }
    case '[object Set]': {
      const promisedApi = new Set();
      api.forEach((item) => {
        promisedApi.add(promisify(item));
      });
      return promisedApi;
    }
    case '[object Function]': {
      return async function (...args) {
        return new Promise((resolve, reject) => {
          api((error, result) => {
            if (error) {
              reject(error);
            }
            resolve(result);
          }, ...args);
        });
      };
    }
    default: {
      return api;
    }
  }
}

const api = {
  a: {
    b: {
      c: (callback) => setTimeout(() => callback(null, `hello`), 100),
    },
  },
  aa: {
    bb: (callback, x, y) => setTimeout(() => callback(null, x + y), 200),
  },
  foo: {
    myConst: 1,
  },
};

const promisedApi = promisify(api);
promisedApi.a.b.c().then((res) => console.log(res));
promisedApi.aa.bb(5, 2).then((res) => console.log(res));
console.log(promisedApi.foo.myConst);

// module.exports = promisify;
