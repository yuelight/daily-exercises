// link https://leetcode.cn/problems/find-the-town-judge/
// 997. 找到小镇的法官

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  const inList = new Array(n + 1).fill(0);
  const outList = new Array(n + 1).fill(0)
  for (const [a, b] of trust) {
    inList[b]++;
    outList[a]++;
  }

  for (let i = 1; i <= n; i++) {
    if (inList[i] === n - 1 && outList[i] === 0) {
      return i;
    }
  }

  return -1;
};

