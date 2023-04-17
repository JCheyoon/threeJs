import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  Bloom,
  Glitch,
  SSR,
  EffectComposer,
  DepthOfField,
  Noise,
} from "@react-three/postprocessing";
import { useControls } from "leva";
import { BlendFunction, GlitchMode } from "postprocessing";
import Drunk from "./Drunk.jsx";
import { useRef } from "react";

export default function Experience() {
  const drunkRef = useRef();
  return (
    <>
      <color args={["#ffffff"]} attach="background" />
      <EffectComposer>
        <Drunk ref={drunkRef} frequency={2} amplitude={0.2} />
      </EffectComposer>

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="Purple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenYellow" metalness={0} roughness={0} />
      </mesh>
    </>
  );
}
