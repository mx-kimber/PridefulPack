import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './AdminSidebar.css';

export function AdminSidebar() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return null; 
  }

  return (
    <div className="sidebar-container">
      links <br />
      links <br />
      links
    </div>
  );
}

export default AdminSidebar;