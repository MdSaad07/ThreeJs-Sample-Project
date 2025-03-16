import * as THREE from 'three';

// Canvas
const canvas = document.querySelector('canvas.webgl');
console.log(canvas);

// Scene
const scene = new THREE.Scene();


// Object
const group = new THREE.Group()
group.position.y = 1
group.scale.y = 2
group.rotation.y = 1
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
group.add(cube1)
const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: "blue" })
)
cube2.position.x = 2
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: "green" })
)
cube3.position.x = -2
group.add(cube3)

//Axes helper: visual aid that displays the three axes of a 3D coordinate system
//for now we are not using it
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)
//Red axis: x
//Green axis: y
//Blue axis: z

// Sizes
const sizes = {
    width: 800,
    height:600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3; // camera position changed to view the object
scene.add(camera);

//lookAt: method that makes the camera look at a specific position



// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene,camera);
