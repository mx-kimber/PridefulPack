import React, { useContext, useState, useEffect, useRef } from 'react';
import { UserContext } from './UserContext';
import './AdminSidebar.css';
import axios from 'axios';

export function AdminSidebar() {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const [isRetracted, setIsRetracted] = useState(window.innerWidth < 1280);
  const sidebarRef = useRef(null);

  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    window.location.href = "/admin_login";
  };

  useEffect(() => {
    function handleResize() {
      setIsRetracted(window.innerWidth < 1400 );
    }

    window.addEventListener('resize', handleResize);

    document.addEventListener('click', handleOutsideClick);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const generateNavButton = (text, url) => {
    const isActive = window.location.href.endsWith(url);
    return (
      <button
        className={`sidebar-button ${isActive ? 'active' : ''}`}
        onClick={() => window.location.href = url}
      >
        {text}
      </button>
    );
  };

  const toggleSidebar = () => {
    setIsRetracted(!isRetracted);
  };

  const handleOutsideClick = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsRetracted(true);
    }
  };

  if (!currentUser) {
    return null;
  }

  
  return (
    <div
      ref={sidebarRef}
      className={`sidebar-container ${isRetracted ? 'retracted' : ''}`}
      onClick={toggleSidebar}>
      <div>
        {generateNavButton('Edit Photos', '/admin_gallery')}
        {generateNavButton('Update Contact', '/admin_contact')}
        {generateNavButton('Edit Services', '/admin_service_offerings')}
        {generateNavButton('Edit Bio', '/admin_bio')}
      </div>
      <div className="bottom-nav">
        {generateNavButton('Profile Settings', '/profile_settings')}
        <button className={`sidebar-button logout-link-btn`}
          onClick={handleLogoutClick} >
        Logout
      </button>
      </div>
    </div>
  );
}

