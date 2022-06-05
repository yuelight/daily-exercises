// link https://bigfrontend.dev/problem/implement-Promise-race

/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function race(promises) {
	return new Promise((resolve, reject) => {
		promises.forEach((item) => {
			item.then(resolve).catch(reject);
		});
	});
}
