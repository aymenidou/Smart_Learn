// import React from 'react';
// import CourseChapters from './CourseChapters';

// const CourseDetails = ({ courseDetails }) => {
//   return (
//     <div className="course-details">
//       <h2>{courseDetails.title}</h2>
//       {courseDetails.chapters.map((chapter) => (
//         <CourseChapters key={chapter.id} title={chapter.title} progress={chapter.progress}>
//           {/* Include the ProjectAccordion component here */}
//           {/* You can map through chapter.projects and render ProjectAccordion for each project */}
//         </CourseChapters>
//       ))}
//     </div>
//   );
// };

// export default CourseDetails;

import './CourseDetails.css'
import React from 'react';
import { Accordion } from 'react-bootstrap'; // Or your chosen library
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom';

const CourseDetails = ({ courseDetails }) => {
  return (
    <div>
      <h2>{courseDetails.title}</h2>
      <p>{courseDetails.description}</p>

      {courseDetails.chapters.map((chapter) => (
        <Accordion defaultActiveKey="0">
          <Accordion.Item key={chapter.id} >
            <Accordion.Header>{chapter.title}</Accordion.Header>
            <Accordion.Body>
              <ul>
                {chapter.projects.map((project) => (
                  <li key={project.id}>
                    <Link to={`/projects/${project.id}`}>
                      {project.title}
                      {/* Optionally, add project description and link to details */}
                    </Link>
                  </li>
                ))}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
  );
};

export default CourseDetails;