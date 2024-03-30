import React, { useContext, useEffect } from "react";
import Navbar2 from "./components/navbar/Navbar2";
import Coursecard from "./components/course-card/Coursecard";
import precisionagriculture from "./assets/precisionagriculture.jpg";
import addCourse from "./assets/add-explore.png";
import Footer from "./components/Footer/Footer";
import Chatbot from "./components/chatbot/Chatbot";
import CheckIn from "./components/checkin-container/checkin";
import illustration1 from "./assets/coin.png";
import { Link, useNavigate } from "react-router-dom";
import courseData from "./CourseData";
import { AuthContext } from "./context/AuthContext";
import "./Home.css";

const Home = () => {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  return (
    <div>
      <Navbar2 />

      <div className="home-container">
        <div className="home-header">
          <h1 className="home-title">Daily Check-In</h1>
        </div>

        <div className="sub-container">
          <div className="frame-in-1">
            <img src={illustration1} className="illustration-big-coin"></img>
            <p>17838 Coins</p>
          </div>
          <CheckIn />
        </div>

        <div className="home-header">
          <h1 className="home-title">My Courses</h1>
        </div>

        <div className="sub-container">
          <div className="title-container">
            <p className="title">Courses In Progress</p>
          </div>
          <div className="inner-container">
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
              <div className="add-container">
                <img src={addCourse} alt="Add Course" id="addCourseIcon" />
                <p id="addCourseText">More Courses</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="sub-container">
          <div className="title-container">
            <p className="title">Courses Completed</p>
          </div>
          <div className="inner-container">
            <Coursecard
              id="16"
              title="AI Trends in Agriculture"
              imageSrc={precisionagriculture}
              tags={["Beginner", "Free", "ICT in farming"]}
              status="Completed"
              duration="0"
              progress="100"
            />
          </div>
        </div>
        <div className="float-buttons">
          <Chatbot />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
