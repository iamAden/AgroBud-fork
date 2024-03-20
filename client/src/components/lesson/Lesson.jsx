import React from 'react'
import "./Lesson.css"

const Lesson = () => {
  return (
    <div>
      <div className='progress-bar-container'>
        <div className="progress-bar" style={{height:'24px',width:`${progress}%`}}>{progress}</div>
    </div>
    </div>
  )
}

export default Lesson
