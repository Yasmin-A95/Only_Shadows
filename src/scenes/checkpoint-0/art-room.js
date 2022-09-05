import * as THREE from 'three';
import image from '../../assets/images/bubbleroom.jpg';
import { getInteractionManager } from '../../setup';
import { changeRoom } from '../scene-manager';
import { cubeRoomFactory as cubeRoomFactory } from './cube-room';
import { addObjectToInventory, isObjectInInventory } from '../../state-management/inventory-state';
import { checkTimeLine } from '../../state-management/timeline-state';


export function artRoomFactory() {
    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    environmentSphere(scene, interactionManager);

    const clickableCube = overlockerCube(scene, interactionManager);
    const secondObj = heaterCube(scene, interactionManager);
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

    interactionManager.add(cube);
    return cube;
};