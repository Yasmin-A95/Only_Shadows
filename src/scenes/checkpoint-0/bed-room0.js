// init room
import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import bedRoomEnvironmentImage from '../../assets/images/bedroom1.jpg';
import { addNoteToInventory, isNoteInInventory } from '../../state-management/inventory-state';
import { updateText } from '../../dom/text-update';

// icons
import objectIcon from '../../assets/icons/object-gem-icon.jpg';
import noteicon from '../../assets/icons/note-icon.jpg';
import imageIcon from '../../assets/icons/image-polaroid-icon.jpg'

// camera for debugging / dev

import { getCamera } from '../../init';

export function bedRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bedroomSphere(scene, interactionManager);

    const clickableDiary = diaryCube(scene, interactionManager);
    const clickableNote = bedroomVanityNote(scene, interactionManager);

    clickableDiary.addEventListener('click', diaryState);
    clickableNote.addEventListener('click', bedroomVanityNoteState);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);
    // const camera = getCamera();
    // camera.lookAt(clickableNote.position); ??? why
    return scene;
};

function bedroomSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(bedRoomEnvironmentImage
        )
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    interactionManager.add(mesh);
    return mesh;

};

// making objects //

function diaryCube(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(0.4, 0.4, 0.4);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.5 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -1.7;
    cube.position.y = -2.6;
    cube.position.z = -3.7;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;

};

function diaryState() {
    if (!isNoteInInventory("some more plotline will be found here")) {
        addNoteToInventory("some more plotline will be found here", noteicon)
        updateText("note reads: blah blah blah");
    } else if (isNoteInInventory("some more plotline will be found here")) {
        (isNoteInInventory("some more plotline will be found here"))
        updateText("note still reads: blah blah blah");
    };
};

function bedroomVanityNote(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(0.3, 0.5, 0.3);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "yellow" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 4.3;
    cube.position.y = -2.4;
    cube.position.z = -0.1;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;

};

function bedroomVanityNoteState() {
    if (!isNoteInInventory("plotline will be found here")) {
        addNoteToInventory("plotline will be found here", noteicon)
        updateText("note reads: death is imminent");
    } else if (isNoteInInventory("plotline will be found here")) {
        console.log(isNoteInInventory("plotline will be found here"))
        updateText("note still reads: death is imminent");
    };
};