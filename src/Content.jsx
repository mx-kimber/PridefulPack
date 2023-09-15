import axios from "axios";
import {useState, useEffect } from "react";
import { AdminCommentsIndex } from "./AdminCommentsIndex";
import { PhotosIndex } from "./PhotosIndex";
export function Content() {

  const [adminComments, setAdminComments] = useState([]);
  const [photos, setPhotos] = useState([]);

  const handleIndexPhotos = () => {
    console.log("handleIndexPhotos");
    axios.get("http://localhost:3000/photos.json").then((response) => {
      console.log(response.data);
      setPhotos(response.data);
    });
  };

  const handleIndexAdminComments = () => {
    console.log("handleIndexAdminComments");
    axios.get("http://localhost:3000/admin_comments.json").then((response) => {
      console.log(response.data);
      setAdminComments(response.data);
    });
  };

  useEffect(() => {
    handleIndexAdminComments();
    handleIndexPhotos();
  }, []);
  
  return (
    <div>
      <AdminCommentsIndex adminComments={adminComments} />
      <PhotosIndex photos={photos} />
    </div>
  )
}