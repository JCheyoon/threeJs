import { Float, Text } from "@react-three/drei";

const MyText = () => {
  return (
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
  );
};

export default MyText;
