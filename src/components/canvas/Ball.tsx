import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../layout/Loader";

const Ball = (props: any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          // @ts-expect-error
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    const touchMediaQuery = window.matchMedia("(pointer: coarse)");
    setIsTouchDevice(touchMediaQuery.matches);

    const handleTouchChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    touchMediaQuery.addEventListener("change", handleTouchChange);

    return () => {
      touchMediaQuery.removeEventListener("change", handleTouchChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.5]}
      gl={{ powerPreference: "high-performance", antialias: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enablePan={false}
          enableZoom={false}
          enableRotate={!isTouchDevice}
          autoRotate={isTouchDevice}
          autoRotateSpeed={1.8}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
