import React, { useState, useEffect } from 'react';
import './ManageAccounts.css'
const ManageAccounts = () => {
  // Sample accounts data (replace with actual data fetching logic)
  const [accounts, setAccounts] = useState([
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' },
    // Add more accounts as needed
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  const [selectedUser, setSelectedUser] = useState(null);
  const [newUser, setNewUser] = useState({ username: '', email: '' });

  const handleShowAddForm = () => {
    setShowAddForm(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
    setNewUser({ username: '', email: '' });
  };

  const handleShowEditForm = (user) => {
    setSelectedUser(user);
    setShowEditForm(true);
  };

  const handleCloseEditForm = () => {
    setSelectedUser(null);
    setShowEditForm(false);
  };

  const handleShowDeleteConfirmation = (user) => {
    setSelectedUser(user);
    setShowDeleteConfirmation(true);
  };

  const handleCloseDeleteConfirmation = () => {
    setSelectedUser(null);
    setShowDeleteConfirmation(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleAddUser = () => {
    // Add logic to send a request to create a new user
    // For simplicity, just updating the state here
    setAccounts((prevAccounts) => [
      ...prevAccounts,
      { id: prevAccounts.length + 1, ...newUser },
    ]);
    handleCloseAddForm();
  };

  const handleEditUser = () => {
    // Add logic to send a request to update the selected user
    // For simplicity, just updating the state here
    setAccounts((prevAccounts) =>
      prevAccounts.map((user) =>
        user.id === selectedUser.id ? { ...user, ...newUser } : user
      )
    );
    handleCloseEditForm();
  };

  const handleDeleteUser = () => {
    // Add logic to send a request to delete the selected user
    // For simplicity, just updating the state here
    setAccounts((prevAccounts) =>
      prevAccounts.filter((user) => user.id !== selectedUser.id)
    );
    handleCloseDeleteConfirmation();
  };

  // Fetch accounts data (replace with actual data fetching logic)
  useEffect(() => {
    // Example: fetchAccountsData().then(data => setAccounts(data));
  }, []);

  return (
    <div className='accounts-page'>
      <h5>Manage Accounts</h5>
      <button onClick={handleShowAddForm}>Add User</button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account) => (
            <tr key={account.id}>
              <td>{account.id}</td>
              <td>{account.username}</td>
              <td>{account.email}</td>
              <td>
                {/* Add buttons for actions like edit, delete, etc. */}
                <button key={account.id} onClick={handleShowEditForm}>Edit</button>
                <button key={account.id} onClick={handleShowDeleteConfirmation}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Add User Form Modal */}
      {showAddForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseAddForm}>&times;</span>
            <h2>Add User</h2>
            <form className='modal-body'>
              <label>Username:
                <input type="text" name="username" value={newUser.username} onChange={handleInputChange} />
              </label>
              <label>Email:
                <input type="text" name="email" value={newUser.email} onChange={handleInputChange} />
              </label>
              <button type="button" onClick={handleAddUser}>Add</button>
            </form>
          </div>
        </div>
      )}
      {/* Edit User Form Modal */}
      {showEditForm && selectedUser && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseEditForm}>
              &times;
            </span>
            <h2>Edit User</h2>
            <form className='modal-body'>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={newUser.username || selectedUser.username}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                Email:
                <input
                  type="text"
                  name="email"
                  value={newUser.email || selectedUser.email}
                  onChange={handleInputChange}
                />
              </label>
              <button type="button" onClick={handleEditUser}>
                Update
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Dialog */}
      {showDeleteConfirmation && selectedUser && (
        <div className="confirmation-dialog">
          <div className="dialog-content">
            <p>Are you sure you want to delete {selectedUser.username}?</p>
            <div>
              <button onClick={handleDeleteUser}>Yes</button>
              <button onClick={handleCloseDeleteConfirmation}>No</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageAccounts;