### 1. Приоритет выполнения асинхронных вызовов

```typescript
let a = 8;

setTimeout(() => {
  console.log(`${a}`);
  a = 9;
}, 0);

const promise = new Promise((resolve) => {
  console.log(`${a}`);
  a = 3;
  resolve();
});

promise.then(() => {
  console.log(`${a}`);
  a = 1;
});

console.log(a);

// 8, 3, 3,  1
```

### 2. Структуры данных Set.

Реализовать функцию unique, которая возвращает массив уникальные элементов

```typescript
function unique(arr) {

}

console.log([1, 4, 1, 4, 2, 9, 3, 4, 3, 7, 8]) // [1,4,2,9,3,7,8]
```

### 3. Алгоритм пересечение двух массивов.

Есть два сортированных массива с числами.
Нужно написать функцию, которая возвращает новый массив,
содержащий элементы, которые встречаются в обоих массивах.
Элементы могут совпадать несколько раз, см. пример 3 и 4.

```typescript
function findEqualElements(arr1, arr2) {

}

// Примеры
console.log(findEqualElements([0, 1, 2, 3], [0, 2])); // => [0, 2]
console.log(findEqualElements([2], [1, 2, 3])); // => [2]
console.log(findEqualElements([1, 2, 2, 3], [2, 2, 2, 2, 4, 4, 4, 4])); // => [2, 2]
console.log(findEqualElements([1, 1, 2, 2, 2, 2, 4, 4, 4, 4], [0, 0, 2, 2, 3])); // => [2, 2]

// Решение. Неплохой вариант
function findEqualElements1(arr1, arr2) {
  let result = [];
  let obj = {};
  arr1.forEach(el => {
    obj[el] = obj[el] ? obj[el] + 1 : 1;
  })
  arr2.forEach(el => {
    if (obj[el]) {
      result.push(el);
      obj[el] = obj[el] - 1;
    }
  })
  return result;
}

// Решение. Идеальный вариант
function findEqualElements2(arr1, arr2) {
  const res = [];
  let i1 = 0;
  let i2 = 0;
  while (i1 < arr1.length && i2 < arr2.length) {
    while (arr1[i1] < arr2[i2]) {
      i1++;
    }
    while (arr1[i1] > arr2[i2]) {
      i2++;
    }
    if (arr1[i1] === arr2[i2]) {
      res.push(arr1[i1]);
    }
    i1++;
    i2++;
  }
  return res;
};
```

### 4. Асинхронный вызов.

Реализовать функцию, которая выполняется не более n - раз, пока не получит успешный ответ.

```typescript
/**
 * @param {Propmise} request - запрос
 * @param {number} n - количество попыток
 */
const tryRequest = async (request, n) => {

  }

const fakeRequest = fetch;

tryRequest(fakeRequest, 5)
  .then(res => console.log(res))
  .catch(e => console.log(e));
```

### 5. Паттерн Субъект Subject.

1. Класс хранит данные в объекте
2. Должна быть возможно добавить подписчика в виде функции
3. Должна быть возможно убрать подписчика
4. В случае изменений данных, все подписчики должны получить уведомление с новыми данными

```typescript

type Observer = (data) => void;

interface Event {
  type: string;
  data: any;
}

class Observable {
  subscribe(observer: Observer) {
  }

  unsubsribe(obserber: Observer) {
  }
}

class Subject extends Observable() {
  dispatch(event: Event) {
  }
}

class Store extends Observable {
  private observers: Observer[];
  private internalData: any;

  set data(value: any) {
    this.internalData = value;
    this.observers.forEach(o => {
      o(value);
    })
  }

  get data() {
    return this.internalData;
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(o => o !== observer);
  }
}

const store = new Store()

// Пример использования

const firstSubscriber = (data) => console.log('first', data)
const secondSubscriber = (data) => console.log('second', data)

store.subscribe(firstSubscriber)
store.subscribe(secondSubscriber)

store.data = { newKey: 'newString' }

// CONSOLE
// first { newKey: 'newString' }
// second { newKey: 'newString' }

store.unsubscribe(firstSubscriber)
store.data = { lastKey: 'lastKey' }

// Решение

class Store {

  #internalData = {};

  set data(val) {
    this.#internalData = val;
    this.emit(val);
  }

  get data() {
    return this.#internalData;
  }

  #subscribers = [];

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber) {
    const idx = this.subscribers.indexOf(subscriber);

    if (idx > -1) {
      this.subscribers.splice(idx, 1);
    }
  }

  emit(val) {
    this.subscribers.forEach((subscriber) => {
      subscriber(val);
    })
  }
}
```

### 6. Типизация.

```typescript
class Json {
  write(): void {
    console.log('json-write');
  }

  read(): string {
    return 'json-read'
  }
}

class Xml {
  write(): void {
    console.log('xml-write');
  }

  read(): string {
    return 'xml-read'
  }
}

const read = (reader: Json): ReturnType<Json['read']> => {
  return reader.read();
}

read(new Xml());
```

### 7. Кэширование.

Реализовать функцию, которая кэширует результат выполнения на опрделенное время

```typescript
function memoize(fn, resolver = JSON.stringify, time) {

}
```

### 8. Конвертер курсов валют

Конвертер курсов валют. Необходимо написать React-компонент, который представлен двумя зависимыми полями ввода ("RUB"
и "USD") и кнопкой между ними ("<->")
При изменении значения в 1-м поле - меняется значение в 2-м (если в поле "RUB" ввести 150, значение в поле "USD" должно
стать 1)
При нажатии на кнопку - поля меняются местами (поле "RUB" становится 2-м, а поле "USD" - 1-м, и наоборот), и 2-е поле
блокируется
Курс валют может отличаться в зависимости от направления конвертации (например, 150 RUB = 1 USD, но 1 USD = 75 RUB)

### 9. Игра в города

Игра в города. Расположить города так, чтобы каждое следующее
название начиналось с той буквы, на которую заканчивалось
предыдущее название. Если нет такого названия, то на предпоследнюю букву и так далее.

```javascript
const cities = [

  'New York',
  'Kansas City',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
  'Austin',
  'San Francisco',
  'Indianapolis',
  'Columbus',
  'Seattle',
  'Washington',
  'Boston',
  'El Paso',
  'Nashville',
  'Memphis',
  'Oklahoma City',
  'Las Vegas',
  'Louisville',
  'Baltimore',
  'Milwaukee',
  'Albuquerque',
  'Tucson',
  'Sacramento',
  'Los Angeles',
  'Atlanta',
  'Long Beach',
  'Omaha',
  'Raleigh',
];
```

### 10. Найти максимальную длину отрезка из рядом стоящих 1

```javascript
function maxLenNumbers(numbers) {
  
}

console.log(maxLenNumbers([0, 0, 1, 1, 1, 0, 0, 1, 1])); // 3
console.log(maxLenNumbers([0, 0, 1, 1, 0, 0, 1, 1])); // 2
console.log(maxLenNumbers([1, 1, 1, 1])); // 4
console.log(maxLenNumbers([0, 0, 0, 0])); // 0
console.log(maxLenNumbers([])); // 0
```

### 11 Promise.all

```javascript
// Доступно REST API
// GET /settings -> {...}
// GET /currentUser -> {lang, ...}
// GET /dictionaries/$lang -> {...} Использует lang из ответа /currentUser !

function fetchJson(url) {
  return fetch(url).then(response => response.json());
}

function startApp(settings, user, dictionary) {
  console.info(settings, user, dictionary);
}

function bootstrap() {
  // TODO: Получить все данные и вызвать метод startApp со всеми полученными данными.
  startApp(settings, user, dictionary);
}

```

### 12 Реализовать функцию setTimeoutTimes, которая выполняется через n мс., в течении m мс.


// Пример использования

```javascript
// Функция выполняется через каждые 3 мс в течении 1000 мс.
setTimeoutTimes(() => console.log(global.performance.now()), 1000, 3);
```

Решение

```javascript

// TODO : реализовать функцию
function setTimeoutTimes(fn, delay, times) {
  let timer1;
  let timer2;

  const retry = () => {
    timer1 = setTimeout(() => {
      fn();
      timer2 = setTimeout(retry, times);
    }, delay);
  };
  retry();

  return function clearTimeoutTimes() {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };
}
```
