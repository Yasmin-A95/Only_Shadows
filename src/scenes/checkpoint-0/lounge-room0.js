import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import loungeRoomEnvironmentImage from '../../assets/images/loungeroom0trippy.jpg';
import { addImageToInventory, addObjectToInventory, isImageInInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { updateText } from '../../dom/text-update';

// icons
import objectIcon from '../../assets/icons/object-gem-icon.jpg';
import noteicon from '../../assets/icons/note-icon.jpg';
import imageIcon from '../../assets/icons/image-polaroid-icon.jpg'
import { checkTimeLine } from '../../state-management/timeline-state';
import { changeCheckpoint, changeRoom } from '../scene-manager';
import { artRoom1Factory } from '../checkpoint-1/art-room1';
import { bedRoom1Factory } from '../checkpoint-1/bed-room1';
import { treadMillRoomFactory } from './treadmill-room0';


export function loungeRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    loungeRoomSphere(scene, interactionManager);

    const clickableRandomObj = randomObject(scene, interactionManager);
    const clickableRandomImage = randomImage(scene, interactionManager);
    const clickablehallwayDoor = hallwayDoor(scene, interactionManager);
    const clickableTreadmillDoor = treadmillRoomDoor(scene, interactionManager);
    const clickablePlant = plant(scene, interactionManager);


    clickableRandomObj.addEventListener('click', randomObjectState);
    clickableRandomImage.addEventListener('click', randomImageState);
    clickablehallwayDoor.addEventListener('click', hallwayDoorState);
    clickableTreadmillDoor.addEventListener('click', treadmillRoomDoorState);
    clickablePlant.addEventListener('click', plantState);

    updateText("");
    return scene;
};

function loungeRoomSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(loungeRoomEnvironmentImage)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;

};

// making objects //

function randomObject(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3;
    cube.position.y = -2.1;
    cube.position.z = 3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;

};

function randomObjectState() {
    if (!isObjectInInventory("hey look at this thing")) {
        addObjectToInventory("hey look at this thing", objectIcon);
        updateText("hey look a new thing to have, yum");
    } else if (isObjectInInventory("hey look at this thing")) {
        updateText("I already have this item");
    }
};

function randomImage(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'yellow' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3.5;
    cube.position.y = -2.5;
    cube.position.z = 2.4;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function randomImageState() {
    if (!isImageInInventory('a nice painting')) {
        addImageToInventory('a nice painting', imageIcon);
        updateText('aw a nice painting, yoink');
    } else if (isImageInInventory('a nice painting')) {
        updateText("Yeah, been there done that");
    };
};

function hallwayDoor(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(2, 5, 2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "pink" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -0.9;
    cube.position.y = -1.4;
    cube.position.z = -4;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function hallwayDoorState() {
    if (checkTimeLine("house-0")) {
        changeCheckpoint(bedRoom1Factory, "house-1", "bed-room1");
    }
}

function treadmillRoomDoor(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(2, 5, 2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "blue" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0;
    cube.position.y = -1.4;
    cube.position.z = 5;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function treadmillRoomDoorState() {
    // updateText('click')
    if (checkTimeLine("house-0")) {
        changeRoom(treadMillRoomFactory, "treadmill-room0");
    }
};

function plant(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 2.5, 1.2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 4.5;
    cube.position.y = -2.5;
    cube.position.z = 1.4;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function plantState() {
    updateText("Hmm, needs watering")
};