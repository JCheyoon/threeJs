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

import { useControls, button } from "leva";
import { Perf } from "r3f-perf";

const Experience = () => {
  const cubeRef = useRef();
  const sphereRef = useRef();

  const { position, color, visible } = useControls("sphere", {
    position: {
      value: -2,
      min: -4,
      max: 4,
      step: 0.01,
    },
    color: "orange",
    visible: true,
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    clickMe: button(() => {
      console.log("ok");
    }),
    choice: { options: ["a", "b", "c"] },
  });

  useFrame((state, delta) => {
    // cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
    // const angle = state.clock.elapsedTime;
  }); // this useFrame call each frame before rendering the scene

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.3} />

      <PivotControls anchor={[0, 0, 0]} depthTest={false}>
        <mesh ref={sphereRef} position-x={position} scale={1}>
          <sphereGeometry />
          <meshStandardMaterial color={color} visible={visible} />
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
