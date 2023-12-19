import React, { useContext, useRef } from 'react';
import { UserContext } from '../UserContext';
import "./UsersIndex.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash, faUserPlus, faUsers } from '@fortawesome/free-solid-svg-icons';
import "../buttons.css";

export function UsersIndex(props) {
  
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const userCardsRef = useRef(null);
  let touchStartX = 0;

  const handleTouchStart = (event) => {
    touchStartX = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    const touchMoveX = event.touches[0].clientX;
    const deltaX = touchMoveX - touchStartX;
  
    if (Math.abs(deltaX) > 50) {
      userCardsRef.current.style.scrollBehavior = 'auto';
      userCardsRef.current.scrollLeft -= deltaX;
    }
  };

  const handleTouchEnd = () => {
    touchStartX = 0;
    userCardsRef.current.style.scrollBehavior = 'smooth';
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    window.location.href = "/admin_login";
  };

  return (
    <div>
      <div className="heading">Profile Settings</div>
      <div className="add-user-card"><FontAwesomeIcon icon={faUsers} />
        <div className="user-card-wrap">
          <div
            className="user-cards"
            ref={userCardsRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {props.users.map((user, index) => (
              <div
                key={user.id}
                className={`card-item ${user.id === currentUser?.id ? 'logged-in' : ''}`} >
                <div className="card-content">
                  {user.profile_photo && (
                    <img
                      className="user-profile-photo"
                      src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${user.profile_photo}`}
                      alt="Profile"
                    />
                  )}
                  {/* <div className="user-name">
                    {user.first_name} {user.last_name}
                  </div> */}
                  {/* {user.id === currentUser?.id ? null : (
                    <div>
                      <div className='not-visible'>
                        <FontAwesomeIcon icon={faEyeSlash}/>
                      </div>
                      <div>
                        <button className="user-login-button" onClick={() => props.openLoginModal()}>
                          Log in
                        </button>
                      </div>
                    </div>
                  )} */}
                </div>
              </div>
            ))}
            <div className="card-item">
              <FontAwesomeIcon icon={faUserPlus} className="add-user" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
