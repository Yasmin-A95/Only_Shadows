import * as THREE from 'three';

export function main() {
    const scene = new THREE.Scene();

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = 2;
    mesh.position.y = -2;
    mesh.position.z = 2;

    scene.add(mesh);

    return scene;
};