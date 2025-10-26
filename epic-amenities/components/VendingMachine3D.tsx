'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

function VendingMachineModel({ autoRotate = false }: { autoRotate?: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 4, 1.5]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Glass front */}
      <mesh position={[0, 0.5, 0.76]}>
        <boxGeometry args={[1.8, 2.5, 0.05]} />
        <meshPhysicalMaterial
          color="#4a9eff"
          transparent
          opacity={0.3}
          metalness={0.9}
          roughness={0.1}
          transmission={0.9}
        />
      </mesh>

      {/* Top accent */}
      <mesh position={[0, 2.2, 0]}>
        <boxGeometry args={[2.1, 0.3, 1.6]} />
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.9}
          roughness={0.1}
          emissive="#2563eb"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Product shelves */}
      {[-0.5, 0, 0.5, 1].map((y, i) => (
        <group key={i}>
          <mesh position={[0, y, 0.5]}>
            <boxGeometry args={[1.6, 0.05, 1]} />
            <meshStandardMaterial color="#333333" />
          </mesh>
          {/* Products on shelves */}
          {[-0.4, -0.1, 0.2, 0.5].map((x, j) => (
            <mesh key={j} position={[x, y + 0.15, 0.6]}>
              <boxGeometry args={[0.15, 0.25, 0.1]} />
              <meshStandardMaterial
                color={['#f59e0b', '#2563eb', '#7c3aed', '#10b981'][j % 4]}
                metalness={0.5}
                roughness={0.5}
              />
            </mesh>
          ))}
        </group>
      ))}

      {/* Payment panel */}
      <mesh position={[0, -1.5, 0.76]}>
        <boxGeometry args={[0.8, 0.6, 0.05]} />
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.8}
          roughness={0.3}
        />
      </mesh>

      {/* Screen */}
      <mesh position={[0, -1.35, 0.79]}>
        <boxGeometry args={[0.6, 0.25, 0.02]} />
        <meshStandardMaterial
          color="#7c3aed"
          emissive="#7c3aed"
          emissiveIntensity={1}
        />
      </mesh>

      {/* Dispenser slot */}
      <mesh position={[0, -2.3, 0.76]}>
        <boxGeometry args={[1, 0.3, 0.05]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* Side panels */}
      <mesh position={[-1.01, 0, 0]}>
        <boxGeometry args={[0.05, 4, 1.5]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[1.01, 0, 0]}>
        <boxGeometry args={[0.05, 4, 1.5]} />
        <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* Lighting effects */}
      <pointLight position={[0, 2, 1]} intensity={2} color="#2563eb" />
      <pointLight position={[0, -1.5, 1]} intensity={1.5} color="#7c3aed" />
    </group>
  );
}

export default function VendingMachine3D({
  autoRotate = false,
  enableControls = true,
}: {
  autoRotate?: boolean;
  enableControls?: boolean;
}) {
  return (
    <Canvas
      className="w-full h-full"
      gl={{ antialias: true, alpha: true }}
    >
      <PerspectiveCamera makeDefault position={[4, 2, 6]} fov={50} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} />
      <VendingMachineModel autoRotate={autoRotate} />
      {enableControls && (
        <OrbitControls
          enableZoom={true}
          enablePan={false}
          minDistance={4}
          maxDistance={10}
          maxPolarAngle={Math.PI / 2}
        />
      )}
    </Canvas>
  );
}
