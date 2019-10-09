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

const Queue = function () {
    this.collection = [];
};

Queue.prototype.enqueue = function (value) {
    this.collection.push(value);
};

Queue.prototype.dequeue = function () {
    return this.collection.shift();
};

Queue.prototype.size = function () {
    return this.collection.length;
}