import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faUserXmark, faKey, faUserPen } from '@fortawesome/free-solid-svg-icons';
import './UsersShow.css';
import './icons.css';

export function UsersShow(props) {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="scale-80">
      {currentUser && (
        <div>
          <div>
            <div>
              {/* ... */}
            </div>
            <div className='profile-photo-and-name-wrap'>
              <div className="card-header-1">
                <div className="profile-photo-wrap">
                  {currentUser.profile_photo && (
                    <img
                      src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
                      alt="Profile"
                      className="show-photo"
                    />
                  )}
                </div>
              </div>
              <div className='icon-wrap'>
              <FontAwesomeIcon icon={faUserPen} className="icon" />
                {currentUser.id === currentUser?.id && (
                 <FontAwesomeIcon icon={faKey} className="icon" 
                    onClick={() => props.openPasswordModal()} /> 
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="user-information">
        <div className="col-1">
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              Contact Information
            </div>
            <div className="content-wraps">
              <div className="name-wrap">
                Name: {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
              </div>
              <div className="email-wrap">Email: {currentUser ? currentUser.email : null}</div>
              <div className="phone-wrap">Phone Number: {currentUser ? currentUser.phone_number : null}</div>
              <div className="address-wrap">
                Street: {currentUser ? currentUser.street_address : null}<br />
                Unit: {currentUser ? currentUser.address_details : null}<br />
                City: {currentUser ? currentUser.city : null}<br />
                State: {currentUser ? currentUser.state : null}<br />
                Zip Code: {currentUser ? currentUser.zip_code : null}
              </div>
            </div>
          </div>

          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              Bio
            </div>
            <div className="content-wraps">{currentUser ? currentUser.bio : null}</div>
          </div>
        </div>

        <div className="col-2">
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faPenToSquare} className="edit-icon" />
              Social Media
            </div>
            <div className="content-wraps">
              Instagram: {currentUser ? currentUser.instagram : null}<br />
              Facebook: {currentUser ? currentUser.facebook : null}<br />
              Note: add into user table in rails
            </div>
          </div>

          <div className="additional-info-grid">
            <div className="info-cards-wrap">
              <div className="card-header-wrap">{/* <FontAwesomeIcon icon={faUserPen} className="edit-icon" /> */}</div>
            </div>
            <div className="info-cards-wrap">
              <div className="card-header-wrap">{/* <FontAwesomeIcon icon={faUserPen} className="edit-icon" /> */}</div>
              <div className="content-wraps">
                <FontAwesomeIcon icon={faUserXmark} className='icon' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersShow;
