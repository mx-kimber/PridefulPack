import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export function LogoutLink() {
  const { setCurrentUser } = useContext(UserContext);

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    window.location.href = "/admin_login";
  };

  return (
    <a href="/logout" onClick={handleClick}>
      Logout
    </a>
  );
}