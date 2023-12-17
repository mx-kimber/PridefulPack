import { useContext } from 'react';
import { UserContext } from '../UserContext';
import "./UsersIndex.css";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import "../buttons.css"

export function UsersIndex(props) {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleLogoutClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    window.location.href = "/admin_login";
  };

  return (
    <div>
      <div className="heading">
        Profile Settings
      </div>
      <div className="user-card-wrap">
        <div className="user-cards">
          {props.users.map((user) => (
            <div
              key={user.id}
              className={`card-item ${user.id === currentUser?.id ? 'logged-in' : ''}`}
            >
              <div>
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
              {user.id === currentUser?.id ? null : (
                <div>
                  <FontAwesomeIcon icon={faEyeSlash} />
                  <div>
                    <button className="user-login-button" onClick={() =>  props.openLoginModal()}  >
                      Log in
                    </button>
                  </div>
                </div>
              )}
              <div>
                {user.id === currentUser?.id && (
                  <button  className="user-logout-button" onClick={handleLogoutClick}>Logout</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

