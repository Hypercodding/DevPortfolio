"use client";

import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, ContactShadows } from "@react-three/drei";
import type * as THREE from "three";

const isWebGLAvailable = (): boolean => {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
};

function FloatingCube({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(time / 2) * 0.3;
    meshRef.current.rotation.y = Math.sin(time / 3) * 0.3;
    meshRef.current.position.y =
      position[1] + Math.sin(time + position[0]) * 0.1;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      <boxGeometry args={[0.5, 0.5, 0.5]} />
      <meshStandardMaterial
        color={hovered ? "#8b5cf6" : "#6366f1"}
        transparent
        opacity={0.8}
        roughness={0.1}
        metalness={0.2}
      />
    </mesh>
  );
}

function FloatingSphere({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.5;
    meshRef.current.rotation.y = time * 0.3;
    meshRef.current.position.y =
      position[1] + Math.cos(time + position[0]) * 0.15;
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.3 : 1}
    >
      <sphereGeometry args={[0.3, 32, 32]} />
      <meshStandardMaterial
        color={hovered ? "#ec4899" : "#f59e0b"}
        transparent
        opacity={0.7}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

function CodeSymbols() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    groupRef.current.rotation.y = time * 0.1;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[-2, 1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#6366f1" />
      </mesh>
      <mesh position={[2, -1, 0]}>
        <boxGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#8b5cf6" />
      </mesh>
      <mesh position={[0, 2, -1]}>
        <boxGeometry args={[0.5, 0.5, 0.1]} />
        <meshStandardMaterial color="#ec4899" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <FloatingCube position={[-1.5, 0, 0]} />
      <FloatingCube position={[1.5, 0.5, -0.5]} />
      <FloatingSphere position={[0, -1, 1]} />
      <FloatingSphere position={[-2, 1, -1]} />
      <FloatingSphere position={[2, -0.5, 0.5]} />

      <CodeSymbols />

      <ContactShadows
        rotation-x={Math.PI / 2}
        position={[0, -2, 0]}
        opacity={0.25}
        width={10}
        height={10}
        blur={1.5}
        far={2}
      />
    </>
  );
}

export default function Interactive3DModel() {
  const [webGLSupported, setWebGLSupported] = useState<boolean | null>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setWebGLSupported(isWebGLAvailable());
  }, []);

  // Still checking or WebGL not supported or error occurred
  if (webGLSupported === null || !webGLSupported || hasError) {
    return (
      <div className="fixed inset-0 z-0 opacity-30 pointer-events-none overflow-hidden">
        {/* Fallback animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-accent/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-0 opacity-60"
      style={{ pointerEvents: "none" }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ pointerEvents: "auto" }}
        onCreated={({ gl }) => {
          if (!gl) setHasError(true);
        }}
        onError={() => setHasError(true)}
      >
        <Suspense fallback={null}>
          <Scene />
          <Environment preset="city" />
          <OrbitControls
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
