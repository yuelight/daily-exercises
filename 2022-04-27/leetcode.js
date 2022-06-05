// link https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
// 3. 无重复字符的最长子串

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    const len = s.length;

    for (let i = 0; i < len; i++) {
        const str = new Set(s[i]);
        let j = i + 1;
        while(j < len) {
            if (str.has(s[j])) {
                break;
            }

            str.add(s[j]);
            j++;
        }

        ans = Math.max(ans, str.size);
    }

    return ans;
};

