// link https://leetcode-cn.com/problems/design-a-stack-with-increment-operation/
// 1381. 设计一个支持增量操作的栈

/**
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
class CustomStack {
	maxSize;
	list = [];
	constructor(maxSize) {
		this.maxSize = maxSize;
	}

	push(x) {
		if (this.list.length >= this.maxSize) {
			return;
		}

		this.list.unshift(x);
	}

	pop() {
		if (!this.list.length) {
			return -1;
		}

		return this.list.shift();
	}

	increment(k, val) {
		const start = Math.max(this.list.length - k, 0);
		for (let i = start; i < this.list.length; i++) {
			this.list[i] += val;
		}
	}
}
