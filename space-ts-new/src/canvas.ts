const MyCanvas: HTMLCanvasElement = document.createElement('canvas');
document.body.appendChild(MyCanvas);

const MyCtx: CanvasRenderingContext2D = (MyCanvas.getContext('2d') as any);

export const PI2 = Math.PI * 2;
export const w = MyCanvas.width = window.innerWidth;
export const h = MyCanvas.height = window.innerHeight;

MyCanvas.style.width = w + 'px';
MyCanvas.style.height = h + 'px';
MyCtx.lineWidth = 1.5;
MyCtx.strokeStyle = 'white';

export const ctx = MyCtx;
export const canvas = MyCanvas;