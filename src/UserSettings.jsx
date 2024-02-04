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
  faUsers,
  faCamera,
  faToggleOn,
  faToggleOff,
  faInfoCircle,
  faRoad,
  faBuilding,
  faCity,
  faMapMarkedAlt,
  faMapPin
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
    <div className='contain-all gap'>
      <div className="users-icon-wrap box-flex-end">
        <div>
          <FontAwesomeIcon icon={faUsers} className='users-icon' onClick={handleUsersIconClick} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUserPlus} className="add-user-icon" />
        </div>
      </div>

      <div className='users-slide-container'>
        <div className='user-cards-wrap'>
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
        </div>
      </div>
      
      <div className='gap'>
        
        <div className='flex-row'>
          <div className='user-info-wrap'>
            <div>
            {currentUser && currentUser.profile_photo && (
              <img
                src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
                alt="Profile"
                className="user-photo"
              />
            )}
            <div className='overlay'>
              <FontAwesomeIcon icon={faCamera} className='photo-icon' />
            </div>
            </div>

            <div className='user-name-email-phone-wrap'>
              <div className="name-wrap">
                {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
              </div>
              <div className="email-wrap">{currentUser ? currentUser.email : null}
              </div>
              <div className="phone-wrap">{currentUser ? currentUser.phone_number : null}</div>
            </div>
            <div classname="box-center">
           
            <div>
              <div className="key-icon">
                <FontAwesomeIcon icon={faKey} />
                <div className="font-10 box-right-align">Update Password</div>
              </div>
            </div>
            
            </div>
            <div className="box-center">
              <div className="font-10">
                Admin Permission: <b> [active] </b>
                {/* <b> [inactive] </b> */}
              </div>
              <div>
                <FontAwesomeIcon icon={faToggleOn} className='toggle-yes-icon' />
                {/* <FontAwesomeIcon icon={faToggleOff} className='toggle-no-icon' /> */}
              </div>
            </div>
          </div>
      
        
            <div className='flex-column'>
              <div className='social-media-wrap gap'>
                <img className='instagram-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
                <img className='facebook-icon' src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Facebook_icon.png" />
                <img className='twitter-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/640px-Twitter-new-logo.jpg" />
                <img className='facebook-icon' src="https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png" />
              </div>
             
                <div className='address-wrap '>
                  <div>
                    <FontAwesomeIcon icon={faRoad} className='address-icon' />
                    {currentUser ? currentUser.address.street_address : null}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faBuilding} className='address-icon' />
                    {currentUser ? currentUser.address.unit_number : null}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faCity} className='address-icon' />
                    {currentUser ? currentUser.address.city : null}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMapMarkedAlt} className='address-icon' />
                    {currentUser ? currentUser.address.state : null}
                  </div>
                  <div>
                    <FontAwesomeIcon icon={faMapPin} className='address-icon' />
                    {currentUser ? currentUser.address.zip_code : null}</div>
                  </div>
                </div>
                </div>
            </div>
        
          
          <div>
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              <div className="card-header-text">
                Bio
              </div>
              <div>
                <FontAwesomeIcon icon={faCircleInfo} className='info-icon' />
              </div>
            </div>
            <div className="bio-card-wrap ">
              {currentUser ? currentUser.bio.bio : null}
            </div>
          </div>
          

          <div className='delete-user-icon'>
            <FontAwesomeIcon icon={faUserXmark} />
            <div className='font-10 box-right-align '>
                Delete Account
              </div>
            </div>
          </div>
     
    );
  }

export default UserSettings;
