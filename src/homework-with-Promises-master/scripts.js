export function generateSign() {
	return new Promise(resolve => {
		setTimeout(() => {
			const sign = Date.now().toString().split('').reverse().slice(0, 5).join('');
			resolve(String.fromCharCode(sign));
		}, 200);
	});
}

export async function getRandomChinese(length) {
	let res = '';
	while (length > 0) {
		res += await generateSign(length);
		length--;
	}
	return res;
}