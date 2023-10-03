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
      <div>
        <div>
          <button
            className={`nav-button ${window.location.href.endsWith("PridefulPack") ? 'active' : ''}`}
            onClick={() => window.location.href = "PridefulPack"}
          >
            Home
          </button>
          <button
            className={`nav-button ${window.location.href.endsWith("gallery") ? 'active' : ''}`}
            onClick={() => window.location.href = "gallery"}
          >
            Gallery
          </button>
          <button
            className={`nav-button ${window.location.href.endsWith("services") ? 'active' : ''}`}
            onClick={() => window.location.href = "services"}
          >
            Services
          </button>
          <button
            className={`nav-button ${window.location.href.endsWith("reviews") ? 'active' : ''}`}
            onClick={() => window.location.href = "reviews"}
          >
            Reviews
          </button>
          <button
            className={`nav-button ${window.location.href.endsWith("about") ? 'active' : ''}`}
            onClick={() => window.location.href = "about"}
          >
            About
          </button>

          {currentUser ? (
            <div>
              <div>
                <img className="profile-photo" src={currentUser.profile_photo} alt="User Profile" onClick={toggleDropdown} />
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
                  <button
                    className={`nav-button ${window.location.href.endsWith("admin_dashboard") ? 'active' : ''}`}
                    onClick={() => window.location.href = "admin_dashboard"}
                  >
                    Dashboard
                  </button>
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
