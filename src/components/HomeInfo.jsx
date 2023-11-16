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
            text="I enjoy applying my skills in creative and innovative ways."
            link="/projects"
            btnText="My Projects  →"
        />
    ),
    2: (
        <InfoBox
        text="I'm interested in frontend and backend web development."
        link="/about"
        btnText="Learn More  →"
    />
    ),
    3: (
        <InfoBox
        text="Hey, I'm Kolby 👋 A website developer from Canada."
        link="/Contact"
        btnText="Contact Me  →"
    />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo