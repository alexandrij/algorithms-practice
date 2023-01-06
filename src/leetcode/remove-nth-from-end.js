function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function createList(head) {
  return head.reduceRight((head, val) => {
    return new ListNode(val, head);
  }, null);
}

const removeNthFromEnd = (head, n) => {
  let start = head;

  for (let i = 1; start && i <= n; i++) {
    start = start.next;
  }

  if (!start) {
    head = head.next;
    return head;
  }

  let end = head;
  while (start.next) {
    start = start.next;
    end = end.next;
  }
  end.next = end.next.next;
  return head;
}

console.log(removeNthFromEnd(createList([1, 2, 3, 4, 5]), 2)) // [1,2,3,5]
console.log(removeNthFromEnd(createList([1, 2, 3]), 1)) // [1, 3]
console.log(removeNthFromEnd(createList([1, 2]), 2)) // [1, 3]
console.log(removeNthFromEnd(createList([1]), 1)) // []
console.log(removeNthFromEnd(createList([1, 2, 3]), 4)); // []