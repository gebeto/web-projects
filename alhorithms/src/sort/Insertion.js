export function* insertionSortArray(arr) {
	for (var i = 0; i < arr.length; i++) {
		let value = arr[i];
		for (var j = i - 1; j > -1 && arr[j] > value; j--) {
			arr[j + 1] = arr[j];
			yield { j: j, i: i };
		}
		arr[j + 1] = value;
	}
}