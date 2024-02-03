import React, { useContext, useState, useEffect, useRef } from 'react';
import { UserContext } from './UserContext';
import './AdminSidebar.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserGear,
  faRightFromBracket,
  faCamera,
  faImages,
  faStar,
  faFileInvoiceDollar,
  faComment,
} from '@fortawesome/free-solid-svg-icons';
import "./icons.css"

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
      <div className='top-nav'>
        {generateNavButton(<FontAwesomeIcon icon={faImages} className="admin-sidebar-icons" />, '/admin_gallery')} 
        {generateNavButton(<FontAwesomeIcon icon={faCamera} className="admin-sidebar-icons" />, '/admin_contact')}
        {/* {generateNavButton('Edit Services', '/admin_service_offerings')}
        {generateNavButton('Edit Bio', '/admin_bio')} */}
      </div>

      <div className='middle-nav'>
        {generateNavButton( <FontAwesomeIcon icon={faFileInvoiceDollar} className="admin-sidebar-icons" />, '/admin_services')}
        {generateNavButton( <FontAwesomeIcon icon={faComment} className="admin-sidebar-icons" />, '/new_reviews')}
      </div>

      <div className="bottom-nav">
        {generateNavButton(<FontAwesomeIcon icon={faUserGear} className="admin-sidebar-icons" />, '/user_settings')}
        <button className={`sidebar-button logout-link-btn`}
        
          onClick={handleLogoutClick} >
       <FontAwesomeIcon icon={faRightFromBracket} className="admin-sidebar-icons" />
      </button>
      </div>
    </div>
  );
}

