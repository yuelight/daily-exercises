// https://bigfrontend.dev/zh/problem/implement-Object.is

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
	// your code here
	if (typeof a === 'number') {
		if (isNaN(a) && isNaN(b)) {
			return true;
		}

		if (a === b) {
			return 1 / a === 1 / b;
		}
	}

	return a === b;
}
