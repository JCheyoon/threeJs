import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { Clone, useGLTF } from "@react-three/drei";

const MyModel = () => {
  // const model = useLoader(
  //   GLTFLoader,
  //   "./FlightHelmet/glTF/FlightHelmet.gltf",
  //   (loader) => {
  //     const dracoLoader = new DRACOLoader();
  //     dracoLoader.setDecoderPath("./draco/");
  //     loader.setDRACOLoader(dracoLoader);
  //   }
  // );
  const model = useGLTF("./hamburger-draco.glb");
  return (
    <>
      <Clone object={model.scene} scale={0.35} position-y={-1} position-x={4} />
      <Clone object={model.scene} scale={0.35} position-y={-1} />
    </>
  );
};
useGLTF.preload("./hamburger-draco.glb");
export default MyModel;
