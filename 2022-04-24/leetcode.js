// link https://leetcode-cn.com/problems/two-sum/

function twoSum(nums, target) {
	for (let i = 0; i < nums.length; i++) {
		let j = i + 1;
		while (j < nums.length) {
			if (nums[i] + nums[j] === target) {
				return [i, j];
			}

			j++;
		}
	}

	return [];
}
