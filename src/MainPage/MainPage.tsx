import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import {
  PerspectiveCamera,
  ScrollControls,
} from "@react-three/drei";
import { Navbar, SpaceHtml } from "./html-layout";
import { SpaceScene } from "./background";
import LoginPage from "../Login/LoginPage";

export const MainPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <main className="h-full w-full">
      <Navbar />
      <Canvas
        ref={canvasRef}
        gl={{ antialias: true, alpha: true }}
        style={{ height: "100vh", width: "100vw" }}
      >
        <PerspectiveCamera
          makeDefault
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          fov={100}
        />
        <ScrollControls pages={9}>
          <SpaceScene />
          <SpaceHtml />
        </ScrollControls> 
      </Canvas>
    </main>
  );
};
