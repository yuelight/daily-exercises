// link https://bigfrontend.dev/zh/problem/immerjs

const produce = (base, recipe) => {
	// your code here
	const _isEqual = (_base, draft) => {
		if (!_base) {
			return !draft;
		}

		if (_base === draft) {
			return true;
		}

		if (typeof _base !== typeof draft || typeof _base !== 'object') {
			return false;
		}

		const keys1 = Array.isArray(_base) ? [..._base.keys()] : Object.keys(_base);
		const keys2 = Array.isArray(draft) ? [...draft.keys()] : Object.keys(draft);

		let ans = keys1.length === keys2.length;
		keys1.forEach((key) => {
			if (_isEqual(_base[key], draft[key])) {
				Object.assign(draft, {
					[key]: _base[key],
				});
			} else {
				ans = false;
			}
		});

		return ans;
	};

	const ans = JSON.parse(JSON.stringify(base));
	recipe(ans);

	return _isEqual(base, ans) ? base : ans;
};
