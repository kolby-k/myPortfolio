import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import Hill from '../models/hill';
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Popup
</div> */}

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let hillRotation = [5, 0, 1.55];

    if (window.innerWidth < 768) {
      screenScale = [.1,.1,.1];
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale, hillRotation];
  }

  const [hillScale, hillRotation] = adjustIslandForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
        <directionalLight>
          <Hill scale={hillScale} rotation={hillRotation} />
        </directionalLight>
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home