import React from 'react';
import './Coursecard.css';
import { Link } from 'react-router-dom';

function Coursecard({ id, title, imageSrc, tags, duration, progress }) {
    return (
        <Link to={`/course/${id}`}>
            <div className='course-container'>
                <div className='course-img-container'>
                    <img src={imageSrc} alt={title} />
                </div>
                <p>{title}</p>
                <div className='course-tag-container'>
                    {tags.map((tag, index) => (
                        <div key={index} className='tag'>
                            {tag}
                        </div>
                    ))}
                </div>
                <div className='info'>
                    Duration: {duration} min left <br />Progress: {progress}%
                </div>
            </div>
        </Link>
    );
}

export default Coursecard;

