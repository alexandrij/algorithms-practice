import { createLinkedListFromArray } from '../../data-structures/linked.js';

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

const mergeKSortedLists = (lists) => {
  let head = null;
  let nodes = lists;
  let i = 0;

  while (i < lists.length) {
    const node = nodes[i];
    head = mergeTwoLists(head, node);
    i++;
  }
  return head;
};

console.log(
  mergeKSortedLists([
    createLinkedListFromArray([1, 5, 6, 10]),
    createLinkedListFromArray([-1, 2, 4, 6]),
    createLinkedListFromArray([-3, -1, 10, 11]),
    createLinkedListFromArray([-2, 1, 3, 6]),
  ]),
); // [-3, -2, -1, -1, 1, 1, 2, 3, 4, 5, 6, 6, 6, 10, 10, 11]
console.log(mergeKSortedLists([])); // []
console.log(mergeKSortedLists([createLinkedListFromArray([1, 2]), createLinkedListFromArray([2])])); // [1, 2, 2]
