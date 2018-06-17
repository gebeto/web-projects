export function* selectionSortArray(arr) {
	for (let i = 0; i < arr.length; i++) {
		let selectedIndex = i;

		for (let j = i; j < arr.length; j++) {
			if (arr[j] > arr[selectedIndex]) {
				selectedIndex = j;
			}
			yield { j: j, i: i, k: selectedIndex };
		}

		if (i != selectedIndex && arr[i] < arr[selectedIndex]) {
			let tmp = arr[i];
			arr[i] = arr[selectedIndex];
			arr[selectedIndex] = tmp;
		}
	}
}