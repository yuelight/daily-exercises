// link https://bigfrontend.dev/zh/problem/implement-your-own-Object-create

/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
	// your code here
	if (toString.call(proto) !== '[object Object]') {
		throw new Error();
	}

	function F() {}
	F.prototype = proto;

	return new F();
}
