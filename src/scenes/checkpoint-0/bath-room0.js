import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import bathRoomEnvironmentImage from '../../assets/images/bathroom0.jpg';
import { updateText } from '../../dom/text-update';

// TODO connect this place to other places


export function bathRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bathRoomEnvironmentSphere(scene, interactionManager);
    const clickableToilet = toilet(scene, interactionManager);
    
    clickableToilet.addEventListener('click', toiletState);

    return scene;
}

function bathRoomEnvironmentSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(bathRoomEnvironmentImage)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;
};

function toilet(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(2,0.5,1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "red"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3;
    cube.position.y = -3.5;
    cube.position.z = -0.3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function toiletState() {
    updateText('* flush *')
    // TODO text auto closes after a minute
    // TODO next scene
};