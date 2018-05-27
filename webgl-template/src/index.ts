import * as THREE from 'three';
(window as any).THREE = THREE;

import fragmentShader from './fragment.glsl';
import vertexShader from './vertex.glsl';
import 'three/examples/js/controls/OrbitControls';

// Create an empty scene
const scene = new THREE.Scene();

// Create a basic perspective camera
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
// camera.position.z = 4;
camera.position.set( 0, 0, 1 );

// Create a renderer with Antialiasing
const renderer = new THREE.WebGLRenderer({
  antialias: true
});

// Configure renderer clear color
renderer.setClearColor("#000000");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

console.log(THREE.OrbitControls);
const controls = new THREE.OrbitControls(camera, renderer.domElement);
// controls.enablePan = true;
console.log(controls);

// ------------------------------------------------
// FUN STARTS HERE
// ------------------------------------------------

// Create a Plane Mesh with basic material
const geometry = new THREE.PlaneGeometry( 1, 1, 1, 1 );

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texture.png');
const material = new THREE.ShaderMaterial({
  uniforms: {
    texture: { value: texture }
  },

  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

const cube = new THREE.Mesh(geometry, material);

// Add cube to Scene
scene.add(cube);

// Render Loop
const render = function () {
  requestAnimationFrame( render );

  // cube.rotation.x += 0.01;
  // cube.rotation.y += 0.01;

  // Render the scene
  renderer.render(scene, camera);
};

window.onload = function(e) {
  render();
  // renderer.render(scene, camera);
  console.log(scene);
}