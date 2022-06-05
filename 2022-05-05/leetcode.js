// link https://leetcode.cn/problems/middle-of-the-linked-list/
// 876. 链表的中间结点

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  const cache = new Map();
  let p = head;
  let index = 0;
  while (p) {
    cache.set(index, p);
    index++;
    p = p.next;
  }

  const mid = index >> 1;
  return cache.get(mid);
};
