import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import CourseRow from './CourseRow';
import Sidebar from './Sidebar';
import Login from './Login';
import StudentDashboard from './StudentDashboard';
import CourseDetails from './CourseDetails';
import ProjectDetails from './ProjectsDetails';
import AdminPage from './AdminPage';
import ManageAccounts from './admin/ManageAccounts';
import ManageCourses from './admin/ManageCourses';
import ManageChapters from './admin/ManageChapters';
import ManageProjects from './admin/ManageProjects';
import ManageTasks from './admin/ManageTasks';

const HomePage = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (username) => {
    // For simplicity, just set the user in state upon successful login
    setUser(username);
  };
  // Sample data for most watched and news courses
  const mostWatchedCourses = [
    { title: 'Course 1', thumbnail: 'images/courses/course_ (1).jpg' },
    { title: 'Course 2', thumbnail: 'images/courses/course_ (2).jpg' },
    // Add more courses as needed
  ];

  const newsCourses = [
    { title: 'News Course 1', thumbnail: 'images/courses/course_ (4).jpg' },
    { title: 'News Course 2', thumbnail: 'images/courses/course_ (6).jpg' },
    // Add more news courses as needed
  ];
  const sidebarIcons =
    'https://dummyimage.com/40x40/ccc/111';

  const studentCourses = {
    applied: [
      { id: 1, title: 'Applied Course 1' },
      { id: 2, title: 'Applied Course 2' },
    ],
    progress: [
      { id: 1, title: 'Course 1', progress: 30 },
      { id: 2, title: 'Course 2', progress: 70 },
      // Add more courses with progress as needed
    ],
  };

  const courseDetails = {
    id: 1, title: 'Course 1', chapters: [
      {
        id: 1, title: "Chapter 1", progress: 20,
        projects: [
          { id: 1, title: 'Project 1.1' },
          { id: 2, title: 'Project 1.2' },
          { id: 3, title: 'Project 1.3' },
        ]
      },
      {
        id: 2, title: "Chapter 2", progress: 50,
        projects: [
          { id: 1, title: 'Project 2.1' },
          { id: 2, title: 'Project 2.2' },
          { id: 3, title: 'Project 2.3' },
        ]
      },
    ]
  };

  return (
    <div className="home-page">
      <BrowserRouter>
        <Header />
        <Sidebar icon={sidebarIcons} />

        <div className="main-content">
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <div className="content">
                  <CourseRow title="Most Watched Courses" courses={mostWatchedCourses} />
                  <CourseRow title="News Courses" courses={newsCourses} />
                </div>
              </>
            }
            /> {/* Use element prop for single element */}
            <Route
              path="/login"
              element={
                <Login onLogin={handleLogin} />
              }
            />
            <Route path="/courses"
              element={
                <StudentDashboard studentCourses={studentCourses} />
              } />
            <Route path="/courses/:courseId" element={
              <CourseDetails courseDetails={courseDetails} />
            } />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
            <Route path="/admin" element={<AdminPage />} >
              <Route path="/admin/accounts" element={<ManageAccounts />} />
              <Route path="/admin/courses" element={<ManageCourses />} />
              <Route path="/admin/chapters" element={<ManageChapters />} />
              <Route path="/admin/projects" element={<ManageProjects />} />
              <Route path="/admin/tasks" element={<ManageTasks />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter >
    </div>
  );
};

export default HomePage;