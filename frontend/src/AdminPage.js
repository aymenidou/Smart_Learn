import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import './AdminPage.css';

const AdminPage = () => {
    return (
        <div className='admin-page'>
            <h2>Admin Page</h2>
            <nav>
                <ul>
                    <li><Link to="/admin/accounts">Manage Accounts</Link></li>
                    <li><Link to="/admin/courses">Manage Courses</Link></li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    );
};

export default AdminPage;