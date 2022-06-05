// link https://leetcode-cn.com/problems/rotate-list/
// 61. 旋转链表

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
	let n = 1;
	let p = head;
	while (p.next) {
		p = p.next;
		n++;
	}

	let q = head;
	let i = 1;
	k %= n;
	while (q && i < n - k) {
		q = q.next;
		i++;
	}

	p.next = head;
	head = q.next;
	q.next = null;
	return head;
};
