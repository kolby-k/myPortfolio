import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css';

const InfoBox = ({ text, text2, link, btnText, index }) => (
    <span className='info-box bg-black' >
        <p className='font-medium sm:text-xl text-center'>{text}<br/>{text2}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
        {btnText}
        </Link>
        <p className='index-info'>{index}/3</p>
    </span>
)
const renderContent = {
    1: (
        <InfoBox
            text="I enjoy applying my skills in creative and innovative ways."
            link="/projects"
            btnText="My Projects  →"
            index={3}
        />
    ),
    2: (
        <InfoBox
        text="I'm interested in frontend and backend web development."
        link="/about"
        btnText="Learn More  →"
        index={2}
    />
    ),
    3: (
        <InfoBox
        text="Hey, I'm Kolby 👋 "
        text2="A website developer from Canada."
        link="/Contact"
        btnText="Contact Me  →"
        index={1}
    />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo