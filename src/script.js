import * as THREE from 'three';
import init from './setUp';
import image from './assets/images/bubbleroom.jpg';


function main(scene, interactionManager) {
    const environmentSphere = handleEnvironmentSphere(scene, interactionManager);

    environmentSphere.addEventListener('click', function (e) {
        console.log('click');
    });
};

function handleEnvironmentSphere(scene, interactionManager) {
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


init(main);
