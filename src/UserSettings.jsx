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
  faHouse,
  faToggleOff,
  faInfoCircle,
  faRoad,
  faUser,
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
    <div className='gap-10px column'>

      <div className='users-slide-container'>
        <div
          className={`user-cards gap-10px ${!cardsVisible ? 'visible' : ''}`}
          ref={userCardsRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {cardsVisible && props.users.map((user, index) => (
          <div
            key={user.id}
            className={`card ${user.id === currentUser?.id ? 'logged-in' : ''}`}
          >
            {user.profile_photo && (
              <img
                className="card-item"
                src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${user.profile_photo}`}
                alt="Profile"
              />
            )}
          </div>
        ))}
      </div>
      
      <div className="users-icon-wrap gap-10px">
        <div>
          <FontAwesomeIcon icon={faUsers} className='users-icon' onClick={handleUsersIconClick} />
        </div>
        <div>
          <FontAwesomeIcon icon={faUserPlus} className="add-user-icon" />
        </div>
      </div>
    </div>

    <div className='flex-wrap'>
      <div className='column'>
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
    </div>

    <div className='flex-wrap gap-5px'>
      <img className='instagram-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" />
      <img className='facebook-icon' src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Facebook_icon.png" />
      <img className='x-icon' src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Twitter-new-logo.jpg/640px-Twitter-new-logo.jpg" />
      <img className='tiktok-icon' src="https://seeklogo.com/images/T/tiktok-share-icon-black-logo-29FFD062A0-seeklogo.com.png" />
    </div>

    <div className='flex-wrap'>
      <div className="key-icon font-10">
        <FontAwesomeIcon icon={faKey} /> 
        <div>
          Update Login Info
        </div>
      </div>
    </div>

    <div className='flex-wrap column'>
      <div>
        {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
      </div>
      <div>
        {currentUser ? currentUser.email : null}
      </div>
      <div>
        {currentUser ? currentUser.phone_number : null}
      </div>
    </div>
  
    <div className='flex-wrap align-center gap-10px'>
      <div>
          Admin Permission: [active]
      </div>
      <div>
          <FontAwesomeIcon icon={faToggleOn} className='toggle-yes-icon' />
      </div>
    </div>
     
    <div className='flex-wrap column'>
      <div>
        <FontAwesomeIcon icon={faHouse}   className='address-icon' />
        <div>
          {/* <FontAwesomeIcon icon={faRoad} className='address-icon' /> */}
          {currentUser ? currentUser.address.street_address : null}
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faBuilding} className='address-icon' /> */}
          {currentUser ? currentUser.address.unit_number : null}
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faCity} className='address-icon' /> */}
          {currentUser ? currentUser.address.city : null}
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faMapMarkedAlt} className='address-icon' /> */}
          {currentUser ? currentUser.address.state : null}
        </div>
        <div>
          {/* <FontAwesomeIcon icon={faMapPin} className='address-icon' /> */}
          {currentUser ? currentUser.address.zip_code : null}
        </div>
      </div>
    </div>


    <div className='flex-wrap'>
      <div className="card-header-wrap align-center justify-center column gap-5px">
       
        
        <FontAwesomeIcon icon={faUser} className="user-icon" />
    
   Bio
      </div>

      <div className="bio-card-wrap">
        {currentUser ? currentUser.bio.bio : null}
      </div>
    </div>

    <div className='flex-wrap'>
      <div className='delete-user-icon'>
        <FontAwesomeIcon icon={faUserXmark} />
        <div className='font-10 box-right-align '>
            Delete Account
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
