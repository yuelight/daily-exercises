// link https://bigfrontend.dev/zh/problem/the-angle-between-hour-hand-and-minute-hand-of-a-clock

/**
 * @param {string} time
 * @returns {number}
 */
function angle(time) {
	const list = time.split(':');
	const h = +list[0] % 12;
	const m = +list[1];
	const h_offset = h * 5 + m / 12;

	const v1 = (Math.abs(h_offset - m) / 30) * 180;
	const v2 = Math.abs(360 - v1);

	return Math.ceil(Math.min(v1, v2));
}
