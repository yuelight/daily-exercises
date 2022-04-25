function compose(...fns) {
	//请实现

	return fns.reduce(
		(a, b) =>
			(...args) =>
				a(b(...args)),
	);
}

const multiply20 = (price) => price * 20;
const divide100 = (price) => price / 100;
const normalizePrice = (price) => price.toFixed(2);
const discount = compose(normalizePrice, divide100, multiply20);
discount(200.0); //40.00
