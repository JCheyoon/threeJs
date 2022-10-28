const canvas = document.querySelector('.webgl')

const scene = new THREE.Scene()

//obj
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({ color: 'blue'})
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

//Size
const size={
  width:1280,
  height:720
}
//cam
const camera = new THREE.PerspectiveCamera( 75, size.width/size.height );
camera.position.z =3
scene.add( camera );

//renderer
const renderer = new THREE.WebGL1Renderer({
  canvas:canvas
})

renderer.setSize(size.width,size.height)
renderer.render(scene,camera)