import G, { PI2 } from './canvas';

class Planet {
	x: number;
	y: number;
	origX: number;
	origY: number;
	radius: number;
	cradius: number;
	mv: number;

	constructor() {
		this.x = G.w / 2;
		this.y = G.h / 2;
		this.origX = this.x;
		this.origY = this.y;
		this.radius = 100;
		this.cradius = this.radius + 50;
		this.mv = 20;
	}

	drawBackCircle(ctx: CanvasRenderingContext2D, radius: number, y?: number) {
		y = y || 0;
		ctx.beginPath();
		ctx.moveTo(this.x - radius,this.y - this.mv);
		ctx.bezierCurveTo(
			this.x - radius, this.y - y - 50 - this.mv,
			this.x + radius, this.y - y - 50 + this.mv,
			this.x + radius, this.y + this.mv
		);
		ctx.stroke();
	}

	drawFrontCircle(ctx: CanvasRenderingContext2D, radius: number, y?: number) {
		y = y || 0;
		ctx.beginPath();
		ctx.moveTo(this.x - radius,this.y - this.mv);
		ctx.bezierCurveTo(
			this.x - radius, this.y + y + 50 - this.mv,
			this.x + radius, this.y + y + 50 + this.mv,
			this.x + radius, this.y + this.mv
		);
		ctx.stroke();
	}

	draw(ctx: CanvasRenderingContext2D) {
		this.drawBackCircle(ctx, this.cradius);
		this.drawBackCircle(ctx, this.cradius + 10, 4);
		
		ctx.beginPath();
		ctx.arc(this.x, this.y, 100, 0, PI2);
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(this.x, this.y - 50, 30, 0, PI2);
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(this.x - 40, this.y - 20, 10, 0, PI2);
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();

		ctx.beginPath();
		ctx.arc(this.x - 45, this.y - 45, 5, 0, PI2);
		ctx.fillStyle = 'black';
		ctx.fill();
		ctx.stroke();
		
		this.drawFrontCircle(ctx, this.cradius);
		this.drawFrontCircle(ctx, this.cradius + 10, 12);
	}

	think(x: number, y: number) {
		this.mv = y / 100 + x / 100;
		this.x = this.origX + x / 30;
		this.y = this.origY + y / 30;
	}

	changeCenter(x: number, y: number) {
		this.origX = x;
		this.origY = y;
		this.x = x;
		this.y = y;
	}
}

export const planet = new Planet();