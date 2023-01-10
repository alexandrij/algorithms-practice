function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function createList(head) {
  return head.reduceRight((head, val) => {
    return new ListNode(val, head);
  }, null);
}

const mergeTwoLists = (head1, head2) => {
  if (!head1) {
    return head2;
  }

  if (!head2) {
    return head1;
  }

  let node1 = head1;
  let node2 = head2;

  let head;
  if (node1.val < node2.val) {
    head = head1;
    node1 = node1.next;
  } else {
    head = node2;
    node2 = node2.next;
  }

  let tail = head;

  while (node1 && node2) {
    if (node1.val < node2.val) {
      tail.next = node1;
      node1 = node1.next;
    } else {
      tail.next = node2;
      node2 = node2.next;
    }
    tail = tail.next;
  }
  tail.next = node1 || node2;

  return head;
};

console.log(mergeTwoLists(createList([1, 2, 4]), createList([1, 3, 4]))); // [1, 1, 2, 3, 4]
console.log(mergeTwoLists(createList([1]), createList([1, 2, 3]))); // [1, 1, 2, 3, 4]
console.log(mergeTwoLists(createList([1]), createList([2]))); // []
console.log(mergeTwoLists(createList([]), createList([]))); // []
console.log(mergeTwoLists(createList([]), createList([0]))); // [0]
