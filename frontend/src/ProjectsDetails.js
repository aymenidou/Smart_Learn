import React from 'react';
import { useParams } from 'react-router-dom';
import './ProjectsDetails.css'

const ProjectDetails = () => {
  // Access the project ID from the URL params
  const { projectId } = useParams();

  // Fetch project details and tasks based on the project ID
  // Replace this with your actual data fetching logic
  const projectDetails = {
    id: projectId,
    title: 'Sample Project',
    description: 'This is a sample project description.',
    tasks: [
      { id: 1, title: 'Task 1', description: 'Description for Task 1' },
      { id: 2, title: 'Task 2', description: 'Description for Task 2' },
      // Add more tasks as needed
    ],
  };

  return (
    <div className='project-page'>
      <h2>{projectDetails.title}</h2>
      <p>{projectDetails.description}</p>

      <h3>Tasks:</h3>
      {projectDetails.tasks.map((task) => (
        <div key={task.id} className="task-block">
          <h4>{task.title}</h4>
          <p>{task.description}</p>
          <button>Check</button>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetails;