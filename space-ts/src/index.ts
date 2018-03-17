import {
  canvas,
  ctx,
  w,
  h,
} from './canvas';
import { StarsLayer } from './StarsLayer';
import { Planet } from './Planet';
import { Star } from './Star';

const s1 = new StarsLayer(1);
const s2 = new StarsLayer(2);
const s3 = new StarsLayer(3);
const planet = new Planet();

(function loop() {
  ctx.fillRect(0,0,w,h);
  s1.draw();
  s2.draw();
  planet.draw();
  s3.draw();
  requestAnimationFrame(loop);
})()

canvas.addEventListener('mousemove', function(e) {
  var x = e.layerX - w / 2;
  var y = e.layerY - h / 2;

  s1.move(x, y);
  s2.move(x, y);
  s3.move(x, y);

  planet.think(x, y);
});