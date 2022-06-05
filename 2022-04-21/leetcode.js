// link https://leetcode-cn.com/problems/serialize-and-deserialize-binary-tree/
// 297. 二叉树的序列化与反序列化

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
	const _serialize = (node, ans = []) => {
		if (!node) {
			ans.push('|');
			return ans;
		}

		ans.push(node.val);
		ans = _serialize(node.left, ans);
		ans = _serialize(node.right, ans);

		return ans;
	};

	return _serialize(root).join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
	const queue = data.split(',');

	const _deserialize = (_queue) => {
		const rootVal = _queue.shift();
		if (rootVal === '|' || !_queue.length) {
			return null;
		}

		const root = new TreeNode(rootVal);
		root.left = _deserialize(_queue);
		root.right = _deserialize(_queue);
		return root;
	};

	return _deserialize(queue);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
