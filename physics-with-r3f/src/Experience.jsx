import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
  RigidBody,
  Physics,
  Debug,
  CuboidCollider,
  CylinderCollider,
} from "@react-three/rapier";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useGLTF, OrbitControls } from "@react-three/drei";
export default function Experience() {
  const cubeRef = useRef();
  const hamburger = useGLTF("./hamburger.glb");
  const collisionEnter = () => {
    console.log("bump");
  };
  const cubeJump = () => {
    cubeRef.current.applyImpulse({ x: 0, y: 5, z: 0 });
  };

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(0, time, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quaternionRotation);

    const angle = time * 0.5;
    const x = Math.cos(angle) * 2;
    const z = Math.sin(angle) * 2;
    twister.current.setNextKinematicTranslation({ x: x, y: -0.8, z: z });
  });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <Physics gravity={[0, -1.6, 0]}>
        <Debug />
        <RigidBody colliders="ball">
          <mesh castShadow position={[0, 4, 0]}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
        </RigidBody>

        <RigidBody
          ref={cubeRef}
          position={[3, 1, 0]}
          gravityScale={0.2}
          restitution={0}
          friction={1}
          colliders={false}
          onCollisionEnter={collisionEnter}
        >
          <mesh castShadow onClick={cubeJump}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <CuboidCollider mass={2} args={[0.5, 0.5, 0.5]} />
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
        <RigidBody
          position={[0, -0.8, 0]}
          friction={0}
          type="kinematicPosition"
        >
          <mesh castShadow scale={[0.4, 0.4, 3]}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
          </mesh>
        </RigidBody>

        <RigidBody colliders={false} position={[0, 4, 0]}>
          <primitive object={hamburger.scene} scale={0.25} />
          <CylinderCollider args={[-0.5, 1.2]} />
        </RigidBody>

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
