import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';

import Desk from '../models/Desk';
{/* <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
  Popup
</div> */}

const Home = () => {
  const [isRotating, setIsRotating] = useState();

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let deskPosition = [0.1, -0.5, 0.1];
    let deskRotation = [0.1, -1.5, -0.3];

    if (window.innerWidth < 768) {
      screenScale = [1,1,1];
    } else {
      screenScale = [1.25,1.25,1.25];
    }

    return [screenScale, deskPosition, deskRotation];
  }

  const [screenScale, deskPosition, deskRotation] = adjustIslandForScreenSize();

  return (
    <section className={`w-full h-screen relative flex justify-center ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
      <div className='absolute pt-20 z-10'>
      <h1 className='font-bold font-mono text-2xl text-white text-center pl-5 pr-5'>Full-Stack Web Design: From Concept to Code</h1>
      </div>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <Desk 
            scale={screenScale} 
            position={deskPosition} 
            rotation={deskRotation} 
            isRotating={isRotating}
            setIsRotating={setIsRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home