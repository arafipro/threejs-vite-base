import * as THREE from "three";

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x808080);

const fov = 75;
const aspect = window.innerWidth / window.innerHeight;
const near = 0.1;
const far = 1000;
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
camera.position.z = 5;

const canvas = document.getElementById("canvas");
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: canvas!,
});
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);
