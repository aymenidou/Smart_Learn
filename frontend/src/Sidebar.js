import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faBook,faMessage, faGear } from '@fortawesome/free-solid-svg-icons';
const Sidebar = ({ icon }) => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          
          <li><a href="/"> <FontAwesomeIcon icon={faBook} /> </a></li>
          <li><a href="/courses"> <FontAwesomeIcon icon={faMessage} /> </a></li>
          <li><a href="/profile"> <FontAwesomeIcon icon={faUser} /> </a></li>
          <li><a href="/categories"> <FontAwesomeIcon icon={faGear} /> </a></li>
        </ul>
      </nav>
      {/* <div className="sidebar-footer">
        <p>© 2024 SmartLearn</p>
      </div> */}
    </div>
  );
};

export default Sidebar;