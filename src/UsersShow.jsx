import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import './UsersShow.css';
import { AvatarUpload } from './AvatarUpload';

export function UsersShow() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="show-heading">
        User Information
      </div>
      
      <div className="show-user-name">
        {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
      </div>

      <div className="user-information">
        
        <div className="col-1">
          {currentUser && (
            <div className="show-photo-wrap">
              {currentUser.profile_photo && (
                <img
                  src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
                  alt="Profile"
                  className="show-user-profile-photo"
                />
              )}
              <div className="edit-icon">
                <FontAwesomeIcon icon={faUserPen} />
                  {/* NOTE!!! onClick={openEditProfilePhotoModal} */}
                
              </div>
            </div> 
          )}
          <div className="social-media-wrap">
            Instagram: {currentUser ? currentUser.instagram : null}<br />
            Facebook: {currentUser ? currentUser.facebook : null}<br />
            Note: add into user table in rails
          </div> 
           <div className="bio-wrap">
            Bio: {currentUser ? currentUser.bio : null}
          </div>
        </div>     
          <div className='col-2'>
            <div className="show-info-wrap"> 
              <div className="name-wrap">
                Name: {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null}
              </div> 
              <div className="email-wrap">
                Email: {currentUser ? currentUser.email : null}
              </div>
              <div className="phone-wrap">
                Phone Number: {currentUser ? currentUser.phone_number : null}
              </div>
              <div className="address-wrap">
                Address: {currentUser ? currentUser.address : null}
              </div>
            </div>
            <div className='two-cols-one-wrap'>
                <div className="some-content">
                Bio: {currentUser ? currentUser.bio : null}
                </div>
                <div className="more-content">
                Email: {currentUser ? currentUser.email : null}
              </div>
            </div>
            <div className="bottom-box">
            <button className="delete-button">
              Delete Account
            </button>
          </div>
        </div>
      </div>       
    </div>
  );
}

export default UsersShow;
