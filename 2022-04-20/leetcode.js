// link https://leetcode-cn.com/problems/find-bottom-left-tree-value/
// 513. 找树左下角的值

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
 * @return {number}
 */
var findBottomLeftValue = function (root) {
	let ans;
	let depth = 0;

	const dfs = (node, _depth = 0) => {
		if (!node) {
			return;
		}

		const nextDepth = _depth + 1;
		if (nextDepth > depth) {
			depth = nextDepth;
			ans = node.left ? node.left.val : node.val;
		}

		dfs(node.left, nextDepth);
		dfs(node.right, nextDepth);
	};

	dfs(root);

	return ans;
};
