import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './UserContext';
import './Header.css';

export function Header() {
  const { currentUser } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showNavLinksDropdown, setShowNavLinksDropdown] = useState(false);
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const toggleNavLinksDropdown = (toggle) => {
    toggle.stopPropagation();
    setShowNavLinksDropdown(!showNavLinksDropdown);
  };

  const toggleAdminDropdown = (toggle) => {
    toggle.stopPropagation();
    setShowAdminDropdown(!showAdminDropdown);
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    window.location.href = '/admin_login';
  };

  const closeDropdowns = () => {
    setShowDropdown(false);
    setShowNavLinksDropdown(false);
    setShowAdminDropdown(false);
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
//reminder: prop logo - create logo column on back end for user to change logo
  return (
    <header className="header-container">
      <div className="nav-bar">
        <div className="nav-links">
          {generateNavButton('Home', 'PridefulPack')}
          {generateNavButton('Gallery', 'gallery')}
          {generateNavButton('Services', 'services')}
          {generateNavButton('Reviews', 'reviews')}
          {generateNavButton('About', 'about')}
          {generateNavButton('Contact', 'contact')}
        </div>

        <div className="menu-icon" onClick={toggleNavLinksDropdown}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>

        {currentUser && (
          <div className="admin-dropdown">
            <div>
               {/* Add a message of how many reviews are new. Make logic for counting reviews with no admin comments */}
              <img
                className="profile-photo"
                src={currentUser.profile_photo}
                alt="User Profile"
                onClick={toggleAdminDropdown}
              />
            </div>
            {showAdminDropdown && (
              <div className="dropdown-content">
                {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
                {generateNavButton('Dashboard', 'admin_dashboard')}
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
          {generateNavButton('Home', 'PridefulPack')}
          {generateNavButton('Gallery', 'gallery')}
          {generateNavButton('Services', 'services')}
          {generateNavButton('Reviews', 'reviews')}
          {generateNavButton('About', 'about')}
          {generateNavButton('Contact', 'contact')}
        </div>
      )}
    </header>
  );
}
