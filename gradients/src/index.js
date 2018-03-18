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

	// ['#90228C', '#009B90'],
	// ['#00ABEE', '#F8F8BA'],
	// ['#313131', '#534D4D'],
	// ['#421057', '#F45509'],
	// ['#EC4443', '#E9BB85'],
	// ['#D481FF', '#06F0E0'],
	// ['#F298E7', '#A5F8F8'],
	// ['#846FF4', '#F17674'],
	// ['#00F198', '#08F6F6'],
	// ['#7A7A7A', '#E3DFDF'],
	// ['#AB64F5', '#62DBF6'],
	// ['#009900', '#FFFF92'],
	// ['#2E266F', '#7C2289'],
	// ['#F38731', '#D8DF16'],
	// ['#CF396F', '#F6E28B'],
	// ['#04A5C0', '#F9F981'],
	// ['#EB121A', '#F9EB19'],
	// ['#62258A', '#FC0F77'],
	// ['#06974A', '#F2E41F'],
	// ['#D20B54', '#FFB84A'],
	// ['#303395', '#28EFEF'],
];

// cards.sort((a, b) => a.hue - b.hue).map((c) => {
// 	wrapper.removeChild(c.block);
// 	wrapper.appendChild(c.block);
// });

const wrapper = document.querySelector('.wrapper');
const c = gradients.map((grad, i) => wrapper.appendChild(createCard(grad[0], grad[1], i)));
// cards.sort((a, b) => a.hue - b.hue).map((c) => {
// 	wrapper.removeChild(c.block);
// 	wrapper.appendChild(c.block);
// });


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