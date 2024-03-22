/**
 * Инопланетный коммуникатор
 *
 * Вам пришлось столкнуться с коммуникатором, в котором находится зашифрованная инструкция. Система показывает,
 * что коммуникатор обрабатывает сообщения перед отправкой и добавляет дополнительную разметку от себя.
 * Любое значение в исходных данных может оказаться обёрнутым в специальный объект вида { _COMMUNICATOR_CONTROL_: { ... } }
 * (считаем, что имени поля _COMMUNICATOR_CONTROL_ в наших отправляемых данных не бывает).
 *
 * Вот какие варианты возможны:
 * 1. { _COMMUNICATOR_CONTROL_: { validated: true, content: ... } }
 *    Похоже на какую-то дополнительную проверку, а в поле content может находиться оригинальное входное значение
 *    или значение с дополнительными объектами _COMMUNICATOR_CONTROL_.
 *
 * 2. { _COMMUNICATOR_CONTROL_: { validated: true, hash: 'some-string', content: ... } }
 *
 *    Видимо коммуникатор считает важным промаркировать эквивалентные фрагменты дерева.
 * 3. { _COMMUNICATOR_CONTROL_: { censorship: true } }
 *    А это уже плохо... некоторые фрагменты могут быть подвержены какой-то цензуре и полностью удалены
 *    (заменены на такую заглушку).
 *
 * А ещё, оказалось, что из-за каких-то сбоев значения за пределами объектов _COMMUNICATOR_CONTROL_ могут быть искажены случайным образом (удалены, добавлены, изменены).
 *
 * Прийдётся проверять, что отправленное значение по содержанию эквивалентно исходному. Благо после отправки есть доступ к модифицированному сообщению.
 * Необходимо написать функцию, которая примет на вход два значения и вернёт true, если они эквивалентны (с учётом возможных добавок _COMMUNICATOR_CONTROL_), в противном случае вернёт false.
 */
const CONTROL = '_COMMUNICATOR_CONTROL_';

function getValue(val) {
  return typeof val === 'object' && CONTROL in val ? val[CONTROL].content : val;
}

function check(origin, sended) {
  origin = getValue(origin);
  sended = getValue(sended);

  if (typeof origin === 'object' && typeof sended === 'object') {
    const originType = Object.prototype.toString.apply(origin);
    const sendedType = Object.prototype.toString.apply(sended);

    if (originType !== sendedType) {
      return false;
    }

    if (originType === '[object Array]') {
      if (origin.length !== sended.length) {
        return false;
      }
      for (let i = 0; i < origin.length; i++) {
        if (!check(origin[i], sended[i])) {
          return false;
        }
      }
      return true;
    } else if (originType === '[object Set]') {
      if (origin.size !== sended.size) {
        return false;
      }
      for (const val of origin) {
        if (!sended.has(val)) {
          return false;
        }
      }
      return true;
    } else if (originType === '[object Map]') {
      if (origin.size !== sended.size) {
        return false;
      }
      for (const key in origin) {
        if (!sended.has(key) || origin.get(key) !== sended.get('key')) {
          return false;
        }
      }
      return true;
    } else if (originType === '[object Object]') {
      const originKeys = Object.keys(origin);
      const sendedKeys = Object.keys(sended);

      if (originKeys.length !== sendedKeys.length) {
        return false;
      }

      for (const key of originKeys) {
        if (!check(origin[key], sended[key])) {
          return false;
        }
      }
      return true;
    } else if (originType === '[object Function]') {
      return origin === sended;
    } else {
      // [object Date]
      // [object Proxy]
      // [object Error]
      // и др.
      console.error('not implementes ', originType);
      return origin === sended;
    }
  }
  return origin === sended;
}

module.exports = check;
export default check;

// 1.
console.log(check(1, 1)); // true
// 2.
console.log(check(1, { _COMMUNICATOR_CONTROL_: { censorship: true } })); // false
// 3.
console.log(check([1, 2], [1, 2])); // true
// 4.
console.log(check({ a: 1, b: [1] }, { a: 1, b: [2] })); // false
// 5.
console.log(check([1, 2], [1, { _COMMUNICATOR_CONTROL_: { validated: true, content: 2 } }]));
// true

// 6.
console.log(check([1, 2], [1, { _COMMUNICATOR_CONTROL_: { censorship: true } }]));
// false

// 7.
console.log(
  check(
    {
      a: [1, 2, 3],
      b: [1, 2, 3],
      c: [1, 2, 3],
    },
    {
      a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
      b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
      c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
    },
  ),
);
// true

// 8.
console.log(
  check(
    {
      a: [1, 2, 3],
      b: [1, 2, 3],
      c: [1, 2, 3],
      d: [4, 5, 6],
    },
    {
      a: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
      b: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
      c: { _COMMUNICATOR_CONTROL_: { validated: true, hash: '123', content: [1, 2, 3] } },
      d: [1, 2, 3],
    },
  ),
);
// false

// 9.
console.log(
  check(
    {
      a: { x: '.', y: '!', z: '?' },
      b: { x: '.', y: '!', z: '?' },
      c: { x: '.', y: '!', z: '?' },
    },
    {
      a: {
        _COMMUNICATOR_CONTROL_: {
          validated: true,
          hash: 'xyz',
          content: {
            x: '.',
            y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
            z: '?',
          },
        },
      },
      b: {
        _COMMUNICATOR_CONTROL_: {
          validated: true,
          hash: 'xyz',
          content: {
            x: '.',
            y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
            z: '?',
          },
        },
      },
      c: {
        _COMMUNICATOR_CONTROL_: {
          validated: true,
          hash: 'xyz',
          content: {
            x: '.',
            y: { _COMMUNICATOR_CONTROL_: { censorship: true } },
            z: '?',
          },
        },
      },
    },
  ),
);
// false

// 10.
console.log(
  check(
    {
      a: { x: '.', y: '!', z: '?' },
    },
    {
      a: {
        _COMMUNICATOR_CONTROL_: {
          validated: true,
          content: {
            x: '.',
            y: { _COMMUNICATOR_CONTROL_: { validated: true, content: '!' } },
            z: '?',
          },
        },
      },
    },
  ),
);
// true

// 11.
console.log(
  check(
    {
      a: { x: '.', y: '!', z: '?' },
      b: true,
    },
    {
      a: {
        _COMMUNICATOR_CONTROL_: {
          validated: true,
          content: {
            x: '.',
            y: { _COMMUNICATOR_CONTROL_: { validated: true, content: '!' } },
            z: '?',
          },
        },
      },
    },
  ),
);
// false

// 12.
console.log(check(new Set([1, 2]), new Set([1, 2]))); // true

// 13
console.log(
  check(
    new Map([
      [1, 2],
      [2, 3],
    ]),
    new Map([
      [1, 2],
      [2, 3],
    ]),
  ),
); // true
