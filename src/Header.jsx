import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link className="nav-link" to="PridefulPack">Home</Link>
          <Link className="nav-link" to="gallery">Gallery</Link>
          <Link className="nav-link" to="services">Services</Link>
          <Link className="nav-link" to="reviews">Reviews</Link>
          <Link className="nav-link" to="about">About</Link>
          
          {currentUser ? (
            <div className="dropdown admin-dropdown">
              <div>
                <img className="profile-photo" src={currentUser.profile_photo} alt="User Profile" onClick={toggleDropdown} />
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
                  <Link to="admin_dashboard">Dashboard</Link>
                  {/* Add a message of how many reviews are new. Make logic for counting reviews with no admin comments */}
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