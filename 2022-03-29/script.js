const generateName = (function () {
	let i = 0;
	return function (description) {
		i++;
		return `@@${description}_${i}`;
	};
})();

const SymbolPolyfill = function Symbol(description) {
	if (this instanceof SymbolPolyfill) {
		throw new TypeError('Symbol is not a constructor');
	}

	const symbol = Object.create({
		toString: function () {
			return this.__Name__;
		},
		valueOf: function () {
			throw new Error();
		},
	});

	Object.defineProperties(symbol, {
		__Description__: {
			value: description,
			writable: false,
			enumerable: false,
			configurable: false,
		},

		__Name__: {
			value: generateName(description),
			writable: false,
			enumerable: false,
			configurable: false,
		},
	});

	return symbol;
};

const symbolKeyMap = new Map();
Object.defineProperties(SymbolPolyfill, {
	for: {
		value: function (description) {
			if (!symbolKeyMap.has(description)) {
				symbolKeyMap.set(SymbolPolyfill(description));
			}

			return symbolKeyMap.get(symbolKeyMap);
		},
		writable: true,
		enumerable: false,
		configurable: true,
	},
	keyFor: {
		value: function (symbol) {
			for (let [key, value] of symbolKeyMap.entries()) {
				if (value === symbol) {
					return key;
				}
			}
		},
		writable: true,
		enumerable: false,
		configurable: true,
	},
});
