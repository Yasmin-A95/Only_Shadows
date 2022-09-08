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
    const clickableAnotherRandomTrolleyThing = anotherRandomTrolleyThing(scene, interactionManager);
    const clickableRandomImage = randomImage(scene, interactionManager);
    const clickablehallwayDoor = hallwayDoor(scene, interactionManager);
    const clickableTreadmillDoor = treadmillRoomDoor(scene, interactionManager);
    const clickablePlant = plant(scene, interactionManager);
    const clickableFireplace = fireplace(scene, interactionManager);
    const clickableCouch = couch(scene, interactionManager);
    const clickablePalm = palm(scene, interactionManager);
    const clickableTv = tv(scene, interactionManager);
    const clickableCoffeeTable = coffeeTable(scene, interactionManager);

    clickableRandomObj.addEventListener('click', randomObjectState);
    clickableRandomImage.addEventListener('click', randomImageState);
    clickablehallwayDoor.addEventListener('click', hallwayDoorState);
    clickableTreadmillDoor.addEventListener('click', treadmillRoomDoorState);
    clickablePlant.addEventListener('click', plantState);
    clickableFireplace.addEventListener('click', fireplaceState);
    clickableCouch.addEventListener('click', couchState);
    clickablePalm.addEventListener('click', palmState);
    clickableTv.addEventListener('click', tvState);
    clickableCoffeeTable.addEventListener('click', coffeeTableState);
    clickableAnotherRandomTrolleyThing.addEventListener('click', anotherRandomTrolleyThingState);
    

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

function anotherRandomTrolleyThing(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 2.6;
    cube.position.y = -2.5;
    cube.position.z = 3.2;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function anotherRandomTrolleyThingState() {
    updateText("so much random garbage, so little space")
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

function fireplace(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'blue' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 4.5;
    cube.position.y = -1.9;
    cube.position.z = 0.2;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function fireplaceState() {
    updateText("probably best not to start fires these days")
};

function couch(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'purple' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 4.2;
    cube.position.y = -1.9;
    cube.position.z = -1.4;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function couchState() {
    updateText('hmmm, covered in cat hair. sigh...')
};

function palm(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'yellow' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3.2;
    cube.position.y = -1.9;
    cube.position.z = -3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function palmState() {
    updateText("These plants don't help with the mould...")
};

function tv(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 2.8, 4);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'green' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -3.5;
    cube.position.y = -1.9;
    cube.position.z = 1.2;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function tvState() {
    updateText("I'd better get my eyes checked, too much tv has everything looking pretty warped")
};

function coffeeTable(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.5, 1, 2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'yellow' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3;
    cube.position.y = -3.5;
    cube.position.z = -1;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function coffeeTableState() {
    updateText('nothing of interest to be found here')
};