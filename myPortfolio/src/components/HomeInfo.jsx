import React from 'react'

const renderContent = {
    1: (
        <h1>Position 1 Content</h1>
    ),
    2: (
        <h1>Position 2 Content</h1>
    ),
    3: (
        <h1>Position 3 Content</h1>
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo