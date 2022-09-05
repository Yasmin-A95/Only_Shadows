import * as THREE from 'three';
import image from '../../assets/images/bubbleroom.jpg';
import { getInteractionManager } from '../../setup';
import { changeRoom } from '../scene-manager';
import { cubeRoomFactory as cubeRoomFactory } from './cube-room';
import { addObjectToInventory, getInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { getTimeline } from '../../state-management/timeline-state';

// make the room
export function artRoomFactory() {
    const scene = new THREE.Scene();
// init scene using three
// then grap interactionManger
// give it to the env sphere
    const interactionManager = getInteractionManager();
    environmentSphere(scene, interactionManager);

    // to make the overlocker cube clickable it needs scene and interactionmanager 
    const clickableCube = overlockerCube(scene, interactionManager);
    // the heater needs scene and interactinon manager as well
    const secondObj = heaterCube(scene, interactionManager);
    // this just helps position things
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    // adding an event listener to the clickable cube and then it calls a function which switches scenes
    clickableCube.addEventListener('click', function (e) {
        changeRoom(cubeRoomFactory, 'cuberoom-0');
    });
    // adding an event listener to the heater so that it console.logs click and also adds shit to the inventory 
    secondObj.addEventListener('click', function (e) {
        if (getTimeline().checkPoint === "house-0") {
        // console.log(timeline, " timeline");

        console.log(`${getTimeline().checkPoint === 'house-0'}`, "  checkpoint");
        //checkPoint: 'house-0', room: 'artroom-0'}
        //if (checkPoint.)
        console.log(`clicks on heater`); 
        if (!isObjectInInventory("heater, rip")) {
        addObjectToInventory("heater, rip", "none");
        }
    }
    });

    return scene;
};

function environmentSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(
            image
        )
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    interactionManager.add(mesh);
    return mesh;
};

// making objects
function overlockerCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.5 });
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 1.5;
    cube.position.y = -2.5;
    cube.position.z = 4;
    scene.add( cube );

    interactionManager.add(cube);
    return cube;

};

function heaterCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, opacity: 0.5});
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 1.5;
    cube.position.y = -4.5;
    cube.position.z = -1.5;
    scene.add( cube );

    interactionManager.add(cube);
    return cube;
};