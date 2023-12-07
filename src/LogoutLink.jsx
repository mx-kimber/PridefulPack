import React, { useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";
import "./Header.css";

export function LogoutLink() {
  const { setCurrentUser } = useContext(UserContext);

  const handleClick = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    setCurrentUser(null);
    window.location.href = "/PridefulPack";
  };

  return (
    <a href="/logout" onClick={handleClick} className="logout-link-btn">
      Logout
    </a>
  );
}