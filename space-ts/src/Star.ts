import { ctx, w, h, PI2 } from './canvas';

export class Star {
  layerIndex: number;
  origLayerIndex: number;
  x: number;
  y: number;
  origX: number;
  origY: number;

  constructor(layerIndex: number) {
    this.layerIndex = layerIndex;
    this.origLayerIndex = this.layerIndex;
    this.x = Math.random() * (w + 200) - 100;
    this.y = Math.random() * (h + 200) - 100;
    this.origX = this.x;
    this.origY = this.y;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.layerIndex, 0, PI2);
    ctx.stroke();
  }

  move(x: number, y: number) {
    this.x = this.origX + x * (0.01 + this.layerIndex / 50);
    this.y = this.origY + y * (0.01 + this.layerIndex / 50);
  }
}
