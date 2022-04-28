// link https://leetcode-cn.com/problems/number-of-boomerangs/
// 447. 回旋镖的数量

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function(points) {
    const total = points.length;
    let ans = 0;

    for(let i = 0; i < total; i++) {
        const cached = new Map();
        let j = 0;
        while(j < total) {
            const distance = Math.pow(points[j][0] - points[i][0], 2) + Math.pow(points[j][1] - points[i][1], 2);
            cached.set(distance, (cached.get(distance) || 0) + 1);
            j++;
        }

        for (let times of cached.values()) {
            ans += times * (times - 1);
        }
    }

    return ans;
};

