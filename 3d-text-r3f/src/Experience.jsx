import {
  Center,
  Text3D,
  OrbitControls,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useState } from "react";

export default function Experience() {
  const [torusGeometry, setTorusGeometry] = useState();
  const [material, setMaterial] = useState();
  const [matcapTexture] = useMatcapTexture("B6B8B1_994A24_315C81_927963", 256);
  const tempArray = [...Array(100)];

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <torusGeometry ref={setTorusGeometry} arg={[1, 0.6, 15, 32]} />
      <meshMatcapMaterial ref={setMaterial} matcap={matcapTexture} />
      {/*위는 이와같음 setTorusGeometry(<torusGeometry arg={[1, 0.6, 15, 32]} />)*/}
      <Center>
        <Text3D
          material={material}
          font="./fonts/helvetiker_regular.typeface.json"
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Hello world <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>

      {tempArray.map((value, index) => (
        <mesh
          geometry={torusGeometry}
          material={material}
          position={[
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
          ]}
          scale={0.2 + Math.random() * 0.2}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          key={index}
        />
      ))}
    </>
  );
}
