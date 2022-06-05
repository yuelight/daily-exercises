// link https://binarysearch.com/problems/Delete-Sublist-to-Make-Sum-Divisible-By-K

class Solution {
  solve(nums: Array<number>, k: number): number {
    let len = nums.length;
    let ans = len;
    const total = nums.reduce((a, b) => a + b, 0);
    const r = total % k;
    if (r === 0) {
      return 0;
    }

    const cached: Map<number, number> = new Map();
    cached.set(0, -1);
    let presum = 0;
    for (let i = 0; i < len; i++) {
      presum += nums[i];
      const prevKey = (presum + k) % k;
      const key = (presum - r + k) % k;
      if (cached.has(key)) {
        ans = Math.min(ans, i - cached.get(key)!);
      }
      cached.set(prevKey, i);
    }

    return ans === len ? -1 : ans;
  }
}

