// link https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
// 129. 求根节点到叶节点数字之和

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
var sumNumbers = function (root) {
	let ans = 0;
	const dfs = (_root, prefix = '') => {
		if (!_root) {
			return;
		}

		const val = prefix + _root.val;
		if (!_root.left && !_root.right) {
			ans += +val;
		}

		dfs(_root.left, val);
		dfs(_root.right, val);
	};

	dfs(root);

	return ans;
};
