import React, { useState } from 'react';
import './Login.css'

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform authentication logic here (e.g., send login request to the server)
    // For simplicity, just check if the username and password are not empty
    if (username && password) {
      // Call the onLogin function passed from the parent component
      onLogin(username);
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogin}>Register</button>
    </div>
  );
};

export default Login;