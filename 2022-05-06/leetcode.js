// link https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
// 26. 删除有序数组中的重复项

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || (nums[i] !== nums[i - 1])) {
      nums[n] = nums[i];
      n++;
    }
  }

  return n;
};

