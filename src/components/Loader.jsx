import React from 'react'
import { Html } from '@react-three/drei';

const Loader = () => {
  return (
    <Html>
        <div className='flex justify-center items-center' >
          <div className='w-20 h-20 absolute border-2 border-opacity-80 border-white border-t-slate-500 rounded-full animate-spin ' />
        </div>
    </Html>
  )
}

export default Loader