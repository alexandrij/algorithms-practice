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

function proxyPromisify(api, cache = new WeakMap()) {
  if (Object(api) !== api) {
    throw new Error('api must be not primitive');
  }

  if (cache.has(api)) {
    return cache.get(api);
  }

  const promised = new Proxy(api, {
    apply(target, receiver, args) {
      return new Promise((resolve, reject) => {
        target.call(
          receiver,
          (err, res) => {
            if (err) {
              reject(err);
            } else {
              resolve(res);
            }
          },
          ...args,
        );
      });
    },
    get(target, prop, reciever) {
      const api = Reflect.get(target, prop, reciever);
      if (Object(api) === api) {
        return proxyPromisify(api, cache);
      }
      return api;
    },
    // has(target, prop) {
    //   if (prop === Symbol.for('proxy')) {
    //     console.info('proxied');
    //     return true;
    //   }
    //   return prop in target;
    // },
  });

  cache.set(api, promised);

  return promised;
}

const api = {
  a: {
    b: {
      c: (callback) => {
        setTimeout(() => callback(null, `hello`), 100);
      },
      d: function (callback) {
        this.c(callback);
      },
    },
  },
  aa: {
    bb: (callback, x, y) => {
      setTimeout(() => {
        callback(null, x + y);
      }, 200);
    },
  },
  foo: {
    v: 2,
    _myConst: 1,
    get myConst() {
      return this._myConst;
    },
  },
  mm: new Set([1, 2, 3]),
};

const promisedApi = proxyPromisify(api);

console.log(promisedApi.foo.myConst);
console.log(promisedApi.mm);
promisedApi.a.b.c().then((res) => {
  console.log('c()', res);
});
promisedApi.a.b.c().then((res) => {
  console.log('c()', res);
});
promisedApi.aa.bb(5, 2).then((res) => console.log(res));
promisedApi.aa.bb('dd', 'aa').then((err) => console.log(err));

// module.exports = promisify;

const api2 = Object.create({
  a: Object.create({
    b: '222',
  }),
});
const promisedApi2 = proxyPromisify(api2);
console.log(promisedApi2.a.b);

// function proxyPromisify2(api) {
//   return new Proxy(api, {
//     apply(target, self, args) {
//       return new Promise((resolve, reject) => {
//         target.call(
//           self,
//           (err, res) => {
//             if (err) {
//               reject(err);
//             } else {
//               resolve(res);
//             }
//           },
//           ...args,
//         );
//       });
//     },
//     get(target, prop, reciever) {
//       switch (Object.prototype.toString.apply(target[prop])) {
//         case '[object Set]':
//         case '[object Map]':
//         case '[object Object]':
//         case '[object Array]':
//         case '[object Function]': {
//           return proxyPromisify(Reflect.get(target, prop, reciever));
//         }
//         default: {
//           return Reflect.get(target, prop, reciever);
//         }
//       }
//     },
//   });
// }
