import { useContext } from 'react';
import { UserContext } from '../UserContext';
import "./UsersIndex.css";

export function UsersIndex(props) {
  const { currentUser } = useContext(UserContext);

  return (
    <div>
      <div className="heading">
        Profile Settings
      </div>
      <div>
        <div className="user-cards">
          {props.users.map((user) => (
            <div
              key={user.id}
              className={`card-item ${user.id === currentUser?.id ? 'logged-in' : ''}`}
            >
              <div className="photo-wrap">
                {user.profile_photo && (
                  <img
                    className="user-profile-photo"
                    src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${user.profile_photo}`}
                    alt="Profile"
                  />
                )}
              </div> 
                
              <div className="user-name">
                {user.first_name} {user.last_name}
              </div>
              
              <div className="password-button">
                {user.id === currentUser?.id && (
                
                  <button onClick={() => props.openPasswordModal()}>Change Password</button>
                
              )}
              </div>
              <div className="login-button">
                {user.id === currentUser?.id ? null : (
                  <button onClick={() =>  props.openLoginModal()}>Log in</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
