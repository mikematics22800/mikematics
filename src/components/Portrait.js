import { useGLTF } from '@react-three/drei'

const Portrait = () => {
  const { nodes, materials } = useGLTF(`${process.env.PUBLIC_URL}/portrait.glb`)
  return (
      <mesh geometry={nodes.defaultMaterial.geometry} material={materials.initialShadingGroup} />
  )
}

useGLTF.preload('/portrait-transformed.glb')
