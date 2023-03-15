import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObjects from "./CustomObjects.jsx";

extend({ OrbitControls });
const Experience = () => {
  const { camera, gl } = useThree();

  const cubeRef = useRef();
  const groupRef = useRef();
  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);
  }); // this useFrame call each frame before rendering the scene

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />
      <group ref={groupRef}>
        <mesh position-x={-2} scale={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh ref={cubeRef} position={[2, 0, 0]} scale={1}>
          <boxGeometry />
          <meshStandardMaterial color="purple" />
        </mesh>
      </group>

      <mesh rotation-x={Math.PI * -0.5} position={[0, -2, 0]} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
      <CustomObjects />
    </>
  );
};

export default Experience;
