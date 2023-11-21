import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber';

import Loader from '../components/Loader';

import House from '../models/House';
import Sky from '../models/Sky';
import HomeInfo from '../components/HomeInfo';
  

const Home = () => {
  const [isRotating, setIsRotating] = useState();
  const [currentStage, setCurrentStage] = useState(3);

  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    // Set the height initially and listen for resize events
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const adjustIslandForScreenSize = () => {
    let screenScale = [1,1,1];
    let housePosition = [-3, -2, -8];
    let houseRotation = [0, 1.6, 0];

    return [screenScale, housePosition, houseRotation];
  }

  const [screenScale, housePosition, houseRotation] = adjustIslandForScreenSize();


  return (
    <>
   <section 
        className={`w-full relative flex justify-center ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        style={{ height: `${viewportHeight}px` }}
      >
      
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
      <div className='text-l flex absolute bottom-8 flex-col justify-center center-align'>Interactive<br/><span className='arrow-center text-xl'>⟺</span></div>
      <div className='content-div'>
      {currentStage && <HomeInfo currentStage={currentStage}/>}
      </div>
    </section>
    </>
  )
}

export default Home