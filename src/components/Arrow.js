import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import { BakeShadows } from '@react-three/drei'
import ArrowMesh from './ArrowMesh'

const Arrow = ({scroll}) => {
  return (
    <div className='arrow'>
      <Canvas>
        <hemisphereLight intensity={0.15}/>
        <spotLight decay={0} position={[10, 20, 10]}/>
        <EffectComposer disableNormalPass>
          <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={5} />
        </EffectComposer>
        <BakeShadows/>
        <ArrowMesh scroll={scroll}/>
      </Canvas>
    </div>
  )
}

export default Arrow