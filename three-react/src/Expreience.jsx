import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  SoftShadows,
  BakeShadows,
  RandomizedLight,
  AccumulativeShadows,
  ContactShadows,
  Lightformer,
  useHelper,
  OrbitControls,
  Environment,
  Sky,
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

  const { envMapIntensity, envMapHeight, envMapRadius, envMapScale } =
    useControls("environment map", {
      envMapIntensity: { value: 7, min: 0, max: 12 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    });

  useFrame((state, delta) => {
    const time = state.clock.elapsedTime;
    // cubeRef.current.position.x = 2 + Math.sin(time);
    cubeRef.current.rotation.y += delta;
  }); // this useFrame call each frame before rendering the scene

  return (
    <>
      <Environment
        background
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      >
        <color arg={["#000000"]} attatch="background" />
        <Lightformer position-z={-5} scale={10} color="red" intensity={10} />
        {/*<mesh position-z={-5} scale={10}>*/}
        {/*  <planeGeometry />*/}
        {/*  <meshBasicMaterial color="red" />*/}
        {/*</mesh>*/}
      </Environment>

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

      {/*<directionalLight*/}
      {/*  ref={directionalLight}*/}
      {/*  position={[1, 2, 3]}*/}
      {/*  intensity={1.5}*/}
      {/*  castShadow*/}
      {/*  shadow-mapsize={[1024, 1024]}*/}
      {/*  shadow-camera-near={1}*/}
      {/*  shadow-camera-far={10}*/}
      {/*  shadow-camera-top={5}*/}
      {/*  shadow-camera-right={5}*/}
      {/*  shadow-camera-bottom={-5}*/}
      {/*  shadow-camera-left={-5}*/}
      {/*/>*/}

      <mesh castShadow ref={sphereRef} position-x={-2} scale={1}>
        <sphereGeometry />
        <meshStandardMaterial
          color="orange"
          envMapIntensity={envMapIntensity}
        />
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
