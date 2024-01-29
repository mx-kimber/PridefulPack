import React, { useState } from 'react';

export function UsersNew(props) {
  const [adminPermission, setAdminPermission] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    params.set("admin_permission", adminPermission ? "true" : "false");
    props.onCreateUser(params, () => event.target.reset());
  };

  const handleAdminPermissionChange = (event) => {
    setAdminPermission(event.target.checked);
  };

  return (
    <div>
      <h1>New User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          First Name: <input name="first_name" type="text" required />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" required />
        </div>
        <div>
          Email: <input name="email" type="email" required />
        </div>
        <div>
          Phone Number: <input name="phone_number" type="text" required />
        </div>
        <div>
          Password: <input name="password" type="password" required />
        </div>
        <div>
          Street Address: <input name="street_address" type="text" />
        </div>
        <div>
          Unit/Apartment: <input name="unit_number" type="text" />
        </div>
        <div>
          City: <input name="city" type="text" />
        </div>
        <div>
          State: <input name="state" type="text" />
        </div>
        <div>
          Zip Code: <input name="zip_code" type="text" />
        </div>
        
        <div>
          Admin Permission: <input name="admin_permission" type="checkbox" checked={adminPermission} onChange={handleAdminPermissionChange} />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
}
