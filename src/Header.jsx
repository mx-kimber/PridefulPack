import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export function Header() {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [showNavLinksDropdown, setShowNavLinksDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);


  const toggleNavLinksDropdown = (toggle) => {
    toggle.stopPropagation();
    setShowAdminDropdown(false);
    setShowNavLinksDropdown(!showNavLinksDropdown);
  };

  const toggleAdminDropdown = () => {
    setShowAdminDropdown(!showAdminDropdown);
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common['Authorization'];
    localStorage.removeItem('jwt');
    setCurrentUser(null);
    window.location.href = '/PridefulPack';
  };

  const closeDropdowns = (event) => {
    const isNavLinksDropdownClicked = event.target.closest('.nav-links-dropdown');
    const isAdminDropdownClicked = event.target.closest('.admin-dropdown');

    if (!isNavLinksDropdownClicked) {
      setShowNavLinksDropdown(false);
    }

    if (!isAdminDropdownClicked) {
      setShowAdminDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeDropdowns);
    return () => {
      document.removeEventListener('click', closeDropdowns);
    };
  }, []);

  const generateNavButton = (text, url) => {
    const isActive = window.location.href.endsWith(url);
    return (
      <button
        className={`nav-button ${isActive ? 'active' : ''}`}
        onClick={() => window.location.href = url}
      >
        {text}
      </button>
    );
  };

  return (
    <header className="header-container">
      <div className="nav-bar">
        <div className="nav-links">
          {generateNavButton('Home', '/PridefulPack')}
          {generateNavButton('Gallery', '/gallery')}
          {generateNavButton('Services', '/services')}
          {generateNavButton('Reviews', '/reviews')}
          {generateNavButton('About', '/about')}
          {generateNavButton('Contact', '/contact')}
        </div>

        <div>
          <div>
            <FontAwesomeIcon 
              icon={faBars} 
              size="2xl" 
              className="menu-icon" 
              onClick={toggleNavLinksDropdown}
            />
          </div>
        </div>

        {currentUser && (
          <div className="admin-dropdown">
            <div>
            <img
                className="profile-photo"
                alt="Profile" 
                src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
                onClick={toggleAdminDropdown}
              /> 
            </div>

            {showAdminDropdown && (
              <div className="dropdown-content">
                {currentUser ? `You are signed in as ${currentUser.first_name}. Not you? ` : null}

                {generateNavButton('Switch User', '/admin_login')}
                <button
                  className={`nav-button logout-link-btn`}
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {showNavLinksDropdown && (
        <div className="nav-links-dropdown">
          {generateNavButton('Home', '/PridefulPack')}
          {generateNavButton('Gallery', '/gallery')}
          {generateNavButton('Services', '/services')}
          {generateNavButton('Reviews', '/reviews')}
          {generateNavButton('About', '/about')}
          {generateNavButton('Contact', '/contact')}
        </div>
      )}
    </header>
  );
}