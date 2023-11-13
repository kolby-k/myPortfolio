import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';

import House from '../models/House';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
  

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(null);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let housePosition = [-3, -2, -8];
    let houseRotation = [0, 0.4, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.8,0.8,0.8];
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale, housePosition, houseRotation];
  }

  const [screenScale, housePosition, houseRotation] = adjustIslandForScreenSize();

  return (
    <section className={`w-full h-screen relative flex justify-center ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
      <div className='absolute top-60 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
<div className='absolute pt-20 z-10'>
      <h1 className='font-bold font-mono text-2xl text-white text-center pl-5 pr-5'>Full-Stack Web Design: From Concept to Code</h1>
      </div>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
        onPointerDown={() => setIsRotating(true)}
        onPointerUp={() => setIsRotating(false)}   
        onPointerMove={(e) => {
          if (isRotating) {
            const delta = e.movementX / window.innerWidth;
            const rotationSpeed = delta * 0.01 * Math.PI;
          }
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1,1,1]} intensity={1.5}/>
          <Sky isRotating={isRotating}/>
          <House 
            scale={screenScale} 
            position={housePosition} 
            rotation={houseRotation} 
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home