/**
 * Временная сложность связного списка 
 * ╔═══════════╦═════════╦══════════════╗
 * ║ Алгоритм  ║В среднем║Худший случай ║
 * ╠═══════════╬═════════╬══════════════╣
 * ║ Space     ║ O(n)    ║ O(n)         ║
 * ║ Search    ║ O(n)    ║ O(n)         ║
 * ║ Insert    ║ O(1)    ║ O(1)         ║
 * ║ Delete    ║ O(1)    ║ O(1)         ║
 * ╚═══════════╩═════════╩══════════════╝
 */
const Node = function (value) {
    return {
        value: value,
        next: null
    };
}
const Linked = function () {
    this.head = null;
    this.length = 0;
}
Linked.prototype.add = function (value) {
    const node = new Node(value);
    let cur = this.head;

    if (!cur) {
        this.head = node;
        this.length++;
    } else {
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = node;
        this.length++;
    }
    return this;
}
Linked.prototype.getAt = function (pos) {
    let cur = this.head;

    while(cur) {
        if (pos-- === 0) {
            return cur;
        }
        cur = cur.next;
    }
}
Linked.prototype.remove = function (value) {
    if (!this.head) { return; }

    if (this.head.value === value) {
        this.head = this.head.next;
        this.length--;
    } else {
        let cur = this.head;
        while (cur.next) {
            if (cur.next.value === value) {
                cur.next = cur.next.next;
                this.length--;
                break;
            }
            cur = cur.next;
        }
    }
    return this;
}
/**
 * linked = new Linked();
 * linked.add(1).add(2).add(3).add(4);
 * 
 * 1,2,3,4 => 4,3,2,1
 */ 
Linked.prototype.reverse = function() {
    if (!this.head) { return; }
    
    let cur = this.head.next;
    this.head.next = null;

    while (cur) {
        let head = this.head;       
        this.head = new Node(cur.value);
        this.head.next = head;
        cur = cur.next;
    }
}

module.exports = Linked;
