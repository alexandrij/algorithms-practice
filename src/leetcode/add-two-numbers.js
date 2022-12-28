/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const addTwoNumbers = (l1, l2) => {
  let curListNode;
  let ost = 0;
  let head;

  while (l1 || l2 || ost > 0) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + ost;
    let val = sum % 10;
    ost = sum > 9 ? 1 : 0;

    if (!head) {
      head = curListNode = new ListNode(val);
    } else {
      curListNode = curListNode.next = new ListNode(val);
    }

    l1 = l1 && l1.next;
    l2 = l2 && l2.next;
  }
  return head;
};

const getListNode = (arr) => {
  return arr.reduceRight((nextNode, val) => {
    return new ListNode(val, nextNode);
  }, undefined);
};

// const r1 = addTwoNumbers(getListNode([2, 4, 3]), getListNode([5, 6, 4]));
// const r2 = addTwoNumbers(
//   getListNode([9, 9, 9, 9, 9, 9, 9]),
//   getListNode([9, 9, 9, 9]),
// );

console.log(addTwoNumbers(getListNode([2, 4, 3]), getListNode([5, 6, 4]))); // Output: [7,0,8] Explanation: 342 + 465 = 807.)
console.log(
  addTwoNumbers(getListNode([9, 9, 9, 9, 9, 9, 9]), getListNode([9, 9, 9, 9])),
); // Output: [8,9,9,9,0,0,0,1]));
console.log(addTwoNumbers(getListNode([]), getListNode([]))); // Output: []));
