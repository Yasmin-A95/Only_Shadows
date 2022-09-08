import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import kitchenEnvironmentImage from '../../assets/images/kitchen.jpg';
import { updateText } from '../../dom/text-update';

// TODO connect this place to other places


export function kitchenRoomFactory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bathRoomEnvironmentSphere(scene, interactionManager);
    const clickablekitchenSink = kitchenSink(scene, interactionManager);
    
    clickablekitchenSink.addEventListener('click', kitchenSinkState);

    return scene;
}

function bathRoomEnvironmentSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(kitchenEnvironmentImage)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;
};

function kitchenSink(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(5,0.5,1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, color: "red"});
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 1.5;
    cube.position.y = -3;
    cube.position.z = -2.3;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function kitchenSinkState() {
    updateText('hmmm, nah')
    // TODO text auto closes after a minute
    // TODO next scene
};