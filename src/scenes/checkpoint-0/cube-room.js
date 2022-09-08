import * as THREE from 'three';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../init';
import { changeCheckpoint } from '../scene-manager';
import { artRoom1Factory } from '../checkpoint-1/art-room1';
import { addImageToInventory, addNoteToInventory, addObjectToInventory, isImageInInventory, isNoteInInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { checkTimeLine } from '../../state-management/timeline-state';

// icons

import objectIcon from '../../assets/icons/object-gem-icon.jpg';
import noteicon from '../../assets/icons/note-icon.jpg';
import imageIcon from '../../assets/icons/image-polaroid-icon.jpg'

export function cubeRoomFactory() {
    const scene = new THREE.Scene();

    const interactionManager = getInteractionManager();

    const clickableEvilCube = evilCube(scene, interactionManager);
    const inventoryRandomObject = randomObj(scene, interactionManager);
    const clickableRandomNote = randomNote(scene, interactionManager);
    const clickableRandomImg = randomImg(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        //changeCheckpoint(artRoom1Factory, "house-1", "artroom-1");
    });

    inventoryRandomObject.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
            if (!isObjectInInventory("cube dimensh obj")) {
                addObjectToInventory("cube dimensh obj", objectIcon);
                updateText("oh nice a cube dimensh obj, ill have that thanks");
            } else if (isObjectInInventory) {
                updateText("I already have this item");
            };
        }
    });

    clickableRandomNote.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
            if (!isNoteInInventory("words")) {
                addNoteToInventory("words", noteicon)
                updateText("note reads: death is imminent");
            } else if (isNoteInInventory) {
                updateText("note still reads: death is imminent");

            };
        }
    });

    clickableRandomImg.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
            if (!isImageInInventory("img src cube dim")) {
                addImageToInventory("img src cube dim", imageIcon);
                updateText("oh wow who left an image in this cube dimension");
            } else if (isImageInInventory) {
                updateText("I already have this item");
            };
        }
    });

    updateText("Welcome to your nightmare");
    return scene;
};

function evilCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 0xff0000 });
    const evilCube = new THREE.Mesh(geometry, material);
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    evilCube.position.x = 3.9;
    evilCube.position.y = -1;
    evilCube.position.z = 3.9;

    scene.add(evilCube);
    interactionManager.add(evilCube);

    return evilCube;
};

function randomObj(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "yellow" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3;
    cube.position.y = -2;
    cube.position.z = 3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function randomNote(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "pink" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 2.7;
    cube.position.y = -2;
    cube.position.z = 3.5;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function randomImg(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "blue" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1.4;
    cube.position.y = -2;
    cube.position.z = 3.5;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};