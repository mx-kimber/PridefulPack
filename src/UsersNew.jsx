export function UsersNew(props) {

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateUser(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit} >
        <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Profile Photo: <input name="profile_photo" type="text" />
        </div>
        <div>
          Admin Permission: <input name="admin_permission" type="checkbox" />
        </div>
        <div>
          Bio: <textarea name="bio" />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
