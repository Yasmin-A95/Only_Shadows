import image from './assets/images/bubbleroom.jpg';
import * as THREE from 'three';
import { FirstPersonControls } from './controls';
import { InteractionManager } from "three.interactive";
let camera, scene, renderer, firstPersonController, interactionManager;
let geometry, material, mesh;

const clock = new THREE.Clock();

init();

function init() {

    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.01, 10 );
    camera.position.y = -2;

    scene = new THREE.Scene();
    renderer = new THREE.WebGLRenderer( { antialias: true } );

    interactionManager = new InteractionManager(
        renderer,
        camera,
        renderer.domElement
      );

    geometry = new THREE.SphereGeometry( 5, 32, 16 );
    material = new THREE.MeshBasicMaterial( {
    		map: new THREE.TextureLoader().load(
        		image
        )
    });

    mesh = new THREE.Mesh( geometry, material );
    mesh.material.side = THREE.DoubleSide;
    scene.add( mesh );
    interactionManager.add( mesh );


    mesh.addEventListener('click', function(e){
        console.log('click');
        e.target.scale.set(1.0, 1.0, 1.0);
    });

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setAnimationLoop( animation ); 
    document.body.appendChild( renderer.domElement );
    firstPersonController = new FirstPersonControls(camera, renderer.domElement);
    firstPersonController.movementSpeed = 5;
    firstPersonController.lookSpeed = 0.1;

};

function animation( time ) { // big boi
    interactionManager.update();

    renderer.render( scene, camera );
    firstPersonController.update(clock.getDelta()); 
};