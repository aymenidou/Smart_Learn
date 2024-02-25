import React from 'react';


const Hero = () => {
    return (
        <div className="hero-container">
          <div className="hero-content">
            <h1>Unlock Your Potential with SmartLearn</h1>
            <p>Explore a world of knowledge and elevate your skills with our diverse range of courses.</p>
            <p>{process.env.PUBLIC_URL}</p>
            <button>Get Started</button>
          </div>
        </div>
      );
};

export default Hero;