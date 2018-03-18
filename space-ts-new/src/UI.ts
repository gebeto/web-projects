import { Star } from './Star';

const Snap = (window as any).Snap;
let svg: any = null;

export function init() {
	svg = Snap(window.innerWidth, window.innerHeight);
	svg.node.setAttribute('class', 'fixed');
}


export class PlanetDescription {
	star: Star;

	x: number;
	y: number;

	circle: any;
	element: any;
	animating: boolean;

	constructor(star: Star) {
		this.star = star;
		this.x = this.star.x;
		this.y = this.star.y;

		this.animating = true;
		// this.circle = svg.circle(this.x, this.y, 8).attr({
		this.circle = svg.circle(0, 0, 8).attr({
			fill: 'transparent',
			stroke: '#FFFF00',
			strokeWidth: 3,
		});

		this.element = svg.group(
			this.circle,
			svg.rect(0, 0, 20, 20).attr({fill: 'red'}),
		)

		this.element.attr({
			transform: `translate(${this.x}, ${this.y})`,
		});

		this.connectWithStar();
		this.initAnimation();
		this.pulseOn();
	}

	connectWithStar() {
		this.star.addEventListener('positionChange', (star: Star) => {
			this.x = star.x;
			this.y = star.y;
			this.update();
		});
	}

	update() {
		// this.element.attr({
		// 	x: this.x,
		// 	y: this.y,
		// });
		this.element.attr({
			transform: `translate(${this.x}, ${this.y})`,
		});
	}

	initAnimation() {
		this.circle.mouseout(() => {
			this.animating = true;
			this.circle.animate({
				r: 6,
			}, 400, mina.easeinout, this.pulseOut);
			this.circle.attr({
				fill: 'transparent'
			}, mina.elastic);
		});
		this.circle.mouseover(() => {
			this.animating = false;
			this.circle.animate({
				r: 100,
			}, 1600, mina.elastic);
			this.circle.attr({
				fill: 'red'
			}, mina.elastic);
		});
	}

	pulseOn = () => {
		if (this.animating) {
			this.circle.animate({
				r: 8,
			}, 600, mina.elastic, this.pulseOut);
		}
	}
	pulseOut = () => {
		if (this.animating) {
			this.circle.animate({
				r: 6,
			 }, 600, mina.elastic, this.pulseOn);
		}
	}
}
