// link https://bigfrontend.dev/zh/problem/implement-Promise-allSettled

function allSettled(promises) {
	if (!promises.length) {
		return Promise.resolve([]);
	}

	let sequence = Promise.resolve();
	const ans = [];
	for (let i = 0; i < promises.length; i++) {
		const item = promises[i] instanceof Promise ? promises[i] : Promise.resolve(promises[i]);
		sequence = item
			.then((data) => {
				ans[i] = { status: 'fulfilled', value: data };

				return ans;
			})
			.catch((err) => {
				ans[i] = { status: 'rejected', reason: err };
				return ans;
			});
	}

	return sequence;
}
