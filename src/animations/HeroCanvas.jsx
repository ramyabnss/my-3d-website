import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

/* 🎥 Cinematic Camera */
function AutoCamera() {
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    state.camera.position.x = Math.sin(t * 0.1) * 1
    state.camera.position.z = 9 + Math.sin(t * 0.15) * 0.3
    state.camera.lookAt(0, 0, 0)
  })
  return null
}

/* 📚 Floating Book */
function FloatingBook({ position, color }) {
  const meshRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (!meshRef.current) return
    meshRef.current.rotation.y += 0.01
    meshRef.current.rotation.x = Math.sin(t) * 0.15
  })

  return (
    <Float speed={2} floatIntensity={2} rotationIntensity={1}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[1.3, 0.25, 1.8]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  )
}

/* 🌐 Digital Network */
function Network() {
  const materialRef = useRef()

  const points = useMemo(() => {
    const pts = []
    for (let i = 0; i < 120; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 10,
          (Math.random() - 0.5) * 12
        )
      )
    }
    return new Float32Array(
      pts.flatMap((v) => [v.x, v.y, v.z])
    )
  }, [])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (materialRef.current) {
      materialRef.current.opacity =
        0.3 + Math.sin(t * 2) * 0.2
    }
  })

  return (
    <lineSegments>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={points.length / 3}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        ref={materialRef}
        color="#6366f1"
        transparent
        opacity={0.4}
      />
    </lineSegments>
  )
}

/* ✨ Floating Particles */
function Particles() {
  const pointsRef = useRef()

  const particles = useMemo(() => {
    const arr = new Float32Array(600)
    for (let i = 0; i < 1000; i++) {
      arr[i] = (Math.random() - 0.5) * 20
    }
    return arr
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    pointsRef.current.rotation.y =
      state.clock.getElapsedTime() * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.06} color="#ffffff" />
    </points>
  )
}

/* 🎓 Center Logo */
function CenterLogo() {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y += 0.005
    meshRef.current.position.y = Math.sin(t) * 0.3
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[1.2, 0.3, 16, 60]} />
      <meshStandardMaterial
        color="#ffffff"
        metalness={1}
        roughness={0}
        emissive="#6366f1"
        emissiveIntensity={0.6}
      />
    </mesh>
  )
}

/* 🎬 MAIN HERO CANVAS */

export default function HeroCanvas({ bgIndex = 0 }) {

  const gradients = [
    "from-indigo-900 via-slate-900 to-black",
    "from-emerald-800 via-teal-900 to-black",
    "from-rose-800 via-purple-900 to-black",
  ]

  const activeGradient = gradients[bgIndex]
  const isMobile = window.innerWidth < 768

  return (
    <div
      className={`w-full h-full bg-gradient-to-br transition-all duration-1000 will-change-transform ${activeGradient}`}
    >
      <Canvas
        camera={{ position: [0, 0, 9], fov: 50 }}
        dpr={[1, 1.3]}
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
        }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        <AutoCamera />
        <CenterLogo />
        <Network />
        {!isMobile && <Particles />}

      </Canvas>
    </div>
  )
}
