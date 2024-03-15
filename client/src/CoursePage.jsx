import React from 'react';

const CoursePage = ({ match }) => {
  const courseId = match.params.id;
  // Fetch course details based on courseId and render them
  return (
    <div>
      <h2>Course Details</h2>
      <p>Course ID: {courseId}</p>
      {/* Render other course details here */}
    </div>
  );
}

export default CoursePage;
