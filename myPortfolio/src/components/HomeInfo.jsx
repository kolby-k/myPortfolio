import React from 'react'
import '../index.css';

const renderContent = {
    1: (
        <span className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 flex justify-center content-center gap-10 bg-grey'>
       
    </span>
    ),
    2: (

        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            See my <span className='font-semibold'>Projects:</span><br />
            <ul>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Fullstack</li>
            </ul>
        </h1>
    ),
    3: (

        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey, I'm <span className='font-semibold'>Kolby</span> 👋 <br />
            A Fullstack developer from Canada
        </h1>
       

    )
}

const infoBox = ({ text, link, btnText }) => (
    <span className='info-box bg-black' >
        {text}
    </span>
)

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo