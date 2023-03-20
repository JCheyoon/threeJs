import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import {
  PivotControls,
  TransformControls,
  OrbitControls,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";
const Experience = () => {
  const cubeRef = useRef();
  const sphereRef = useRef();

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
        <mesh ref={sphereRef} position-x={-2} scale={1}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={6}
            occlude={[sphereRef, cubeRef]}
          >
            The Orange Sphere🍊
          </Html>
        </mesh>
      </PivotControls>

      <mesh ref={cubeRef} scale={1} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>
      <TransformControls object={cubeRef} />

      <mesh rotation-x={Math.PI * -0.5} position={[0, -2, 0]} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={0.75}
          color="lightGreen"
          resolution={512}
          mixBlur={1}
          blur={[1000, 1000]}
        />
      </mesh>

      <Float speed={5} floatIntensity={3}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          position-z={2}
          color="salmon"
          fontSize={1}
          textAlign="center"
          maxWidth={2}
        >
          I love text
        </Text>
      </Float>
    </>
  );
};

export default Experience;
