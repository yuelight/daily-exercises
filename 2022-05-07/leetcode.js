// link https://leetcode.cn/problems/search-insert-position/
// 35. 搜索插入位置

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const index = nums.indexOf(target);
  if (index > -1) {
    return index;
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      continue;
    }

    return i;
  }

  return nums.length;
};

