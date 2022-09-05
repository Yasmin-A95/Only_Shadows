import * as THREE from 'three';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../setup';
import { changeCheckpoint } from '../scene-manager';
import { artRoom1Factory } from '../checkpoint-1/art-room1';
export function cubeRoomFactory() {
    const scene = new THREE.Scene();
    
    const interactionManager = getInteractionManager();

    const clickableEvilCube = evilCube(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        console.log("you did it girl, nice");
        changeCheckpoint(artRoom1Factory, "house-1", "artroom-1");
    });
    
    updateText("Welcome to your nightmare");
    return scene;
};

function evilCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const evilCube = new THREE.Mesh(geometry, material);
    evilCube.position.x = 2;
    evilCube.position.y = -2;
    evilCube.position.z = 2;
    
    scene.add(evilCube);
    interactionManager.add(evilCube);

    return evilCube;
}