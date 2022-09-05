import * as THREE from 'three';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../setup';

export function cubeRoom1Factory() {
    const scene = new THREE.Scene();
    
    const interactionManager = getInteractionManager();

    // call evilCube giving it scene and interaction manager and assign that to a variable
    const clickableEvilCube = evilCube(scene, interactionManager);

    clickableEvilCube.addEventListener('click', function (e) {
        // changeRoom(cubeRoom1Factory);
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
}