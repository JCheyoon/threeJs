import { OrbitControls } from "@react-three/drei";
import Lights from "./Lights.jsx";
import Level from "./Level.jsx";
const Experience = () => {
  return (
    <>
      <OrbitControls makeDefault />
      <Lights />
      <Level />
    </>
  );
};
export default Experience;
