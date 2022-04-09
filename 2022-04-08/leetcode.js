// link https://leetcode-cn.com/problems/swap-nodes-in-pairs/
// 24. 两两交换链表中的节点

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
var swapPairs = function (head) {
	if (!head || !head.next) {
		return head;
	}

	const p = head.next;
	head.next = swapPairs(p.next);
	p.next = head;
	return p;
};
