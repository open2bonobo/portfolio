import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { Asteroid, BlackHole, BlackTor, Bloom, Planets, Stars, Sun } from "./components";

type SpaceObjectInitialCondition = {
  position?: THREE.Vector3;
  rotation?: THREE.Euler;
  scale?: THREE.Vector3;
};

const planetsIC: SpaceObjectInitialCondition = {
  position: new THREE.Vector3(1.2, -0.1, -5),
  rotation: new THREE.Euler(0.7, -0.5, 0.8),
  scale: new THREE.Vector3(5, 5, 5),
};

const blackholeIC: SpaceObjectInitialCondition = {
  position: new THREE.Vector3(1, 5, 0),
  rotation: new THREE.Euler(0, -0.11, 0),
  scale: new THREE.Vector3(5, 5, 5),
};
const starsIC: SpaceObjectInitialCondition = {
  position: new THREE.Vector3(0, -1, 0),
  rotation: new THREE.Euler(0, 0, 0),
  scale: new THREE.Vector3(3, 3, 3),
};
const blackTorIC: SpaceObjectInitialCondition = {
  position: new THREE.Vector3(6.7, -6.4, -6.5),
  rotation: new THREE.Euler(0.8, 0.23, 0),
  scale: new THREE.Vector3(5, 5, 5),
};

export const SpaceScene = () => {
  const [blackHoleGroupPosition, setBlackHoleGroupPosition] =
    useState<THREE.Vector3>(blackholeIC.position);
  const [blackHoleGroupRotation, setBlackHoleGroupRotation] =
    useState<THREE.Euler>(blackholeIC.rotation);

  const [starsGroupPosition, setStarsGroupPosition] = useState<THREE.Vector3>(
    starsIC.position
  );

  const [blackTorGroupPosition, setBlackTorGroupPosition] =
    useState<THREE.Vector3>(blackTorIC.position);
  const [blackTorGroupRotation, setBlackTorGroupRotation] =
    useState<THREE.Euler>(blackTorIC.rotation);

  const [blackTorGroupScale, setBlackTorGroupScale] = useState<THREE.Vector3>(
    blackTorIC.scale
  );

  const [planetsGroupRotation, setPlanetsGroupRotation] = useState<THREE.Euler>(
    planetsIC.rotation
  );
  const [planetsGroupPosition, setPlanetsGroupPosition] =
    useState<THREE.Vector3>(planetsIC.position);

  const blackHoleRef = useRef<THREE.Group>(null);
  const planetsRef = useRef<THREE.Group>(null);
  const starsGroupRef = useRef<THREE.Group>(null);
  const blackTorRef = useRef<THREE.Group>(null);
  const [time, setTime] = useState(0);

  const { camera } = useThree();
  const { width: w, height: h } = useThree((state) => state.viewport);
  const scroll = useScroll();

  useFrame((state, delta) => {
    setTime((time) => time + delta);

    const scrollOffset = scroll.range(0, 1 / 3);

    if (scrollOffset <= 0.48) {

      blackHoleRef.current.visible = true;
      blackTorRef.current.visible = false;

      blackHoleRef.current.rotation.y = -scrollOffset * Math.PI + blackholeIC.rotation.y;

      blackHoleRef.current.scale.x =
        blackTorIC.scale.x + 0.05 * Math.sin(time * Math.PI * 2 + Math.PI / 2);
      blackHoleRef.current.scale.z =
        blackTorIC.scale.y + 0.05 * Math.sin(time * Math.PI * 2);

      camera.position.x = 5 * Math.sin(-scrollOffset * Math.PI * 2);
      camera.position.z = 5 * Math.cos(scrollOffset * Math.PI * 2);
      camera.position.y = 3 * Math.sin(scrollOffset * Math.PI * 2);
    } else if (scrollOffset > 0.48 && scrollOffset <= 0.65) {
      blackHoleRef.current.visible = false;
      camera.position.x = 5 * Math.sin(-scrollOffset * Math.PI * 2);
      camera.position.z = 5 * Math.cos(-scrollOffset * Math.PI * 2);
      camera.position.y = 3 * Math.sin(scrollOffset * Math.PI * 2);
    } else {
      blackTorRef.current.visible = true;

      camera.position.z = 5 * Math.cos(-scrollOffset * Math.PI * 2);

      blackTorRef.current.scale.x =
        blackTorIC.scale.x + 0.3 * Math.sin(time * Math.PI * 2 + Math.PI / 2);
      blackTorRef.current.scale.z =
        blackTorIC.scale.y + 0.3 * Math.sin(time * Math.PI * 2);
    }

    if (w <= 1.4) {
      blackTorRef.current.position.x = 3.3;
    }

    camera.lookAt(
      planetsRef.current.position.x,
      planetsRef.current.position.y,
      planetsRef.current.position.z
    );
  });

  return (
    <group position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <ambientLight intensity={1} />
      <Suspense fallback={null}>
        <group
          ref={starsGroupRef}
          position={starsGroupPosition}
          rotation={starsIC.rotation}
          scale={starsIC.scale}
        >
          <Stars position={[0, 0, 0]} />
        </group>
        <group
          name="solar-system"
          ref={planetsRef}
          position={planetsGroupPosition}
          rotation={planetsGroupRotation}
          scale={planetsIC.scale}
        >
          <Bloom>
            <Sun />
          </Bloom>
          <Planets />
          <Asteroid />
        </group>
        <group
          ref={blackHoleRef}
          position={blackHoleGroupPosition}
          rotation={blackHoleGroupRotation}
          scale={blackholeIC.scale}
        >
          <BlackHole />
        </group>
        <group
          ref={blackTorRef}
          position={blackTorGroupPosition}
          rotation={blackTorGroupRotation}
          scale={blackTorGroupScale}
        >
          <BlackTor />
        </group>
      </Suspense>
    </group>
  );
};
