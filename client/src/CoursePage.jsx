import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from './components/navbar/Navbar2';
import Footer from './components/Footer/Footer';
import "./CoursePage.css";
import Popup from 'reactjs-popup'

import SearchBar from './components/search-bar/SearchBar';
import courseData from './CourseData';
import Coursecard from './components/course-card/Coursecard';
import Chatbot from './components/chatbot/Chatbot';

const CoursePage = () => {
    const {id} = useParams();
    const course = courseData.find(course => course.id === parseInt(id));
    const [show, setShow] = useState(false);

    return (
    <div className='main-container'>
        <Navbar2/>
        <div className='side-container'>
                
            <a href="#pest-title" className='grey-btn'>Pest Management</a>
            <a href='#ict-title' className='grey-btn'>ICT in Farming</a>
            <a href='#biotech-title' className='grey-btn'>Biotechnology</a>
            <a href='#soil-title' className='grey-btn'>Soil Management</a>
                
        </div>
        <div className='bigger-side-container'>
            <div className="course-header">
                <h1 id="course-title">Discover Courses</h1>
                <div id="course-searchbar">
                    <SearchBar />
                </div>
            </div>
            <div className='card-container'>
                <Coursecard
                    id={course.id}
                    title={course.title}
                    imageSrc={course.imageSrc}
                    tags={course.tags}
                    length={course.length}
                    progress={course.progress}
                />
                <div className='next-to-card-container'>
                    <div className='course-title'>{course.title}</div>
                    <br></br>
                    <div className='description'>{course.description}</div>
                    <br></br>
                    <div className='buttons'>
                        <Popup trigger={<button className='green-btn'>ENROL</button>} modal nested>
                            {close => (
                                <div>
                                    <div className='enrol-popup'>
                                        <div>Enrol in course?</div>
                                        <div className='buttons'>
                                            <button className='green-btn' onClick={close}>Cancel</button>
                                            <button className='green-btn'>Yes!</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </Popup>
                        <button className='green-btn' onClick={()=>setShow(!show)}>
                            MORE DETAILS
                        </button>
                        
                    </div>
                    {/* show more details */}
                    { show &&
                        <div className='chapters-container'>
                            {course.chapters.map((chapter, index) => (
                            <div key={index} className='chapter'>{chapter}</div>
                        ))}
                        </div>
                    }
                </div>
            </div>
            
        </div>
        <div className="float-buttons">
            <Chatbot/>
        </div>
        <Footer/>
    </div>
  );
}

export default CoursePage
