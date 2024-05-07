import { useRef } from "react";
import * as THREE from "three";

export const Axes = () => {
    const axesRef = useRef<THREE.Group>(null);
  
    // Create X axis
    const xAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-10, 0, 0),
        new THREE.Vector3(10, 0, 0),
      ]),
      new THREE.MeshLambertMaterial({ color: 0xff0000, reflectivity: 0 })
    );
  
    // Create Y axis
    const yAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, -10, 0),
        new THREE.Vector3(0, 10, 0),
      ]),
      new THREE.MeshLambertMaterial({ color: 0x00ff00, reflectivity: 0 })
    );
  
    // Create Z axis
    const zAxis = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, -10),
        new THREE.Vector3(0, 0, 10),
      ]),
      new THREE.MeshLambertMaterial({ color: 0x0000ff, reflectivity: 0 })
    );
  
    return (
      <group ref={axesRef}>
        <primitive object={xAxis} />
        <primitive object={yAxis} />
        <primitive object={zAxis} />
      </group>
    );
  };