import React from 'react';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  // Placeholder for user authentication state
  const isAuthenticated = false;

  return (
    <div className="user-profile">
      {isAuthenticated ? (
        // Display user profile and logout option when authenticated
        <>
          <span>Welcome, User!</span>
          <Link to='/login' className="nav-btn">Logout</Link>
        </>
      ) : (
        // Display login option when not authenticated
        <Link to='/login' className="nav-btn">Login</Link>
        // <button>Login</button>
      )}
    </div>
  );
};

export default UserProfile;