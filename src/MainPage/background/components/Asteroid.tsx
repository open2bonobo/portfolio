import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import { useScroll } from "@react-three/drei";

const collisionDistance = 0.1;

export const Asteroid = () => {
  const { scene } = useThree();
  const [position, setPosition] = useState<THREE.Vector3>(
    new THREE.Vector3(-0.7, -1.7, 0.8)
  );
  const asterodRef = useRef<THREE.Mesh>();
  const particlesRef = useRef<THREE.Group>();
  const [collapsed, setCollapsed] = useState(false);

  const scroll = useScroll();
  useFrame((state, delta) => {

    const a = scroll.range(0, 1 / 3);

    if (a === 1 && !collapsed) {
      const planet = scene.getObjectByName("planet_5");

      const planetLocal = new THREE.Vector3(
        planet.position.x,
        planet.position.y,
        planet.position.z
      );
      const planetWorld = planetLocal.applyMatrix4(planet.matrixWorld);

      const asterodLocal = new THREE.Vector3(
        asterodRef.current.position.x,
        asterodRef.current.position.y,
        asterodRef.current.position.z
      );
      const asterodWorld = asterodLocal.applyMatrix4(
        asterodRef.current.matrixWorld
      );

      // Calculate the distance between the asteroid and planet_5
      const distance = asterodWorld.distanceTo(planetWorld);

      // Check if the asteroid is close to planet_5
      if (distance < collisionDistance && !collapsed) {
        console.log("Collision detected!");
        setCollapsed(true);


        // Remove asteroid and planet_5
        scene.getObjectByName("asteroid").visible = false;
        scene.getObjectByName("planet_5").visible = false;

        // Add explosion effect
        const explosionGeometry = new THREE.SphereGeometry(0.05, 32, 32);
        const explosionMaterial = new THREE.MeshBasicMaterial({
          color: 0xff0000,
          transparent: true,
          opacity: 0.5,
        });
        const explosion = new THREE.Mesh(explosionGeometry, explosionMaterial);

        explosion.position.set(
          planetWorld.x,
          planetWorld.y,
          planetWorld.z
        );
        scene.add(explosion);

        // Add particles to the explosion
        const particleCount = 1000;
        const particles = new THREE.Group();
        for (let i = 0; i < particleCount; i++) {
          const particleGeometry = new THREE.BoxGeometry(0.01, 0.01, 0.01);
          const particleMaterial = new THREE.MeshBasicMaterial({
            color: new THREE.Color(Math.random(), Math.random(), Math.random()),
            transparent: true,
            opacity: 0.7,
          });
          const particle = new THREE.Mesh(particleGeometry, particleMaterial);
          particle.userData.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
          );
          particles.add(particle);
        }
        particles.position.set(
          planetWorld.x,
          planetWorld.y,
          planetWorld.z
        );
        scene.add(particles);
        particlesRef.current = particles;

        // Update particle positions in animation loop
        state.scene.onBeforeRender = () => {
          particles.children.forEach((particle: THREE.Mesh) => {
            particle.position.add(particle.userData.velocity);
          });
        };

        // Remove explosion and particles after a certain duration
        setTimeout(() => {
          scene.remove(explosion);
        }, 1000);

        return;
      }

      // Calculate the direction from the asteroid to planet_5
      const direction = new THREE.Vector3()
        .copy(planetWorld)
        .sub(asterodWorld)
        .normalize();

      // // Update the position of the asteroid towards planet_5
      asterodRef.current.position.add(direction.multiplyScalar(0.01));


      //i want to leave a trace of the asteroid
      const trailGeometry = new THREE.SphereGeometry(0.01, 32, 32);
      const trailMaterial = new THREE.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
      });
      const trail = new THREE.Mesh(trailGeometry, trailMaterial);
      trail.position.set(
        asterodWorld.x,
        asterodWorld.y,
        asterodWorld.z
      );
      scene.add(trail);

      // Remove the trail after a certain duration
      setTimeout(() => {
        scene.remove(trail);
      }, 1000);
    }


  });
  

  return (
    <mesh
      ref={asterodRef}
      position={position}
      rotation={[0, 0, 0]}
      scale={0.01}
      name="asteroid"
    >
      <sphereGeometry args={[1, 32, 32]} />
    </mesh>
  );
};
