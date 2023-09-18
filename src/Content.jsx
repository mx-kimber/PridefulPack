import axios from "axios";
import {useState, useEffect } from "react";
import { AdminCommentsIndex } from "./AdminCommentsIndex";
import { PhotosIndex } from "./PhotosIndex";
import { ReviewsIndex } from "./ReviewsIndex"
import { ServiceOfferingsIndex } from "./ServiceOfferingsIndex";
import { UsersIndex } from "./UsersIndex";
import { ReviewersIndex } from "./ReviewersIndex";

export function Content() {

  const [adminComments, setAdminComments] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [serviceOfferings, setServiceOfferings] = useState([]);
  const [users, setUsers] = useState([]);
  const [reviewers, setReviewers] = useState([]);

  const handleIndexReviewers = () => {
    console.log("handleIndexReviewers");
    axios.get("http://localhost:3000/reviewers.json").then((response) => {
      console.log(response.data);
      setReviewers(response.data);
    });
  };  

  const handleIndexUsers = () => {
    console.log("handleIndexUsers");
    axios.get("http://localhost:3000/users.json").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  };

  const handleIndexServiceOfferings = () => {
      console.log("handleIndexServices");
      axios.get("http://localhost:3000/service_offerings.json").then((response) => {
        console.log(response.data);
        setServiceOfferings(response.data);
      });
    };

  const handleIndexReviews = () => {
    console.log("handleIndexReviews");
    axios.get("http://localhost:3000/reviews.json").then((response) => {
      console.log(response.data);
      setReviews(response.data);
    });
  };

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
    handleIndexReviews();
    handleIndexServiceOfferings();
    handleIndexUsers();
    handleIndexReviewers();
  }, []);
  
  return (
    <div>
      <ServiceOfferingsIndex serviceOfferings={serviceOfferings}/>
      <AdminCommentsIndex adminComments={adminComments} />
      <PhotosIndex photos={photos} />
      <ReviewsIndex reviews={reviews} />
      <ReviewersIndex reviewers={reviewers} />
      <UsersIndex users={users} />
    </div>
  )
}