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

              {/* <div>
                <div>
                  <div className="user-info">
                    <div className="user-email">
                      {user.email}
                    </div>
                  </div>
                </div>
              </div> */}
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





// table ref

// create_table "users", force: :cascade do |t|
// t.string "first_name"
// t.string "last_name"
// t.string "email"
// t.string "phone_number"
// t.string "password_digest"
// t.string "profile_photo"
// t.boolean "admin_permission"
// t.text "bio"
// t.datetime "created_at", null: false
// t.datetime "updated_at", null: false
// end