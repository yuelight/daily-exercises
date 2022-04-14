// link https://leetcode-cn.com/problems/linked-list-cycle-ii/
// 142. 环形链表 II

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
	const cache = new WeakSet();
	while (head !== null) {
		if (cache.has(head)) {
			return head;
		}

		cache.add(head);
		head = head.next;
	}

	return null;
};
