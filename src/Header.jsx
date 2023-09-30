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
        {currentUser ? `Welcome, ${currentUser.first_name}!` : null}
      </div>
      <nav>
        <a href="PridefulPack">Home</a> |
        <a href="gallery">Gallery</a> |
        <a href="services">Services</a> |
        <a href="reviews">Reviews</a> |
        <a href="about">About</a> |

        {currentUser ? (
          <div className="dropdown">
            <button onClick={toggleDropdown}>Admin</button>
            {showDropdown && (
              <div className="dropdown-content">
                <a href="admin_dashboard"> Dashboard</a>
                <LogoutLink />
              </div>
            )}
          </div>
        ) : null}
      </nav>
    </header>
  )
}