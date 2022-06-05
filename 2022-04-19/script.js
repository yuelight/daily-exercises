// link https://bigfrontend.dev/zh/problem/remove-characters

/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
	// your code here
	while (true) {
		if (input.includes('b') || input.includes('ac')) {
			input = input.replaceAll('b', '').replaceAll('ac', '');
			continue;
		}

		break;
	}

	return input;
}
