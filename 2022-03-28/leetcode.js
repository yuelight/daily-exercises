// link https://leetcode-cn.com/problems/add-to-array-form-of-integer/submissions/
// 989. 数组形式的整数加法

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
	const num1 = num.slice().reverse();
	const num2 = String(k).split('').reverse();
	const len = Math.max(num1.length, num2.length);
	let rest = 0;
	const ans = [];

	for (let i = 0; i < len; i++) {
		const val = (+num1[i] || 0) + (+num2[i] || 0) + rest;
		ans[i] = val % 10;
		rest = parseInt(val / 10);
	}

	if (rest) {
		ans.push(rest);
	}

	return ans.reverse();
};
