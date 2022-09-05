import * as THREE from 'three';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../setup';
import { addImageToInventory, addNoteToInventory, addObjectToInventory, isImageInInventory, isNoteInInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { checkTimeLine } from '../../state-management/timeline-state';

export function cubeRoom1Factory() {
    const scene = new THREE.Scene();
    
    const interactionManager = getInteractionManager();

    // call evilCube giving it scene and interaction manager and assign that to a variable
    const clickableEvilCube = evilCube(scene, interactionManager);
    const inventoryRandomObject = randomObj(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        // changeRoom(cubeRoom1Factory);
    });

    inventoryRandomObject.addEventListener('click', function (e) {
        if (checkTimeLine("house-1")) {
            if (!isObjectInInventory("cube dimensh obj")) {
            addObjectToInventory("cube dimensh obj", "none");
            };
        }
    });
    
    updateText("Escape is no longer an option");
    return scene;
};

function evilCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: "yellow" } );
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
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "yellow"});
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 3;
    cube.position.y = -2;
    cube.position.z = 3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};