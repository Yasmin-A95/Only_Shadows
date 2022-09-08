import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import treadMillEnvironmentImage from '../../assets/images/treadmillroom.jpg';
import { updateText } from '../../dom/text-update';
import { changeRoom } from '../scene-manager';
import { checkTimeLine } from '../../state-management/timeline-state';
import { kitchenRoomFactory } from './kitchen-room0';
import { loungeRoomFactory } from './lounge-room0';

// TODO connect this place to other places


export function treadMillRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    treadMillRoomEnvironmentSphere(scene, interactionManager);
    const clickableTreadmill = treadmill(scene, interactionManager);
    const clickableLoungeEntrance = moveTolounge(scene, interactionManager);
    const clickableKithcenEntrace = moveToKitchen(scene, interactionManager);
    
    clickableTreadmill.addEventListener('click', treadmillState);
    clickableLoungeEntrance.addEventListener('click', moveToloungeState);
    clickableKithcenEntrace.addEventListener('click', moveToKitchenState)

    return scene;
}

function treadMillRoomEnvironmentSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(treadMillEnvironmentImage)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;
};

function treadmill(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(2,0.5,1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "red"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3;
    cube.position.y = -3.5;
    cube.position.z = -0.3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function treadmillState() {
    updateText('hmmm, nah')
};

function moveTolounge(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(3, 5.5, 3);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "yellow"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -3;
    cube.position.y = -1.4;
    cube.position.z = 3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;

};

function moveToloungeState() {
    if (checkTimeLine("house-0")) {
        changeRoom(loungeRoomFactory, 'lounge-room0');
    }
};

function moveToKitchen(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(3, 5.5, 3);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "pink"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 4;
    cube.position.y = -1.4;
    cube.position.z = 4;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;

};

function moveToKitchenState() {
    if (checkTimeLine("house-0")) {
        changeRoom(kitchenRoomFactory, 'kitchen-room0');
    }
};


// function scaryDoor(scene, interactionManager) {

    // const geometry = new THREE.BoxGeometry(3, 5.5, 3);
    // const material = new THREE.MeshBasicMaterial({wireframe: true, color: "yellow"});
    // const cube = new THREE.Mesh(geometry, material);
    // cube.position.x = -4;
    // cube.position.y = -1.4;
    // cube.position.z = 2;

    // scene.add(cube);
    // interactionManager.add(cube);
    // return cube;
// };

// function scaryDoorState() {
//     // TODO make it transport you to the boundless void
//     updateText("I wonder what's through here?")
//};