import { planet } from './Planet';

export interface GlobalRenderData {
	canvas: HTMLCanvasElement;
	ctx: CanvasRenderingContext2D;
	w?: number;
	h?: number;
}

export const PI2 = Math.PI * 2;
const exportData: GlobalRenderData = {
	canvas: null,
	ctx: null,
};

exportData.canvas = document.createElement('canvas');
exportData.canvas.className = 'fixed';
document.body.appendChild(exportData.canvas);

exportData.ctx = exportData.canvas.getContext('2d');
exportData.w = exportData.canvas.width = window.innerWidth;
exportData.h = exportData.canvas.height = window.innerHeight;

exportData.canvas.style.width = '100%';
exportData.canvas.style.height = '100%';
exportData.ctx = exportData.canvas.getContext('2d');
exportData.ctx.lineWidth = 1.5;
exportData.ctx.strokeStyle = 'white';

window.addEventListener('resize', function() {
	exportData.w = exportData.canvas.width = window.innerWidth;
	exportData.h = exportData.canvas.height = window.innerHeight;
	exportData.ctx = exportData.canvas.getContext('2d');
	exportData.ctx.strokeStyle = 'white';
});

export default exportData;
(window as any).G = exportData;