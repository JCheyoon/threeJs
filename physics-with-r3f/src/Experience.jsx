import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { RigidBody, Physics, Debug, CuboidCollider } from "@react-three/rapier";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  const cubeJump = () => {
    cubeRef.current.applyImpulse({ x: 0, y: 5, z: 0 });
  };
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Physics>
        <Debug />
        <RigidBody colliders="ball">
          <mesh castShadow position={[0, 4, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody ref={cubeRef} position={[3, 1, 0]}>
          <mesh castShadow onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>

        {/*<RigidBody*/}
        {/*  colliders={false}*/}
        {/*  position={[0, 1, 0]}*/}
        {/*  rotation={[Math.PI * 0.5, 0, 0]}*/}
        {/*>*/}
        {/*  <CuboidCollider args={[1.5, 1.5, 0.5]}>*/}
        {/*    <mesh castShadow>*/}
        {/*      <torusGeometry args={[1, 0.5, 16, 32]} />*/}
        {/*      <meshStandardMaterial color="salmon" />*/}
        {/*    </mesh>*/}
        {/*  </CuboidCollider>*/}
        {/*</RigidBody>*/}

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[10, 0.5, 10]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}
