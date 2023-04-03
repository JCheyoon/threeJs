import { Center, useGLTF, OrbitControls, useTexture } from "@react-three/drei";

const Experience = () => {
  const { nodes } = useGLTF("./model/portal.glb");
  const backedTexture = useTexture("/model/baked.jpg");

  return (
    <>
      <color args={["#030202"]} attach="background" />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={backedTexture} map-flipY={false} />
        </mesh>
        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
        >
          <meshBasicMaterial color="#ffffe5" />
        </mesh>
        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
        ></mesh>
        <mesh
          geometry={nodes.portalLight.geometry}
          position={nodes.portalLight.position}
        ></mesh>
      </Center>
    </>
  );
};

export default Experience;
