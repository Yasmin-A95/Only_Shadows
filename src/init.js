import * as THREE from 'three';
import { FirstPersonControls } from './lib/controls';
import { getCurrentScene, changeScene } from './scenes/scene-manager';
import { InteractionManager } from "three.interactive";
import { loadGame, initNewGameState } from './state-management/game-state';

let camera, renderer, firstPersonController, interactionManager;

function init() {
    threeSetup();
    initLibraries();
    loadGame();
};

export function startGame(sceneFactory) {
    changeScene(sceneFactory);
    renderer.setAnimationLoop(animation);
};

export function getInteractionManager() {
    return interactionManager;
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
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
};

const clock = new THREE.Clock();

function animation() {
    interactionManager.update();

    renderer.render(getCurrentScene(), camera);
    firstPersonController.update(clock.getDelta());
};

// tool bar

const restartButton = document.getElementById('restart-button');
restartButton.addEventListener('click', handleRestartButton);

export function handleRestartButton(e) {
    initNewGameState();
    window.location.reload();
};
export default init;