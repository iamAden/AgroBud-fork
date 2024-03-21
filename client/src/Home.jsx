import React from 'react'
import Navbar2 from './components/navbar/Navbar2'
import Coursecard from './components/course-card/Coursecard';
import precisionagriculture from "./assets/precisionagriculture.jpg";
import chatbot from "./assets/chatbot-ic.png";
import addCourse from "./assets/add-explore.png";
import Footer from "./components/Footer/Footer";
// type npm i react-router-dom
import { Link } from "react-router-dom";
import courseData from './CourseData';

import "./Home.css";
import Chatbot from './components/chatbot/Chatbot';
const Home = () => {
  return (
    <div>
      <Navbar2/>
      <div className="home-container">
        <div className="home-header">
           <h1 id="home-title">My Courses</h1>
        </div>

  
        <div className="sub-container">
          <div className='title-container'>
            <p className='title'>Courses In Progress</p>
          </div>
          <div className='inner-container'>
          <Coursecard
              id={courseData[1].id}
              title={courseData[1].title}
              imageSrc={courseData[1].imageSrc}
              tags={courseData[1].tags}
              status={courseData[1].status}
              length={courseData[1].length}
              progress={courseData[1].progress}
            />

          <Link to={`/Courses`}>
            <div className='add-container'>
                <img src={addCourse} alt="Add Course" id="addCourseIcon"/>
                <p id="addCourseText">More Course</p>
            </div>
          </Link>
          </div>
        </div>

        <div className="sub-container">
          <div className='title-container'>
            <p className='title'>Courses Completed</p>
          </div>
          <div className='inner-container'>
          <Coursecard
                        id="16"
                        title="AI Trends in Agriculture"
                        imageSrc={precisionagriculture}
                        tags={["Beginner", "Free", "ICT in farming"]}
                        status="Completed"
                        length="0 hours"
                        progress="100"
            />
          </div>
        </div>
        <div className="float-buttons">
                <Chatbot/>
            </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Home
