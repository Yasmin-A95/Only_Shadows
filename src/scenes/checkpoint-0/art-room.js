import * as THREE from 'three';
import image from '../../assets/images/bubbleroom.jpg';
import { getInteractionManager } from '../../init';
import { changeRoom } from '../scene-manager';
import { cubeRoomFactory as cubeRoomFactory } from './cube-room';
import { addToInventoryDisplay, addImageToInventory, addNoteToInventory, addObjectToInventory, isImageInInventory, isNoteInInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { checkTimeLine } from '../../state-management/timeline-state';
import { updateText } from '../../dom/text-update';



export function artRoomFactory() {
    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    environmentSphere(scene, interactionManager);

    const clickableCube = overlockerCube( scene, interactionManager );
    const secondObj = heaterCube( scene, interactionManager );
    const ipadNote = ipadCube( scene, interactionManager );
    const jumperCubeImg = jumperCube( scene, interactionManager );
    
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    clickableCube.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
        changeRoom(cubeRoomFactory, 'cuberoom-0');
        }
    });
    secondObj.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
            if (!isObjectInInventory("heater, rip")) {
            addObjectToInventory("heater, rip", "none"); 
            updateText("nice, a warm heater");
            addToInventoryDisplay('object');
            } else if (isObjectInInventory("heater, rip")) {
                updateText("as I said ... nice, a warm heater");
            };
        }
    });

    ipadNote.addEventListener('click', function (e) {
        if (checkTimeLine("house-0")) {
            if (!isNoteInInventory('you clicked the ipad girl, good job')) {
            addNoteToInventory('you clicked the ipad girl, good job', 'none');
            updateText("note reads: you clicked the ipad girl, good job");
            addToInventoryDisplay("note");
            } else if (isNoteInInventory) {
                updateText("as i said .... note reads: you clicked the ipad girl, good job");
            }
        }
    });

    jumperCubeImg.addEventListener('click', function(e) {
        if (checkTimeLine("house-0")) {
            if (!isImageInInventory('img src coming soon')) {
            addImageToInventory('img src coming soon', 'icon coming soon')
            updateText("oh wow an image, great ill pocket that");
            addToInventoryDisplay("image");
            } else if (isImageInInventory) {
                updateText("I already have this item");
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

// making objects // 
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
    interactionManager.add( cube );
    return cube;
};

function ipadCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, opacity: 0.5});
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 3.5;
    cube.position.y = - 3;
    cube.position.z = -1.9;

    scene.add( cube );
    interactionManager.add( cube );
    return cube;
};

function jumperCube (scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const material = new THREE.MeshBasicMaterial({wireframe: true, opacity: 0.5});
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = - 3.7;
    cube.position.y = -2.4;
    cube.position.z = - 0.1;

    scene.add( cube );
    interactionManager.add( cube );
    return cube;
};