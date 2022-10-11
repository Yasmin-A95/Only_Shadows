import * as THREE from 'three';
import bedRoomEnvironmentImage from '../../assets/images/bedroom1trippy.jpg';
import { updateObjective, updateText } from '../../dom/text-update';
import { getInteractionManager } from '../../init';
import { checkTimeLine } from '../../state-management/timeline-state';
import { bedRoom2Factory } from '../checkpoint-2/bed-room2';
import { changeCheckpoint } from '../scene-manager';

export function bedRoom1Factory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bedRoomSphere(scene, interactionManager);
    const cliclablebed = bed(scene, interactionManager);

    cliclablebed.addEventListener('click', bedState);
    updateObjective("Objective: completed!");
    updateText("zzzzz");
    return scene;
};

function bedRoomSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({ map: new THREE.TextureLoader().load(bedRoomEnvironmentImage) });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;

};

function bed(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(2, 3.5, 3.5);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.2 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3.5;
    cube.position.y = -1.5;
    cube.position.z = -2;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function bedState() {
    if (checkTimeLine("house-1")) {
        changeCheckpoint(bedRoom2Factory, "house-2", "bed-room2");
    }
};