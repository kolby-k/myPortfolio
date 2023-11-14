import React from 'react'
import '../index.css';

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            See my <span className='font-semibold'>Projects:</span><br />
            <ul>
                <li>Frontend</li>
                <li>Backend</li>
                <li>Fullstack</li>
            </ul>
        </h1>
    ),
    2: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hey, I'm <span className='font-semibold'>Kolby</span> 👋 <br />
            A Fullstack developer from Canada
        </h1>
    ),
    3: (
        <span className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5 flex justify-center content-center gap-10 bg-grey'>
    <div className="flex justify-center content-center flex-col">
        <h1 className="font-semibold">Frontend Skills:</h1>
    <ul className="skills-list">
        <li>
            <div className="skill-card">
                <div className="tooltip">HTML5</div>
                <div className="card-icon">
                    <img src="../src/assets/icons/frontend/html5.png" alt="HTML5 logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">CSS3</div>
                <div className="card-icon">
                    <img src="../src/assets/icons/frontend/css3.png" alt="CSS3 logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">JavaScript</div>
                <div className="card-icon">
                    <img src="../src/assets/icons/frontend/javascript.png" alt="javascript logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">React</div>
                <div className="card-icon">
                    <img src="../src/assets/icons/frontend/react.png" alt="React logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">Redux</div>
                <div className="card-icon">
                    <img className="w-10 h-10" src="../src/assets/icons/frontend/redux-logo.png" alt="Redux logo" />
                </div>
            </div>
        </li>
    </ul>
    </div>
    <br />
    <div>
    <h1 className="font-semibold" >Backend Skills:</h1>
    <ul className="skills-list backend">
        <li>
            <div className="skill-card">
                <div className="tooltip">Node.js</div>
                <div className="card-icon">
                    <img className="w-10 h-10" src="../src/assets/icons/backend/node-js.png" alt="Node.js logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">Express.js</div>
                <div className="card-icon">
                    <img className="w-10 h-10" src="../src/assets/icons/backend/expressjs.png" alt="Express.js logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">Python</div>
                <div className="card-icon">
                    <img className="w-10 h-10" src="../src/assets/icons/backend/python.png" alt="Python logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">Git</div>
                <div className="card-icon">
                    <img className="w-10 h-10" src="../src/assets/icons/backend/git.png" alt="Git logo" />
                </div>
            </div>
        </li>
        <li>
            <div className="skill-card">
                <div className="tooltip">SQL</div>
                <div className="card-icon">
                    <img className="w-10 h-10" src="../src/assets/icons/backend/sql.png" alt="SQL logo" />
                </div>
            </div>
        </li>
    </ul>
    </div>
</span>

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