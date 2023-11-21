import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';

import House from '../models/House';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
  

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(3);

  const adjustIslandForScreenSize = () => {
    let screenScale = [1,1,1];
    let housePosition = [-3, -2, -8];
    let houseRotation = [0, 1.6, 0];

    return [screenScale, housePosition, houseRotation];
  }

  const [screenScale, housePosition, houseRotation] = adjustIslandForScreenSize();


  return (
    <>
    <section className={`w-full h-screen relative flex justify-center ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}>
      
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
        onPointerDown={() => setIsRotating(true)}
        onPointerUp={() => setIsRotating(false)}   
        onPointerMove={(e) => {
          if (isRotating) {
            const delta = e.movementX / window.innerWidth;
            const rotationSpeed = delta * .001 * Math.PI;
          }
        }}
      >
        <Suspense fallback={<Loader />}>
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
      <div className='text-l flex absolute bottom-8 flex-col justify-center center-align border-red-900'>Interactive<br/><span className='arrow-center text-xl'>⟺</span></div>
      <div className='content-div'>
      {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
    </section>
    </>
  )
}

export default Home