/**
 * Временная сложность стека 
 * ╔═══════════╦═════════╦══════════════╗
 * ║ Алгоритм  ║В среднем║Худший случай ║
 * ╠═══════════╬═════════╬══════════════╣
 * ║ Space     ║ O(n)    ║ O(n)         ║
 * ║ Search    ║ O(n)    ║ O(n)         ║
 * ║ Insert    ║ O(1)    ║ O(1)         ║
 * ║ Delete    ║ O(1)    ║ O(1)         ║
 * ╚═══════════╩═════════╩══════════════╝
 */
const Stack = function() {
    this.count = 0;
    this.storage = {};
};

Stack.prototype.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
};

Stack.prototype.pop = function() {
    if (this.count === 0) {
        return undefined;
    }
    this.count--;
    var value = this.storage[this.count];
    delete this.storage[this.count];
    return value;
};

Stack.prototype.size = function() {
    return this.count;
}
module.exports = Stack;
