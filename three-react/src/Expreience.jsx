import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  PivotControls,
  TransformControls,
  OrbitControls,
} from "@react-three/drei";
const Experience = () => {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
    // const angle = state.clock.elapsedTime;
  }); // this useFrame call each frame before rendering the scene

  return (
    <>
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

      <PivotControls anchor={[0, 0, 0]} depthTest={false}>
        <mesh position-x={-2} scale={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} scale={1} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>
      <TransformControls object={cubeRef} />

      <mesh rotation-x={Math.PI * -0.5} position={[0, -2, 0]} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    </>
  );
};

export default Experience;
