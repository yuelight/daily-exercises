//1.手写函数柯里化
function curry(func, ...outArgs) {
	//此处补全

	return function (...innerArgs) {
		const args = [...outArgs, ...innerArgs];
		return args.length < func.length ? curry(func, ...args) : func.call(null, ...args);
	};
}
function sum(a, b, c) {
	return a + b + c;
}

let curriedSum = curry(sum);

// alert(curriedSum(1, 2, 3)); // 6, still callable normally
// alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
// alert(curriedSum(1)(2)(3)); // 6, full currying
