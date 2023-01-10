function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export const createSimpleList = (head) => {
  return head.reduceRight((head, val) => {
    return new ListNode(val, head);
  }, null);
};
