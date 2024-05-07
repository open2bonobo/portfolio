import { Html, useScroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useRef, useState } from "react";

export const Sun = () => {
    const sunRef = useRef(null);
  
    const scroll = useScroll();
    const sceneContext = useThree();

    const scrollOffset = scroll.range(0, 1 / 3);

  const handleClick = () => {
    if(scrollOffset == 1){
      const asteroid = sceneContext.scene.getObjectByName("asteroid");
      if(asteroid && asteroid.visible ==false){


        //write code here

        let timeout;

        const handleMouseDown = () => {
          timeout = setTimeout(() => {
            //write code here
            // i want to display this component <LoginPage />;
            console.log("mouse down");

            //redirect to oauth/login
            window.location.href = "/oauth/login";
            
          }, 5000);
        };
  
        const handleMouseUp = () => {
          clearTimeout(timeout);
        };
  
        // Add event listeners
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
  
        // Cleanup event listeners when component unmounts or when condition changes
        return () => {
          window.removeEventListener("mousedown", handleMouseDown);
          window.removeEventListener("mouseup", handleMouseUp);
          clearTimeout(timeout);
        };




      }
    }
  };

    return (
      <mesh onClick={handleClick} ref={sunRef} position={[0, 0, 0]} scale={[0.05, 0.05, 0.05]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#ffd700" roughness={1} />
      </mesh>
    );
  }