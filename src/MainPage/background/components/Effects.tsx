import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";

extend({ EffectComposer, RenderPass, UnrealBloomPass });


export const  Bloom = ({children}) => {
    const { gl, camera, size, scene } = useThree();
    const composer = useRef(null);
  
    useEffect(() => {
      composer.current = new EffectComposer(gl);
      const renderPass = new RenderPass(scene, camera);
      composer.current.addPass(renderPass);
      const bloomPass = new UnrealBloomPass(undefined, 5, 0.3, 0, );
      composer.current.addPass(bloomPass);
      composer.current.setSize(size.width, size.height);
    }, [gl, camera, scene, size]);
  
    useFrame(() => composer.current?.render(), 1);
  
    return <>{children}</>;
  }

