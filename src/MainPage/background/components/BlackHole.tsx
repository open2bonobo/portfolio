import { useVideoTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const VideoPlane = () => {
    const texture = useVideoTexture("./blackhole.mp4");

    return (
      <mesh
        scale={[1,0.5,1]}
        position={[0, 0, 0]}
        rotation={[0, 0, Math.PI]}
      >
        <planeGeometry args={[2, 2]} />
        <meshLambertMaterial map={texture} toneMapped={false} opacity={0.7} color={"#808080"} transparent={true} />
      </mesh>
    );
  };
  
export const BlackHole = () => {
    const ref = useRef(null);

    useFrame((state, delta) => {
      if (ref.current) {
        ref.current.rotation.y += 0.01;
        ref.current.rotation.x += 0.01;
        ref.current.rotation.z += 0.01 * delta;
      }
    });
  
    const shader = {
      uniforms: {
        time: { value: 0.0 },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying vec2 vUv;
        void main() {
          vec2 p = -1.0 + 2.0 * vUv;
          float a = atan(p.y, p.x);
          float r = length(p) * 2.0;
  
          float distortion = sin(30.0 * r - time * 2.0) * 0.1;
          float distortion2 = sin(30.0 * r + time * 2.0) * 0.1;
  
          p.x += distortion;
          p.y += distortion2;
  
          float col = smoothstep(0.5, 0.52, abs(r - 0.3));
          vec3 purpleColor = vec3(0.2, 0.1, 0.4); // Darker deep violet color
          vec3 neonColor = vec3(0.2, 0.1, 0.4); // Same as deep violet, but can be adjusted
          vec3 finalColor = mix(purpleColor, neonColor, col * 0.5); // Decrease mixing intensity
          gl_FragColor = vec4(finalColor, 1.0);
        }
      `,
    };

    return (
      <>
        <mesh ref={ref} position={[0, 0, 0]} scale={1}>
          <torusGeometry args={[0.1, 0.01, 16, 100]} />
          <shaderMaterial attach="material" args={[shader]} />
        </mesh>
        <VideoPlane />
      </>
    );
  };