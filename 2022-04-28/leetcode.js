// link https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/
// 30. 串联所有单词的子串

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    const ans = [];
    const wordLen = words[0]?.length ?? 0;
    const wordsLen = wordLen * words.length;
    const reg = new RegExp(`(${words.join('|')})$`);
    const sortedWords = words.slice().sort().join('');

    const isEqual = (str) => {
        return sortedWords ===
            str.split('').reduce((a, b, i) => {
                const index = Math.floor(i / wordLen);
                a[index] = (a[index] || '') + b;
                return a;
            }, [])
            .sort()
            .join('');
    };

    for (let i = 0; i < s.length; i++) {
        const str = s.slice(i, i + wordsLen);
        if (!reg.test(str) || str.length < wordsLen) {
            continue;
        }

        if (isEqual(str)) {
            ans.push(i);
        }
    }

    return ans;
};

