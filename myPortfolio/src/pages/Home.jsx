import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Desk from '../models/Desk';
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Popup
</div> */}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let deskPosition = [0.1, -0.5, 0.1];
    let deskRotation = [0.1, -1.5, -0.3];

    if (window.innerWidth < 768) {
      screenScale = [1,1,1];
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale, deskPosition, deskRotation];
  }

  const [screenScale, deskPosition, deskRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight>
          <Desk scale={screenScale} position={deskPosition} rotation={deskRotation} />
        </directionalLight>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home