import * as THREE from 'three';
import { FirstPersonControls } from './controls';
import { InteractionManager } from "three.interactive";
let camera, scene, renderer, firstPersonController, interactionManager;

function init(main) {
    threeSetup();
    initLibraries();
    main(scene, interactionManager);
};

function initLibraries() {
    firstPersonController = new FirstPersonControls(camera, renderer.domElement);
    firstPersonController.movementSpeed = 5;
    firstPersonController.lookSpeed = 0.1;

    interactionManager = new InteractionManager(
        renderer,
        camera,
        renderer.domElement
    );
};

function threeSetup() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.y = -2;
    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);
};

const clock = new THREE.Clock();

function animation() { // big boi
    interactionManager.update();

    renderer.render( scene, camera );
    firstPersonController.update(clock.getDelta()); 
};

export default init;