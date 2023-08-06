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
loader.load('antique_bireau_desk.glb', function (glb) {
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

let targetX = 0;
let targetY = 0;

document.addEventListener('pointermove', (event) => {
    mouseX = (event.clientX - (window.innerWidth / 2));
    mouseY = (event.clientY - (window.innerHeight / 2));
    // console.log("Here 1: ", mouseX);
});

// model.rotateX(90 * Math.PI);

// while (true) {
//     scene.rotation.x += .5 * (targetX - scene.rotation.x);
//     scene.rotation.y += .5 * (targetY - scene.rotation.y);
//     requestAnimationFrame(animate);
//     renderer.render(scene, camera);
// }
let count = 0;
function animate() {
    requestAnimationFrame(animate);
    // if (root) {
    //     root.rotation.y += .005;
    // } else {
    //     count += 1;
    //     console.log("rotation not working: ", count);
    // }
    renderer.render(scene, camera);
};

animate();