import { getColor, randomArray } from './addons';
import * as Sort from './sort/';


let SORT_TYPE = null;
let ARRAY_SIZE = 40;
let SPEED = 100;

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
	drawArray(arr);
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
	titleBlock.textContent = sortTitle;
	descriptionBlock.textContent = sortDescription;

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


function drawArray(arr) {
	ctx.clearRect(0, 0, w, h);
	const sortingState = sort.next();

	const barWidth = w / arr.length;
	const barHeightGrad = h / Math.max.apply(null, arr);

	arr.forEach(function(el, index) {
		ctx.fillStyle = getColor(sortingState, index);
		ctx.fillRect(barWidth * index, h, barWidth, -barHeightGrad * el);
	});

	if (sortingState.done) {
		PLAY_STATE.set(false);
	}
}
