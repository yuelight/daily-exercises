// link https://leetcode-cn.com/problems/max-chunks-to-make-sorted-ii/
// 768. 最多能完成排序的块 II

/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
	let ans = 0;
	let sum1 = 0;
	let sum2 = 0;
	const sorted = arr.slice().sort((a, b) => a - b);

	for (let i = 0; i < arr.length; i++) {
		sum1 += arr[i];
		sum2 += sorted[i];

		if (sum1 === sum2) {
			ans++;
			sum1 = sum2 = 0;
		}
	}

	return ans;
};
