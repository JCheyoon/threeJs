import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./Expreience.jsx";
import * as THREE from "three";
import { Leva } from "leva";

const cameraSetting = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [3, 2, 6],
};
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Leva collapsed />

    <Canvas
      camera={cameraSetting}
      gl={{
        toneMapping: THREE.ACESFilmicToneMapping,
        outputEncoding: THREE.sRGBEncoding,
      }}
    >
      <Experience />
    </Canvas>
  </>
);
