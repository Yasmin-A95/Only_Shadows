// init room
import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import bedRoomEnvironmentImage from '../../assets/images/bedroom0.jpg';
import { addNoteToInventory, isNoteInInventory } from '../../state-management/inventory-state';
import { updateText } from '../../dom/text-update';

// diary Entry
const diaryString = "I am writing this letter as I fear I may be stricken by a curse, a virulent malice that has clung for decades to my back. I likewise fear I cannot withstand much longer this scourge upon me. Though I have rifled through annals of esoteric histories and mysteries pertaining to my family, I have found no discernible origin for my affliction.No spurned witch lovers, accursed artefacts or insulted mystics crossed paths with my progenitors, as recorded or otherwise. As my bloodline runs clean and clear as the Blue Lagoon of Efate, I dread that this curse is uniquely my own... it cuts off there and it appears as though pages have been torn out."
//

// icons
import objectIcon from '../../assets/icons/object-gem-icon.jpg';
import noteicon from '../../assets/icons/note-icon.jpg';
import imageIcon from '../../assets/icons/image-polaroid-icon.jpg'

// camera for debugging / dev

import { loungeRoomFactory } from './lounge-room0';
import { checkTimeLine } from '../../state-management/timeline-state';
import { changeRoom } from '../scene-manager';

export function bedRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bedroomSphere(scene, interactionManager);

    const clickableDiary = diaryCube(scene, interactionManager);
    const clickableNote = bedroomVanityNote(scene, interactionManager);
    const clickableDoor = door(scene, interactionManager);
    const clickableBed = bed(scene, interactionManager);
    const clickableFan = fan(scene, interactionManager);

    clickableDiary.addEventListener('click', diaryState);
    clickableNote.addEventListener('click', bedroomVanityNoteState);
    clickableDoor.addEventListener('click', doorState);
    clickableBed.addEventListener('click', bedState)

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
    if (!isNoteInInventory(diaryString)) {
        addNoteToInventory(diaryString, noteicon)
        updateText("!");
        updateText("Has Katie been reading my old journal? Where did she find this relic? Jesus, that's so embarrassing.");
    } else if (isNoteInInventory(diaryString)) {
        (isNoteInInventory(diaryString))
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

function door(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(2, 5, 2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "pink" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -2;
    cube.position.y = -1.4;
    cube.position.z = 3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function doorState() {
    if (checkTimeLine("house-0")) {
        changeRoom(loungeRoomFactory, 'lounge-room0');
    }
}

function bed(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(3, 1, 10);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: "blue" });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 0.8;
    cube.position.y = -3.1;
    cube.position.z = -4.9;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function bedState() {
    updateText("now's not the time...")
};

function fan(scene, interactionManager) {

    const geometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'yellow' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -1.7;
    cube.position.y = -2.1;
    cube.position.z = -3.7;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;


};