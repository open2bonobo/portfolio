import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as random from "maath/random/dist/maath-random.esm";

export const Stars = (props: any) => {
    const ref: any = useRef(null);
    const [sphere] = useState(() => {
      const positions = random.inSphere(new Float32Array(5000), { radius: 4});
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          positions[i] = 1.2;
        }
      }
      return positions;
    });
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    });
  
    return (
      <group position={[0,0,0]} rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
          <PointMaterial
            transparent
            color="#fff"
            size={0.01}
            sizeAttenuation={true}
            dethWrite={false}
          />
        </Points>
      </group>
    );
  };