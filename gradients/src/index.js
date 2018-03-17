import { createCard } from './card';
// import gradients from './gradients.json';

export const cards = [];
const gradients = [
	['#F25656', '#FB72AE'],
	['#A2ABF0', '#B482D3'],
	['#86CFEB', '#789AEC'],
	['#B7F2EB', '#8ADCEB'],
	['#889CFF', '#9BE1D2'],
	['#FD9786', '#F567DB'],
	['#E6EE9D', '#5CF2B9'],
	['#F387BB', '#A26FED'],
	['#FFE35A', '#FFB064'],
	['#B6B6F7', '#F4ACCB'],
	['#E5EBA3', '#A7DA7C'],
	['#5F6BE3', '#73BDEB'],
	['#F8BF66', '#F95C81'],
	['#77EFD8', '#45B9F1'],
	['#62A8FD', '#9E80F2'],
];

const wrapper = document.querySelector('.wrapper');
gradients.forEach((grad, i) => wrapper.appendChild(createCard(grad[0], grad[1], i)));

// for (var i = 0; i < grads.length; i++) {
// 	wrapper.appendChild(createCard(grads[i][0], grads[i][1], i));
// }

// const ncards = [];
// cards.forEach((el) => {
// 	const key = Math.round(el.hue);
// 	if (!ncards[key]) {
// 		ncards[key] = [];
// 	}
// 	ncards[key].push(el);
// });

// console.log(ncards);
// let c = [];
// ncards.map((el) => {
// 	c = c.concat(el.sort((a, b) => a.lum - b.lum));
// });

// console.log(c);
// c.map((c) => {
// 	wrapper.removeChild(c.block);
// 	wrapper.appendChild(c.block);
// })

// cards.sort((a, b) => a.hue - b.hue).map((c) => {
// 	wrapper.removeChild(c.block);
// 	wrapper.appendChild(c.block);
// });