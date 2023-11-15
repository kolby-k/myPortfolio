import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

const InfoBox = ({ text, link, btnText }) => (
    <span className='info-box bg-black' >
        <p className='font-medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        </Link>
    </span>
)
const renderContent = {
    1: (
        <InfoBox
            text="I'm motivated to learn new skills and apply them in creative ways."
            link="/about"
            btnText="My Experience  →"
        />
    ),
    2: (
        <InfoBox
        text="I enjoy frontend, backend, and fullstack web development."
        link="/projects"
        btnText="See Projects  →"
    />
    ),
    3: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey, I'm <span className='font-semibold'>Kolby</span> 👋 <br />
            A website developer from Canada
        </h1>
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo