import * as THREE from "three";
import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";
import Camera from "./Camera";

let instance = null;

export default class Experience {
  constructor(canvas) {
    if (instance) {
      return instance;
    }
    instance = this;
    //global acess
    window.experience = this;

    //option
    this.canvas = canvas;

    //setup
    this.sizes = new Sizes();
    this.time = new Time();
    this.scene = new THREE.Scene();
    this.camera = new Camera();

    //size resize event
    this.sizes.on("resize", () => {
      this.resize();
    });

    //time tick event
    this.time.on("tick", () => {
      this.update();
    });
  }

  resize() {
    console.log("resize");
  }

  update() {
    console.log("update");
  }
}
