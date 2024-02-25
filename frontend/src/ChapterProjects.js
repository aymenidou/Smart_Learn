import React from 'react';

const ProjectAccordion = ({ title, progress }) => {
  return (
    <div className="project-accordion">
      <div className="project-header">
        <span>{title}</span>
        <span className="progress">{`${progress}%`}</span>
      </div>
      {/* Additional details or actions related to the project */}
    </div>
  );
};

export default ProjectAccordion;