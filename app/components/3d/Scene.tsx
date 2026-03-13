"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DistortedDonut } from "./DistortedDonut";
import { useEffect, useRef } from "react";
import { GUI } from "dat.gui";
import * as THREE from "three";

// This component is responsible for:
// - Where the 3D canvas is mounted (Canvas lives here)
// - Camera settings (position/FOV)
// - Lighting (if you switch to non-shader materials later)
// - OrbitControls settings (subtle interaction without breaking layout)

function SceneContents() {
  // These refs store "live" values that dat.GUI can update without re-rendering React.
  const donutRef = useRef({
    positionX: 0.6,
    positionY: 0,
    positionZ: 0,
    scale: 1,
    rotationSpeed: 0.05,
    displace: 2,
    spread: 1.2,
    noise: 16,
  });

  const cameraRef = useRef({
    positionX: 0,
    positionY: 0,
    positionZ: 2.5,
    fov: 75,
  });










  return (
    <>
      {/* Lighting is not required for ShaderMaterial, but kept here for easy experimentation */}
      <ambientLight intensity={0.4} />

      {/* The distorted donut (shader + rotation) */}
      <DistortedDonut controlsRef={donutRef} />

      {/* Subtle controls: allow small orbit, no zoom/pan */}
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        enableDamping
        dampingFactor={0.08}
        // Limit rotation range so users can't flip the scene
        minPolarAngle={Math.PI / 2.5}
        maxPolarAngle={Math.PI / 1.6}
        rotateSpeed={0.35}
      />
    </>
  );
}

export function DonutScene() {
  return (
    <Canvas
      // Adjust camera position here
      camera={{ position: [0, 0, 2.5], fov: 75, near: 0.01, far: 100 }}
      dpr={[1, 2]}
      // Keep the scene lightweight and avoid extra work each frame
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <SceneContents />
    </Canvas>
  );
}

