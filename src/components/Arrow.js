import { useState, useEffect, useRef } from 'react'
import { BakeShadows, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'

const Arrow = ({scroll, rotation}) => {
  const { nodes, materials } = useGLTF('/arrow.glb')
  materials.arrow.metalness = 0

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered == true ? 'pointer' : 'auto'
  }, [hovered])

  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y += delta*4;
  })

  return (
    <>
      <hemisphereLight intensity={0.15}/>
      <spotLight decay={0} position={[10, 20, 10]}/>
      <EffectComposer disableNormalPass>
        <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={5} />
      </EffectComposer>
      <BakeShadows />
      <mesh
        scale={.4}
        ref={ref}
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.arrow}
        rotation={[rotation, 0, 0]}
        position={[0, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={scroll}
      />     
    </>
  )
}

useGLTF.preload('/arrow.glb')

export default Arrow

