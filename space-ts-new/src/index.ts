import G from './canvas';
import { StarsLayer, StarsLayerWithUI } from './StarsLayer';
import { planet } from './Planet';
import { Star } from './Star';
import * as UI from './UI';

// INIT DATA
const stars = [
  new StarsLayer(0.5),
  new StarsLayer(1),
  new StarsLayer(2),
  new StarsLayer(3),
  new StarsLayer(4),
  new StarsLayerWithUI(5),
];


// EVENT LISTENERS
window.addEventListener('resize', function() {
  planet.changeCenter(G.w / 2, G.h / 2);
})

document.addEventListener('mousemove', function(e: MouseEvent) {
  var x = e.clientX - G.w / 2;
  var y = e.clientY - G.h / 2;

  for (let i = 0; i < stars.length; i++) {
    stars[i].move(x, y);
  }

  planet.think(x, y);
});

// LOOP
(function loop() {
  G.ctx.fillRect(0, 0, G.w, G.h);

  stars[0].draw(G.ctx);
  stars[1].draw(G.ctx);
  stars[2].draw(G.ctx);
  stars[3].draw(G.ctx);
  stars[4].draw(G.ctx);
  planet.draw(G.ctx);
  stars[5].draw(G.ctx);

  requestAnimationFrame(loop);
})()

UI.init();
const p1 = new UI.PlanetDescription(stars[5].stars[0]);
const p2 = new UI.PlanetDescription(stars[5].stars[5]);



// var l: any = null;
// setInterval(function() {
//   console.log(l);
// }, 1000);
// window.addEventListener('devicemotion', function(e) {
//   // l = e;
//   var x = e.accelerationIncludingGravity.x * 100;
//   var y = e.accelerationIncludingGravity.y * -100;
//   var z = e.accelerationIncludingGravity.z * 100;

//   l = {
//     x: x,
//     y: y,
//     z: z,
//   };

//   for (let i = 0; i < stars.length; i++) {
//     stars[i].move(x, y);
//   }

//   planet.think(x, y);
// }, true);

// window.addEventListener("deviceorientation", function(e) {
//   l = e;
//   // e.beta, e.gamma
//   // var x = e.gamma - G.w / 10;
//   // var y = e.beta - G.h / 10;
//   var x = e.gamma;
//   var y = e.beta;

//   for (let i = 0; i < stars.length; i++) {
//     stars[i].move(x, y);
//   }

//   planet.think(x, y);
// }, true);