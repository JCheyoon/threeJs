import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
// const geometry = new THREE.BoxGeometry(1, 1, 1)
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
// const mesh = new THREE.Mesh(geometry, material)
// scene.add(mesh)
// //position
// mesh.position.set(0.7, -0.6 ,1)
// //scale
// mesh.scale.set(2,0.5,0.5)
// //rotation
// mesh.rotation.y = Math.PI*0.25

const group = new THREE.Group();
scene.add(group)
group.scale.y=2

const cube1 = new THREE.Mesh(
   new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

const cube2 = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)
cube2.position.x = -2
group.add(cube1,cube2)

//axes helper
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
camera.position.x = 1
camera.position.y = 1
scene.add(camera)

// camera.lookAt(new THREE.Vector3(3,0,0))
// camera.lookAt(mesh.position)
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)