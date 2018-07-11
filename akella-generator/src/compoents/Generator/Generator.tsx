import * as React from 'react';
import './styles.css';


export function drawLeftText(ctx, text) {
	var horizontalMiddle = 555;
	var fontSize = 120;
	var horizontalMiddleCalculated = horizontalMiddle + fontSize / 2.6;

	ctx.save();

	ctx.translate(400, horizontalMiddleCalculated);
	ctx.rotate(- Math.PI / 13.5);

	ctx.font = fontSize + 'px AvenirNext';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#FFFFFF';
	ctx.fillText(text, 0, 0);

	ctx.restore();
}

export function drawRightText(ctx, text) {
	var horizontalMiddle = 505;
	var fontSize = 120;
	var horizontalMiddleCalculated = horizontalMiddle + fontSize / 2.6;

	ctx.save();

	ctx.translate(1000, horizontalMiddleCalculated);
	ctx.rotate(- Math.PI / 13.5);

	ctx.font = fontSize + 'px AvenirNext';
	ctx.textAlign = 'center';
	ctx.fillStyle = '#FFFFFF';
	ctx.fillText(text, 0, 0);

	ctx.restore();
}


// window.addEventListener('DOMContentLoaded', function() {
// 	console.log('Loaded', templateImage, exampleImage);

// 	// ctx.drawImage
// 	ctx.drawImage(templateImage, 0, 0);
// 	drawLeftText('Hello world');
// 	drawRightText('Slavik');

// 	// ctx.fillRect(400, 555, 100, 100);

// });


// var templateImage = document.getElementById("template");
// var exampleImage = document.getElementById("example");

// var canvas = document.getElementById("akella");

// ctx.fillRect(0, 0, 100, 100);

export interface GeneratorProps {
	left: string,
	right: string,
	image: HTMLImageElement,
	templateImage: HTMLImageElement,
}


export default class Generator extends React.Component<GeneratorProps, any> {
	w: number;
	h: number;
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;

	componentDidMount() {
		this.ctx = this.canvas.getContext("2d");
		console.log("Mount", this.canvas);
		this.w = this.canvas.width = this.props.templateImage.width;
		this.h = this.canvas.height = this.props.templateImage.height;
		this.ctx.fillRect(0, 0, 100, 100);

	}

	componentDidUpdate() {
		console.log("Update", this.canvas);
		this.w = this.canvas.width = this.props.templateImage.width;
		this.h = this.canvas.height = this.props.templateImage.height;
		this.ctx.fillRect(0, 0, this.w, this.h);

		this.ctx.drawImage(this.props.templateImage, 0, 0);
		drawLeftText(this.ctx, this.props.left);
		drawRightText(this.ctx, this.props.right);
	}

	render() {
		return (
			<div className="canvas-wrapper">
				<canvas ref={canvas => this.canvas = canvas}></canvas>
			</div>
		);
	}
}