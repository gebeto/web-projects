export interface IndicatorConfig {
	current: number;
	previous: number;
	title: string;
}

export default class Indicator {
	constructor(canvas: HTMLCanvasElement, config: IndicatorConfig);
	draw();
}