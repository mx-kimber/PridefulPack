import axios from "axios";
import {useState, useEffect } from "react";
import { AdminCommentsIndex } from "./AdminCommentsIndex";

export function Content() {

  const [adminComments, setAdminComments] = useState([]);

  const handleIndexAdminComments = () => {
    console.log("handleIndexAdminComments");
    axios.get("http://localhost:3000/admin_comments.json").then((response) => {
      console.log(response.data);
      setAdminComments(response.data);
    });
  };

  useEffect(handleIndexAdminComments, []);

  return (
    <div>
      <AdminCommentsIndex adminComments={adminComments} />
    </div>
  )
}