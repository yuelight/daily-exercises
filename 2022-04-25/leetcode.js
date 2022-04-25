// link https://leetcode-cn.com/problems/top-k-frequent-elements/
// 347. 前 K 个高频元素

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
	const cached = new Map();
	const list = [];

	for (const num of nums) {
		cached.set(num, (cached.get(num) || 0) + 1);
	}

	for (const [value, count] of cached.entries()) {
		list.push([value, count]);
	}

	list.sort((a, b) => b[1] - a[1]);
	return list.slice(0, k).map(([value]) => value);
};
