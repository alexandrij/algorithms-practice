/**
 * Условие
 * Астрологи объявили день очередей ограниченного размера. Тимофею нужно написать класс MyQueueSized, который принимает параметр max_size, означающий максимально допустимое количество элементов в очереди.
 *
 *   Помогите ему —– реализуйте программу, которая будет эмулировать работу такой очереди. Функции, которые надо поддержать, описаны в формате ввода.
 *
 *   Формат ввода
 * В первой строке записано одно число — количество команд, оно не превосходит 5000. Во второй строке задан максимально допустимый размер очереди, он не превосходит 5000. Далее идут команды по одной на строке. Команды могут быть следующих видов:
 *
 *   push(x) — добавить число x в очередь;
 * pop() — удалить число из очереди и вывести на печать;
 * peek() — напечатать первое число в очереди;
 * size() — вернуть размер очереди; При превышении допустимого размера очереди нужно вывести «error». При вызове операций pop() или peek() для пустой очереди нужно вывести «None».
 * Формат вывода
 * Напечатайте результаты выполнения нужных команд, по одному на строке.
 */

class Node {
  constructor(val, next) {
    this.val = val;
    this.next = next || null;
  }
}

class Queue {
  #maxSize = 5000;
  #size = 0;
  #head = null;

  constructor(maxSize) {
    this.#maxSize = maxSize;
  }

  push(val) {
    if (this.#size === this.#maxSize) {
      throw new Error('the count of elements is limited to ' + this.#maxSize);
    }

    this.#head = new Node(val, this.#head);
    this.#size += 1;
  }

  pop() {
    if (!this.#head) {
      throw new Error('no elements');
    }

    const node = this.#head;
    node.next = null;

    this.#size -= 1;

    return node.val;
  }

  peek() {
    return this.#head ? this.#head.val : undefined;
  }

  size() {
    return this.#size;
  }
}

const queue = new Queue(2);
console.log(queue.peek());
queue.push(5);
queue.push(2);
console.log(queue.peek());
console.log(queue.size());
console.log(queue.size());
