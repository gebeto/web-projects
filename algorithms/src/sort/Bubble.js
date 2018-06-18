export function* bubbleSortArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr.length; j++) {
			if (arr[j] > arr[j - 1]) {
				let tmp = arr[j];
				arr[j] = arr[j - 1];
				arr[j - 1] = tmp;
			}
			yield { i: j, j: j - 1 };
		}
	}
}
