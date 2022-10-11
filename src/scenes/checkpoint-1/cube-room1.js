import * as THREE from 'three';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../init';
import { addImageToInventory, addNoteToInventory, addObjectToInventory, isImageInInventory, isNoteInInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { checkTimeLine } from '../../state-management/timeline-state';

// icons
import objectIcon from '../../assets/icons/object-gem-icon.jpg';
import noteIcon from '../../assets/icons/note-icon.jpg'
import imageIcon from '../../assets/icons/image-polaroid-icon.jpg'

export function cubeRoom1Factory() {
    const scene = new THREE.Scene();

    const interactionManager = getInteractionManager();

    // call evilCube giving it scene and interaction manager and assign that to a variable
    const clickableEvilCube = evilCube(scene, interactionManager);
    const inventoryRandomObject = randomObj(scene, interactionManager);
    const clickableRandomNote = randomNote(scene, interactionManager);
    const clickableRandomImg = randomImg(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        // changeRoom(cubeRoom1Factory);
    });

    inventoryRandomObject.addEventListener('click', function (e) {
        if (checkTimeLine("house-1")) {
            if (!isObjectInInventory("cube dimensh obj")) {
                addObjectToInventory("cube dimensh obj", objectIcon);
                updateText("oh nice a cube dimensh obj, ill have that thanks");
            } else if (isObjectInInventory) {
                updateText("I already have this item");
            };
        }
    });

    clickableRandomNote.addEventListener('click', function (e) {
        if (checkTimeLine("house-1")) {
            if (!isNoteInInventory("words")) {
                addNoteToInventory("words", noteIcon)
                updateText("note reads: death is imminent");
            } else if (isNoteInInventory) {
                updateText("note still reads: death is imminent");

            };
        }
    });

    clickableRandomImg.addEventListener('click', function (e) {
        if (checkTimeLine("house-1")) {
            if (!isImageInInventory("img src cube dim")) {
                addImageToInventory("img src cube dim", imageIcon)
                updateText("oh wow who left an image in this cube dimension");
            } else if (isImageInInventory) {
                updateText("I already have this item");
            };
        }
    });

    updateText("Escape is no longer an option");
    return scene;
};

function evilCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: "yellow" });
    const evilCube = new THREE.Mesh(geometry, material);
    evilCube.position.x = 2;
    evilCube.position.y = -2;
    evilCube.position.z = 2;

    scene.add(evilCube);
    interactionManager.add(evilCube);

    return evilCube;
};

function randomObj(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.2 });
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
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.2 });
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
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.2 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1.4;
    cube.position.y = -2;
    cube.position.z = 3.5;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};