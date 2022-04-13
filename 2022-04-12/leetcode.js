// link https://leetcode-cn.com/problems/intersection-of-two-linked-lists/
// 160. 相交链表

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
	const cache = new WeakSet();

	let pa = headA;
	while (pa) {
		cache.add(pa);
		pa = pa.next;
	}

	let pb = headB;
	while (pb) {
		if (cache.has(pb)) {
			return pb;
		}

		pb = pb.next;
	}

	return null;
};
