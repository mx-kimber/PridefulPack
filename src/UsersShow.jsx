import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import './UsersShow.css';
import './buttons.css';

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
              <div className='buttons-wrap'>
                <button className="profile-photo-change-button">
                  Change Profile Photo
                </button>
                {currentUser.id === currentUser?.id && (
                  <button className="change-password-button"
                    onClick={() => props.openPasswordModal()}>
                    Change Password
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <div className="show-user-name">
        {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
      </div> */}
      <div className="user-information">
        <div className="col-1">
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faUserPen} className="edit-icon" />
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
              <FontAwesomeIcon icon={faUserPen} className="edit-icon" />
              Bio
            </div>
            <div className="content-wraps">{currentUser ? currentUser.bio : null}</div>
          </div>
        </div>

        <div className="col-2">
          <div className="info-cards-wrap">
            <div className="card-header-wrap">
              <FontAwesomeIcon icon={faUserPen} className="edit-icon" />
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
                <button className="delete-account-button">Delete Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UsersShow;
