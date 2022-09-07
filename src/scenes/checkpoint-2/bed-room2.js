import * as THREE from 'three';
import spookyBedRoomEnvironmentImage from '../../assets/images/bedroom2trippy.jpg';
import { updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../init';
import { checkTimeLine } from '../../state-management/timeline-state';

export function bedRoom2Factory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bedRoomSphere(scene, interactionManager);
    const cliclableMicaela = micaela(scene, interactionManager);

    cliclableMicaela.addEventListener('click', micaelaState);

    //TODO- clicking bed redirects to next scene
    return scene;
};

function bedRoomSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(spookyBedRoomEnvironmentImage) });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;

};

function micaela(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.6, 4, 0.2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = -0.2;
    cube.position.y = -1.5;
    cube.position.z = -4.6;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function micaelaState() {
    // if(checkTimeLine("house-2")){
        updateText("something spooky probably I'll get to this later if not lol hi classmates be concerned about my wellbeing I bet Im not ok (joke)(this is not a joke)")
   // };
};