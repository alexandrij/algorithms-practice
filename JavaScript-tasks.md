_### 1. Приоритет выполнения асинхронных вызовов

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

store.data = {newKey: 'newString'}

// CONSOLE
// first { newKey: 'newString' }
// second { newKey: 'newString' }

store.unsubscribe(firstSubscriber)
store.data = {lastKey: 'lastKey'}

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


