import { useState, useEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const ArrowMesh = ({scroll}) => {

  const arrow = `${process.env.PUBLIC_URL}/arrow.glb`

  const { nodes, materials } = useGLTF(arrow)

  materials.arrow.metalness = 0

  useGLTF.preload(arrow)

  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    document.body.style.cursor = hovered == true ? 'pointer' : 'auto'
  }, [hovered])

  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.y += delta*4;
  })

  return (
    <mesh
      scale={.4}
      ref={ref}
      castShadow
      receiveShadow
      geometry={nodes.Object_2.geometry}
      material={materials.arrow}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={scroll}
    />     
  )
}

export default ArrowMesh

