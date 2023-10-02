import React, { useContext, useState } from 'react';
import { UserContext } from './UserContext';
import { LogoutLink } from './LogoutLink';
import './Header.css';

export function Header() {
  const { currentUser } = useContext(UserContext);

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header>
      <div className="header">
        <div className="nav-bar">
          <button className="nav-button" 
            onClick={() => window.location.href = "PridefulPack"}>Home</button>
          <button className="nav-button" onClick={() => window.location.href = "gallery"}>Gallery</button>
          <button className="nav-button" onClick={() => window.location.href = "services"}>Services</button>
          <button className="nav-button" onClick={() => window.location.href = "reviews"}>Reviews</button>
          <button className="nav-button" onClick={() => window.location.href = "about"}>About</button>
          
          {currentUser ? (
            <div className="dropdown admin-dropdown">
              <div>
                <img className="profile-photo" src={currentUser.profile_photo} alt="User Profile" onClick={toggleDropdown} />
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
                  <button className="nav-button" onClick={() => window.location.href = "admin_dashboard"}>Dashboard</button>
                  {/* Add a message of how many reviews are new. Make logic for counting reviews with no admin comments */}
                  <button className="nav-button">
                    <LogoutLink />
                  </button>
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
