// link https://bigfrontend.dev/zh/problem/implement-your-own-URLSearchParams

class MyURLSearchParams {
	/**
	 * @params {string} init
	 */

	cache = [];

	constructor(init) {
		if (init.startsWith('?')) {
			init = init.slice(1);
		}

		init.split('&').forEach((item) => {
			this.cache.push(item.split('='));
		});
	}

	/**
	 * @params {string} name
	 * @params {any} value
	 */
	append(name, value) {
		this.cache.push([name, String(value)]);
	}

	/**
	 * @params {string} name
	 */
	delete(name) {
		this.cache = this.cache.filter(([_name]) => _name !== name);
	}

	/**
	 * @returns {Iterator}
	 */
	*entries() {
		for (const item of this.cache) {
			yield item;
		}
	}

	/**
	 * @param {(value, key) => void} callback
	 */
	forEach(callback) {
		this.cache.forEach(([key, value]) => {
			callback(value, key);
		});
	}

	/**
	 * @param {string} name
	 * returns the first value of the name
	 */
	get(name) {
		const item = this.cache.find(([_name]) => _name === name);
		if (!item) {
			return null;
		}

		return item[1];
	}

	/**
	 * @param {string} name
	 * @return {string[]}
	 * returns the value list of the name
	 */
	getAll(name) {
		return this.cache.filter(([_name]) => _name === name).map(([_, value]) => value);
	}

	/**
	 * @params {string} name
	 * @return {boolean}
	 */
	has(name) {
		return this.get(name) !== null;
	}

	/**
	 * @return {Iterator}
	 */
	keys() {
		return this.cache.map(([name]) => name);
	}

	/**
	 * @param {string} name
	 * @param {any} value
	 */
	set(name, value) {
		this.delete(name);
		this.append(name, value);
	}

	// sor all key/value pairs based on the keys
	sort() {
		this.cache.sort((a, b) => a[0].localeCompare(b[0]));
	}

	/**
	 * @return {string}
	 */
	toString() {
		return this.cache.map((item) => item.join('=')).join('&');
	}

	/**
	 * @return {Iterator} values
	 */
	*values() {
		for (const [_, value] of this.cache) {
			yield value;
		}
	}
}
