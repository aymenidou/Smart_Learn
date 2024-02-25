import React, { useState } from 'react';
import './StudentDashboard.css';
import { Link } from 'react-router-dom';
const StudentDashboard = ({ studentCourses }) => {
  const [activeTab, setActiveTab] = useState('progress');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="student-dashboard">
      <h2>Student Dashboard</h2>
      <div className="tabs">
        <button
          onClick={() => handleTabChange('progress')}
          className={activeTab === 'progress' ? 'active' : ''}
        >
          My Courses
        </button>
        <button
          onClick={() => handleTabChange('applied')}
          className={activeTab === 'applied' ? 'active' : ''}
        >
          Applied Courses
        </button>

      </div>
      <div className="tab-content">
        {activeTab === 'applied' && (
          <ul>
            {studentCourses.applied.map((course) => (
              <li key={course.id}>{course.title}</li>
            ))}
          </ul>
        )}
        {activeTab === 'progress' && (
          <ul>
            {studentCourses.progress.map((course) => (
              <li key={course.id}>
                <Link to={`/courses/${course.id}`}>
                  <strong>{course.title}</strong> - Progress: {course.progress}%
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;