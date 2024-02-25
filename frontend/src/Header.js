import React from 'react';
import SearchBar from './SearchBar';
import UserProfile from './UserProfile';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="header">
      <SearchBar />
      <div className='nav-bar'>
        <Link to='/' className="nav-btn">Home</Link>
        <Link to='/courses' className="nav-btn">My Courses</Link>
        <Link to='/admin' className="nav-btn">Administration</Link>
        {/* <Link to='/projects' className="nav-btn">Projects </Link> */}
        {/* <Link to='/exams' className="nav-btn">Exams </Link> */}
      </div>
      <UserProfile />
    </div>
  );
};

export default Header;