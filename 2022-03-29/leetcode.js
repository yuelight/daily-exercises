// link https://leetcode-cn.com/problems/shortest-distance-to-a-character/
// 821. 字符的最短距离

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (s, c) {
	const ans = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) {
			ans[i] = 0;
			continue;
		}

		let x = i;
		let y = i;

		while (s[x] !== c && s[y] !== c) {
			if (x > 0) {
				x--;
			} else {
				x = Infinity;
			}

			if (y < s.length - 1) {
				y++;
			} else {
				y = Infinity;
			}
		}

		const dx = Math.abs(i - x);
		const dy = Math.abs(y - i);
		ans[i] = Math.min(dx, dy);
	}

	return ans;
};
