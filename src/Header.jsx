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
      <div className="header-background">
        <div className="nav-bar">
          <a className="nav-link" href="PridefulPack">Home</a>
          <a className="nav-link" href="gallery">Gallery</a>
          <a className="nav-link" href="services">Services</a>
          <a className="nav-link" href="reviews">Reviews</a>
          <a className="nav-link" href="about">About</a>
          
          {currentUser ? (
            <div className="dropdown admin-dropdown">
              <div>
                <img className="profile-photo" src={currentUser.profile_photo} alt="User Profile" onClick={toggleDropdown} />
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
                  <a href="admin_dashboard">Dashboard</a>
                  {/* a message of how many reviews are new. make logic for counting reviews with no admin comments */}
                  <LogoutLink />
                </div>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}