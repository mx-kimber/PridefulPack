import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
    }

    axios
      .get("http://localhost:3000/users/current_user.json")
      .then((response) => {
        setCurrentUser(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, loading, error }}>
      {children}
    </UserContext.Provider>
  );
}
