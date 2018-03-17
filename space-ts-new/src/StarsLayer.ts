import { ctx } from './canvas';
import { Star } from './Star';

export class StarsLayer {
  stars: Array<any>;

  constructor(index: number) {
    this.stars = [];
    for (var i = 0; i < 400 / (index*2); i++) {
      this.stars.push(new Star(index));
    }
  }

  draw() {
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].draw();
    }
  }

  move(x: number, y: number) {  
    for (var i = 0; i < this.stars.length; i++) {
      this.stars[i].move(x, y);
    }
  }

  each(cb: (s: Star, index: number, arr: Star[]) => void) {
    for (var i = 0; i < this.stars.length; i++) {
      cb(this.stars[i], i, this.stars);
    }
  }
}