import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, BakeShadows } from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import ComputersMesh from './ComputersMesh'
import { Instances } from './ComputersMesh'
import { useEffect, useState } from 'react'

const Computers = () => {
  const [isVisible, setIsVisible] = useState(true)
  
  // Detect if scene is visible to optimize performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    const element = document.querySelector('.computers')
    if (element) {
      observer.observe(element)
    }
    
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <div className='computers'>
      <Canvas 
        shadows 
        dpr={[1, 1.25]}
        camera={{position: [0, 0, 3.5]}} 
        eventSource={document.getElementById('root')} 
        eventPrefix="client"
        frameloop={isVisible ? 'always' : 'demand'}
        performance={{ min: 0.5 }}
      >
        {/* Lights */}
        <hemisphereLight intensity={0.15} groundColor="black" />
        <spotLight decay={0} position={[10, 20, 10]} angle={0.12} penumbra={1} intensity={2} castShadow shadow-mapSize={512} />
        {/* Main scene */}
        <group position={[-0, -1, 0]}>
          {/* Auto-instanced sketchfab model */}
          <Instances>
            <ComputersMesh scale={.5}/>
          </Instances>
          {/* Plane reflections + distance blur */}
          <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[200, 30]}
              resolution={1024}
              mixBlur={1}
              mixStrength={150}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#202020"
              metalness={0.8}
            />
          </mesh>
          <pointLight distance={1.5} intensity={1} position={[-0.15, 0.7, 0]} color="orange" />
        </group>
        {/* Postprocessing */}
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={4} />
          <DepthOfField target={[0, 0, 13]} focalLength={0.3} bokehScale={10} height={480} />
        </EffectComposer>
        {/* Small helper that freezes the shadows for better performance */}
        <BakeShadows />
      </Canvas>
    </div>
  )
}

export default Computers