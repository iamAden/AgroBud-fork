import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar2 from './components/navbar/Navbar2';
import Footer from './components/Footer/Footer';
import "./CoursePage.css";
import SearchBar from './components/search-bar/SearchBar';
import courseData from './CourseData';
import Coursecard from './components/course-card/Coursecard';
import Chatbot from './components/chatbot/Chatbot';
import {faPlay} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const CoursePage = () => {
    const {id} = useParams();
    const course = courseData.find(course => course.id === parseInt(id));
    const [show, setShow] = useState(false);
    const [enrol, setEnrol] = useState(false);
    const [continuelesson, setContinueLesson] = useState(false);
    const [enrolled, setEnrolled] = useState(false);

    useEffect(() => {
        if (course.status === 'Enrolled') {
            setEnrolled(true);
        } else {
            setEnrolled(false);
        }
    }, [course.status]);

    return (
        <div>
    <div className='main-container-coursepage'>
        <Navbar2/>
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
                    status={course.status}
                    length={course.length}
                    progress={course.progress}
                />
                <div className='next-to-card-container'>
                    <div className='course-title'>{course.title}</div>
                    <br></br>
                    <div className='description'>{course.description}</div>
                    <br></br>
                    <div className='buttons'>
                        {/* Render different button text based on enrolled status */}
                        {enrolled ? (
                            <Link to={`/courses/${id}/3`}>
                                <button className='green-btn' onClick={() => setContinueLesson(!continuelesson)}>
                                    <FontAwesomeIcon icon={faPlay} style={{ marginRight: '15px' }}/> 
                                    CONTINUE
                                </button>
                            </Link>
                        ) : (
                            <button className='green-btn' onClick={() => setEnrol(!enrol)}>ENROL</button>
                        )}
                        
                        <button className='green-btn' onClick={()=>setShow(!show)}>MORE DETAILS</button>
                        
                    </div>

                    {/* when click "MORE DETAILS" */}
                    { show &&
                        <div className='chapters-container'>
                            {course.chapters.map((chapter, index) => (
                            <div key={index} className='chapter'>{chapter.title}</div>
                        ))}
                        </div>
                    }

                    {/* when click ENROL */}
                    {enrol &&
                        <div className='popup-overlayy'>
                            <div className='enrol-popup'>
                            <div>Enrol in course?</div>
                            <div className='buttons'>
                                <button className='green-btn'  onClick={() => setEnrol(false)}>Cancel</button>
                                <Link to={`/courses/${id}/1`}><button className='green-btn' onClick={() => setContinueLesson(!continuelesson)}>Yes!</button></Link>
                            </div>
                        </div>
                        </div>
                    }

                    {/* when click CONTINUE */}
                    {continuelesson &&
                        <Link to="/lesson">
                            
                        </Link>
                    }
                </div>
            </div>
       
        <div className="float-buttons">
            <Chatbot/>
        </div>
        
    </div>
    <Footer/>
    </div>
  );
}

export default CoursePage
