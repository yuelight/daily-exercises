// link https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
// 109. 有序链表转换二叉搜索树

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
	const list = [];
	let p = head;
	while (p) {
		list.push(p.val);
		p = p.next;
	}

	const buildTree = (start, end) => {
		if (start > end) {
			return null;
		}

		const mid = (start + end) >> 1;
		const root = new TreeNode(list[mid]);
		root.left = buildTree(start, mid - 1);
		root.right = buildTree(mid + 1, end);
		return root;
	};

	return buildTree(0, list.length - 1);
};
