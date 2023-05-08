import * as THREE from "three";
import { RigidBody, Physics } from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import { useState, useRef } from "react";

THREE.ColorManagement.legacyMode = false;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.ShaderMaterial({ color: "limegreen" });
const floor2Material = new THREE.ShaderMaterial({ color: "greenYellow" });
const obstacleMaterial = new THREE.ShaderMaterial({ color: "orangered" });
const wallMaterial = new THREE.ShaderMaterial({ color: "slategrey" });

const BlockStart = ({ position = [0, 0, 0] }) => {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow={true}
      />
    </group>
  );
};

const BlockTrapSpinner = ({ position = [0, 0, 0] }) => {
  const obstacle = useRef();
  const [speed] = useState(() => Math.random() + 0.2);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const rotation = new THREE.Quaternion();
    rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
    obstacle.current.setNextKinematicRotation(rotation);
  });
  const BlockLimbo = ({ position = [0, 0, 0] }) => {
    const obstacle = useRef();
    const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

    useFrame((state) => {
      const time = state.clock.getElapsedTime();
      const y = Math.sin(time + timeOffset) + 1.15;
      obstacle.current.setNextKinematicTranslation({
        x: position[0],
        y: position[1] + y,
        z: position[2],
      });
    });
  };

  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor2Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow={true}
      />
      <RigidBody
        type="kinematicPosition"
        position={[0, 0.3, 0]}
        restitution={0.2}
        friction={0}
      >
        <mesh
          geometry={boxGeometry}
          material={obstacleMaterial}
          scale={[3.5, 0.3, 0.3]}
          castShadow={true}
        />
      </RigidBody>
    </group>
  );
};
const Level = () => {
  return (
    <>
      <Physics>
        <BlockStart position={[0, 0, 4]} />
        <BlockTrapSpinner position={[0, 0, 0]} />
        <BlockTrapLimbo position={[0, 0, 0]} />
      </Physics>
    </>
  );
};
export default Level;
