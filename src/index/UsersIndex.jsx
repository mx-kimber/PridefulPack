import AvatarUpload from "../AvatarUpload";
import "./UsersIndex.css"

export function UsersIndex(props) {

  return (
    <div>
      <h1>User Settings</h1>
      {props.users.map((user) => (
        <div key={user.id}>
          
          {user.profile_photo && (
            <img className="user-profile-photo" src={`https://res.cloudinary.com/pawparazzi-media/image/upload/${user.profile_photo}`} alt="Profile" /> 
          )}
         
          <AvatarUpload />
          <p>Email: {user.email}</p>
          <p>Phone_number: {user.phone_number}</p>
          {/* <p>Bio: {user.bio}</p> */}

          <button>Change Password</button>
        </div>
      ))}
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