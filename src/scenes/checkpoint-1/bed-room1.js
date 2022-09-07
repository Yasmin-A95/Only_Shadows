import * as THREE from 'three';
import bedRoomEnvironmentImage from '../../assets/images/bedroom1trippy.jpg';


// icons
import objectIcon from '../../assets/icons/object-gem-icon.jpg';
import noteicon from '../../assets/icons/note-icon.jpg';
import imageIcon from '../../assets/icons/image-polaroid-icon.jpg'
import { getInteractionManager } from '../../init';

export function bedRoom1Factory() {

    const scene = new THREE.Scene();
    const interactionManager = getInteractionManager();
    bedRoomSphere(scene, interactionManager);
    const cliclablebed = bed(scene, interactionManager);

    //TODO- clicking bed redirects to next scene
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
    const material = new THREE.MeshBasicMaterial({ wireframe: true, color: 'red' });
    const cube = new THREE.Mesh(geometry, material);
    cube.position.x = 3.5;
    cube.position.y = -1.5;
    cube.position.z = -2;

    scene.add(cube);
    interactionManager.add(cube);
    return cube;
};
