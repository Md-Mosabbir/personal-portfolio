"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

// Wave settings
const WAVE_AMPLITUDE = 0.18
const WAVE_FREQUENCY = 2.2
const WAVE_SPEED = 1.2

// 3D Plane with wave effect
function WavePlane() {
  const meshRef = useRef<THREE.Mesh>(null)
  const texture = useTexture("/photo.jpeg") // replace with your image

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * WAVE_SPEED
    const mesh = meshRef.current
    if (!mesh) return

    const geometry = mesh.geometry as THREE.BufferGeometry
    const positionAttribute = geometry.getAttribute("position") as THREE.BufferAttribute

    for (let i = 0; i < positionAttribute.count; i++) {
      const x = positionAttribute.getX(i)
      const yBase = positionAttribute.getY(i)
      const wave = Math.sin(x * WAVE_FREQUENCY + t) * WAVE_AMPLITUDE
      positionAttribute.setZ(i, wave)
      positionAttribute.setY(i, yBase)
    }

    positionAttribute.needsUpdate = true
  })

  

  return (
    <mesh ref={meshRef} rotation={[0, 0, 0]}>
      {/* Plane aspect ratio – keep this square to match photo.jpeg (1:1)
          to avoid stretching or squashing the image */}
      <planeGeometry args={[4, 4, 128, 128]} />
      <meshStandardMaterial
        map={texture}
        color="#ffffff"
        metalness={0}
        roughness={0.6}
        toneMapped={true}
      />
    </mesh>
  )
}

// Fullscreen Canvas with animated entry
function WaveAvatar() {
  return (
    <div
      className="w-full h-screen"
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 3, 4]} intensity={1} />
        <directionalLight position={[-2, -2, -2]} intensity={0.4} />
        <WavePlane />
      </Canvas>
    </div>
  )
}

// Main Scroll Section
export default function ScrollingImage() {
const calcExp = new Date().getFullYear() - 2023
  return (
    <div>
      {/* Fullscreen waving image */}
      <WaveAvatar />

      {/* Stats section */}
      <section className="py-32 bg-black text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Mosabbir Khan
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-10 mt-6 text-xl md:text-2xl font-medium">
          <div>{calcExp}+ Years Experience</div>
          <div>30+ Projects Completed</div>
        </div>
      </section>
    </div>
  )
}
