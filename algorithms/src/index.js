import { getColor, randomArray } from './addons';
import * as Sort from './sort/';


let SORT_TYPE = null;
let ARRAY_SIZE = 40;
let SPEED = 100;
const PADDING_LEFT = 30;
const PADDING_BOTTOM = 30;

let PLAY = false;
const PLAY_STATE = {
	state: false,
	icon: document.getElementById("sort-play-pause-icon"),
	get: function() {
		return this.state;
	},
	set: function(state) {
		this.state = state;
		this.icon.className = `glyphicon glyphicon-${this.get() ? 'pause' : 'play'}`;
	},
};


const titleBlock = document.querySelector("#sort-title")
const descriptionBlock = document.querySelector("#sort-description")
const complexityBlock = document.querySelector("#sort-complexity")

const arraySizeInput = document.querySelector("#sort-array-generate-size");
document.querySelector("#sort-array-generate-form").addEventListener("submit", function(e) {
	e.preventDefault();
	if (arraySizeInput.value) {
		var size = parseInt(arraySizeInput.value);
		if (size) {
			ARRAY_SIZE = size;
			PLAY_STATE.set(false);
			arr = randomArray(ARRAY_SIZE);
			init(SORT_TYPE);
		}
	}
});



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const w = canvas.width;
const h = canvas.height;

let arr = randomArray(ARRAY_SIZE);
let sort = Sort.bubbleSortArray(arr);


function init(sortType) {
	SORT_TYPE = sortType;
	// arr = randomArray(ARRAY_SIZE);
	sort = Sort[`${sortType}SortArray`](arr);
	drawArrayBase(arr);
}

document.getElementById("sort-play-pause").addEventListener("click", function(e) {
	PLAY_STATE.set(!PLAY_STATE.get());
});

document.getElementById("sort-next-step").addEventListener("click", function(e) {
	drawArray(arr);
});


document.getElementById("sort-speed-increment").addEventListener("click", function(e) {
	console.log(SPEED);
	if (SPEED <= 0) {
		SPEED = 0;
		return;
	} else if (SPEED <= 60) {
		SPEED -= 5;
	} else if (SPEED >= 0) {
		SPEED -= 50;
	}

});
document.getElementById("sort-speed-decrement").addEventListener("click", function(e) {
	console.log(SPEED);
	if (SPEED < 50) {
		SPEED += 5;
	} else {
		SPEED += 50;
	}
});

document.getElementById("buttons").addEventListener("click", function(e) {
	const active = e.currentTarget.querySelectorAll(".active");
	for (let i = 0; i < active.length; i++) {
		active[i].className = "";
	}

	e.target.parentNode.className = "active";

	const sortTitle = e.target.getAttribute("data-title");
	const sortDescription = e.target.getAttribute("data-description");
	const sortComplexity = e.target.getAttribute("data-complexity");
	titleBlock.textContent = sortTitle;
	descriptionBlock.textContent = sortDescription;
	complexityBlock.textContent = "Складність: " + sortComplexity;

	const sortType = e.target.getAttribute("data-sort");
	init(sortType);
});
document.querySelector("a[data-title]").click();


// ANIMATION LOOP
(function render() {
	
	// DRAW
	if (PLAY_STATE.get()) {
		drawArray(arr);
	}

	setTimeout(render, SPEED);
})();


function drawArrayBase(arr) {
	ctx.clearRect(0, 0, w, h);

	const barWidth = (w - PADDING_LEFT) / arr.length;
	const barHeightGrad = (h - PADDING_BOTTOM) / Math.max.apply(null, arr);

	ctx.fillStyle = "red";
	ctx.fillRect(PADDING_LEFT - 2, 0, 2, canvas.height);
	ctx.textAlign = "left"
	for (let i = 0; i < 11; i++) {
		ctx.fillText((10 - i) * 10, 0, (canvas.height - PADDING_BOTTOM) / 10 * i);
	}
	ctx.fillRect(0, canvas.height - PADDING_BOTTOM, canvas.width, 2);
	ctx.textAlign = "center"
	for (let i = 0; i < ARRAY_SIZE; i++) {
		ctx.fillText(i + 1, PADDING_LEFT + (i * barWidth) + barWidth / 2, canvas.height - 10);
	}
	ctx.fillStyle = "black";

	arr.forEach(function(el, index) {
		ctx.fillRect(PADDING_LEFT + barWidth * index, h - PADDING_BOTTOM, barWidth, -barHeightGrad * el);
	});
}

function drawArray(arr) {
	ctx.clearRect(0, 0, w, h);
	const sortingState = sort.next();

	const barWidth = (w - PADDING_LEFT) / arr.length;
	const barHeightGrad = (h - PADDING_BOTTOM) / Math.max.apply(null, arr);

	const maxEl = Math.max.apply(null, arr);
	ctx.fillStyle = "red";
	ctx.fillRect(PADDING_LEFT - 2, 0, 2, canvas.height);
	ctx.textAlign = "left"
	for (let i = 0; i < 11; i++) {
		ctx.fillText((10 - i) * 10, 0, (canvas.height - PADDING_BOTTOM) / 10 * i);
	}
	ctx.fillRect(0, canvas.height - PADDING_BOTTOM, canvas.width, 2);
	ctx.textAlign = "center"
	for (let i = 0; i < ARRAY_SIZE; i++) {
		ctx.fillText(i + 1, PADDING_LEFT + (i * barWidth) + barWidth / 2, canvas.height - 10);
	}
	ctx.fillStyle = "black";

	arr.forEach(function(el, index) {
		ctx.fillStyle = getColor(sortingState, index);
		ctx.fillRect(PADDING_LEFT + barWidth * index, h - PADDING_BOTTOM, barWidth, -barHeightGrad * el);
	});

	if (sortingState.done) {
		PLAY_STATE.set(false);
	}
}
