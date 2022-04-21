// link https://bigfrontend.dev/zh/problem/virtual-dom-v-jsx-2

/**
 * @param {code} string
 * @returns {any} AST
 */
function parse(code) {
	// your code here
	const getType = (type) => {
		if (type && type[0].toUpperCase() === type[0]) {
			return Heading;
		}

		return type;
	};

	code = code.trim();
	const queue = [];
	const ans = { children: [] };
	const parentMap = new WeakMap();

	let p = ans;

	for (let i = 0; i < code.length; i++) {
		if (code[i] === '<') {
			let j = i + 1;
			while (code[j] !== '>' && j < code.length) {
				j++;
			}

			const tag = code.slice(i, j + 1).replace(/\s/g, '');
			const type = tag.replace(/[<$>\/]/g, '').trim();
			i = j;

			if (tag === `</${p.type}>` && type === p.type) {
				p.type = getType(type);
				p.opening = p.type;
				p.closing = p.type;
				p.endClosing = i;
				p = parentMap.get(p);

				queue.pop();
			} else {
				const parentType = queue.slice().pop();
				if (!parentType) {
					p.type = type;
					p.children = [];
				} else {
					const item = { type, children: [] };
					p.children.push(item);
					parentMap.set(item, p);
					p = item;
				}

				queue.push(type);
			}
		} else {
			if (!queue.length || '>' === code[i]) {
				throw new Error();
			}

			if (!p) {
				p = ans;
			}

			const lastChild = p.children[p.children.length - 1];
			if (!lastChild || typeof lastChild === 'object') {
				p.children.push(code[i]);
			}
			if (typeof lastChild === 'string') {
				p.children[p.children.length - 1] = lastChild + code[i];
			}
		}
	}

	if (queue.length) {
		throw new Error();
	}

	return ans;
}

/**
 * @param {any} your AST
 * @returns {string}
 */
function generate(ast) {
	// your code here
	if (!ast) {
		return null;
	}

	if (typeof ast === 'string') {
		return ast;
	}

	const { type, children } = ast;

	return {
		type,
		props: {
			children: children.map((child) => generate(child)),
		},
	};
}
