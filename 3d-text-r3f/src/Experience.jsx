import {
  Center,
  Text3D,
  OrbitControls,
  useMatcapTexture,
} from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  const [matcapTexture] = useMatcapTexture("B6B8B1_994A24_315C81_927963", 256);
  console.log(matcapTexture);

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <Center>
        <Text3D
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
    </>
  );
}
