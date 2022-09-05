import * as THREE from 'three';
import { updateText } from '../dom/text-update';
import { getInteractionManager } from '../setup';
import { artRoomFactory } from './art-room';
import { changeScene } from './scene-manager';

// const clickableEvilCube = evilCube(scene, interactionManager);

// clickableEvilCube.addEventListener("click", (e) => console.log('click on cube'))
// // => wont work yet evilCube.addEventListener('click' etc)


export function cubeRoomFactory() {
    const scene = new THREE.Scene();
    
    const interactionManager = getInteractionManager();

    // call evilCube giving it scene and interaction manager and assign that to a variable
    const clickableEvilCube = evilCube(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        console.log("you did it girl, nice");
        changeScene(artRoomFactory);
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