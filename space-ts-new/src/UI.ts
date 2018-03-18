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
		this.circle = svg.circle(0, 0, 10).attr({
			fill: 'transparent',
			stroke: '#FFFF00',
			strokeWidth: 2,
		});

		this.element = svg.group(
			this.circle,
			svg.rect(0, 0, 1, 1),
		);
		this.element[1].attr({
			stroke: '#fff',
			// fill: 'none'
		})

		this.element.attr({
			transform: `translate(${this.x}, ${this.y})`,
		});

		this.connectWithStar();
		this.mouseEvents();
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

	mouseEvents() {
		var opened = false;
		this.element.click(() => {
			if (!opened) return;
			console.log('OUT')
			this.element[1].animate({
				height: 1,
				// height: 240,
			}, 400, mina.linear, () => {
				this.element[1].animate({
					width: 1,
				}, 400, mina.linear, () => opened = false)
			});
		});
		this.element.click(() => {
			if (opened) return;
			console.log('OVER')
			this.element[1].animate({
				width: 180,
			}, 400, mina.linear, () => {
				this.element[1].animate({
					height: 80,
				}, 400, mina.linear, () => {opened = true});
			});
		});
	}

	pulseOn = () => {
		this.circle.animate({
			r: 8,
		}, 600, mina.elastic, this.pulseOut);
	}
	pulseOut = () => {
		this.circle.animate({
			r: 5,
		}, 600, mina.elastic, this.pulseOn);
	}
}
