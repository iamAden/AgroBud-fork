import React from 'react'
import Navbar2 from './components/navbar/Navbar2'
import Coursecard from './components/course-card/Coursecard';
import precisionagriculture from "./assets/precisionagriculture.jpg";
import chatbot from "./assets/chatbot-ic.png";
import addCourse from "./assets/add-explore.png";
import Footer from "./components/Footer/Footer";
// type npm i react-router-dom
import { Link } from "react-router-dom";

import "./Home.css";
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
                        id="11"
                        title="AI with Agriculture"
                        imageSrc={precisionagriculture}
                        tags={["Beginner", "Free", "ICT in farming"]}
                        duration="15"
                        progress="50"
            />

          <Link to={`/Courses`}>
            <div className='add-container'>
                <img src={addCourse} alt="Add Course" id="addCourseIcon"/>
                <p id="addCourseText">Add Course</p>
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
                        id="12"
                        title="AI Trends in Agriculture"
                        imageSrc={precisionagriculture}
                        tags={["Beginner", "Free", "ICT in farming"]}
                        duration="0"
                        progress="100"
            />
          </div>
        </div>
        <div className="float-buttons">
                <Link to="/chatbot">
                    <btn>
                        <img className="float-icon" src={chatbot} alt="ChatBot" />
                    </btn>
                </Link>
            </div>


      </div>
      <Footer/>
    </div>
  )
}

export default Home
