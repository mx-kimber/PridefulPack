import React, { useContext, useState, useRef } from 'react';
import { UserContext } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faUserXmark,
  faKey,
  faCircleInfo,
  faUserPen,
  faUserTie,
  faUserPlus,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './UserSettings.css';
import './icons.css';
import './buttons.css';

export function UserSettings(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const userCardsRef = useRef(null);
  const [cardsVisible, setCardsVisible] = useState(false);

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

  const handleUsersIconClick = () => {
    setCardsVisible(!cardsVisible);
  };

  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    window.location.href = "/admin_login";
  };

  return (
    <div className='gap'>
      <div>
        <div className="users-icon-wrap">
          <div
            className={`user-cards ${!cardsVisible ? 'visible' : ''}`}
            ref={userCardsRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {cardsVisible && props.users.map((user, index) => (
              <div
                key={user.id}
                className={`card-item ${user.id === currentUser?.id ? 'logged-in' : ''}`}
              >
                {user.profile_photo && (
                  <img
                    className="card-item-photo"
                    src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${user.profile_photo}`}
                    alt="Profile"
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            <FontAwesomeIcon icon={faUsers} className='users-icon' onClick={handleUsersIconClick} />
          </div>
          <div>
            <FontAwesomeIcon icon={faUserPlus} className="add-user-icon" />
          </div>
        </div>
      </div>

      <div className='user-settings-header'>
        <div className="profile-photo-wrap">
          {currentUser && currentUser.profile_photo && (
            <img
              src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
              alt="Profile"
              className="show-photo"
            />
          )}
        </div>
        <div className="name-wrap"> {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}</div>
      </div>

      <div className="user-information gap">
        <div className="col-1 gap">
          <div>
            <div className='button-in-user-settings'>
              <FontAwesomeIcon icon={faUserPen} className="profile-photo-edit-icon" />
              Update Photo
            </div>
          </div>
          <div className="grid-2-cols gap">
            <div className="info-cards-wrap">
              <div className="card-content-center">
                <FontAwesomeIcon icon={faKey} className='icon' />
              </div>
            </div>
            <div className="info-cards-wrap">
              <div className="card-content-center">
                <FontAwesomeIcon icon={faUserTie} className='icon' />
              </div>
            </div>
          </div>

          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              <div className="card-header-text">
                Contact
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleInfo} className='info-icon' />
              </div>
            </div>
            <div className="card-content-wrap">
              <div className="name-wrap">Name: {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}</div>
              <div className="email-wrap">Email: {currentUser ? currentUser.email : null}</div>
              <div className="phone-wrap">Phone Number: {currentUser ? currentUser.phone_number : null}</div>
            </div>
          </div>
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              <div className="card-header-text">
                Address
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleInfo} className='info-icon' />
              </div>
            </div>
            <div className='card-content-wrap'>
              Street: {currentUser ? currentUser.street_address : null}<br />
              Unit: {currentUser ? currentUser.address_details : null}<br />
              City: {currentUser ? currentUser.city : null}<br />
              State: {currentUser ? currentUser.state : null}<br />
              Zip Code: {currentUser ? currentUser.zip_code : null}
            </div>
          </div>
        </div>
        <div className="col-2 gap">
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              <div className="card-header-text">
                Social Media
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleInfo} className='info-icon' />
              </div>
            </div>
            <div className='card-content-wrap'>
              Instagram: {currentUser ? currentUser.instagram : null}<br />
              Facebook: {currentUser ? currentUser.facebook : null}<br />
              Note: add into user table in rails
            </div>
          </div>
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              <div className="card-header-text">
                Bio
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleInfo} className='info-icon' />
              </div>
            </div>
            <div className="card-content-wrap">
              {currentUser ? currentUser.bio : null}
            </div>
          </div>
          <div className="grid-2-cols gap">
            <div className="info-cards-wrap">
              <div className='card-content-wrap'>
              </div>
            </div>
            <div className="info-cards-wrap">
              <div className="card-content-center">
                <FontAwesomeIcon icon={faUserXmark} className='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;