import "./style.css";
import * as THREE from "three";
import GUI from "lil-gui";
import gsap from "gsap";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

// Canvas
const canvas = document.querySelector("canvas.webgl");
// Scene
const scene = new THREE.Scene();

/**Objects*/
const geometry = new THREE.BoxGeometry(1, 1, 1, 2, 2, 2);
const material = new THREE.MeshBasicMaterial({ color: 0xff000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

/**Debug*/
const gui = new GUI();
gui.add(mesh.position, "y", -3, 3, 0.1);
gui.add(mesh.position, "z").min(-3).max(3).step(0.1);
gui.add(mesh.position, "x").min(-3).max(3).step(0.1).name("x position");
gui.add(mesh, "visible");
gui.add(material, "wireframe");

// Create color pickers for multiple color formats
const parameters = {
  color: 0xff0000,
  spin: () => {
    gsap.to(mesh.rotation, { duration: 1, y: +10 });
    console.log("spin");
  },
};

gui.add(parameters, "spin");
gui.addColor(parameters, "color").onChange(() => {
  material.color.set(colorFormats.color);
});

window.addEventListener("keydown", (e) => {
  if (e.key === "h") {
    gui._hidden ? gui.show() : gui.hide();
  }
});

/** Sizes*/
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  //update size
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  //update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  //update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2);
});

window.addEventListener("dblclick", () => {
  const fullscreen =
    document.fullscreenElement || document.webkitFullscreenElement;

  if (!fullscreen) {
    if (canvas.requestFullscreen) {
      canvas.requestFullscreen();
    } else if (canvas.webkitRequestFullscreen) {
      canvas.webkitRequestFullscreen;
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
});

/** cursor */
const cursor = {
  x: 0,
  y: 0,
};

window.addEventListener("mousemove", (e) => {
  cursor.x = e.clientX / sizes.width - 0.5;
  cursor.y = -(e.clientY / sizes.height - 0.5);
});

/**Camera*/
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

camera.position.z = 2;
camera.lookAt(mesh.position);
scene.add(camera);

//controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio), 2);

//animation
const tick = () => {
  //update controls each frame
  controls.update();
  //render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};
tick();
