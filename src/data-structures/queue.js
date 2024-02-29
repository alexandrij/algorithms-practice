/**
 * Временная сложность очереди
 * ╔═══════════╦═════════╦══════════════╗
 * ║ Алгоритм  ║В среднем║Худший случай ║
 * ╠═══════════╬═════════╬══════════════╣
 * ║ Space     ║ O(n)    ║ O(n)         ║
 * ║ Search    ║ O(n)    ║ O(n)         ║
 * ║ Insert    ║ O(1)    ║ O(1)         ║
 * ║ Delete    ║ O(1)    ║ O(1)         ║
 * ╚═══════════╩═════════╩══════════════╝
 */

// const Queue = function () {
//   this.collection = [];
// };
//
// Queue.prototype.enqueue = function (value) {
//   this.collection.push(value);
// };
//
// Queue.prototype.dequeue = function () {
//   return this.collection.shift();
// };
//
// Queue.prototype.size = function () {
//   return this.collection.length;
// };

class Node {
  /// value;
  /// next;

  constructor(value) {
    this.value = value;

    // TODO: Remove this when targeting Node.js 12.
    this.next = undefined;
  }
}

class Queue {
  // TODO: Use private class fields when targeting Node.js 12.
  // #_head;
  // #_tail;
  // #_size;

  constructor() {
    this.clear();
  }

  enqueue(value) {
    const node = new Node(value);

    if (this._head) {
      // this._tail.next = node;
      // this._tail = node;
    } else {
      this._head = node;
      // this._tail = node;
    }

    this._size++;
  }

  dequeue() {
    const current = this._head;
    if (!current) {
      return;
    }

    this._head = this._head.next;
    this._size--;
    return current.value;
  }

  clear() {
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  *[Symbol.iterator]() {
    let current = this._head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

export { Queue };
