import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import './AdminSidebar.css';

export function AdminSidebar() {
  const { currentUser } = useContext(UserContext);
  const [isRetracted, setIsRetracted] = useState(window.innerWidth < 970);

  useEffect(() => {
    function handleResize() {
      setIsRetracted(window.innerWidth < 970);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const generateNavButton = (text, url) => {
    return (
      <button
        className={`sidebar-button ${isRetracted ? 'retracted' : ''}`}
        onClick={() => {
          if (!isRetracted) {
            window.location.href = url;
          }
        }}
      >
        {text}
      </button>
    );
  };

  const toggleSidebar = () => {
    setIsRetracted(!isRetracted);
  };

  if (!currentUser) {
    return null;
  }

  return (
    <div className={`sidebar-container ${isRetracted ? 'retracted' : ''}`} onClick={toggleSidebar}>
      {generateNavButton('Photo Gallery', '/admin_gallery')}
      {generateNavButton('Update Contact', '/admin_contact')}
      {generateNavButton('Edit Services', '/admin_service_offerings')}
      {generateNavButton('Edit Bio', '/admin_bio')}
    </div>
  );
}

