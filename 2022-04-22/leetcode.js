// link https://leetcode-cn.com/problems/vertical-order-traversal-of-a-binary-tree/
// 987. 二叉树的垂序遍历

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function (root) {
	const cached = new Map();
	const ans = [];

	const dfs = (_root, index = 0, depth = 0) => {
		if (!_root) {
			return;
		}

		const items = cached.get(index) || [];
		items[depth] = items[depth] ? items[depth] + ',' : '';
		items[depth] += String(_root.val);
		cached.set(index, items);

		dfs(_root.left, index - 1, depth + 1);
		dfs(_root.right, index + 1, depth + 1);
	};

	dfs(root);

	const minIndex = Math.min(...cached.keys());
	const offset = minIndex < 0 ? 0 - minIndex : 0;
	for (const [index, items] of cached.entries()) {
		ans[index + offset] = items
			.filter(Boolean)
			.map((str) =>
				str
					.split(',')
					.map((val) => +val)
					.sort((a, b) => a - b),
			)
			.flat(Infinity);
	}

	return ans;
};
