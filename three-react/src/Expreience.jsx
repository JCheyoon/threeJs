import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  SoftShadows,
  BakeShadows,
  RandomizedLight,
  AccumulativeShadows,
  ContactShadows,
  useHelper,
  OrbitControls,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

const Experience = () => {
  const cubeRef = useRef();
  const sphereRef = useRef();
  const directionalLight = useRef();
  useHelper(directionalLight, THREE.DirectionalLightHelper, 1);

  const { color, opacity, blur } = useControls("contact shadows", {
    color: "#000000",
    opacity: { value: 0.5, min: 0, max: 1 },
    blur: { value: 1, min: 0, max: 10 },
  });

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta;
  }); // this useFrame call each frame before rendering the scene

  return (
    <>
      {/*<BakeShadows />*/}
      {/*<SoftShadows frustum={3.75} size={1} near={9.5} samples={17} rings={11} />*/}
      {/*<AccumulativeShadows*/}
      {/*  scale={10}*/}
      {/*  position={[0, -0.99, 0]}*/}
      {/*  color="#316d39"*/}
      {/*  opacity={0.8}*/}
      {/*  frames={1000}*/}
      {/*  temporal*/}
      {/*>*/}
      {/*  <RandomizedLight*/}
      {/*    amount={8}*/}
      {/*    radius={1}*/}
      {/*    ambient={0.5}*/}
      {/*    position={[1, 2, 3]}*/}
      {/*    intensity={1}*/}
      {/*    bias={0.001}*/}
      {/*  />*/}
      {/*</AccumulativeShadows>*/}
      <ContactShadows
        position={[0, -0.99, 0]}
        resolution={512}
        far={5}
        color={color}
        opacity={opacity}
        blur={blur}
      />
      <color args={["ivory"]} attach="background" />

      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        ref={directionalLight}
        position={[1, 2, 3]}
        intensity={1.5}
        castShadow
        shadow-mapsize={[1024, 1024]}
        shadow-camera-near={1}
        shadow-camera-far={10}
        shadow-camera-top={5}
        shadow-camera-right={5}
        shadow-camera-bottom={-5}
        shadow-camera-left={-5}
      />
      <ambientLight intensity={0.3} />

      <mesh castShadow ref={sphereRef} position-x={-2} scale={1}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow ref={cubeRef} scale={1} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>

      <mesh
        reciveShadow
        rotation-x={Math.PI * -0.5}
        position={[0, -1, 0]}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="lightGreen" />
      </mesh>
    </>
  );
};

export default Experience;
