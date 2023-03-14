import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = () => {
  const cubeRef = useRef();
  useFrame(() => {
    cubeRef.current.rotation.y += 0.01;
  }); // this useFrame call each frame before rendering the scene

  return (
    <>
      <mesh position-x={-2} scale={1}>
        <sphereGeometry />
        <meshBasicMaterial color="orange" />
      </mesh>
      <mesh ref={cubeRef} position={[2, 0, 0]} scale={1}>
        <boxGeometry />
        <meshBasicMaterial color="purple" />
      </mesh>

      <mesh rotation-x={Math.PI * -0.5} position={[0, -2, 0]} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="lightgreen" />
      </mesh>
    </>
  );
};

export default Experience;
