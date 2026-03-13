"use client";

import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";

// Simple sine-wave distorted plane used as a stylized "photo" background.
// Wave settings: tweak these for different looks.
const WAVE_AMPLITUDE = 0.18; // Change this to adjust wave height
const WAVE_FREQUENCY = 2.2;  // Change this to adjust how many waves fit across
const WAVE_SPEED = 1.2;      // Change this to adjust wave animation speed

function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/photo.jpeg");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * WAVE_SPEED;
    const mesh = meshRef.current;
    if (!mesh) return;

    const geometry = mesh.geometry as THREE.BufferGeometry;
    const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute;

    // Apply a simple sine wave along the X axis
    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i);
      const yBase = positionAttribute.getY(i);
      const wave = Math.sin(x * WAVE_FREQUENCY + t) * WAVE_AMPLITUDE;
      positionAttribute.setZ(i, wave);
      positionAttribute.setY(i, yBase);
    }

    positionAttribute.needsUpdate = true;
  });

  return (
    <mesh ref={meshRef}>
      {/* Geometry resolution controls how smooth the wave is */}
      {/* Width/height tuned so the full image reads like a flag without obvious cropping */}
      <planeGeometry args={[3, 3, 96, 96]} />
      {/* Modify material here if you want different shading */}
      <meshStandardMaterial
        map={texture}
        // Make the image brighter and more vivid
        color="#ffffff"
        metalness={0.05}
        roughness={0.2}
        emissive="#ffffff"
        emissiveIntensity={0.2}
        toneMapped={true}
      />
    </mesh>
  );
}

// Main wave-photo component used inside scroll-image.
// Where the 3D canvas is mounted and camera/lighting are controlled.
export function WaveAvatar() {
  return (
    <div className="absolute inset-0 rounded-3xl overflow-hidden bg-black/60">
      {/* 3D Canvas mount filling the whole image container */}
      <Canvas
        // Adjust camera position here if the image feels cropped
        camera={{ position: [0, 0, 3.2], fov: 48 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        {/* Lighting - tweak for different depth / contrast */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 4]} intensity={1.4} color="#ffffff" />
        <directionalLight position={[-3, -3, -2]} intensity={0.6} color="#3fc674" />

        {/* Wave geometry */}
        <WavePlane />
      </Canvas>

      {/* Overlay initials so the "photo" still reads as you */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center text-4xl font-semibold text-white/90 tracking-tight">
        MK
      </div>
    </div>
  );
}

