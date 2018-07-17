export interface ManagerIndicatorConfig {
	current: number;
	previous: number;
	title: string;
}

export default class ManagerIndicator {
	constructor(canvas: HTMLCanvasElement, config: ManagerIndicatorConfig);
	draw();
}