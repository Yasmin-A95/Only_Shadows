import * as THREE from 'three';
import { FirstPersonControls } from './controls';
import { InteractionManager } from "three.interactive";
import { CSS2DRenderer } from 'three-css2drenderer';

let camera, renderer, firstPersonController, interactionManager;

let currentScene, isReady;

function init() {
    threeSetup();
    initLibraries();
};

export function getInteractionManager() {
    return interactionManager;
};

export function changeScene(scene) {
    currentScene = scene;
};

export function start(scene) {
    isReady = true;
    currentScene = scene;
    renderer.setAnimationLoop(animation);
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

    labelRenderer = new CSS2DRenderer();
		labelRenderer.setSize( window.innerWidth, window.innerHeight );
		labelRenderer.domElement.style.position = 'absolute';
		labelRenderer.domElement.style.top = '0px';
		document.body.appendChild( labelRenderer.domElement );
};

function threeSetup() {
    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
    camera.position.y = -2;
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
};

const clock = new THREE.Clock();

function animation() {
    interactionManager.update();

    renderer.render( currentScene, camera );
    firstPersonController.update(clock.getDelta());
};

export default init;