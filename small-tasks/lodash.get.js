// get({ a: { b: 1 } }, 'a.b')

function get(obj, keysStr) {
	const keys = keysStr.split('.');
	let res = obj;
	for (let i = 0; i < keys.length; i++) {
		if (res.hasOwnProperty(keys[i])) {
			res = res[keys[i]]
		} else {
			return undefined;
		}
	}
	return res;
}

