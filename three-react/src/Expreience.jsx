import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import Placeholder from "./Placeholder.jsx";
import Hamburger from "./hamburger.jsx";
import Fox from "./Fox.jsx";

const Experience = () => {
  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />{" "}
      <ambientLight intensity={0.5} />
      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <Suspense fallback={<Placeholder />}>
        <Hamburger scale={0.35} position-y={-1} />
      </Suspense>
      <Fox />
    </>
  );
};
export default Experience;
