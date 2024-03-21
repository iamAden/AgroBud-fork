import React from 'react';
import "./Courses.css";
import pestmanagement from "./assets/pestmanagement.jpg";
import precisionagriculture from "./assets/precisionagriculture.jpg";
import soil from "./assets/soil.jpg";
import Footer from "./components/Footer/Footer";
import Navbar2 from './components/navbar/Navbar2';
import SearchBar from './components/search-bar/SearchBar';
import Chatbot from './components/chatbot/Chatbot';
import { Link } from "react-router-dom";
import biotech from "./assets/biotech.jpg";
import Coursecard from './components/course-card/Coursecard';
import CoursePage from './CoursePage';

const Courses = () => {
  return (
    <div>
        <Navbar2/>
        <div className='main-container'>
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
                <div className='title-container'>
                    <a className='anchor' id="pest-title"></a>
                    <p className='title'>Pest Management</p>
                </div>
                

                <div className='inner-container'>
                    <Coursecard
                        id="1"
                        title="Harmful Pests"
                        imageSrc={pestmanagement}
                        tags={["Beginner", "Free", "Pest Management"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="2"
                        title="Habitat Management"
                        imageSrc={pestmanagement}
                        tags={["Beginner", "Free", "Pest Management"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="3"
                        title="Plant Pathology"
                        imageSrc={pestmanagement}
                        tags={["Intermediate", "Free", "Pest Management"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="4"
                        title="Semiochemistry"
                        imageSrc={pestmanagement}
                        tags={["Advanced", "Premium", "Pest Management"]}
                        length="30"
                        progress="0"
                    />
                </div>

                {/* <!-- ICT in farming Section --> */}
                <div className='title-container'>
                    <a className='anchor' id="ict-title"></a>
                    <p className='title'>ICT in Farming</p>
                </div>
                
                <div className='inner-container'>
                    <Coursecard
                        id="5"
                        title="Precision Agriculture"
                        imageSrc={precisionagriculture}
                        tags={["Beginner", "Free", "ICT in farming"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                    id="6"
                        title="Drones in Agriculture"
                        imageSrc={precisionagriculture}
                        tags={["Beginner", "Free", "ICT in farming"]}
                        length="30"
                        progress="0"
                    />
                </div>

                {/* <!-- Biotechnology Section --> */}
                <div className='title-container'>
                    <a className='anchor' id="biotech-title"></a>
                    <p className='title'>Biotechnology</p>
                </div>

                <div className='inner-container'>
                    <Coursecard
                        id="7"
                        title="Plant Genetics"
                        imageSrc={biotech}
                        tags={["Beginner", "Free", "Biotechnology"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="8"
                        title="Cross Cultivation"
                        imageSrc={biotech}
                        tags={["Beginner", "Free", "Biotechnology"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="9"
                        title="Cloning"
                        imageSrc={biotech}
                        tags={["Advanced", "Premium", "Biotechnology"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="10"
                        title="Genome Editing"
                        imageSrc={biotech}
                        tags={["Advanced", "Premium", "Biotechnology"]}
                        length="30"
                        progress="0"
                    />
                </div>

                {/* <!-- Soil Section --> */}
                <div className='title-container'>
                    <a className='anchor' id="soil-title"></a>
                    <p>Soil Management</p>
                </div>

                <div className='inner-container'>
                    <Coursecard
                        id="11"
                        title="Soil Conservation"
                        imageSrc={soil}
                        tags={["Beginner", "Free", "Soil Management"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="12"
                        title="Soil Fertility Management"
                        imageSrc={soil}
                        tags={["Beginner", "Free", "Soil Management"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="13"
                        title="Crop Rotation"
                        imageSrc={soil}
                        tags={["Beginner", "Free", "Soil Management"]}
                        length="30"
                        progress="0"
                    />
                    <Coursecard
                        id="14"
                        title="Soil Contamination Remediation"
                        imageSrc={soil}
                        tags={["Advanced", "Premium", "Soil Management"]}
                        length="30"
                        progress="0"
                    />
                </div>

            </div>
            
            <div className="float-buttons">
                <Chatbot/>
            </div>
            <Footer/>
        </div>
    </div>
  )
}

export default Courses
