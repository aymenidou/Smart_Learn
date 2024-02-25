import React, { useState } from 'react';

const CourseRow = ({ title, courses }) => {
  const [appliedCourses, setAppliedCourses] = useState([]);

  const handleApply = (course) => {
    // Check if the course is already applied
    if (!appliedCourses.includes(course)) {
      // Add the course to the appliedCourses state
      setAppliedCourses([...appliedCourses, course]);
      // TODO: Implement the logic to send the application to the server
      console.log(`Applied for ${course.title}`);
    } else {
      // Course is already applied
      console.log(`Already applied for ${course.title}`);
    }
  };

  return (
    <div className="course-row">
      <h2>{title}</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div key={index} className="course-item">
            <img src={course.thumbnail} alt={course.title} />
            <p>{course.title}</p>
            <button className='btn-apply' onClick={() => handleApply(course)}>Apply</button>
          </div>
        ))}
      </div>
    </div>
  );
};


export default CourseRow;