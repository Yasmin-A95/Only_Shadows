import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import kitchenEnvironmentImage from '../../assets/images/kitchen.jpg';
import { updateText } from '../../dom/text-update';
import { cubeRoomFactory } from './cube-room';
import { changeRoom } from '../scene-manager';
import { treadMillRoomFactory } from './treadmill-room0';
import { checkTimeLine } from '../../state-management/timeline-state';

// TODO connect this place to other places


export function kitchenRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bathRoomEnvironmentSphere(scene, interactionManager);
    
    const clickablekitchenSink = kitchenSink(scene, interactionManager);
    const clickableDoor = scaryDoor(scene, interactionManager);
    const archWayDoor = moveToTreadmillRoom(scene, interactionManager);

    
    clickablekitchenSink.addEventListener('click', kitchenSinkState);
    clickableDoor.addEventListener('click', scaryDoorState);
    archWayDoor.addEventListener('click', moveToTreadmillRoomState)    

    return scene;
}

function bathRoomEnvironmentSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(kitchenEnvironmentImage)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;
};

function kitchenSink(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(5,0.5,1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "red"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1.5;
    cube.position.y = -3;
    cube.position.z = -2.3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function kitchenSinkState() {
    updateText('hmmm, nah')
};

function scaryDoor(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(3, 5.5, 3);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "yellow"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -4;
    cube.position.y = -1.4;
    cube.position.z = 2;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function scaryDoorState() {
    updateText("I wonder what's through here?")
    setTimeout(changeRoom(cubeRoomFactory, 'cube-room0'), 1000)
};

function moveToTreadmillRoom(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(3, 4, 3);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "blue"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 2.5;
    cube.position.y = -1.4;
    cube.position.z = 4;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function moveToTreadmillRoomState() {
    if (checkTimeLine("house-0")) {
        changeRoom(treadMillRoomFactory, 'treadmill-room0');
    }
};
