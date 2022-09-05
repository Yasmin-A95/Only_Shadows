import * as THREE from 'three';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../setup';
import { changeCheckpoint } from '../scene-manager';
import { artRoom1Factory } from '../checkpoint-1/art-room1';
import { addObjectToInventory } from '../../state-management/inventory-state';
import { checkTimeLine } from '../../state-management/timeline-state';
export function cubeRoomFactory() {
    const scene = new THREE.Scene();
    
    const interactionManager = getInteractionManager();

    const clickableEvilCube = evilCube(scene, interactionManager);
    const inventoryRandomObject = randomObj(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        changeCheckpoint(artRoom1Factory, "house-1", "artroom-1");
    });

    inventoryRandomObject.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
            console.log('you clicked on the obj in the cube dimenson girlll')
            addObjectToInventory("cube dimensh obj", "none");
        }
    });
    
    updateText("Welcome to your nightmare");
    return scene;
};

function evilCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( {wireframe: true, color: 0xff0000 } );
    const evilCube = new THREE.Mesh(geometry, material);
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    evilCube.position.x = 3.9;
    evilCube.position.y = -1;
    evilCube.position.z = 3.9;
    
    scene.add(evilCube);
    interactionManager.add(evilCube);

    return evilCube;
};

function randomObj(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.6, 0.6, 0.6);
    const material = new THREE.MeshBasicMaterial({wireframe: true, opacity: 0.5});
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 3;
    cube.position.y = -2;
    cube.position.z = 3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};