// link https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/
// 104. 二叉树的最大深度

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
function maxDepth(root) {
	if (!root) {
		return 0;
	}

	return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
