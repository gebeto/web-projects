export interface IndicatorConfig {
	current: number;
	previous: number;
	title: string;
	processPercentage?: (percents: number) => any;
}

export default class Indicator {
	constructor(canvas: HTMLCanvasElement, config: IndicatorConfig);
	draw();
}