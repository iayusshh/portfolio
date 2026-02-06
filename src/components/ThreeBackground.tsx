import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, Sparkles } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'
import usePrefersReducedMotion from '../lib/usePrefersReducedMotion'

type ShapeSpec = {
  key: string
  position: THREE.Vector3
  scale: number
  color: THREE.Color
  speed: number
  roughness: number
  metalness: number
}

const SHAPES: ShapeSpec[] = (() => {
  const palette = [
    new THREE.Color('#6366f1'), // indigo
    new THREE.Color('#ec4899'), // pink
    new THREE.Color('#22c55e'), // green
    new THREE.Color('#38bdf8'), // sky
    new THREE.Color('#a78bfa'), // violet
  ]

  return new Array(8).fill(0).map((_, index) => {
    const radius = 2.2 + Math.random() * 3.5
    const angle = (index / 8) * Math.PI * 2
    const y = (Math.random() - 0.5) * 1.8
    const position = new THREE.Vector3(
      Math.cos(angle) * radius,
      y,
      Math.sin(angle) * radius,
    )

    return {
      key: `shape-${index}`,
      position,
      scale: 0.35 + Math.random() * 0.55,
      color: palette[index % palette.length],
      speed: 0.6 + Math.random() * 0.9,
      roughness: 0.35 + Math.random() * 0.3,
      metalness: 0.2 + Math.random() * 0.4,
    }
  })
})()

function FloatingShapes() {
  const groupRef = useRef<THREE.Group>(null)
  const reducedMotion = usePrefersReducedMotion()

  useFrame(({ mouse }, delta) => {
    if (reducedMotion) return
    const group = groupRef.current
    if (!group) return

    const targetX = mouse.x * 0.6
    const targetY = mouse.y * 0.35
    group.rotation.y = THREE.MathUtils.lerp(group.rotation.y, targetX, 1 - Math.pow(0.0008, delta))
    group.rotation.x = THREE.MathUtils.lerp(group.rotation.x, -targetY, 1 - Math.pow(0.0008, delta))
  })

  return (
    <group ref={groupRef}>
      {SHAPES.map((shape, index) => (
        <Float
          key={shape.key}
          speed={reducedMotion ? 0 : shape.speed}
          rotationIntensity={reducedMotion ? 0 : 1.2}
          floatIntensity={reducedMotion ? 0 : 1.2}
        >
          <mesh position={shape.position} scale={shape.scale}>
            {index % 3 === 0 ? (
              <icosahedronGeometry args={[1, 0]} />
            ) : index % 3 === 1 ? (
              <torusKnotGeometry args={[0.7, 0.2, 120, 16]} />
            ) : (
              <octahedronGeometry args={[1, 0]} />
            )}
            <meshStandardMaterial
              color={shape.color}
              roughness={shape.roughness}
              metalness={shape.metalness}
              emissive={shape.color}
              emissiveIntensity={0.15}
            />
          </mesh>
        </Float>
      ))}

      <Sparkles
        count={reducedMotion ? 20 : 70}
        size={reducedMotion ? 1 : 1.6}
        scale={[14, 8, 14]}
        speed={reducedMotion ? 0 : 0.25}
        opacity={0.35}
        color="#ffffff"
      />
    </group>
  )
}

export default function ThreeBackground() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.3, 8.5], fov: 42 }}
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      onCreated={({ gl }) => {
        gl.setClearColor(0x000000, 0)
      }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[6, 6, 6]} intensity={1.0} />
      <pointLight position={[-6, -2, -4]} intensity={0.9} color={0x6366f1} />
      <pointLight position={[6, 0, -6]} intensity={0.8} color={0xec4899} />

      <Suspense fallback={null}>
        <FloatingShapes />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  )
}
