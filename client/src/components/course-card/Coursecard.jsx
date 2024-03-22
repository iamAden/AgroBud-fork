import React from 'react';
import './Coursecard.css';
import { Link } from 'react-router-dom';

function Coursecard({ id, title, imageSrc, tags, status, length, progress }) {
    return (
        <Link to={`/courses/${id}`}>
            <div className='course-container'>
                <div className='course-img-container'>
                    <img src={imageSrc} alt={title} />
                </div>
                <div className='course-not-img-container'>
                    <p>{title}</p>
                    <div className='course-tag-container'>
                        {tags.map((tag, index) => (
                            <div key={index} className='tag'>
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className='info'>
                        Status: {status} <br/> Length: {length} left <br />Progress: {progress}%
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Coursecard;

