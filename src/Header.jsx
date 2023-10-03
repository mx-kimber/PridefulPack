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
    <header>
      <div>
        <div> 
          {generateNavButton('Home', 'PridefulPack')}
          {generateNavButton('Gallery', 'gallery')}
          {generateNavButton('Services', 'services')}
          {generateNavButton('Reviews', 'reviews')}
          {generateNavButton('About', 'about')}

          {currentUser ? (
            <div className="admin-dropdown">
              <div>
                <img className="profile-photo" src={currentUser.profile_photo} alt="User Profile" onClick={toggleDropdown} />
              </div>
              {showDropdown && (
                <div className="dropdown-content">
                  {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
                  {generateNavButton('Dashboard', 'admin_dashboard')}
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

