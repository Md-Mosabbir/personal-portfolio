/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";

// NOTE:
// This component is a direct React Three Fiber conversion of the existing Three.js demo:
// - Geometry: TorusGeometry(1, 0.3, 100, 100)
// - Material: ShaderMaterial using the provided vertex/fragment shaders
// - Uniforms: uTime, uResolution, uDisplace, uSpread, uNoise
//
// Where to modify later:
// - Donut size/quality: TorusGeometry args in this file
// - Distortion strength: uDisplace / uSpread / uNoise defaults below
// - Rotation speed: useFrame rotation line below

// --- Shader code copied from `3d stuff/src/shaders/*.js` and embedded here as GLSL strings ---
const vertexShader = /* glsl */ `
varying vec3 vPosition;
varying vec3 vNormal;
varying vec2 vUv;
varying vec3 vPattern;

uniform vec2 uResolution;
uniform float uTime;
uniform float uDisplace;
uniform float uSpread;
uniform float uNoise;

#define PI 3.14159265358979
#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float pnoise(vec3 p) {
  vec3 pi = floor(p);
  vec3 pf = p - pi;
  vec3 w = pf * pf * (3. - 2.0 * pf);
  return mix(
    mix(
      mix(dot(pf - vec3(0, 0, 0), hash33(pi + vec3(0, 0, 0))),
          dot(pf - vec3(1, 0, 0), hash33(pi + vec3(1, 0, 0))),
          w.x),
      mix(dot(pf - vec3(0, 0, 1), hash33(pi + vec3(0, 0, 1))),
          dot(pf - vec3(1, 0, 1), hash33(pi + vec3(1, 0, 1))),
          w.x),
      w.z),
    mix(
      mix(dot(pf - vec3(0, 1, 0), hash33(pi + vec3(0, 1, 0))),
          dot(pf - vec3(1, 1, 0), hash33(pi + vec3(1, 1, 0))),
          w.x),
      mix(dot(pf - vec3(0, 1, 1), hash33(pi + vec3(0, 1, 1))),
          dot(pf - vec3(1, 1, 1), hash33(pi + vec3(1, 1, 1))),
          w.x),
      w.z),
    w.y);
}

void main() {
  vUv = uv;
  vPosition = position;
  vNormal = normal;

  float pat = pnoise(vec3(vUv * uNoise , sin(uTime) * 1.4 )) * uDisplace ;
  float proximity = abs(vUv.x - (.5 + sin(uTime)/(12. * uSpread ) ));

  vec3 full = pat * vec3(clamp(.23 * uSpread  - proximity , 0., 1.));
  vec3 newPosition = vPosition + vNormal * full;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
}
`;

const fragmentShader = /* glsl */ `
varying vec3 vPosition;
varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vPattern;

uniform vec2 uResolution;
uniform float uTime;
uniform float uDisplace;
uniform float uSpread;
uniform float uNoise;

#define PI 3.14159265358979
#define MOD3 vec3(.1031,.11369,.13787)

vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz+19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x + p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}
float pnoise(vec3 p) {
  vec3 pi = floor(p);
  vec3 pf = p - pi;
  vec3 w = pf * pf * (3. - 2.0 * pf);
  return mix(
    mix(
      mix(dot(pf - vec3(0, 0, 0), hash33(pi + vec3(0, 0, 0))),
          dot(pf - vec3(1, 0, 0), hash33(pi + vec3(1, 0, 0))),
          w.x),
      mix(dot(pf - vec3(0, 0, 1), hash33(pi + vec3(0, 0, 1))),
          dot(pf - vec3(1, 0, 1), hash33(pi + vec3(1, 0, 1))),
          w.x),
      w.z),
    mix(
      mix(dot(pf - vec3(0, 1, 0), hash33(pi + vec3(0, 1, 0))),
          dot(pf - vec3(1, 1, 0), hash33(pi + vec3(1, 1, 0))),
          w.x),
      mix(dot(pf - vec3(0, 1, 1), hash33(pi + vec3(0, 1, 1))),
          dot(pf - vec3(1, 1, 1), hash33(pi + vec3(1, 1, 1))),
          w.x),
      w.z),
    w.y);
}

void main() {
  float pat = pnoise(vec3(vUv * uNoise , sin(uTime) * 1.4 )) * uDisplace ;
  float proximity = abs(vUv.x - (.5 + sin(uTime)/(12. * uSpread ) ));

  vec3 full = pat * vec3(clamp(.23 * uSpread  - proximity , 0., 1.));
  vec3 newPosition = vPosition + vNormal * full;
  vec3 purpleColor = vec3(0.498, 0.2039, 0.8314) / vec3(0.4941, 0.4941, 0.051);
  vec3 color = -vec3(pnoise(vec3(1. - newPosition.z * 35.))*40.) * (.01 -full) * purpleColor;
  gl_FragColor = vec4(color , 1.);
}
`;

type DistortedDonutProps = {
  // Change this value to adjust donut rotation speed
  rotationSpeed?: number;
  // Modify these to change the distortion look
  displace?: number;
  spread?: number;
  noise?: number;
};

export function DistortedDonut({
  rotationSpeed = 0.05,
  displace = 2,
  spread = 1.2,
  noise = 16,
}: DistortedDonutProps) {
  // Where the donut geometry is defined
  const meshRef = useRef<THREE.Mesh>(null);

  // Where the 3D viewport size is available (used to drive uResolution)
  const { size } = useThree();

  // Where the shader / distortion logic is applied
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      side: THREE.DoubleSide,
      transparent: true,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(size.width, size.height) },
        uDisplace: { value: displace },
        uSpread: { value: spread },
        uNoise: { value: noise },
      },
    });
  }, [displace, noise, size.height, size.width, spread]);

  // Keep uniforms updated without forcing React re-renders
  useFrame((state) => {
    material.uniforms.uTime.value = state.clock.getElapsedTime();
    material.uniforms.uResolution.value.set(size.width, size.height);

    if (meshRef.current) {
      // Slowly rotate to stay subtle and "backgroundy"
      meshRef.current.rotation.z += rotationSpeed * state.clock.getDelta();
    }
  });

  return (
    <mesh
      ref={meshRef}
      // Optional: move it slightly off-center for a modern composition
      position={[0, 0, 0]}
      rotation={[0, 0, -2]}
      material={material as any}
    >
      <torusGeometry args={[1, 0.3, 100, 100]} />
    </mesh>
  );
}

