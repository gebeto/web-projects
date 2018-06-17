import { getColor, randomArray } from './addons';
import * as Sort from './sort/';



const ARRAY_SIZE = 40;
const SPEED = 100;



const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const w = canvas.width;
const h = canvas.height;

let arr = randomArray(ARRAY_SIZE);
let sort = Sort.bubbleSortArray(arr);


function init(sortType) {
	arr = randomArray(ARRAY_SIZE);
	sort = Sort[`${sortType}SortArray`](arr);
}

document.getElementById("buttons").addEventListener("click", function(e) {
	const active = e.currentTarget.querySelectorAll(".active");
	for (let i = 0; i < active.length; i++) {
		active[i].className = "";
	}

	e.target.className = "active";

	const sortType = e.target.getAttribute("data-sort");
	init(sortType);
});


// ANIMATION LOOP
(function render() {
	ctx.clearRect(0, 0, w, h);

	// DRAW
	drawArray(arr);


	// window.requestAnimationFrame(render);
	setTimeout(render, SPEED);
})();


function drawArray(arr) {
	const sortingState = sort.next();

	const barWidth = w / arr.length;
	const barHeightGrad = h / Math.max.apply(null, arr);

	arr.forEach(function(el, index) {
		ctx.fillStyle = getColor(sortingState, index);
		ctx.fillRect(barWidth * index, h, barWidth, -barHeightGrad * el);
	});
}
