import React, { useState } from 'react';

const CourseChapters = ({ title, progress, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        <span>{title}</span>
        <span className="progress">{`${progress}%`}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default CourseChapters;