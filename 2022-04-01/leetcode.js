// https://leetcode-cn.com/problems/implement-queue-using-stacks/
// 232. 用栈实现队列

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
class MyQueue {
	_list = [];

	push(x) {
		this._list.push(x);
	}

	pop() {
		return this._list.shift();
	}

	peek() {
		return this._list[0];
	}

	empty() {
		return this._list.length === 0;
	}
}
