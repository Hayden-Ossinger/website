import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

let scene = new THREE.Scene();
scene.background = new THREE.Color(0xdddddd);
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(-.25, .4, .8);
scene.add(camera);

var light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

let renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const loader = new GLTFLoader();
let root;
loader.load('./3d/office_desk.glb', function (glb) {
    console.log("Here: ", glb);
    root = glb.scene;
    root.scale.set(.002, .002, .002);
    root.rotation.y += 2;
    scene.add(root);

}, function (xhr) {
    console.log(xhr.loaded / xhr.total * 100, "% loaded");
}, function (error) {

    console.error(error);

});

let mouseX = 0;
let mouseY = 0;

let count = 0;

export function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
};



