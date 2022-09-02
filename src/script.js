import * as THREE from 'three';
import init from './setUp';
import image from './assets/images/bubbleroom.jpg';


function main(scene, interactionManager) {
    const environmentSphere = handleEnvironmentSphere(scene, interactionManager);

    const clickableCube = overlockerCube(scene, interactionManager);
    const secondObj = secondClickableObj(scene, interactionManager)
    const axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );
    clickableCube.addEventListener('click', function (e) {
        
        console.log(`clicks on overlocker`); 
    });
    secondObj.addEventListener('click', function (e) {
        
        console.log(`clicks on heater`); 
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

function overlockerCube(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ wireframe: true, opacity: 0.5 });
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 1.5;
    cube.position.y = -2.5;
    cube.position.z = 4;
    scene.add( cube );

    interactionManager.add(cube);
    return cube;

    // 
};

function secondClickableObj(scene, interactionManager) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({wireframe: true, opacity: 0.5});
    const cube = new THREE.Mesh( geometry, material );
    cube.position.x = 1.5;
    cube.position.y = -4.5;
    cube.position.z = -1.5;
    scene.add( cube );

    interactionManager.add(cube);
    return cube;

    // 
};

init(main);

