// AdminRoute.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';
import AdminAuthorization from '../middleware/AdminAuthorization';


function AdminRoute() {
    return (
        <Routes>
            <Route path="/dashboard" element={<AdminDashboard/>}/>
        </Routes>
    );
}

export default AdminRoute;
