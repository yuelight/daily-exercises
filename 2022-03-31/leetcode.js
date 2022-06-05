// link https://leetcode-cn.com/problems/decode-string/
// 394. 字符串解码

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
	const ans = s.split('');
	const seq = [];

	for (let i = 0; i < s.length; i++) {
		if (/\d+/.test(s[i]) && !/\d+/.test(s[i - 1])) {
			seq.push(i);
		}

		if (s[i] === ']') {
			const index = seq.pop();
			const matched = ans.slice(index, i + 1).join('');

			ans.forEach((_, j) => {
				if (j < index || j >= i) {
					return;
				}

				ans[j] = '';
			});

			const [times, ...chs] = matched
				.replace(/(\[|\])/g, ',')
				.split(',')
				.filter(Boolean);

			ans[i] = new Array(+times).fill(chs.join('')).join('');
		}
	}

	return ans.join('');
};
