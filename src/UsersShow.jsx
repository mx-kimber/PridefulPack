import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPen } from '@fortawesome/free-solid-svg-icons';
import './UsersShow.css';

export function UsersShow() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      {/* <div className="show-heading">
        User Information
      </div> */}
      
      {currentUser && (
        <div>
          <div className="header-wrap">
           
            {currentUser.profile_photo && (
              <div className='profile-photo-wrap'>
                <img
                  src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
                  alt="Profile"
                  className="show-photo"
                />
                <div className="edit-icon-to-profile-photo">
                  <button className="profile-photo-change-button">Change Profile Photo</button>
                </div>
              </div>
            )} 
          
            <div className="show-user-name">
              {currentUser ? `${currentUser.first_name} ${currentUser.last_name}` : null} 
            </div>
          </div>   
        </div>
      )}
     
      <div className="user-information">
        <div className="col-1">
          <div className="contact-info-wrap">
            <div className="edit-icon-wrap">
              <div className="title-wrap">Contact Information</div>
              <FontAwesomeIcon icon={faUserPen} className="edit-icon"/>
            </div>
            <div>
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
                Street: {currentUser ? currentUser.street_address : null}<br/>
                Unit: {currentUser ? currentUser.address_details : null}<br />
                City: {currentUser ? currentUser.city : null}<br/>
                State: {currentUser ? currentUser.state : null}<br/>
                Zip Code: {currentUser ? currentUser.zip_code : null}
              </div>
            </div>
          </div>

          <div className="bio-wrap">
            <div className="edit-icon-wrap">
              <div className="title-wrap">Bio</div>
              <FontAwesomeIcon icon={faUserPen} className="edit-icon"/>
            </div>
            {currentUser ? currentUser.bio : null}
          </div>
        </div>

        <div className='col-2'> 
          <div className="social-media-wrap">
            <div className="edit-icon-wrap">
              <div className="title-wrap">Social Media</div>
              <FontAwesomeIcon icon={faUserPen} className="edit-icon"/>
            </div>
            Instagram: {currentUser ? currentUser.instagram : null}<br />
            Facebook: {currentUser ? currentUser.facebook : null}<br />
            Note: add into user table in rails
          </div>

          <div className="additional-info-wrap"> 
            <div className="additional-info-grid">
              <div className="additional-info-1"> 
                <div className="edit-icon-wrap">
                  <div className="title-wrap">Additional 1</div>
                  <FontAwesomeIcon icon={faUserPen} className="edit-icon"/>
                </div>
              </div>
              <div className="additional-info-2"> 
                <div className="edit-icon-wrap">
                  <div className="title-wrap">Additional 2</div>
                  <FontAwesomeIcon icon={faUserPen} className="edit-icon"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="delete-button">
        Delete Account
      </button>
    </div>
  );
}

export default UsersShow;
