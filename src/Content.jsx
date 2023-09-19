import axios from "axios";
import {useState, useEffect } from "react";
import { AdminCommentsIndex } from "./index/AdminCommentsIndex";
import { PhotosIndex } from "./index/PhotosIndex";
import { ReviewsIndex } from "./index/ReviewsIndex"
import { ServiceOfferingsIndex } from "./index/ServiceOfferingsIndex";
import { UsersIndex } from "./index/UsersIndex";
import { ReviewersIndex } from "./index/ReviewersIndex";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";

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
      <Signup />
      <Login />
      <LogoutLink />
      <ServiceOfferingsIndex serviceOfferings={serviceOfferings}/>
      <AdminCommentsIndex adminComments={adminComments} />
      <PhotosIndex photos={photos} />
      <ReviewsIndex reviews={reviews} />
      <ReviewersIndex reviewers={reviewers} />
      <UsersIndex users={users} />
    </div>
  )
}