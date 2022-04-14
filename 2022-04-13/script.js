/**
 * @param {Array<Promise>} promises
 * @return {Promise}
 */
function any(promises) {
	const errors = [];

	return new Promise((resolve, reject) => {
		promises.forEach((item, index) => {
			item.then(resolve).catch((err) => {
				errors[index] = err;

				if (errors.length === promises.length) {
					reject(new AggregateError('No Promise in Promise.any was resolved', errors));
				}
			});
		});
	});
}
