import * as THREE from 'three';
import { getInteractionManager } from "../../init";
import bossFightEnvironmentImage from '../../assets/images/bossfight6.jpg';
import { updateText } from '../../dom/text-update';

export function bossFight6Factory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bossFightEnvironmentSphere(scene, interactionManager);
    const clickableBoss = boss(scene, interactionManager);

    clickableBoss.addEventListener('click', bossState);

    return scene;
}

function bossFightEnvironmentSphere(scene, interactionManager) {
    const geometry = new THREE.SphereGeometry(5, 32, 16);
    const material = new THREE.MeshBasicMaterial({
        map: new THREE.TextureLoader().load(bossFightEnvironmentImage)
    });

    const mesh = new THREE.Mesh(geometry, material);
    mesh.material.side = THREE.DoubleSide;
    scene.add(mesh);

    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    interactionManager.add(mesh);
    return mesh;
};

function boss(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(0.1, 3, 2);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.2 });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3.5;
    cube.position.y = -2;
    cube.position.z = 0;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};

function bossState() {
    updateText('* how do I feel? *')
    // TODO next scene
};