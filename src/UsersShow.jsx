import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import './UsersShow.css';
import { AvatarUpload } from "./AvatarUpload"

export function UsersShow() {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="show-heading"></div>
      <div className="show-card-wrap">
        <div className="show-photo-wrap">
          {currentUser.profile_photo && (
            <img
              className="show-user-profile-photo"
              src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${currentUser.profile_photo}`}
              alt="Profile"
            />
          )}
           <div><AvatarUpload /></div>
        </div>
        <div className="show-user-cards">
          {currentUser && (
            <div className={`show-card-item ${currentUser.id === currentUser.id ? 'logged-in' : ''}`}>
              <div className="show-user-name">
                {currentUser.first_name} {currentUser.last_name}
              </div>
              <div className="show-card-wrap">
                <div className="show-card-wrap-design">
                  <div className="show-user-info-wrap">
                    <p>First Name: {currentUser.first_name}</p>
                    <p>Last Name: {currentUser.last_name}</p>
                    <p>Email: {currentUser.email}</p>
                    <p>Phone Number: {currentUser.phone_number}</p>
                    <p>Bio: {currentUser.bio}</p>
                    <p>Admin Permission: {currentUser.admin_permission ? 'Yes' : 'No'}</p>
                    {/* note to self: address? */}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default UsersShow;

