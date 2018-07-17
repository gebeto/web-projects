export interface ManagerIndicatorConfig {
	size: number;
	current: number;
	previous: number;
	title: string;
}

export default class ManagerIndicator {
	constructor(canvas: HTMLCanvasElement, config: ManagerIndicatorConfig);
	draw();
}