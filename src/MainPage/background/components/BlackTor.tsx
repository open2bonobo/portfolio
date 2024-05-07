import { useVideoTexture } from "@react-three/drei";

export const BlackTor = () => {
  const texture = useVideoTexture("./cards-video.hevc.mp4");
  return (
    <>
      <mesh scale={[1, 1, 1]} position={[0, 0, 0]} rotation={[0, 0, 0]}>
        <planeGeometry args={[2, 2]} />
        <meshBasicMaterial
          map={texture}
          toneMapped={false}
          opacity={0.7}
          color={"#808080"}
          transparent={true}
        />
      </mesh>
    </>
  );
};
