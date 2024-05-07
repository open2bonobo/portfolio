import { useFrame } from "@react-three/fiber";
import { useState } from "react";

type PlanetProps = {
  size: number;
  position: [number, number, number];
  rotationSpeed: number;
  rotationCoefficient: number;
  sizeCoefficient?: number;
  color?: string;
  distanceFromSun?: number;
};

const rotationCoefficients = {
  Mercury: 4.15, // Mercury completes about 4.15 orbits around the Sun for each Earth orbit
  Venus: 1.625, // Venus completes about 1.625 orbits around the Sun for each Earth orbit
  Earth: 1, // Earth's orbit speed (reference point)
  Mars: 0.531, // Mars completes about 0.531 orbits around the Sun for each Earth orbit
  Jupiter: 0.0843, // Jupiter completes about 0.0843 orbits around the Sun for each Earth orbit
  Saturn: 0.0339, // Saturn completes about 0.0339 orbits around the Sun for each Earth orbit
  Uranus: 0.0119, // Uranus completes about 0.0119 orbits around the Sun for each Earth orbit
  Neptune: 0.00607, // Neptune completes about 0.00607 orbits around the Sun for each Earth orbit
};
// Sizes of planets relative to Earth's size
const sizeCoefficients = {
  Mercury: 0.383, // Mercury is about 0.383 times the size of Earth
  Venus: 0.949, // Venus is about 0.949 times the size of Earth
  Earth: 1, // Earth's size (reference point)
  Mars: 0.532, // Mars is about 0.532 times the size of Earth
  Jupiter: 11.21, // Jupiter is about 11.21 times the size of Earth
  Saturn: 9.45, // Saturn is about 9.45 times the size of Earth
  Uranus: 4.01, // Uranus is about 4.01 times the size of Earth
  Neptune: 3.88, // Neptune is about 3.88 times the size of Earth
};

const planetColors = {
  Mercury: "#afafaf", // Grayish
  Venus: "#d9b38c", // Yellowish-brown
  Earth: "#3b5998", // Blue
  Mars: "#ff6347", // Reddish-orange
  Jupiter: "#ffcc99", // Light brown
  Saturn: "#ffd700", // Yellow
  Uranus: "#a0e6ff", // Pale blue
  Neptune: "#417dff", // Deep blue
};
const planetDistancesFromSun = {
  Mercury: 0.4 / 4,
  Venus: 0.6 / 4,
  Earth: 0.8 / 4,
  Mars: 1.0 / 4,
  Jupiter: 1.5 / 4,
  Saturn: 1.8 / 4,
  Uranus: 2.2 / 4,
  Neptune: 2.6 / 4,
};
const planets: PlanetProps[] = [
  {
    size: 0.1,
    position: [0.0, planetDistancesFromSun["Mercury"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Mercury"],
    sizeCoefficient: sizeCoefficients["Mercury"],
    color: planetColors["Mercury"],
  }, // mercury
  {
    size: 0.1,
    position: [0.0, planetDistancesFromSun["Venus"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Venus"],
    sizeCoefficient: sizeCoefficients["Venus"],
    color: planetColors["Venus"],
  }, // venus
  {
    size: 0.1,
    position: [0.0, planetDistancesFromSun["Earth"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Earth"],
    sizeCoefficient: sizeCoefficients["Earth"],
    color: planetColors["Earth"],
  }, // earth
  {
    size: 0.1,
    position: [0.0, planetDistancesFromSun["Mars"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Mars"],
    sizeCoefficient: sizeCoefficients["Mars"],
    color: planetColors["Mars"],
  }, // mars
  {
    size: 0.01,
    position: [0.0, planetDistancesFromSun["Jupiter"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Jupiter"],
    sizeCoefficient: sizeCoefficients["Jupiter"],
    color: planetColors["Jupiter"],
  }, // jupiter
  {
    size: 0.01,
    position: [0.0, planetDistancesFromSun["Saturn"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Saturn"],
    sizeCoefficient: sizeCoefficients["Saturn"],
    color: planetColors["Saturn"],
  }, // saturn
  {
    size: 0.01,
    position: [0.0, planetDistancesFromSun["Uranus"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Uranus"],
    sizeCoefficient: sizeCoefficients["Uranus"],
    color: planetColors["Uranus"],
  }, // uranus
  {
    size: 0.01,
    position: [0.0, planetDistancesFromSun["Neptune"], 0.0],
    rotationSpeed: Math.PI,
    rotationCoefficient: rotationCoefficients["Neptune"],
    sizeCoefficient: sizeCoefficients["Neptune"],
    color: planetColors["Neptune"],
  }, // neptune
];

export const Planets = () => {
  const [planetPositions, setPlanetPositions] = useState(planets);

  useFrame((state, delta) => {
    const updatedPlanets: PlanetProps[] = planetPositions.map((planet) => {
      const { position, rotationSpeed } = planet;
      const [x, y, z] = position;
      const angle = - delta * rotationSpeed * planet.rotationCoefficient * 0.1;
      const newX = x * Math.cos(angle) - y * Math.sin(angle);
      const newY = x * Math.sin(angle) + y * Math.cos(angle);
      return { ...planet, position: [newX, newY, 0]};
    });
    setPlanetPositions(updatedPlanets);
  });

  return (
    <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      {planetPositions.map((planet, index) => (
        <mesh
          key={index}
          position={planet.position}
          scale={[
            0.2 * planet.size * planet.sizeCoefficient,
            0.2 * planet.size * planet.sizeCoefficient,
            0.2 * planet.size * planet.sizeCoefficient,
          ]}
          name={`planet_${index}`}
        >
          <sphereGeometry args={[1, 32, 32]} />
          <meshLambertMaterial color={planet.color} />
        </mesh>
      ))}
    </group>
  );
};
