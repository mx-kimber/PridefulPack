import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './AdminSidebar.css';

export function AdminSidebar({ isRetracted }) {
  const { currentUser } = useContext(UserContext);

  const generateNavButton = (text, url) => {
    return (
      <button className="sidebar-button" onClick={() => window.location.href = url}>
        {text}
      </button>
    );
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className={`sidebar-container ${isRetracted ? 'retracted' : ''}`}>
      {generateNavButton('Photo Gallery', '/admin_gallery')}
      {generateNavButton('Update Contact', '/admin_contact')}
      {generateNavButton('Edit Services', '/admin_service_offerings')}
      {generateNavButton('Edit Bio', '/admin_bio')}
     
    </div>
  );
}

export default AdminSidebar;
