export function getColor(sortingState, currentIndex) {
	let result = "black";
	const sortingStateValue = sortingState.value;
	if (!sortingStateValue) {
		return result;
	}

	if (sortingStateValue.i === currentIndex) {
		result = "red";
	} else if (sortingStateValue.j === currentIndex) {
		result = "orange";
	} else if (sortingStateValue.k && sortingStateValue.k === currentIndex) {
		result = "green";
	}

	return result;
}


export function randomArray(length) {
	const result = [];
	for (let i = 0; i < length; i++) {
		result.push(Math.random() * 100);
	}
	return result;
}