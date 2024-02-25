import React, { useEffect, useState } from 'react';
import "./ManageCourses.css"
const ManageCourses = () => {
  // Add logic for managing courses


// Sample courses data (replace with actual data fetching logic)
const [courses, setCourses] = useState([
  { id: 1, createdby: 'course1', coursename: 'course 1' },
  { id: 2, createdby: 'course2', coursename: 'course 2' },
  // Add more courses as needed
]);

const [showAddForm, setShowAddForm] = useState(false);
const [showEditForm, setShowEditForm] = useState(false);
const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

const [selectedCourse, setSelectedCourse] = useState(null);
const [newCourse, setNewCourse] = useState({ coursename: '', createdby: '' });

const handleShowAddForm = () => {
  setShowAddForm(true);
};

const handleCloseAddForm = () => {
  setShowAddForm(false);
  setNewCourse({ coursename: '', createdby: '' });
};

const handleShowEditForm = (course) => {
  setSelectedCourse(course);
  setShowEditForm(true);
};

const handleCloseEditForm = () => {
  setSelectedCourse(null);
  setShowEditForm(false);
};

const handleShowDeleteConfirmation = (course) => {
  setSelectedCourse(course);
  setShowDeleteConfirmation(true);
};

const handleCloseDeleteConfirmation = () => {
  setSelectedCourse(null);
  setShowDeleteConfirmation(false);
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
};

const handleAddCourse = () => {
  // Add logic to send a request to create a new course
  // For simplicity, just updating the state here
  setCourses((prevCourses) => [
    ...prevCourses,
    { id: prevCourses.length + 1, ...newCourse },
  ]);
  handleCloseAddForm();
};

const handleEditCourse = () => {
  // Add logic to send a request to update the selected course
  // For simplicity, just updating the state here
  setCourses((prevCourses) =>
    prevCourses.map((course) =>
      course.id === selectedCourse.id ? { ...course, ...newCourse } : course
    )
  );
  handleCloseEditForm();
};

const handleDeleteCourse = () => {
  // Add logic to send a request to delete the selected course
  // For simplicity, just updating the state here
  setCourses((prevCourses) =>
    prevCourses.filter((course) => course.id !== selectedCourse.id)
  );
  handleCloseDeleteConfirmation();
};

// Fetch courses data (replace with actual data fetching logic)
useEffect(() => {
  // Example: fetchCoursesData().then(data => setCourses(data));
}, []);

return (
  <div className='courses-page'>
    <h4>Manage Courses</h4>
    <button onClick={handleShowAddForm}>Add Course</button>

    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Course Name</th>
          <th>Created By</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {courses.map((course) => (
          <tr key={course.id}>
            <td>{course.id}</td>
            <td>{course.coursename}</td>
            <td>{course.createdby}</td>
            <td>
              {/* Add buttons for actions like edit, delete, etc. */}
              <button key={course.id} onClick={handleShowEditForm}>Edit</button>
              <button key={course.id} onClick={handleShowDeleteConfirmation}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    {/* Add Course Form Modal */}
    {showAddForm && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseAddForm}>&times;</span>
          <h2>Add Course</h2>
          <form className='modal-body'>
            <label>Course name:
              <input type="text" name="coursename" value={newCourse.coursename} onChange={handleInputChange} />
            </label>
            <label>Created By:
              <input type="text" name="createdby" value={newCourse.createdby} onChange={handleInputChange} />
            </label>
            <button type="button" onClick={handleAddCourse}>Add</button>
          </form>
        </div>
      </div>
    )}
    {/* Edit Course Form Modal */}
    {showEditForm && selectedCourse && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={handleCloseEditForm}>
            &times;
          </span>
          <h2>Edit Course</h2>
          <form className='modal-body'>
            <label>
              Course name:
              <input
                type="text"
                name="coursename"
                value={newCourse.coursename || selectedCourse.coursename}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Created By:
              <input
                type="text"
                name="createdby"
                value={newCourse.createdby || selectedCourse.createdby}
                onChange={handleInputChange}
              />
            </label>
            <button type="button" onClick={handleEditCourse}>
              Update
            </button>
          </form>
        </div>
      </div>
    )}

    {/* Delete Confirmation Dialog */}
    {showDeleteConfirmation && selectedCourse && (
      <div className="confirmation-dialog">
        <div className="dialog-content">
          <p>Are you sure you want to delete {selectedCourse.coursename}?</p>
          <div>
            <button onClick={handleDeleteCourse}>Yes</button>
            <button onClick={handleCloseDeleteConfirmation}>No</button>
          </div>
        </div>
      </div>
    )}
  </div>
);
};

export default ManageCourses;